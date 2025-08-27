// /lib/blogs.js

export const BLOGS = [
  /* 1) From your sample */
  {
    slug: "ai-integration-for-startups",
    title:
      "10 ways to supercharge your startup with AI integration: unlock exponential growth",
    category: "Business",
    date: "2024-06-12",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-main-1.jpg",
      alt: "AI ideas for startups",
    },
    excerpt:
      "The rapid pace of AI keeps raising the bar. Here are practical ways to add AI that customers notice without bloating cost or risk.",
    points: [
      {
        title: "AI-powered customer support",
        body:
          "Deploy chat assistants for FAQs, triage, and guided flows. Free your team for complex cases while improving response time and CSAT.",
      },
      {
        title: "Predictive maintenance",
        body:
          "Find failure patterns early with anomaly detection and usage telemetry. Plan interventions, reduce downtime, and protect revenue.",
      },
      {
        title: "Enhanced cybersecurity",
        body:
          "Use behavior analytics and anomaly alerts to spot unusual access, data exfiltration, and credential stuffing before damage spreads.",
        image: {
          src: "/assets/img_placeholder/th-1/blog-inner-image.jpg",
          alt: "Security visualization",
        },
      },
      {
        title: "Personalized experiences",
        body:
          "Recommend content, pre-fill forms, and adapt UI states based on history and intent. Personal relevance lifts activation and retention.",
      },
      {
        title: "Automated workflows",
        body:
          "Let AI handle enrichment, dedupe, and routing. Close the loop with approvals, audit logs, and safe fallbacks.",
      },
    ],
    takeaways: [
      "Start with support, workflow automation, and basic analytics",
      "Scale AI as ops and quality controls mature",
      "Pick use cases that hit an urgent customer job to be done",
      "Design guardrails and integrate into existing tools",
      "Partner where it saves time, own what is core",
    ],
    closing:
      "Focus AI on moments that improve time-to-value and decision quality. That is how you create compounding advantages.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 200, comments: 2 },
    tags: ["AI", "SaaS", "Growth", "Automation"],
    comments: [
      {
        author: "Ricky Smith",
        avatar:
          "/assets/img_placeholder/th-1/blog-comment-large-user-img-1.jpg",
        date: "2024-06-14",
        text:
          "Great overview. We saw a 20% drop in ticket backlog after adding an assistant just for billing questions.",
        replies: [
          {
            author: "Joshua Jones",
            avatar:
              "/assets/img_placeholder/th-1/blog-comment-small-user-img-1.jpg",
            date: "2024-06-15",
            text:
              "Seconded. Draft replies with policy checks were an easy win for our team.",
          },
        ],
      },
    ],
  },

  /* 2) From your sample */
  {
    slug: "amazon-ai-product-descriptions",
    title:
      "Amazon testing AI tools to improve product descriptions: a game-changer",
    category: "Technology",
    date: "2024-06-10",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-recent-img-2.jpg",
      alt: "AI for ecommerce content",
    },
    excerpt:
      "Large marketplaces are leaning on AI to standardize, enrich, and translate listings. Here’s what that means for sellers and shoppers.",
    points: [
      {
        title: "Cleaner attributes",
        body:
          "AI extracts specs and normalizes fields so filters actually work.",
      },
      {
        title: "Faster localization",
        body:
          "Descriptions and imagery adapt to local terms and compliance.",
      },
      {
        title: "Fraud reduction",
        body:
          "Inconsistent claims and duplicate listings are easier to flag.",
      },
      {
        title: "Better discovery",
        body:
          "Structured data improves search ranking and conversion across long-tail queries.",
      },
      {
        title: "Seller impact",
        body:
          "Expect higher baselines for quality and more transparent review policies.",
      },
    ],
    takeaways: [
      "Structured content wins search and conversion",
      "Adopt AI authoring tools with human review",
      "Own your product taxonomy early",
    ],
    closing:
      "The standard is rising. Teams that systematize content quality will win visibility and trust.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 134, comments: 5 },
    tags: ["Ecommerce", "AI", "Content", "Localization"],
    comments: [],
  },

  /* 3) From your sample */
  {
    slug: "best-ai-businesses-2024",
    title:
      "3 best AI businesses to make money with in 2024 everyone is buzzing about",
    category: "Business",
    date: "2024-06-07",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-recent-img-3.jpg",
      alt: "AI businesses in 2024",
    },
    excerpt:
      "If you want revenue and defensibility, build where AI is useful, measurable, and embedded into a real workflow.",
    points: [
      {
        title: "AI onboarding copilot",
        body:
          "Cut time-to-first-value by answering questions with citations and safe actions inside the app.",
      },
      {
        title: "Support drafting with guardrails",
        body:
          "Draft replies with tone and policy checks while keeping a human in the loop for final send.",
      },
      {
        title: "Search with sources",
        body:
          "Retrieve the right excerpt, cite it, and let users verify fast. Trust drives adoption.",
      },
    ],
    takeaways: [
      "Pick a vertical where data quality is high",
      "Prove value with time saved or answer quality",
      "Price on impact, not tokens",
    ],
    closing:
      "Great AI products reduce effort and uncertainty. That is what customers pay for.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 412, comments: 11 },
    tags: ["AI", "Founders", "Support", "Onboarding"],
    comments: [],
  },

  /* 4) New */
  {
    slug: "b2b-saas-onboarding-checklist",
    title:
      "B2B SaaS onboarding that activates: a 7-step checklist founders can run this week",
    category: "Growth",
    date: "2024-07-02",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-main-4.jpg",
      alt: "B2B onboarding checklist",
    },
    excerpt:
      "If users fail in the first session, they rarely return. Use this simple checklist to improve activation in days, not quarters.",
    points: [
      {
        title: "Define the first success",
        body:
          "Make the first in-product win crystal clear. Name it, measure it, and design the journey around it.",
      },
      {
        title: "Shorten the path",
        body:
          "Remove optional steps from the first session. Default smartly, delay configuration, and prefill where safe.",
      },
      {
        title: "Guide with context",
        body:
          "Inline tips beat tooltips. Teach inside the flow, not in a tour users will skip.",
      },
      {
        title: "Use sample data",
        body:
          "Empty states kill momentum. Provide realistic sample data so the UI feels alive immediately.",
      },
      {
        title: "Instrument the funnel",
        body:
          "Track start, drop-off, and success by persona. Review weekly and fix the biggest leaks first.",
      },
      {
        title: "Invite collaborators",
        body:
          "Activation rises when teams come together. Prompt invites after the first success, not before.",
      },
      {
        title: "Close the loop",
        body:
          "Send a follow-up with progress, next best actions, and proof. Momentum compounds.",
      },
    ],
    takeaways: [
      "One first success metric beats a dozen vague goals",
      "Default to action, delay choice until necessary",
      "Show value with sample data immediately",
      "Measure drop-offs by step and persona",
    ],
    closing:
      "Onboarding is not a tour, it is a guided path to value. Treat it like a product and you will see activation lift.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 265, comments: 7 },
    tags: ["Onboarding", "Activation", "B2B SaaS", "Product"],
    comments: [],
  },

  /* 5) New */
  {
    slug: "design-systems-that-ship",
    title:
      "Design systems that speed up shipping: tokens, components, and Storybook that devs love",
    category: "Design",
    date: "2024-07-15",
    hero: {
      src: "/assets/img_placeholder/th-1/content-image-5.jpg",
      alt: "Design system tokens and components",
    },
    excerpt:
      "A design system is not a figma file. It is a contract between design and engineering that reduces rework and speeds up releases.",
    points: [
      {
        title: "Start with tokens",
        body:
          "Color, type, spacing, radius, elevation. Map your brand to platform tokens and name them like code.",
      },
      {
        title: "Atomic components",
        body:
          "Build small first. Buttons, inputs, menus, and alerts become the stable bricks for larger patterns.",
      },
      {
        title: "Storybook parity",
        body:
          "Mirror Figma components in Storybook. Document props, states, and accessibility expectations.",
      },
      {
        title: "Accessible by default",
        body:
          "Keyboard focus, roles, labels, and contrast. Accessibility is cheaper to bake in than fix later.",
      },
      {
        title: "Version and deprecate",
        body:
          "Plan for change. Version components, publish a changelog, and offer a migration path.",
      },
      {
        title: "Measure impact",
        body:
          "Track time to build and bug rates before and after adoption. A system must pay for itself.",
      },
    ],
    takeaways: [
      "Tokens first keeps visual language consistent",
      "Component parity between Figma and code avoids surprises",
      "Accessibility rules belong inside components",
      "Change management matters as much as component quality",
    ],
    closing:
      "A good system makes the right thing the easy thing. That is how teams ship faster with fewer bugs.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 198, comments: 3 },
    tags: ["Design System", "Storybook", "Accessibility", "Tokens", "Figma"],
    comments: [],
  },

  /* 6) New */
  {
    slug: "nextjs-performance-playbook",
    title:
      "Next.js performance playbook for marketing sites and apps: faster pages, better SEO",
    category: "Technology",
    date: "2024-08-01",
    hero: {
      src: "/assets/img_placeholder/th-1/content-image-2.jpg",
      alt: "Next.js performance tips",
    },
    excerpt:
      "Speed lifts conversion and search ranking. Here is the playbook we run on every Next.js build before launch.",
    points: [
      {
        title: "Image discipline",
        body:
          "Use next/image with proper sizes and formats. Preload LCP media and remove hidden oversized assets.",
      },
      {
        title: "Fonts the right way",
        body:
          "Self-host or next/font. Subset and preload. Avoid layout shift with declared metrics.",
      },
      {
        title: "Split and defer",
        body:
          "Dynamic imports for heavy components. Defer non-critical scripts and move work to the server where possible.",
      },
      {
        title: "Cache strategy",
        body:
          "Leverage route segment config, ISR for content pages, and edge caching for hotspots.",
      },
      {
        title: "Accessibility and UX",
        body:
          "Focus states, target sizes, and predictable navigation keep people moving. UX and performance are inseparable.",
      },
      {
        title: "Measure continuously",
        body:
          "Lighthouse is a start. Add RUM, Web Vitals, and error tracking so regressions are caught early.",
      },
    ],
    takeaways: [
      "Optimize the critical path first: LCP, CLS, TBT",
      "Ship less JS and move work to the server",
      "Cache smartly with ISR and edge",
      "Measure in prod with RUM and Web Vitals",
    ],
    closing:
      "Fast sites feel premium and convert better. Treat performance as a feature and keep it under version control.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 321, comments: 9 },
    tags: ["Next.js", "Performance", "SEO", "Web Vitals", "Edge"],
    comments: [],
  },

  /* 7) New */
  {
    slug: "ux-audit-conversion-lift",
    title:
      "UX audit for conversion lift: how to find friction and fix it without a full rebuild",
    category: "Design",
    date: "2024-08-19",
    hero: {
      src: "/assets/img_placeholder/th-1/content-image-6.jpg",
      alt: "UX audit walkthrough",
    },
    excerpt:
      "You do not need a redesign to grow. A focused UX audit reveals small changes that move the metric this quarter.",
    points: [
      {
        title: "Define the funnel",
        body:
          "Pick one journey. Map each step, event, and drop-off. Clarity turns opinions into decisions.",
      },
      {
        title: "Evidence, not vibes",
        body:
          "Review sessions, heatmaps, and support tickets. Pair with five user calls to validate what you see.",
      },
      {
        title: "Prioritize by impact",
        body:
          "Score opportunities by reach, effort, and confidence. Tackle the top three and ship within two sprints.",
      },
      {
        title: "Fix the basics",
        body:
          "Empty, loading, and error states. Form validation. Clear calls to action. The boring stuff pays the bills.",
      },
      {
        title: "Instrument and learn",
        body:
          "Add events with owners. Share dashboards. Celebrate what works and document patterns.",
      },
    ],
    takeaways: [
      "Pick one journey and measure it end to end",
      "Base changes on evidence, not preference",
      "Ship a few high-impact fixes quickly",
      "Document wins and roll them into the system",
    ],
    closing:
      "A great audit is a roadmap for momentum. Fix friction and growth follows.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 179, comments: 2 },
    tags: ["UX Audit", "Conversion", "Heuristics", "CRO"],
    comments: [],
  },

  /* 8) New */
  {
    slug: "pricing-pages-that-convert",
    title:
      "Pricing pages that convert: plans, comparison, and paywalls that feel fair",
    category: "Growth",
    date: "2024-09-05",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-main-5.jpg",
      alt: "SaaS pricing page examples",
    },
    excerpt:
      "Buyers want clarity and confidence. Structure your pricing so selection is easy and upgrades feel natural.",
    points: [
      {
        title: "One hero plan",
        body:
          "Highlight the plan most buyers should choose. Reduce decision fatigue and improve conversion.",
      },
      {
        title: "Real comparisons",
        body:
          "Use features buyers understand. Avoid vague terms. Show what changes by plan and who it is for.",
      },
      {
        title: "Transparent billing",
        body:
          "Explain how billing scales. Show totals before checkout. Surprises kill trust.",
      },
      {
        title: "Fair paywalls",
        body:
          "Let users feel value before locking. Paired limits with clear upgrade cues work best.",
      },
      {
        title: "Proof and reassurance",
        body:
          "Add social proof, security badges, and refund policy where doubts peak.",
      },
      {
        title: "Experiment and learn",
        body:
          "A/B layout, copy, and plan bundles. Track trial conversion, ARPA, and refund rate.",
      },
    ],
    takeaways: [
      "Make the recommended plan obvious",
      "Compare on buyer language, not internal labels",
      "No surprises at checkout",
      "Use data to evolve plans over time",
    ],
    closing:
      "Good pricing pages respect attention and lower anxiety. That is why they convert.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 287, comments: 6 },
    tags: ["Pricing", "Paywall", "Conversion", "SaaS"],
    comments: [],
  },

  /* 9) New */
  {
    slug: "practical-ai-rag-with-citations",
    title:
      "Practical AI in SaaS: RAG with citations that teams can trust and operate",
    category: "AI",
    date: "2024-09-24",
    hero: {
      src: "/assets/img_placeholder/th-1/service-cover-4.jpg",
      alt: "RAG with citations",
    },
    excerpt:
      "RAG helps you answer with sources, not guesses. Here is how to design it so users trust it and teams can run it.",
    points: [
      {
        title: "Narrow the job",
        body:
          "Pick one job to be done where citations matter. Support and onboarding are great candidates.",
      },
      {
        title: "Index with intent",
        body:
          "Chunk docs based on meaning, not pages. Keep metadata rich for filtering, freshness, and permissions.",
      },
      {
        title: "UX that explains",
        body:
          "Show sources inline. Let users expand context and flag issues. Add confidence cues without overpromising.",
      },
      {
        title: "Guardrails and policy",
        body:
          "Block disallowed topics, mask sensitive data, and escalate appropriately. Trust is earned by saying no when needed.",
      },
      {
        title: "Evals and monitoring",
        body:
          "Create eval sets for important queries. Track accuracy, latency, cost, and user feedback like a product KPI.",
      },
      {
        title: "Portable setup",
        body:
          "Keep prompts, retrieval, and data format model-agnostic. You should be able to switch providers without a rewrite.",
      },
    ],
    takeaways: [
      "Choose a narrow job where citations help",
      "Design UX for verification, not magic",
      "Run evals and monitor like any feature",
      "Keep the architecture portable",
    ],
    closing:
      "AI earns trust when answers are verifiable and the system is safe by design.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 344, comments: 8 },
    tags: ["AI", "RAG", "Citations", "Product", "Safety"],
    comments: [],
  },

  /* 10) New */
  {
    slug: "analytics-for-founders",
    title:
      "Analytics for founders: the event plan and dashboards that drive better decisions",
    category: "Product",
    date: "2024-10-08",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-main-6.jpg",
      alt: "Product analytics plan",
    },
    excerpt:
      "You do not need 100 events. You need the right ones. Here is a simple plan that clarifies what to build next.",
    points: [
      {
        title: "Define your north star",
        body:
          "Pick one metric that represents delivered value. Activation or retained usage beats vanity stats.",
      },
      {
        title: "Map a critical journey",
        body:
          "Instrument start, key steps, errors, and success. Keep names consistent and human readable.",
      },
      {
        title: "Use guardrails",
        body:
          "Track support load, refund rate, and latency so growth does not break the experience.",
      },
      {
        title: "Dashboards for roles",
        body:
          "Product cares about conversion and usage. Success cares about tickets and time to resolution. Build for decisions, not decoration.",
      },
      {
        title: "Close the loop",
        body:
          "Make decisions in writing. Link charts to shipped changes. Review impact in a weekly rhythm.",
      },
    ],
    takeaways: [
      "Start with one north star and one journey",
      "Name events like real actions",
      "Add guardrails so wins do not create pain",
      "Review weekly and tie charts to decisions",
    ],
    closing:
      "Good analytics make the next step obvious and reduce debate. That is their job.",
    thanks: "Thanks for reading ❤",
    stats: { likes: 231, comments: 4 },
    tags: ["Analytics", "Metrics", "Product", "Dashboards"],
    comments: [],
  },
];

// Helpers
export function getBlog(slug) {
  return BLOGS.find((b) => b.slug === slug) || null;
}

export const ALL_BLOGS = BLOGS.map(({ slug, title, category, date, hero }) => ({
  slug,
  title,
  category,
  date,
  hero,
}));
