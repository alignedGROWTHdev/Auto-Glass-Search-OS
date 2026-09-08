export const siteConfig = {
  name: "Auto Glass Growth",
  category: "Auto Glass Marketing, Websites & Lead Generation",
  methodology: "Auto Glass Growth OS",
  tagline: "Turn More Customer Demand Into Booked Jobs",
  description: "Auto Glass Growth is a specialized auto glass marketing, websites and lead generation company for established auto glass operators. We help capture high-intent demand through SEO, Google Maps, paid search and AI discovery — then turn more of it into qualified calls, quote requests and booked jobs.",
  channelDescriptor: "SEO · Google Maps · Google Ads · Websites · CRO · AI Search · Measurement",
  legalStatement: "Auto Glass Growth is a specialized auto glass growth initiative from Aligned Growth Digital.",
  primaryCta: "Get My Free Growth Analysis",
  primaryCtaOffer: "Complimentary Search + Customer Acquisition Analysis",
  siteUrl: "https://autoglassgrowth.com",
  entity: {
    organizationId: "https://autoglassgrowth.com/#organization",
    parentOrganizationName: "Aligned Growth Digital",
    parentOrganizationUrl: "https://alignedgrowthdigital.com",
    parentOrganizationId: "https://alignedgrowthdigital.com/#organization",
    founderName: "Valentina Borda",
    founderId: "https://autoglassgrowth.com/about/#valentina-borda",
  },
  navLinks: [
    { name: "Lead Generation", href: "/auto-glass-lead-generation/" },
    { name: "Auto Glass SEO", href: "/auto-glass-seo/" },
    { name: "Local SEO & Maps", href: "/auto-glass-local-seo/" },
    { name: "Google Ads", href: "/google-ads/" },
    { name: "Websites", href: "/auto-glass-websites/" },
    { name: "AI Search", href: "/ai-search-optimization/" },
    { name: "About", href: "/about/" },
  ],
  placeholders: {
    phone: "(720) 600-2985",
    email: "info@autoglassgrowth.com",
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
    subtitle: "Show up when drivers are looking.",
    description: "Be in the top map results and on page one when a driver searches for windshield replacement, repair, mobile service or ADAS calibration — on Google, in the Map Pack, in Google Ads, and in AI answers.",
    signals: [
      "Google Search",
      "Map Pack (top 3)",
      "Google Ads",
      "AI answers"
    ]
  },
  {
    id: "trusted",
    step: "02",
    title: "TRUSTED",
    subtitle: "Give drivers a reason to pick you.",
    description: "Drivers decide in minutes, on a phone. Your website, reviews, and clear answers about insurance and warranty are what make them pick you over the shop above or below you.",
    signals: [
      "Website",
      "Reviews",
      "Insurance answers",
      "Warranty answers"
    ]
  },
  {
    id: "chosen",
    step: "03",
    title: "CHOSEN",
    subtitle: "Make it easy to call or get a quote.",
    description: "One tap to call. A short quote form. Hours and service area where they can see them. We build and tune the path so a driver who found you actually reaches you.",
    signals: [
      "Call",
      "Quote request",
      "Conversion experience"
    ]
  },
  {
    id: "measured",
    step: "04",
    title: "MEASURED",
    subtitle: "Know which marketing turned into jobs.",
    description: "Every call and quote request is tracked back to where it came from, so you can see which channels produce booked jobs and what each one costs — with real numbers, not guesses.",
    signals: [
      "Qualified lead",
      "Quote",
      "Appointment",
      "Booked job"
    ]
  }
];

// Specialized third-party technology partners. Auto Glass Growth does not sell, own,
// develop or operate this technology; it can identify the bottleneck and connect clients with providers.
export const partnerTech = {
  label: "Specialized technology partners",
  intro: "Sometimes the conversion bottleneck isn't marketing. If your operation is losing opportunities because customers can't easily get a quote, find availability or receive a timely response, specialized auto glass technology may help.",
  role: "We can help identify the gap and, where appropriate, connect you with third-party providers offering solutions such as online quoting, scheduling and AI-assisted call handling.",
  disclosure: "Third-party technology is provided and supported separately by the applicable provider.",
};

// Short trust strip for the homepage (three points, owner language).
export const trustStrip = [
  { label: "Auto glass only", detail: "We work with auto glass shops. Nothing else." },
  { label: "You own the inquiries", detail: "We don't sell leads or software. Your site, your listing, your ads, your calls." },
  { label: "Measured in booked jobs", detail: "Not clicks or rankings. Calls, quotes and jobs on the schedule." },
];

// Verified credibility points (no invented metrics).
export const credibilityPoints = [
  { label: "Auto glass only", detail: "Built for established auto glass companies, not general local businesses" },
  { label: "SEO · Maps · Ads · Websites · CRO · AI", detail: "One methodology across every channel drivers use — and the site they convert on" },
  { label: "Conversion-focused", detail: "Measured in qualified calls, quote requests and booked jobs" },
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

// Auto Glass Growth services (the company's own services — not third-party technology).
export const services = [
  { num: "01", title: "Auto Glass SEO", body: "Show up on page one when drivers search for windshield replacement, repair, mobile service or ADAS calibration in your area.", href: "/auto-glass-seo/", cta: "Auto glass SEO" },
  { num: "02", title: "Local SEO + Google Maps", body: "Get into the top three map results. Your Google Business Profile, reviews and service areas, done right.", href: "/auto-glass-local-seo/", cta: "Local SEO & Maps" },
  { num: "03", title: "Google Ads / PPC", body: "Paid ads that reach drivers who need glass now — without paying for shower doors, tint or parts searches.", href: "/google-ads/", cta: "Google Ads" },
  { num: "04", title: "Auto Glass Websites", body: "A site built to rank, answer the questions drivers ask, and get them to call or request a quote from a phone.", href: "/auto-glass-websites/", cta: "Auto glass websites" },
  { num: "05", title: "Conversion Optimization", body: "Make it easier for drivers who land on your site to call or get a quote: buttons, forms, mobile layout, trust signals.", href: "/auto-glass-websites/#cro-heading", cta: "Conversion optimization" },
  { num: "06", title: "AI Search Visibility", body: "Be the shop Google's AI answers and ChatGPT mention when someone asks for auto glass help nearby.", href: "/ai-search-optimization/", cta: "AI search visibility" },
  { num: "07", title: "Analytics + Measurement", body: "See which channels produce calls, quotes and booked jobs, and what each one costs you.", href: "/auto-glass-lead-generation/#measure-heading", cta: "Measurement" },
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
    href: "/auto-glass-websites/",
    title: "Auto Glass Websites & CRO",
    description: "Websites built to rank and convert, and conversion optimization for the site you have.",
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
