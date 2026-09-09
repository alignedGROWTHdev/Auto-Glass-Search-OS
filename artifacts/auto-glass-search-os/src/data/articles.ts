/**
 * Owner guides published under /resources/. Add an entry when a guide goes live;
 * the /resources/ index and each article's Related list read from here.
 * Keep `published` in ISO format. `reviewed` is the last human review date shown on the page.
 */
export interface ArticleMeta {
  slug: string;          // e.g. "how-to-get-more-auto-glass-leads"
  title: string;         // H1
  seoTitle: string;      // <title>, ≤ 60 chars
  description: string;   // meta description, 120–155 chars
  published: string;
  reviewed?: string;
  readMinutes: number;
  keywords: string[];
  moneyPage: string;     // the service page this guide supports, e.g. "/auto-glass-lead-generation/"
}

export const articles: ArticleMeta[] = [];
