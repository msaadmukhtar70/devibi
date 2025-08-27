// /lib/services.js

// ---------- Shared defaults (used when a service doesn't override) ----------
const BASE = {
  headline: "Beautiful, functional, scalable",

  // Pills on hero image
  badges: ["AA Accessible"],
  footerBadge: "Dev ready",

  // Rendered as "Tech stack" chips (each service can override/extend)
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Radix UI",
    "shadcn/ui",
    "Storybook",
  ],

  facts: [
    { k: "Avg. time to MVP", v: "8 to 12 weeks" },
    { k: "Demos", v: "Weekly with criteria" },
    { k: "Handoff", v: "Dev ready tokens and specs" },
    { k: "Focus", v: "Activation, retention, revenue" },
  ],

  chips: ["Strategy", "UX", "UI", "Design system"],

  challenges: [
    {
      title: "Users drop before converting",
      copy:
        "Confusing journeys block activation. We rework the flow so people reach value quickly. That lifts retention and revenue.",
      icon: "/assets/img_placeholder/th-1/trending-up-icon.svg",
    },
    {
      title: "Hard to stand out",
      copy:
        "Crowded markets reward clarity and polish. We craft a visual identity and an interaction model that feel yours and perform better.",
      icon: "/assets/img_placeholder/th-1/cog-icon.svg",
    },
    {
      title: "UI feels dated or clunky",
      copy:
        "Expectations rise every quarter. We modernize type, color, motion, and states so your product feels current and trustworthy.",
      icon: "/assets/img_placeholder/th-1/icon-orange-clock.svg",
    },
  ],

  useCases: [],

  process: [
    { step: "01", title: "Stakeholder interview", items: ["Goals and KPIs", "Risks and constraints"] },
    { step: "02", title: "Research and trends", items: ["Competitor scan", "Opportunity map"] },
    { step: "03", title: "Feature prioritization", items: ["MVP scope", "Versioned roadmap"] },
    { step: "04", title: "User flows and wires", items: ["Journey diagrams", "Key screens"] },
    { step: "05", title: "Visual direction", items: ["Moodboard", "Concept options"] },
    { step: "06", title: "UI design", items: ["Dev ready mockups", "States and variants"] },
    { step: "07", title: "Testing and validation", items: ["Usability findings", "Refinements"] },
    { step: "08", title: "Design handoff", items: ["Tokens and specs", "Implementation guide"] },
  ],

  // Flexible deliverable groups
  deliverables: [
    {
      title: "UX",
      items: ["Research summary", "Personas and jobs to be done", "User flows and IA"],
    },
    {
      title: "UI",
      items: ["Figma components and tokens", "Key screens", "Motion and micro interactions"],
    },
    {
      title: "Handoff",
      wide: true,
      items: ["Specs and annotations", "Redlines and assets", "Design system starter"],
    },
  ],

  benefits: [
    {
      title: "User centered decisions",
      copy:
        "We speak with customers, review evidence, and test changes. Teams move faster when choices are grounded in real behavior.",
    },
    {
      title: "Transparent collaboration",
      copy:
        "One team across docs, standups, and tools. You see weekly demos with clear acceptance criteria and next steps.",
    },
    {
      title: "Dev ready quality",
      copy:
        "Tokens, specs, and state coverage help engineers ship with confidence. Less rework means faster releases.",
    },
    {
      title: "Senior execution",
      copy:
        "Mid to senior designers and engineers with real SaaS, FinTech, Health, and AI experience deliver from start to finish.",
    },
    {
      title: "Accountable outcomes",
      copy:
        "We measure activation, retention, and revenue. If a task does not move a metric we question it.",
    },
  ],

  faqs: [
    {
      q: "How long does this take?",
      a: "Timelines depend on scope and decision speed. You see weekly demos and clear acceptance criteria from day one.",
    },
    {
      q: "Do you design and develop?",
      a: "Yes. We can plug into your team or bring a full squad to deliver design and development through launch.",
    },
    {
      q: "Can you redesign an existing product?",
      a: "Yes. We audit the current experience, find friction, and prioritize improvements that increase engagement and conversion.",
    },
    {
      q: "How do you price?",
      a: "Fixed scopes for defined outcomes or monthly retainers for ongoing work. You receive a plan, risks, and a price band within 48 hours.",
    },
    {
      q: "What do you hand off to developers?",
      a: "Design tokens, component libraries, redlines, and an implementation guide. We also support QA so the intent stays intact.",
    },
  ],
};

