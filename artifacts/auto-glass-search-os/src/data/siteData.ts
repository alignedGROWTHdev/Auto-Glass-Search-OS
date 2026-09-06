export const siteConfig = {
  name: "Auto Glass Search OS",
  legalParent: "Aligned Growth Digital",
  entityRelationship: "Auto Glass Search OS is a specialized brand operated by Aligned Growth Digital",
  tagline: "Turn Search Visibility Into Booked Auto Glass Jobs",
  description: "The dedicated search and customer-acquisition operating system for established auto glass companies across Google Search, Google Maps, and AI search engines.",
  founder: "Valentina Borda",
  founderTitle: "Founder & Managing Principal, Aligned Growth Digital",
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
    email: "valentina@alignedgrowthdigital.com",
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
    subtitle: "Multi-Surface Search Coverage",
    description: "Capture urgent consumer intent wherever windshield damage happens—across Google Organic, the 3-Pack Maps grid, service-area searches, and generative AI search surfaces.",
    signals: [
      "Google 3-Pack Placement",
      "High-Intent Keyword Footprint",
      "Service-Area Geometry",
      "AI Answer Inclusion",
      "Rock Chip & Repair Entry Points"
    ]
  },
  {
    id: "trusted",
    step: "02",
    title: "TRUSTED",
    subtitle: "Entity Authority & Proof Signals",
    description: "Drivers in emergency glass situations scan review recency, mobile fleet dispatch clarity, warranty protection, and insurance claim support in seconds before dialing.",
    signals: [
      "Review Prominence & Recency",
      "Insurance Workflow Transparency",
      "ADAS Recalibration Credibility",
      "TPA & Network Claim Navigation",
      "NAP & Citation Integrity"
    ]
  },
  {
    id: "chosen",
    step: "03",
    title: "CHOSEN",
    subtitle: "High-Conversion Dispatch Flow",
    description: "Turn visits into immediate phone calls and dispatch quote submissions with vehicle-specific landing architecture, smartphone click-to-call ergonomics, and instant estimate routing.",
    signals: [
      "Inbound Phone Call Volume",
      "Direct Dispatch Quote Rate",
      "Smartphone Click-to-Call",
      "Shop Bay vs Mobile Fleet Routing"
    ]
  },
  {
    id: "measured",
    step: "04",
    title: "MEASURED",
    subtitle: "Booked Job Attribution",
    description: "Connect marketing dollars directly to booked windshield replacements, recalibrated sensors, and mobile dispatch routes rather than vanity impressions.",
    signals: [
      "Cost Per Booked Job (CPBJ)",
      "Customer Acquisition Cost (CAC)",
      "Insurance vs Cash Ratio",
      "Bay vs Mobile Fleet Utilization"
    ]
  }
];

export const searchIntentMatrix = [
  {
    queryType: "Urgent Replacement",
    sampleQuery: '"windshield replacement near me same day"',
    userMindset: "Emergency, needs immediate mobile or drive-in technician today",
    primarySurface: "Google Maps 3-Pack & Local Call Ads",
    conversionMechanism: "Instant Click-to-Call, Live Mobile Dispatch confirmation",
    targetValue: "High-Value Replacement"
  },
  {
    queryType: "ADAS Optical Recalibration",
    sampleQuery: '"ADAS camera calibration after windshield install"',
    userMindset: "Safety-conscious driver or insurer looking for clearly documented recalibration capability",
    primarySurface: "Organic Service Pillar & AI Search Overviews",
    conversionMechanism: "Static/Dynamic Calibration Credibility & Insurance Billing",
    targetValue: "Premium Add-On Opportunity"
  },
  {
    queryType: "Insurance Coverage / Claim",
    sampleQuery: '"does insurance cover windshield replacement in [city]"',
    userMindset: "Confused about deductible, zero-deductible glass states, or billing",
    primarySurface: "Informational SEO Guides & Schema FAQ Snippets",
    conversionMechanism: "Step-by-step Insurance Claim Help & Deductible verification",
    targetValue: "Frictionless Claim Initiation"
  },
  {
    queryType: "Rock Chip / Minor Repair",
    sampleQuery: '"windshield rock chip repair before it spreads"',
    userMindset: "Price and time sensitive; evaluating repair vs full replacement",
    primarySurface: "Organic Local Landing Pages & Google Maps",
    conversionMechanism: "Clear repair availability, scheduling, and mobile-service options",
    targetValue: "Volume & Lifetime Fleet Value"
  }
];
