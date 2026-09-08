export const siteConfig = {
  name: "Auto Glass Search OS",
  tagline: "Turn Search Visibility Into Booked Auto Glass Jobs",
  description: "Search visibility and customer acquisition for established auto glass companies across Google Search, Google Maps, AI search, paid search, and website conversion.",
  primaryCta: "Get Your Visibility Analysis",
  primaryCtaOffer: "Complimentary Search + AI Visibility Analysis",
  siteUrl: "https://autoglasssearchos.com",
  navLinks: [
    { name: "Overview", href: "/" },
    { name: "Auto Glass SEO", href: "/auto-glass-seo/" },
    { name: "Local SEO & Maps", href: "/auto-glass-local-seo/" },
    { name: "AI Search / AEO", href: "/ai-search-optimization/" },
    { name: "Google Ads", href: "/google-ads/" },
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
    subtitle: "Be easier to find",
    description: "Help customers find your company across Google Search, Google Maps, local searches, and AI-assisted search.",
    signals: [
      "Google Search visibility",
      "Google Maps visibility",
      "Service-area coverage",
      "Clear service information",
      "Windshield repair and replacement searches"
    ]
  },
  {
    id: "trusted",
    step: "02",
    title: "TRUSTED",
    subtitle: "Give customers reasons to trust you",
    description: "Strengthen the information customers use to decide: reviews, services, locations, warranties, insurance information, and business credibility.",
    signals: [
      "Recent customer reviews",
      "Clear insurance information",
      "ADAS recalibration details",
      "Accurate location details",
      "Consistent business information"
    ]
  },
  {
    id: "chosen",
    step: "03",
    title: "CHOSEN",
    subtitle: "Make it simple to contact you",
    description: "Make it easy for prospective customers to call, request a quote, or schedule the service your business offers.",
    signals: [
      "Qualified phone calls",
      "Quote requests",
      "Clear mobile contact options",
      "Service and scheduling details"
    ]
  },
  {
    id: "measured",
    step: "04",
    title: "MEASURED",
    subtitle: "See what is producing opportunities",
    description: "Connect marketing activity with qualified calls, quote requests, and booked jobs whenever reliable tracking data is available.",
    signals: [
      "Qualified calls",
      "Quote requests",
      "Booked jobs",
      "Customer acquisition cost"
    ]
  }
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
