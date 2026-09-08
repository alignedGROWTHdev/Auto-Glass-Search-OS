export const siteConfig = {
  name: "Auto Glass Search OS",
  tagline: "Auto Glass Marketing That Turns Search Into Booked Jobs",
  description: "Auto glass marketing and lead generation for established auto glass companies. We help operators capture more of the customer demand already happening in their markets — across Google Search, Google Maps, Google Ads, and AI search — and turn it into qualified calls, quote requests, and booked jobs.",
  channelDescriptor: "SEO · Google Maps · Google Ads · AI Search · Conversion",
  primaryCta: "See Where You're Losing Jobs",
  primaryCtaOffer: "Complimentary Search + Customer Acquisition Analysis",
  siteUrl: "https://autoglasssearchos.com",
  entity: {
    organizationId: "https://autoglasssearchos.com/#organization",
    parentOrganizationName: "Aligned Growth Digital",
    parentOrganizationUrl: "https://alignedgrowthdigital.com",
    parentOrganizationId: "https://alignedgrowthdigital.com/#organization",
    founderName: "Valentina Borda",
    founderId: "https://autoglasssearchos.com/about/#valentina-borda",
  },
  navLinks: [
    { name: "Lead Generation", href: "/auto-glass-lead-generation/" },
    { name: "Auto Glass SEO", href: "/auto-glass-seo/" },
    { name: "Local SEO & Maps", href: "/auto-glass-local-seo/" },
    { name: "Google Ads", href: "/google-ads/" },
    { name: "AI Search", href: "/ai-search-optimization/" },
    { name: "About", href: "/about/" },
  ],
  placeholders: {
    phone: "(516) 521-1149",
    address: "[INSERT_OFFICE_ADDRESS]",
    calendlyUrl: "[INSERT_CALENDLY_OR_SCHEDULING_URL]",
    ga4Id: "[INSERT_GA4_MEASUREMENT_ID]",
    gtmId: "[INSERT_GTM_CONTAINER_ID]",
    googleAdsConversionId: "[INSERT_GOOGLE_ADS_CONVERSION_ID]",
    crmWebhook: "[CONFIGURE_AS_SERVER_SIDE_SECRET_NOT_CLIENT_CODE]",
  }
};

// Safe helper to check if a value is a placeholder or an active configured value
export function isConfigured(value: string | undefined): boolean {
  if (!value) return false;
  return !value.startsWith("[INSERT_");
}

export const methodologyStages = [
  {
    id: "found",
    step: "01",
    title: "FOUND",
    subtitle: "Capture high-intent demand.",
    description: "Show up where drivers are already looking for windshield replacement, repair, mobile service, and ADAS calibration: Google Search, Google Maps, Google Ads, and AI-assisted discovery.",
    signals: [
      "Search",
      "Maps",
      "Ads",
      "AI"
    ]
  },
  {
    id: "trusted",
    step: "02",
    title: "TRUSTED",
    subtitle: "Give drivers reasons to choose the operator.",
    description: "Strengthen the information drivers use to decide in minutes: reviews, insurance information, warranty terms, ADAS credibility, and clear location and service-area details.",
    signals: [
      "Reviews",
      "Insurance",
      "Warranty",
      "ADAS credibility"
    ]
  },
  {
    id: "chosen",
    step: "03",
    title: "CHOSEN",
    subtitle: "Make it easy to call, quote and book.",
    description: "Make it simple for a driver who found you to call, get a quote, or book — from any device, with a response path that does not depend on who happens to be free.",
    signals: [
      "Call",
      "Online quote",
      "Scheduling",
      "AI-assisted response"
    ]
  },
  {
    id: "measured",
    step: "04",
    title: "MEASURED",
    subtitle: "Understand what becomes business.",
    description: "Connect marketing activity to qualified leads, quotes, appointments, booked jobs, and acquisition cost — moving beyond traffic and rankings whenever reliable operational data is available.",
    signals: [
      "Qualified lead",
      "Quote",
      "Appointment",
      "Booked job"
    ]
  }
];