// ---------- Your services ----------
const SERVICES = [
  // -------------------------------------------------------------------------
  // CORE PACKAGES
  // -------------------------------------------------------------------------

  /* Launch Blueprint */
  {
    slug: "launch-blueprint",
    title: "Launch Blueprint",
    headline: "Scope fast. Decide clearly.",
    badges: ["Workshops", "Prototype"],
    technologies: [
      // Collaboration and research
      "Figma", "FigJam", "Miro", "Notion", "Whimsical", "Loom",
      // Backlog and docs
      "Linear", "Jira", "Confluence", "Google Workspace",
      // Wireframing and prototyping
      "Figma Prototypes", "Framer", "Protopie",
      // Validation
      "Maze", "Useberry", "Lookback",
    ],
    heroImage: "/assets/img_placeholder/th-1/service-cover-blueprint.jpg",
    heroAlt: "Launch planning workshop and wireframes",
    summary:
      "Scope, wireframes, and a plan in seven days. We align the team, make tradeoffs visible, and leave you with a clear path to build. You get a clickthrough, an effort range, and a risk view you can share with investors.",
    facts: [
      { k: "Duration", v: "5 to 7 business days" },
      { k: "Sessions", v: "Two workshops and a readout" },
      { k: "Output", v: "Clickable flows and a scoped plan" },
      { k: "Risk view", v: "Known issues and mitigations" },
    ],
    chips: ["Strategy", "UX", "Planning", "Estimation"],
    useCases: [
      { title: "New product framing", copy: "Turn an idea into a plan with flows, scope, and a sequence that is real." },
      { title: "Module plan", copy: "Set a lean MVP, expose dependencies, and avoid scope creep." },
      { title: "Rebuild or migration", copy: "Map current and future states and plan a safe path between them." },
    ],
    process: [
      { step: "01", title: "Kickoff and goals", items: ["What success looks like", "Constraints and risks"] },
      { step: "02", title: "Stakeholder interviews", items: ["Roles and needs", "Decision criteria"] },
      { step: "03", title: "Research scan", items: ["Competitors and patterns", "Open questions"] },
      { step: "04", title: "Flows and IA", items: ["A to B journeys", "Edge cases and states"] },
      { step: "05", title: "Low fidelity wires", items: ["Clickthrough prototype", "Feedback round"] },
      { step: "06", title: "Scope and estimates", items: ["MVP vs later", "Effort ranges and assumptions"] },
      { step: "07", title: "Risks and mitigations", items: ["What can fail", "How to reduce impact"] },
      { step: "08", title: "Readout and plan of record", items: ["Timeline and owners", "Next steps and decision log"] },
    ],
    deliverables: [
      {
        title: "Workshops and discovery",
        items: ["Kickoff, goals, and constraints", "Stakeholder interviews and decision criteria", "Research scan and open questions"],
      },
      {
        title: "Prototype and scope",
        items: ["User flows and information architecture", "Low fidelity clickthrough prototype", "MVP and later scope with estimates"],
      },
      {
        title: "Plan and risks",
        wide: true,
        items: ["Risk register and mitigations", "Milestones, owners, and timeline", "Plan of record deck you can share"],
      },
    ],
    benefits: [
      { title: "Speed with clarity", copy: "In one week you get alignment, a prototype, and a build plan the team trusts." },
      { title: "Cleaner execution", copy: "A single plan of record reduces churn and stops scope creep early." },
      { title: "Fewer surprises", copy: "Risks are documented with owners and mitigation options." },
      { title: "Investor ready", copy: "You leave with a crisp story, a credible plan, and a clickthrough." },
    ],
    faqs: [
      { q: "Who should join?", a: "A product lead, a design lead, and an engineering lead. A founder or sponsor joins the kickoff and the readout." },
      { q: "What fidelity do we get?", a: "Low to mid fidelity clickthroughs that show journeys and states. The goal is clarity and speed." },
      { q: "Do we get a price band?", a: "Yes. We share an effort range with assumptions and risks so you can choose scope with eyes open." },
    ],
  },

  /* MVP Sprint */
  {
    slug: "mvp-sprint",
    title: "MVP Sprint",
    badges: ["Design and build", "Telemetry"],
    technologies: [
      // Frontend frameworks
      "React", "Next.js", "Vue 3", "Nuxt 3", "Angular 17", "SvelteKit",
      // Styling and UI
      "TypeScript", "TailwindCSS", "CSS Modules", "Radix UI", "shadcn/ui", "Storybook",
      // Build and monorepo
      "Vite", "Webpack", "Turborepo", "pnpm",
      // Backend and APIs
      "Node.js", "NestJS", "Express", "tRPC", "GraphQL (Apollo)", "REST", "WebSockets",
      // Databases and cache
      "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis",
      // ORM and data
      "Prisma", "Drizzle ORM", "Zod",
      // Auth and security
      "NextAuth", "Auth0", "JWT", "OWASP ASVS practices",
      // Cloud and hosting
      "Vercel", "AWS (Lambda, S3, CloudFront)", "GCP (Cloud Run)", "Cloudflare",
      // Observability
      "Sentry", "LogRocket", "OpenTelemetry",
      // CI/CD and testing
      "GitHub Actions", "Playwright", "Cypress", "Jest", "Vitest",
      // Analytics and growth
      "PostHog", "Segment", "Mixpanel",
      // Internationalization
      "next-intl", "i18next",
      // DevOps
      "Docker", "Docker Compose",
    ],
    headline: "Design and build your MVP in 8 to 12 weeks.",
    heroImage: "/assets/img_placeholder/th-1/service-cover-mvp.jpg",
    heroAlt: "MVP design and build sprint",
    summary:
      "One team ships design and working software. You get weekly demos, acceptance criteria for every story, and a release that is safe to run. This is the fastest way to learn in the market.",
    facts: [
      { k: "Typical timeline", v: "8 to 12 weeks" },
      { k: "Cadence", v: "Weekly demos and scope control" },
      { k: "Delivery", v: "Design and working software" },
      { k: "Quality", v: "Acceptance criteria and QA support" },
    ],
    chips: ["Product", "UX", "UI", "Engineering"],
    useCases: [
      { title: "New product V1", copy: "A focused first version with the smallest set that proves value." },
      { title: "Vertical slice", copy: "Design and build one path that touches core systems and shows real progress." },
      { title: "Rebuild with a new stack", copy: "Move to a modern stack with a stable plan and a safe rollout." },
    ],
    process: [
      { step: "01", title: "Sprint plan", items: ["Milestones and scope", "Acceptance criteria template"] },
      { step: "02", title: "Design system starter", items: ["Tokens and components", "Accessibility rules"] },
      { step: "03", title: "UX and UI design", items: ["Key screens with states", "Clickable prototype for review"] },
      { step: "04", title: "Build", items: ["Implementation with CI", "Feature flags and environments"] },
      { step: "05", title: "Telemetry and QA", items: ["Event plan and dashboards", "Test cases and fixes"] },
      { step: "06", title: "Beta and feedback", items: ["Limited release", "Iteration on findings"] },
      { step: "07", title: "Launch", items: ["Rollout plan and support", "Runbooks and handover"] },
      { step: "08", title: "Post launch review", items: ["What worked and what to change", "Roadmap next steps"] },
    ],
    deliverables: [
      {
        title: "Design",
        items: ["User flows, states, and acceptance criteria", "Clickable prototype for core journeys", "Figma components and design tokens"],
      },
      {
        title: "Build",
        items: ["Working repo with CI and basic tests", "Desktop and mobile UI", "Feature flags and environments"],
      },
      {
        title: "QA and release",
        wide: true,
        items: ["Event plan and dashboards", "QA checklist and fixes", "Runbook and rollout plan"],
      },
    ],
    benefits: [
      { title: "Real progress fast", copy: "A product you can use, not just slides. You see demos every week." },
      { title: "Clean handover", copy: "Tokens, states, and specs keep intent intact and speed up future work." },
      { title: "Confidence to ship", copy: "Telemetry and QA support make launch less stressful." },
    ],
    faqs: [
      { q: "Can you work with our engineers?", a: "Yes. We often ship as a blended team and adapt to your tools and ceremonies." },
      { q: "What stack do you use?", a: "We default to a modern web stack and adjust to match your environment when needed." },
      { q: "How do you manage scope?", a: "We keep a single plan of record, track risks, and make tradeoffs clear in weekly demos." },
    ],
  },

  /* Activation Lift */
  {
    slug: "activation-lift",
    title: "Activation Lift",
    headline: "Onboarding and pricing that convert.",
    badges: ["Experiments", "Analytics"],
    technologies: [
      // Analytics and experimentation
      "GA4", "Mixpanel", "Amplitude", "PostHog", "Segment",
      "Optimizely", "VWO", "LaunchDarkly",
      // Behavior insight
      "Hotjar", "FullStory", "Clarity",
      // Web delivery
      "Next.js", "React", "TailwindCSS",
      // Content and CMS
      "Sanity", "Contentful", "Storyblok", "Strapi",
      // Dashboards and data
      "BigQuery", "Looker Studio", "Metabase",
      // SEO and performance checks
      "Lighthouse", "PageSpeed", "Screaming Frog",
    ],
    heroImage: "/assets/img_placeholder/th-1/service-cover-activation.jpg",
    heroAlt: "Onboarding and pricing experiments",
    summary:
      "Onboarding, pricing, and site experiments that convert. You get targets, variants, and tracking that shows what moved the metric. We keep the program simple so your team can repeat it after we leave.",
    facts: [
      { k: "Typical timeline", v: "4 to 6 weeks per wave" },
      { k: "Focus metric", v: "Activation and conversion lift" },
      { k: "Cadence", v: "Weekly demos and reports" },
      { k: "Proof", v: "Instrumented events and dashboards" },
    ],
    chips: ["Growth", "UX", "Experiments", "Analytics"],
    useCases: [
      { title: "SaaS onboarding", copy: "Shorter paths to the first key action with better guidance and defaults." },
      { title: "Pricing revamp", copy: "Clear plans, fair comparison, and upgrade cues that match intent." },
      { title: "Marketing site lift", copy: "Stronger story and proof with faster pages that rank and convert." },
    ],
    process: [
      { step: "01", title: "Baseline and goals", items: ["Current metric and funnel map", "Target and guardrails"] },
      { step: "02", title: "Insight work", items: ["Heatmaps and session review", "User calls when useful"] },
      { step: "03", title: "Hypotheses and plan", items: ["Test ideas and impact sizing", "Experiment backlog"] },
      { step: "04", title: "Design and build variants", items: ["Lightweight components", "A and B ready to ship"] },
      { step: "05", title: "Instrumentation", items: ["Events with names and owners", "Dashboard wiring"] },
      { step: "06", title: "Run and learn", items: ["QA and rollout", "Readout with next steps"] },
      { step: "07", title: "Scale the winners", items: ["Roll into product", "Document the pattern"] },
      { step: "08", title: "Program setup", items: ["Backlog and cadence", "Playbooks and ownership"] },
    ],
    deliverables: [
      {
        title: "Insights and hypotheses",
        items: ["Funnel map and friction audit", "Heatmaps and session review", "Test hypotheses and experiment design"],
      },
      {
        title: "Experiments",
        items: ["Onboarding and pricing variants", "Reusable components for tests", "Optimized pages and states"],
      },
      {
        title: "Instrumentation and reporting",
        wide: true,
        items: ["Event schema and dashboards", "Experiment report and decision log", "Backlog and owner playbook"],
      },
    ],
    benefits: [
      { title: "Confidence in what works", copy: "Targets, tested variants, and telemetry make the next decision easy." },
      { title: "Faster wins", copy: "Focused changes on the highest leverage steps create visible lift." },
      { title: "Better storytelling", copy: "Pricing and site copy help buyers understand value and act." },
    ],
  },

  /* Practical AI */
  {
    slug: "practical-ai",
    title: "Practical AI",
    headline: "AI that earns trust and saves time.",
    badges: ["RAG", "Citations"],
    technologies: [
      // Model providers
      "OpenAI", "Anthropic", "Google Gemini", "AWS Bedrock",
      // Orchestration
      "LangChain", "LlamaIndex",
      // Vector search
      "pgvector", "Pinecone", "Weaviate", "Milvus",
      // Data stores and pipelines
      "PostgreSQL", "S3", "Airbyte", "dbt",
      // Evals and safety
      "RAGAS", "DeepEval", "Guardrails", "PII filters",
      // Observability
      "LangSmith", "OpenTelemetry",
      // Serving
      "Vercel Functions", "Cloudflare Workers", "AWS Lambda",
      // Frontend UX
      "React", "Next.js", "TailwindCSS",
    ],
    heroImage: "/assets/img_placeholder/th-1/service-cover-4.jpg",
    heroAlt: "Applied AI UX and safeguards",
    summary:
      "Onboarding helper, search with sources, and support replies only where AI helps. We design for trust, evidence, and control so adoption goes up and cost stays in check.",
    facts: [
      { k: "Pilot timeline", v: "6 to 10 weeks" },
      { k: "Patterns", v: "Retrieval, copilots, and auto draft" },
      { k: "Safety", v: "Citations, red team checks, and guardrails" },
      { k: "Integration", v: "Your data and stack" },
    ],
    chips: ["AI", "RAG", "UX", "Engineering"],
    deliverables: [
      {
        title: "UX and safety",
        items: [
          "User journeys with failure and recovery paths",
          "Assistant and search flows with clear states",
          "Guidance patterns and copy for safe use",
        ],
      },
      {
        title: "Components",
        items: [
          "Prompting and results UI with citations",
          "Feedback controls and escalation paths",
          "Error handling and empty states",
        ],
      },
      {
        title: "Ops and guardrails",
        wide: true,
        items: [
          "Prompt and retrieval strategy",
          "Eval datasets and dashboards",
          "Safety checklist and runbook",
        ],
      },
    ],
    benefits: [
      { title: "Value you can measure", copy: "We pick tasks with a clear outcome like time saved or answer quality and we prove it." },
      { title: "Trust by design", copy: "Citations, controls, and clear limits help users rely on the system." },
      { title: "Lower risk over time", copy: "Evals and monitoring let you tune quality and manage cost." },
    ],
  },

  // -------------------------------------------------------------------------
  // VALIDATE
  // -------------------------------------------------------------------------

  /* Design prototype */
  {
    slug: "design-prototype",
    title: "Design prototype",
    headline: "Test ideas before you commit code.",
    badges: ["Prototype", "User tests"],
    technologies: [
      "Figma", "FigJam", "Protopie", "Framer", "Maze", "Useberry", "Lookback",
      "Tokens Studio", "Contrast", "axe DevTools",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-1.jpg",
    heroAlt: "Clickable prototype and flows",
    summary:
      "Clickable journeys and visual flows that let you test the idea with real people. You learn what to keep, what to cut, and what to change before engineers start.",
    facts: [
      { k: "Timeline", v: "1 to 2 weeks" },
      { k: "Output", v: "Clickable flows and insights" },
      { k: "Decision", v: "Keep, cut, change" },
      { k: "Handoff", v: "Annotated files ready for sprint" },
    ],
    chips: ["UX", "Prototype", "Validation"],
    process: [
      { step: "01", title: "Goals and audience", items: ["Who we test with", "What we need to learn"] },
      { step: "02", title: "Flows and wires", items: ["Happy path and edge cases", "Copy that guides"] },
      { step: "03", title: "Clickable prototype", items: ["Review and refine", "Set up quick tests"] },
      { step: "04", title: "Readout", items: ["Findings and decisions", "Next steps for build"] },
    ],
  },

  /* Product discovery */
  {
    slug: "product-discovery",
    title: "Product discovery",
    headline: "Map features, flows, and first pass architecture.",
    badges: ["Workshops", "Prioritization"],
    technologies: [
      "Miro", "FigJam", "Notion", "Airtable", "Figma",
      "GA4", "Mixpanel", "Dovetail", "Hotjar",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-2.jpg",
    heroAlt: "Discovery boards and prioritization",
    summary:
      "We align on outcomes, map the core journeys, and choose the first set of features that matter. You get a clear MVP plan and the guardrails that protect it.",
    facts: [
      { k: "Timeline", v: "2 to 3 weeks" },
      { k: "Output", v: "MVP scope and roadmap" },
      { k: "Signal", v: "Evidence and risks" },
      { k: "Team", v: "Founder, PM, design, engineering" },
    ],
    chips: ["Strategy", "Research", "Planning"],
  },

  /* Technical workshop */
  {
    slug: "technical-workshop",
    title: "Technical workshop",
    headline: "Validate your stack with senior engineers.",
    badges: ["Architecture", "Scalability"],
    technologies: [
      "Node.js", "Next.js", "NestJS", "Express",
      "PostgreSQL", "Redis", "Prisma", "Drizzle ORM",
      "AWS", "GCP", "Vercel", "Docker", "Terraform",
      "OpenTelemetry", "Sentry",
      "draw.io", "Excalidraw",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-3.jpg",
    heroAlt: "Architecture diagrams and constraints",
    summary:
      "We review architecture, data, and constraints. You get guidance on risk, scale, and a practical path you can ship with confidence.",
    facts: [
      { k: "Timeline", v: "1 to 2 days" },
      { k: "Format", v: "Deep dive sessions" },
      { k: "Output", v: "Decisions and next steps" },
      { k: "Focus", v: "Security, performance, cost" },
    ],
    chips: ["Engineering", "Architecture", "Scale"],
  },

  // -------------------------------------------------------------------------
  // BUILD
  // -------------------------------------------------------------------------

  /* Custom MVP development */
  {
    slug: "custom-mvp-development",
    title: "Custom MVP development",
    headline: "Design and build a product users love.",
    badges: ["Design and build", "CI and QA"],
    technologies: [
      "React", "Next.js", "Vue 3", "Nuxt 3", "Angular", "SvelteKit",
      "TypeScript", "TailwindCSS", "Radix UI", "shadcn/ui", "Storybook",
      "Node.js", "NestJS", "Express", "tRPC", "GraphQL",
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM",
      "Vercel", "AWS", "GCP", "Cloudflare", "Docker",
      "GitHub Actions", "Playwright", "Cypress", "Jest", "Vitest",
      "Sentry", "OpenTelemetry",
    ],
    heroImage: "/assets/img_placeholder/th-1/service-cover-mvp.jpg",
    heroAlt: "Engineers shipping vertical slices",
    summary:
      "We take your blueprint and deliver a working MVP. Vertical slices ship every week with acceptance criteria, telemetry, and a safe rollout plan.",
    facts: [
      { k: "Timeline", v: "8 to 12 weeks" },
      { k: "Delivery", v: "Repo, CI, and story signoff" },
      { k: "Quality", v: "Tests and monitoring" },
      { k: "Handoff", v: "Docs and runbooks" },
    ],
    chips: ["Product", "Design", "Engineering"],
  },

  /* Dedicated team */
  {
    slug: "dedicated-team",
    title: "Dedicated team",
    headline: "A senior squad that owns outcomes.",
    badges: ["Product", "Design", "Engineering"],
    technologies: [
      "Shared repo", "Design system", "Dashboards",
      "Linear", "Jira", "Shortcut", "Notion", "Slack",
      "Sentry", "PostHog", "Mixpanel",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Cross functional delivery team",
    summary:
      "Add a consistent team that plans, ships, and reports every week. We manage the backlog with you and keep velocity steady without drama.",
    facts: [
      { k: "Engagement", v: "Monthly" },
      { k: "Cadence", v: "Weekly demos" },
      { k: "Reporting", v: "Roadmap and metrics" },
      { k: "Handoff", v: "Docs and ownership map" },
    ],
    chips: ["Team extension", "Outcomes", "Velocity"],
    deliverables: [
      { title: "Planning", items: ["Quarter goals", "Single plan of record", "Risk tracking"] },
      { title: "Delivery", items: ["Design and code", "Reviews and QA", "Telemetry and fixes"] },
      { title: "Reporting", wide: true, items: ["Weekly demo", "Roadmap updates", "Budget and impact"] },
    ],
  },

  // -------------------------------------------------------------------------
  // SCALE
  // -------------------------------------------------------------------------

  /* UX audit */
  {
    slug: "ux-audit",
    title: "UX audit",
    headline: "Find friction. Lift conversion.",
    badges: ["Heuristics", "Analytics"],
    technologies: [
      "GA4", "Mixpanel", "Heap", "PostHog",
      "Hotjar", "FullStory",
      "Lighthouse", "axe", "Wave",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-5.jpg",
    heroAlt: "Heuristic review and funnel map",
    summary:
      "A concise audit of your flows with findings you can act on. We map the funnel, review behavior, and show where to improve activation and retention.",
    facts: [
      { k: "Timeline", v: "1 to 2 weeks" },
      { k: "Output", v: "Report and prioritised backlog" },
      { k: "Proof", v: "Screens and metrics" },
      { k: "Follow up", v: "Quick wins and roadmap" },
    ],
    chips: ["Audit", "Growth", "Usability"],
  },

  /* Product redesign */
  {
    slug: "product-redesign",
    title: "Product redesign",
    headline: "Modern UX that scales with you.",
    badges: ["Design system", "Accessibility"],
    technologies: [
      "Figma", "Tokens Studio", "Storybook",
      "Radix UI", "shadcn/ui", "TailwindCSS",
      "Axe", "Contrast", "ARIA patterns",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-6.jpg",
    heroAlt: "Modern UI and design system",
    summary:
      "Upgrade a legacy interface without slowing the roadmap. We refresh journeys and states, ship a design system, and guide engineers through a clean rollout.",
    facts: [
      { k: "Timeline", v: "6 to 12 weeks" },
      { k: "Focus", v: "Core flows and states" },
      { k: "System", v: "Tokens and components" },
      { k: "Quality", v: "AA accessibility" },
    ],
    chips: ["Redesign", "Design system", "A11y"],
  },

  /* Team extension */
  {
    slug: "team-extension",
    title: "Team extension",
    headline: "Designers and developers on demand.",
    badges: ["Flexible", "Senior talent"],
    technologies: [
      "Figma", "Storybook", "React", "Next.js",
      "Node.js", "PostgreSQL", "Prisma",
      "Linear", "Jira", "Slack",
    ],
    heroImage: "/assets/img_placeholder/th-1/about-contact-img.jpg",
    heroAlt: "Design and engineering partnership",
    summary:
      "Add capacity without slowing down. We blend into your rituals, own a slice of the roadmap, and keep quality high.",
    facts: [
      { k: "Engagement", v: "Part time or full time" },
      { k: "Lead time", v: "One to two weeks" },
      { k: "Fit", v: "SaaS, AI, FinTech, Health" },
      { k: "Reporting", v: "Weekly demo and plan" },
    ],
    chips: ["Staff aug", "Velocity", "Quality"],
  },

  // -------------------------------------------------------------------------
  // WEBSITE AND BRAND
  // -------------------------------------------------------------------------

  /* Website redesign */
  {
    slug: "website-redesign",
    title: "Website redesign",
    headline: "Modern look. Clear story. Faster pages.",
    badges: ["SEO", "CMS ready"],
    technologies: [
      "Next.js", "React", "Astro", "Remix",
      "TailwindCSS", "MDX",
      "Sanity", "Contentful", "Storyblok", "Strapi", "Payload",
      "Algolia", "Meilisearch",
      "Vercel", "Netlify", "Cloudflare Pages",
      "Lighthouse", "Web Vitals",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-2.jpg",
    heroAlt: "New web design system",
    summary:
      "We modernize your site and keep publishing simple. The new system is fast, accessible, and easy for your team to update.",
    facts: [
      { k: "Avg. build", v: "4 to 6 weeks" },
      { k: "Focus", v: "Story and conversion" },
      { k: "Output", v: "Components and CMS" },
      { k: "Performance", v: "Budget and checks" },
    ],
    chips: ["UX", "UI", "CMS", "SEO"],
  },

  /* Website design services */
  {
    slug: "website-design-services",
    title: "Website design services",
    headline: "Websites that explain clearly and convert.",
    badges: ["Design system", "CMS ready"],
    technologies: [
      "Next.js", "React", "TailwindCSS", "MDX",
      "Sanity", "Contentful", "Storyblok", "Strapi", "Ghost",
      "Vercel", "Netlify",
      "GA4", "GTM", "Lighthouse",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-2.jpg",
    heroAlt: "Marketing website and docs",
    summary:
      "We plan content first, then design a flexible system of templates. Your team can publish new pages without waiting on engineers. Performance, accessibility, and SEO are built in.",
    facts: [
      { k: "Avg. build", v: "4 to 6 weeks" },
      { k: "Stack", v: "Next.js and a headless CMS" },
      { k: "Focus", v: "Search and conversion" },
      { k: "Handoff", v: "Component library and guide" },
    ],
    chips: ["UX", "UI", "CMS", "SEO"],
  },

  /* Web app design */
  {
    slug: "web-app-design",
    title: "Web app design",
    headline: "SaaS UX that feels effortless.",
    badges: ["Design system", "AA accessible"],
    technologies: [
      "Figma", "Tokens Studio", "Storybook",
      "Radix UI", "shadcn/ui", "TailwindCSS",
      "Axe", "ARIA patterns",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-5.jpg",
    heroAlt: "SaaS interface and states",
    summary:
      "We design responsive web apps with clear journeys, thoughtful states, and a system engineers can ship with confidence.",
    facts: [
      { k: "Avg. time to MVP", v: "8 to 12 weeks" },
      { k: "Output", v: "Tokens and components" },
      { k: "Coverage", v: "States, empty, error, loading" },
      { k: "Focus", v: "Activation and retention" },
    ],
    chips: ["SaaS", "Design system", "A11y"],
  },

  /* Branding */
  {
    slug: "branding",
    title: "Branding",
    headline: "A visual identity that earns trust.",
    badges: ["Identity", "Guidelines"],
    technologies: [
      "Figma", "Illustrator", "Photoshop", "After Effects",
      "Lottie", "Blender (light 3D)", "Google Fonts", "Fontshare",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Logo, colors, and typography",
    summary:
      "Strategy, logo, colors, typography, and assets that scale from product to pitch decks. Clear rules keep everything consistent without slowing teams.",
    facts: [
      { k: "Timeline", v: "3 to 5 weeks" },
      { k: "Output", v: "Logo system and assets" },
      { k: "Guide", v: "Brand rules and usage" },
      { k: "Fit", v: "Startups and scaleups" },
    ],
    chips: ["Identity", "System", "Guidelines"],
    deliverables: [
      { title: "Strategy", items: ["Audience and position", "Voice and principles"] },
      { title: "Identity", items: ["Logo and marks", "Colors and type", "Icon set and patterns"] },
      { title: "Guidelines", wide: true, items: ["Usage rules", "Templates", "Handoff package"] },
    ],
  },

  // -------------------------------------------------------------------------
  // DEVELOPMENT
  // -------------------------------------------------------------------------

  /* Web development */
  {
    slug: "web-development",
    title: "Web development",
    headline: "Modern web apps with clean foundations.",
    badges: ["CI", "QA"],
    technologies: [
      "React", "Next.js", "Vue 3", "Nuxt 3", "Angular", "SvelteKit",
      "TypeScript", "TailwindCSS", "Radix UI", "shadcn/ui",
      "Node.js", "NestJS", "Express", "tRPC", "GraphQL",
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "Prisma", "Drizzle ORM",
      "Docker", "GitHub Actions",
      "Sentry", "OpenTelemetry",
      "Vercel", "AWS", "GCP", "Cloudflare",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-3.jpg",
    heroAlt: "Modern web stack and CI",
    summary:
      "We build reliable web applications with a focus on performance and developer happiness. Expect a clean repo, CI, and sensible tests.",
    facts: [
      { k: "Delivery", v: "Repo and environments" },
      { k: "Quality", v: "Tests and monitoring" },
      { k: "Security", v: "Auth and permissions" },
      { k: "Handoff", v: "Docs and runbooks" },
    ],
    chips: ["Engineering", "Performance", "Security"],
    deliverables: [
      { title: "Foundation", items: ["Architecture and data model", "Auth and roles", "Design system integration"] },
      { title: "Features", items: ["Vertical slices", "API endpoints", "Background jobs"] },
      { title: "Ops", wide: true, items: ["CI and environments", "Monitoring and alerts", "Runbooks and docs"] },
    ],
  },

  /* Mobile app development */
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    headline: "End to end iOS and Android.",
    badges: ["Native", "React Native", "Flutter"],
    technologies: [
      // Native
      "Swift", "SwiftUI", "UIKit",
      "Kotlin", "Jetpack Compose",
      // Cross platform
      "React Native", "Expo", "Flutter", "Dart",
      // Data and services
      "GraphQL", "REST", "SQLite", "Realm", "Core Data",
      "Firebase (Auth, Firestore, Crashlytics)", "AppCenter",
      // Device and UX
      "Push notifications", "Deep links", "Universal links", "App Clips",
      // Build and release
      "Fastlane", "Bitrise", "EAS",
      // Analytics
      "Mixpanel", "Amplitude", "PostHog",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-1.jpg",
    heroAlt: "Mobile engineering and release",
    summary:
      "We ship polished mobile apps with the right patterns for each platform. You get a stable codebase, CI, and store release support.",
    facts: [
      { k: "Platforms", v: "iOS and Android" },
      { k: "Delivery", v: "Codebase and CI" },
      { k: "Quality", v: "Tests and monitoring" },
      { k: "Release", v: "Store listings and rollout" },
    ],
    chips: ["Engineering", "Performance", "Release"],
  },

  /* No code development */
  {
    slug: "no-code-development",
    title: "No-code development",
    headline: "Ship fast with smart constraints.",
    badges: ["Webflow", "Bubble", "Softr"],
    technologies: [
      "Webflow", "Bubble", "Softr", "Glide",
      "Airtable", "Supabase", "Xano",
      "Make", "Zapier", "n8n",
      "Memberstack", "Auth0", "Stripe",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-6.jpg",
    heroAlt: "No code tools and automations",
    summary:
      "Launch in weeks using battle tested platforms. We design with scale in mind and document where to switch to code when growth demands it.",
    facts: [
      { k: "Timeline", v: "2 to 6 weeks" },
      { k: "Hosting", v: "Included by platform" },
      { k: "Integrations", v: "Payments and auth" },
      { k: "Hand off", v: "Editor training" },
    ],
    chips: ["Speed", "Automation", "MVP"],
  },

  /* Blockchain development */
  {
    slug: "blockchain-development",
    title: "Blockchain development",
    headline: "Secure apps and smart contracts.",
    badges: ["EVM", "Audits"],
    technologies: [
      "Solidity", "Vyper",
      "Hardhat", "Foundry",
      "OpenZeppelin",
      "Ethers.js", "viem",
      "The Graph",
      "IPFS", "Arweave",
      "WalletConnect", "RainbowKit",
      "Alchemy", "Infura",
      "Next.js", "Node.js",
      "Slither", "Echidna",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-5.jpg",
    heroAlt: "Smart contracts and dapps",
    summary:
      "We design and build dapps and contracts with a clear security posture. Expect clean interfaces, clear limits, and a responsible rollout.",
    facts: [
      { k: "Networks", v: "EVM compatible" },
      { k: "Quality", v: "Tests and audits" },
      { k: "Security", v: "Key management and permissions" },
      { k: "Handoff", v: "Docs and runbooks" },
    ],
    chips: ["Web3", "Security", "UX"],
  },

  /* Website development */
  {
    slug: "website-development",
    title: "Website development",
    headline: "Fast, accessible, and easy to update.",
    badges: ["Next.js", "CMS"],
    technologies: [
      "Next.js", "React", "Astro",
      "TailwindCSS", "MDX",
      "Sanity", "Contentful", "Storyblok", "Strapi", "Ghost",
      "Algolia", "Meilisearch",
      "Vercel", "Netlify", "Cloudflare Pages",
      "GA4", "GTM", "Lighthouse", "Web Vitals",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-2.jpg",
    heroAlt: "Marketing website build",
    summary:
      "We turn your design into a production site with a tidy CMS and performance baked in. Your team can publish pages without a ticket queue.",
    facts: [
      { k: "Avg. build", v: "3 to 5 weeks" },
      { k: "Editor", v: "Clean content model" },
      { k: "Performance", v: "Images, fonts, SEO" },
      { k: "Handoff", v: "Guide and training" },
    ],
    chips: ["CMS", "SEO", "Performance"],
  },

  // -------------------------------------------------------------------------
  // DESIGN ONLY VARIANTS
  // -------------------------------------------------------------------------

  /* Mobile App Design */
  {
    slug: "mobile-app-design",
    title: "Mobile App Design",
    headline: "Apps people love. Teams ship faster.",
    badges: ["iOS", "Android", "AA Accessible"],
    technologies: [
      "Figma", "FigJam", "Tokens Studio",
      "SwiftUI patterns", "Jetpack Compose patterns",
      "React Native UI Kits", "Lottie",
      "Axe mobile checks",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-1.jpg",
    heroAlt: "Mobile app design overview",
    summary:
      "We plan, design, and validate mobile products that feel effortless to use and simple to build. We start with goals and constraints, map the key journeys, prototype flows, and turn the winning direction into tokens and components for iOS and Android.",
    chips: ["Strategy", "UX", "UI", "Design system"],
    facts: [
      { k: "Avg. time to MVP", v: "8 to 12 weeks" },
      { k: "Platforms", v: "iOS and Android" },
      { k: "Handoff", v: "Tokens, specs, and state coverage" },
      { k: "Focus", v: "Activation and long term retention" },
    ],
  },

  /* Web Design */
  {
    slug: "web-design",
    title: "Web Design",
    headline: "Websites that explain clearly and convert.",
    badges: ["Next.js", "CMS ready"],
    technologies: [
      "Figma", "Tokens Studio",
      "Next.js", "React", "TailwindCSS", "MDX",
      "Sanity", "Contentful", "Storyblok", "Strapi",
      "Lighthouse", "Web Vitals", "Axe",
    ],
    heroImage: "/assets/img_placeholder/th-1/content-image-2.jpg",
    heroAlt: "Marketing website and docs",
    summary:
      "We design and build marketing sites and documentation that explain value clearly and convert visits into trials and signups. Content and structure come first. We then create a component library and a CMS so your team can ship new pages without a ticket queue.",
    facts: [
      { k: "Avg. build", v: "4 to 6 weeks" },
      { k: "Stack", v: "Next.js and a headless CMS" },
      { k: "Focus", v: "SEO and conversion" },
      { k: "Handoff", v: "Component library and CMS ready" },
    ],
    chips: ["UX", "UI", "CMS", "SEO"],
  },
];

// ---------- Helpers ----------
export function getService(slug) {
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return null;

  return {
    ...BASE,
    ...svc,
    headline: svc.headline ?? BASE.headline,
    challenges: svc.challenges ?? BASE.challenges,
    useCases: svc.useCases ?? BASE.useCases,
    process: svc.process ?? BASE.process,
    deliverables: svc.deliverables ?? BASE.deliverables,
    benefits: svc.benefits ?? BASE.benefits,
    faqs: svc.faqs ?? BASE.faqs,
    facts: svc.facts ?? BASE.facts,
    chips: svc.chips ?? BASE.chips,
    badges: svc.badges ?? BASE.badges,
    footerBadge: svc.footerBadge ?? BASE.footerBadge,
    technologies: svc.technologies ?? BASE.technologies,
  };
}

export const ALL_SERVICES = SERVICES.map(({ slug, title }) => ({ slug, title }));
