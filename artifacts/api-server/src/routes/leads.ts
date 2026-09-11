import { ReplitConnectors } from "@replit/connectors-sdk";
import { Router, type IRouter } from "express";
import {
  SubmitLeadBody,
  SubmitLeadResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

type HubSpotBatchUpsertResponse = {
  status?: string;
  results?: Array<{ id: string }>;
};

class HubSpotRequestError extends Error {
  constructor(
    readonly status: number,
    readonly category: string | undefined,
  ) {
    super("HubSpot request failed");
  }
}

function splitName(name: string): { firstname: string; lastname?: string } {
  const parts = name.trim().split(/\s+/);
  const firstname = parts.shift() ?? name.trim();
  const lastname = parts.join(" ");
  return lastname ? { firstname, lastname } : { firstname };
}

function compactLines(lines: Array<[string, string | undefined]>): string {
  return lines
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([label, value]) => `${label}: ${value!.trim()}`)
    .join("\n");
}

async function readHubSpotJson<T>(
  response: Response,
): Promise<T> {
  const body = await response.json().catch(() => ({})) as T & {
    category?: string;
  };

  if (!response.ok) {
    throw new HubSpotRequestError(response.status, body.category);
  }

  return body;
}

router.post("/leads", async (req, res): Promise<void> => {
  const parsed = SubmitLeadBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn(
      { validationIssues: parsed.error.issues.map((issue) => issue.path.join(".")) },
      "Rejected invalid lead submission",
    );
    res.status(400).json({ error: "Please check the form and try again." });
    return;
  }

  const lead = parsed.data;

  // Treat a completed honeypot as a successful no-op so bots receive no signal.
  if (lead.honey?.trim()) {
    req.log.info("Ignored honeypot lead submission");
    res.json(SubmitLeadResponse.parse({ success: true }));
    return;
  }

  const connectors = new ReplitConnectors();
  const name = splitName(lead.name);
  const properties: Record<string, string> = {
    email: lead.email.trim().toLowerCase(),
    phone: lead.phone.trim(),
    company: lead.company.trim(),
    website: lead.website.trim(),
    firstname: name.firstname,
    lifecyclestage: "lead",
    message: compactLines([
      ["Growth analysis request", "Auto Glass Growth website"],
      ["Full name", lead.name],
      ["Company", lead.company],
      ["Website", lead.website],
      ["Service area", lead.primaryMarkets],
      ["Shop scale", lead.fleetScale],
      ["Monthly marketing investment", lead.monthlyInvestment],
      ["UTM source", lead.source],
      ["UTM medium", lead.medium],
      ["UTM campaign", lead.campaign],
      ["UTM term", lead.term],
      ["GCLID", lead.gclid],
      ["Landing page", lead.landingPage],
    ]),
  };

  if (name.lastname) properties.lastname = name.lastname;
  if (lead.primaryMarkets?.trim()) properties.city = lead.primaryMarkets.trim();
  if (lead.fleetScale?.trim()) properties.company_size = lead.fleetScale.trim();

  try {
    const upsertResponse = await connectors.proxy(
      "hubspot",
      "/crm/v3/objects/contacts/batch/upsert",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inputs: [{
            id: properties.email,
            idProperty: "email",
            properties,
          }],
        }),
      },
    );
    await readHubSpotJson<HubSpotBatchUpsertResponse>(upsertResponse);

    req.log.info({ hubspotAction: "upserted" }, "Delivered lead to HubSpot");
    res.json(SubmitLeadResponse.parse({ success: true }));
  } catch (error) {
    const details = error instanceof HubSpotRequestError
      ? { hubspotStatus: error.status, hubspotCategory: error.category }
      : { errorType: error instanceof Error ? error.name : "UnknownError" };
    req.log.error(details, "Failed to deliver lead to HubSpot");
    res.status(502).json({
      error: "We couldn't submit your request. Please try again.",
    });
  }
});

export default router;