// Partner-powered conversion technology. Auto Glass Search OS does not own this software.
export const partnerTech = {
  label: "Partner-powered conversion technology",
  disclosure: "Specialized quoting, scheduling and AI Voice capabilities available through our auto glass technology partner.",
  capabilities: [
    "Partner-powered AI Voice CSR for after-hours, overflow and missed-call risk",
    "Online auto glass quote estimation, where supported",
    "Availability-based scheduling and booking, depending on implementation",
  ],
};

// Verified credibility points (no invented metrics).
export const credibilityPoints = [
  { label: "Auto glass only", detail: "Built for established auto glass companies, not general local businesses" },
  { label: "Search · Maps · Ads · AI", detail: "One connected system across every channel drivers use" },
  { label: "Conversion-focused", detail: "Measured in qualified calls, quotes and booked jobs" },
  { label: "10+ years digital growth", detail: "Founder-led experience across search, digital growth, eCommerce and marketing strategy" },
  { label: "We don't sell leads", detail: "Your website, Maps listing, ads and brand generate the inquiries — and they're yours" },
];

// Owned customer-acquisition flow shown on the homepage and lead generation page.
export const acquisitionFlow = [
  { label: "Customer demand", detail: "A driver needs windshield replacement, repair, mobile service, or ADAS calibration" },
  { label: "Search + Maps + Ads + AI", detail: "They look on Google Search, Google Maps, Google Ads, or an AI assistant" },
  { label: "Website / landing experience", detail: "Your site answers their questions and makes contact easy" },
  { label: "Qualified call or quote", detail: "They call your shop, or get a quote and see available times" },
  { label: "Booked job", detail: "The appointment is scheduled" },
  { label: "Measurement", detail: "You know which channels produced it and what it cost" },
];

// Channel pages that make up the customer-acquisition system (used for cross-linking).
export const channelPages = [
  {
    href: "/auto-glass-seo/",
    title: "Auto Glass SEO",
    description: "Organic search visibility for the services and markets that drive windshield replacement demand.",
  },
  {
    href: "/auto-glass-local-seo/",
    title: "Auto Glass Local SEO & Google Maps",
    description: "Google Business Profile, Map Pack, service areas, and reviews for nearby customers.",
  },
  {
    href: "/google-ads/",
    title: "Google Ads for Auto Glass",
    description: "Call-focused paid search built around qualified leads, not clicks.",
  },
  {
    href: "/ai-search-optimization/",
    title: "AI Search Optimization",
    description: "Clear, verifiable business information for AI-assisted discovery.",
  },
];

export const searchIntentMatrix = [
  {
    queryType: "Urgent Replacement",
    sampleQuery: '"windshield replacement near me same day"',
    userMindset: "Urgent need for service today",
    primarySurface: "Google Maps and local search ads",
    conversionMechanism: "Clear call and quote-request options",
    targetValue: "Windshield replacement"
  },
  {
    queryType: "ADAS Optical Recalibration",
    sampleQuery: '"ADAS camera calibration after windshield install"',
    userMindset: "Safety-conscious driver or insurer looking for clearly documented recalibration capability",
    primarySurface: "Service pages and AI-assisted search",
    conversionMechanism: "Clear calibration and insurance information",
    targetValue: "ADAS recalibration"
  },
  {
    queryType: "Insurance Coverage / Claim",
    sampleQuery: '"does insurance cover windshield replacement in [city]"',
    userMindset: "Confused about deductible, zero-deductible glass states, or billing",
    primarySurface: "Helpful service and insurance pages",
    conversionMechanism: "Clear insurance claim information",
    targetValue: "Insurance claim inquiry"
  },
  {
    queryType: "Rock Chip / Minor Repair",
    sampleQuery: '"windshield rock chip repair before it spreads"',
    userMindset: "Comparing repair and replacement options",
    primarySurface: "Local service pages and Google Maps",
    conversionMechanism: "Clear repair availability and scheduling options",
    targetValue: "Rock chip repair"
  }
];
