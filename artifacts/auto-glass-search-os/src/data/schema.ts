import { siteConfig } from "./siteData";
import type { FaqItem } from "../components/FaqSection.astro";

/**
 * Schema helpers. Pages pass the returned nodes to BaseLayout via `extraSchema`
 * so everything lands in one @graph alongside Organization / Person / Breadcrumb.
 */

export function faqSchema(items: FaqItem[], pagePath: string) {
  return {
    "@type": "FAQPage",
    "@id": new URL(pagePath, siteConfig.siteUrl).href + "#faq",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

interface ServiceSchemaInput {
  pagePath: string;
  name: string;
  serviceType: string;
  description: string;
  alternateName?: string[];
}

export function serviceSchema({ pagePath, name, serviceType, description, alternateName }: ServiceSchemaInput) {
  const pageUrl = new URL(pagePath, siteConfig.siteUrl).href;
  return {
    "@type": "Service",
    "@id": pageUrl + "#service",
    name,
    ...(alternateName ? { alternateName } : {}),
    serviceType,
    description,
    url: pageUrl,
    provider: { "@id": siteConfig.entity.organizationId },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Established auto glass companies",
    },
  };
}
