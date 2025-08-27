// Lightweight data source for portfolio items

const PROJECTS = [
  {
    slug: "acme-insights",
    title: "Acme Insights — Analytics SaaS",
    heroImage: "/assets/img_placeholder/th-1/portfolio-main-img.jpg",
    heroAlt: "Acme Insights dashboard",
    client: "Acme Co.",
    services: ["Web Design", "Design System"],
    duration: "6 weeks",
    website: "https://www.example.com",

    // Headline under breadcrumb
    introHeading: "Natural language processing models",

    // Section 1: Overview
    overviewTitle: "Project overview",
    overviewLead: "Machine Learning and Predictive Analytics:",
    overviewBullets: [
      "Demand Forecasting: we predicted product demand to optimize inventory and supply chain.",
      "Customer Churn Prediction: identified at-risk customers and enabled proactive retention."
    ],
    overviewImage: "/assets/img_placeholder/th-1/content-image-5.jpg",

    // Section 2: Results
    resultsTitle: "Project results",
    resultsLead: "Natural Language Processing (NLP):",
    resultsBullets: [
      "Text Analysis: sentiment, entities, and summarization improved ops reporting.",
      "Chatbots and Virtual Assistants: faster support with deflection to self-serve."
    ],
    resultsImage: "/assets/img_placeholder/th-1/content-image-6.jpg",

    // Optional CTA band copy
    cta: {
      heading: "We always want to connect our clients",
      body: "AI accessible and beneficial for organizations—we partner to achieve real outcomes."
    }
  },

  {
    slug: "finbank-mobile",
    title: "FinBank — Mobile Onboarding",
    heroImage: "/assets/img_placeholder/th-1/portfolio-main-img.jpg",
    heroAlt: "FinBank onboarding screens",
    client: "FinBank",
    services: ["Mobile App Design", "Onboarding"],
    duration: "8 weeks",
    website: "https://finbank.example.com",
    introHeading: "Frictionless identity and account setup",
    overviewTitle: "Project overview",
    overviewLead: "KYC and first-time UX:",
    overviewBullets: [
      "Reduced steps with autofill and clear progress.",
      "Edge cases mapped with safe fallbacks."
    ],
    overviewImage: "/assets/img_placeholder/th-1/content-image-5.jpg",
    resultsTitle: "Project results",
    resultsLead: "Measured impact:",
    resultsBullets: [
      "Activation +18% within first month.",
      "Support tickets for onboarding −27%."
    ],
    resultsImage: "/assets/img_placeholder/th-1/content-image-6.jpg",
    cta: { heading: "Let’s make onboarding effortless", body: "From KYC to day-one value—safely and fast." }
  },

  {
    slug: "docs-platform",
    title: "DevDocs — Docs & MDX Platform",
    heroImage: "/assets/img_placeholder/th-1/portfolio-main-img.jpg",
    heroAlt: "Developer docs site",
    client: "DevCorp",
    services: ["Web Design", "Docs/MDX", "SEO"],
    duration: "5 weeks",
    website: "https://docs.example.dev",
    introHeading: "Documentation that explains, ranks, and converts",
    overviewTitle: "Project overview",
    overviewLead: "Content architecture:",
    overviewBullets: [
      "MDX components for callouts, tabs, and live code.",
      "Information architecture aligned to real search intent."
    ],
    overviewImage: "/assets/img_placeholder/th-1/content-image-5.jpg",
    resultsTitle: "Project results",
    resultsLead: "Search & engagement:",
    resultsBullets: [
      "Organic traffic +32% in 60 days.",
      "Time on page +24% with clearer examples."
    ],
    resultsImage: "/assets/img_placeholder/th-1/content-image-6.jpg",
    cta: { heading: "Make docs your growth engine", body: "Clear structure, fast pages, better search." }
  }
];

export function getProject(slug) {
  return PROJECTS.find(p => p.slug === slug) || null;
}

export const ALL_PROJECTS = PROJECTS.map(({ slug, title, heroImage, heroAlt }) => ({
  slug, title, heroImage, heroAlt
}));
