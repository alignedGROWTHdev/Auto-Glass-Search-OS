# Auto Glass Growth — Website

This is the production-ready, SEO-first, HTML-driven Astro website for **Auto Glass Growth** (formerly Auto Glass Search OS), a specialized auto glass marketing, websites and lead generation initiative from Aligned Growth Digital — a search-growth and customer-acquisition company for established $2M–$20M+ auto glass businesses.

Operating Entity: **Aligned Growth Digital**  
Founder: **Valentina Borda**  
Primary Offer: **Complimentary Search + AI Visibility Analysis**

---

## Architecture & Technology
- **Framework:** [Astro](https://astro.build/) (Static Site Generation / HTML-First)
- **Styling:** Tailwind CSS with high-precision automotive telemetry theme
- **SEO & Machine Readability:**
  - Full server-rendered HTML for all routes (no client-side SPA rendering walls)
  - Semantic HTML structure and heading topology
  - Complete JSON-LD Schema (`Organization`, `WebSite`, `Person`)
  - Automated XML sitemap generation (`/sitemap-index.xml`)
  - Configured `robots.txt`
  - Accessible forms and mobile click-to-call conversion paths

---

## Included Foundational Routes
1. `/` — Strategic Homepage (Search Ecosystem, 4-Stage Methodology, Search Intent Calibration Matrix)
2. `/auto-glass-seo/` — Service-level organic SEO architecture (Windshield, ADAS calibration, repair)
3. `/auto-glass-local-seo/` — Google Maps 3-Pack authority, GBP category alignment & geo-grid expansion
4. `/ai-search-optimization/` — Generative Engine Optimization (GEO/AEO) for ChatGPT and Google AI Overviews
5. `/google-ads/` — High-intent paid search, negative keyword firewalls, and call dispatch focus
6. `/about/` — Founder & company credibility (Valentina Borda / Aligned Growth Digital)
7. `/visibility-analysis/` — Dedicated, high-converting paid traffic landing page with qualified lead capture
8. `/thank-you/` — Lead submission confirmation with optional direct calendar booking
9. `/privacy/` — B2B commercial lead privacy policy
10. `/404/` — Branded 404 error page

---

## Local Development & Build Commands

```bash
# 1. Install dependencies
npm install # or pnpm install

# 2. Start local development server
npm run dev

# 3. Compile static production build (outputs to dist/)
npm run build

# 4. Preview the built static output
npm run preview
```

---

## How to Import and Deploy in Replit

1. In Replit, click **Create Repl** -> **Import from ZIP** (or upload the `.zip` archive).
2. Set the build and run commands:
   - **Build Command:** `npm run build`
   - **Run Command:** `npm run preview` (or `npm run dev`)
3. Replit will automatically detect Astro and provide a live public deployment URL.

---

## Business Placeholders to Configure (in `src/data/siteData.ts`)

| Placeholder Key | Location | Description |
|---|---|---|
| `email` | `src/data/siteData.ts` | Primary company contact email |
| `phone` | `src/data/siteData.ts` | Direct intake dispatch phone number |
| `address` | `src/data/siteData.ts` | Physical office address for legal / footer citations |
| `calendlyUrl` | `src/data/siteData.ts` | Direct scheduling calendar link for `/thank-you/` |
| `ga4Id` | `src/data/siteData.ts` | Google Analytics 4 Measurement ID |
| `gtmId` | `src/data/siteData.ts` | Google Tag Manager container ID |
| `googleAdsConversionId`| `src/data/siteData.ts` | Google Ads conversion tracking tag |
| `crmWebhook` | `src/data/siteData.ts` | Zapier / Make / HubSpot webhook URL for lead form |
