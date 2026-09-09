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

interface ArticleSchemaInput {
  pagePath: string;
  headline: string;
  description: string;
  datePublished: string;   // ISO date, e.g. "2026-09-16"
  dateModified?: string;
  image?: string;          // path under public/
  wordCount?: number;
  keywords?: string[];
}

/** Article node for owner guides under /resources/. Author is the founder Person node; publisher is the Organization. */
export function articleSchema({ pagePath, headline, description, datePublished, dateModified, image, wordCount, keywords }: ArticleSchemaInput) {
  const pageUrl = new URL(pagePath, siteConfig.siteUrl).href;
  return {
    "@type": "Article",
    "@id": pageUrl + "#article",
    headline,
    description,
    url: pageUrl,
    mainEntityOfPage: { "@id": pageUrl + "#webpage" },
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-US",
    author: { "@id": siteConfig.entity.founderId },
    publisher: { "@id": siteConfig.entity.organizationId },
    ...(image ? { image: new URL(image, siteConfig.siteUrl).href } : {}),
    ...(wordCount ? { wordCount } : {}),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    audience: { "@type": "BusinessAudience", audienceType: "Auto glass companies" },
  };
}
