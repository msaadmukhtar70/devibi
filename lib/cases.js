// /lib/cases.js

export const CASES = [
  /* =========================================================================
   * 1) Isora GRC — full, everything included (max data)
   * ========================================================================= */
  {
    id: "cs-001",
    slug: "isora-grc",
    href: "/portfolio/isora-grc",
    title: "Isora — Optimizing governance, risk & compliance",
    tagline: "SaaS · Web app · Platform",
    client: "SaltyCloud",
    clientLocation: "Texas, USA",
    industry: "Cybersecurity / GRC",
    cats: ["web", "app", "platform"],
    delay: "0.06",
    timeline: "14 weeks",
    result: "2× user efficiency",
    img: "/assets/img_placeholder/th-1/content-image-5.jpg",
    alt: "Isora GRC dashboard preview",
    hero: {
      src: "/assets/img_placeholder/th-1/portfolio-main-img.jpg",
      alt: "Isora GRC hero image",
    },
    cta: { href: "#", label: "View live" },
    ctaImage: "/assets/img_placeholder/th-1/about-contact-img.jpg",

    summary:
      "We reimagined Isora end-to-end—streamlining assessment flows, introducing a robust design system mirrored in Storybook, and shipping an accessible, performance-minded UI. The result: faster completion, clearer analytics, and a foundation that scales.",

    services: [
      "UX Audit",
      "Product redesign",
      "Information architecture",
      "Design system",
      "Frontend build",
      "Team extension",
    ],
    tech: [
      "Vite",
      "React",
      "TypeScript",
      "React Router",
      "Radix Primitives",
      "TailwindCSS",
      "Recharts",
      "Storybook",
      "Playwright",
      "PostHog",
    ],
    tags: ["GRC", "Accessibility", "Design System"],

    bullets: [
      {
        title: "2× increase in user efficiency",
        copy:
          "Optimized flows and intuitive UI doubled efficiency in assessment completion across roles.",
      },
      {
        title: "50% faster time-to-market",
        copy:
          "Atomic components + Storybook accelerated delivery while boosting consistency.",
      },
      {
        title: "Industry recognition",
        copy:
          "UX Design Awards nomination plus improved traffic and qualified leads.",
      },
    ],

    overviewTitle: "Overcoming GRC challenges in one place",
    overview:
      "A collaborative platform that helps organizations enhance cybersecurity. Isora automates complex risk management tasks to improve data collection, risk identification, and regulatory compliance—trusted by teams at over 20% of R1 universities in the U.S.",

    metrics: [
      { label: "Activation rate", value: "+12%", note: "Post-launch, 90-day window" },
      { label: "Time to first value", value: "-18%", note: "Median minutes to ‘aha’" },
      { label: "Week-4 retention", value: "+6%", note: "Cohort analysis" },
      { label: "Support tickets", value: "-21%", note: "Fewer regressions" },
      { label: "Cycle time", value: "-19%", note: "Idea → merged → shipped" },
    ],

    business: {
      title: "Client request & goals",
      copy:
        "The legacy UI created friction and slowed adoption. We aligned on modernizing the product with an accessible, developer-friendly system and measurable gains in speed and clarity.",
    },

    problems: [
      {
        problem: "Improve usability within a legacy backend without major refactors.",
        solution:
          "Refined IA and flows while working within constraints, unlocking quick-win UX gains.",
      },
      {
        problem: "Translate user feedback into actionable improvements.",
        solution:
          "Prioritized feedback into hypotheses and design experiments, validating through prototypes and telemetry.",
      },
      {
        problem: "Balance immediate wins with long-term scalability.",
        solution:
          "Phased plan: high-impact UX first; design system and shared components in parallel.",
      },
      {
        problem: "Developer-built UI lacked UX guardrails.",
        solution:
          "Introduced design direction, states, empty/error patterns; documented comprehensively in Storybook.",
      },
      {
        problem: "Inconsistent analytics made decision-making slow.",
        solution:
          "Instrumented events, standardized dashboards, and created a KPI glossary.",
      },
    ],

    discovery: {
      title: "Research process",
      copy:
        "We combined documentation review, UX audit, and flow mapping with technical feasibility checks to ensure fast, informed iterations.",
      images: [
        "/assets/img_placeholder/th-1/content-image-6.jpg",
        "/assets/img_placeholder/th-1/funfact-image.jpg",
        "/assets/img_placeholder/th-1/content-image-5.jpg",
      ],
    },

    stageGroups: [
      {
        title: "Research stages",
        stages: [
          {
            title: "Documentation analysis",
            copy:
              "Aligned product intentions with lived user behavior. Designers tested the product hands-on; devs mapped backend limitations.",
            images: ["/assets/img_placeholder/th-1/content-image-5.jpg"],
          },
          {
            title: "UX audit",
            copy:
              "We evaluated flows against heuristics and industry patterns, generating hypotheses and success metrics.",
            images: ["/assets/img_placeholder/th-1/content-image-6.jpg"],
          },
          {
            title: "Information architecture & flows",
            copy:
              "Restructured navigation and key journeys, reducing cognitive load and clicks to completion.",
            images: ["/assets/img_placeholder/th-1/about-contact-img.jpg"],
          },
        ],
      },
      {
        title: "Design stages",
        stages: [
          {
            title: "Design direction",
            copy:
              "Moodboard + survey aligned on tone, accessibility, and motion principles.",
            images: ["/assets/img_placeholder/th-1/funfact-image.jpg"],
          },
          {
            title: "UI design",
            copy:
              "High-fidelity layouts across core journeys, with edge cases and states.",
            images: [
              "/assets/img_placeholder/th-1/content-image-4.jpg",
              "/assets/img_placeholder/th-1/content-image-5.jpg",
            ],
          },
          {
            title: "Design system",
            copy:
              "Atomic components in Figma mirrored in Storybook for dev parity and speed.",
            images: ["/assets/img_placeholder/th-1/content-image-6.jpg"],
          },
        ],
      },
      {
        title: "Development stages",
        stages: [
          {
            title: "APIs & backend alignment",
            copy:
              "Mapped Redoc gaps by inspecting endpoints; documented inter-service dependencies.",
            images: ["/assets/img_placeholder/th-1/content-image-6.jpg"],
          },
          {
            title: "Storybook build",
            copy:
              "Interactive components with states and accessibility baked in for fast QA.",
            images: ["/assets/img_placeholder/th-1/content-image-4.jpg"],
          },
          {
            title: "Front-end integration",
            copy:
              "Vertical slices with telemetry; performance budgets and CI checks.",
            images: ["/assets/img_placeholder/th-1/funfact-image.jpg"],
          },
        ],
      },
    ],

    features: {
      title: "Key features",
      items: [
        {
          title: "Assessment management",
          pain: "Hard to find and prioritize critical information across assessments.",
          done: [
            "Intuitive layout with clear visual hierarchy",
            "Progress indicators for fast scanning",
            "Bulk actions and smart filters",
          ],
        },
        {
          title: "Survey completion",
          pain: "Unclear steps and collaboration friction.",
          done: [
            "Guided pipeline with role-aware permissions",
            "Familiar table and form patterns",
            "Autosave and recoverable drafts",
          ],
        },
        {
          title: "Reporting",
          pain: "Cumbersome comparison across units and vendors.",
          done: [
            "Side-by-side switching",
            "Saved views and export",
            "Recharts integration for clarity",
          ],
        },
        {
          title: "Assessment builder",
          pain: "Complex setup with a steep learning curve.",
          done: [
            "Step-by-step creation with contextual tips",
            "Reusable templates",
            "Validation and preview",
          ],
        },
        {
          title: "Commenting",
          pain: "Collaboration scattered in external tools.",
          done: [
            "Threaded discussions at question level",
            "Mentions and notifications",
            "Audit trail",
          ],
        },
        {
          title: "Dynamic sidebar",
          pain: "Too many page loads for small edits.",
          done: [
            "Context-sensitive panel for view/edit",
            "Keyboard shortcuts",
            "No-reload transitions",
          ],
        },
      ],
    },

    process: [
      { title: "Discovery & audit", items: ["Goals, constraints, telemetry"] },
      { title: "Information architecture", items: ["Navigation, flows"] },
      { title: "Design direction", items: ["Tone, accessibility, motion"] },
      { title: "UI & states", items: ["Edge cases, a11y, empty/error"] },
      { title: "Design system", items: ["Tokens, components, Storybook"] },
      { title: "Handoff & QA", items: ["Specs, checklists, monitoring"] },
    ],

    gallery: [
      { src: "/assets/img_placeholder/th-1/content-image-5.jpg", caption: "Assessment dashboard" },
      { src: "/assets/img_placeholder/th-1/content-image-6.jpg", caption: "Builder flow" },
      { src: "/assets/img_placeholder/th-1/funfact-image.jpg", caption: "Analytics & reporting" },
      { src: "/assets/img_placeholder/th-1/about-contact-img.jpg", caption: "Design system snapshots" },
      { src: "/assets/img_placeholder/th-1/content-image-4.jpg", caption: "States & a11y patterns" },
      { src: "/assets/img_placeholder/th-1/portfolio-main-img.jpg", caption: "Live product screens" },
    ],

    awards: [
      { title: "UX Design Awards — Nomination", org: "IDZ Berlin", year: "2024" },
      { title: "Awwwards — Honorable Mention", org: "Awwwards", year: "2024" },
    ],

    quote: {
      text:
        "The redesign changed how our teams work day-to-day—faster flows, fewer questions, and a system we can scale.",
      author: "Product Lead, SaltyCloud",
    },

    results: [
      { title: "2× user efficiency", copy: "Reduced clicks and clearer hierarchy sped up assessments." },
      { title: "50% faster time-to-market", copy: "Design system + Storybook aligned design and dev." },
      { title: "Market recognition", copy: "Nomination + stronger pipeline from improved perception." },
    ],
  },

  /* =========================================================================
   * 2) Hyperbridge — branding-led (intentionally missing metrics/features)
   * ========================================================================= */
  {
    id: "cs-002",
    slug: "hyperbridge-branding",
    href: "/portfolio/hyperbridge-branding",
    title: "Hyperbridge — Redefining cross-chain connectivity",
    tagline: "Branding",
    client: "Hyperbridge",
    clientLocation: "USA",
    industry: "Blockchain / Interoperability",
    cats: ["branding"],
    delay: "0.12",
    timeline: "6 weeks",
    result: "Unified brand system",
    img: "/assets/img_placeholder/th-1/content-image-4.jpg",
    alt: "Hyperbridge brand preview",
    hero: { src: "/assets/img_placeholder/th-1/content-image-4.jpg", alt: "Hyperbridge hero" },
    cta: { href: "#", label: "View website" },

    summary:
      "We refined Hyperbridge’s identity to reflect secure, trustless interoperability—clear positioning, a modern logo system, and accessible brand guidelines that scale across product and marketing.",

    services: ["Brand strategy", "Logo design", "Design system", "Guidelines"],
    tech: [], // page hides Tech stack
    tags: ["Identity", "Guidelines", "Web3"],

    bullets: [
      { title: "Clearer brand positioning", copy: "Identity highlights Hyperbridge as a secure, scalable interoperability protocol." },
      { title: "Consistent visual system", copy: "Unified design language across product, docs, and go-to-market." },
      { title: "Improved market perception", copy: "Elevated credibility for investors, partners, and developers." },
    ],

    overviewTitle: "Seamless cross-chain connectivity",
    overview:
      "A decentralized interoperability protocol enabling secure, trustless communication between chains. Cryptographic proofs and a scalable architecture remove intermediaries and allow assets/data to move safely.",

    business: {
      copy:
        "Goal: a future-proof identity that communicates trust, innovation, and decentralization—paired with clear guidelines for consistent execution.",
    },

    problems: [
      {
        problem: "Brand lacked distinctiveness and didn’t convey trustless infrastructure.",
        solution: "Developed a forward identity emphasizing security and openness.",
      },
      {
        problem: "Inconsistent design across touchpoints reduced credibility.",
        solution: "Created comprehensive brand guidelines and componentized assets.",
      },
    ],

    // No discovery (hidden)
    stageGroups: [
      {
        title: "Branding stages",
        stages: [
          { title: "Logo design", copy: "A dynamic mark fusing microchip structure with motion; technical wordmark for authority.", images: ["/assets/img_placeholder/th-1/content-image-6.jpg"] },
          { title: "Colors & typography", copy: "High-contrast palette with vivid accents; accessible type scales for docs and UI.", images: ["/assets/img_placeholder/th-1/funfact-image.jpg", "/assets/img_placeholder/th-1/about-contact-img.jpg"] },
          { title: "Brand assets", copy: "Patterns, iconography, and templates for decks, docs, and social.", images: ["/assets/img_placeholder/th-1/content-image-5.jpg"] },
          { title: "Illustrations", copy: "Structured visuals that explain core mechanisms and trust models.", images: ["/assets/img_placeholder/th-1/content-image-4.jpg"] },
          { title: "Brand guidelines", copy: "Usage rules, spacing, accessibility, and motion—codified for consistency.", images: ["/assets/img_placeholder/th-1/content-image-6.jpg"] },
        ],
      },
    ],

    // No metrics/features/process
    gallery: [
      { src: "/assets/img_placeholder/th-1/content-image-4.jpg", caption: "Logo and mark" },
      { src: "/assets/img_placeholder/th-1/content-image-5.jpg", caption: "Components & patterns" },
      { src: "/assets/img_placeholder/th-1/about-contact-img.jpg", caption: "Illustration style" },
    ],

    results: [
      { title: "Clearer brand positioning", copy: "Stronger narrative and category fit." },
      { title: "Consistent visual system", copy: "Simplified execution across teams." },
      { title: "Improved perception", copy: "More credible to partners and developers." },
    ],
  },

  /* =========================================================================
   * 3) FinPilot — mobile (lean: no business/problems/stageGroups)
   * ========================================================================= */
  {
    id: "cs-003",
    slug: "finpilot-mobile",
    href: "/portfolio/finpilot-mobile",
    title: "FinPilot — Mobile investing with guardrails",
    tagline: "Fintech · Mobile app",
    client: "FinPilot",
    industry: "Fintech",
    cats: ["app"],
    delay: "0.18",
    timeline: "10 weeks",
    result: "NPS +11",
    img: "/assets/img_placeholder/th-1/content-image-6.jpg",
    alt: "FinPilot mobile app preview",
    hero: { src: "/assets/img_placeholder/th-1/content-image-6.jpg", alt: "FinPilot hero image" },
    cta: { href: "#", label: "View live" },

    summary:
      "We designed a friction-light investing app with risk prompts, goals-based workflows, and delightful microinteractions to build user confidence.",

    services: ["Mobile UX", "Design system", "React Native handoff"],
    tech: ["Figma", "Tokens", "Specs"],
    tags: ["Onboarding", "Financial UX"],

    bullets: [
      { title: "Faster onboarding", copy: "Reduced drop-off with fewer steps and clearer choices." },
      { title: "Safer flows", copy: "Risk prompts and confirmations for leverage and options." },
      { title: "Delightful details", copy: "Microinteractions reinforce progress and trust." },
    ],

    metrics: [
      { label: "Completion rate", value: "+15%", note: "Onboarding funnel" },
      { label: "NPS", value: "+11", note: "Post-launch survey" },
    ],

    features: {
      items: [
        { title: "Goal-based investing", done: ["Templates for common goals", "Auto-rebalance hints", "Clear risk labels"] },
        { title: "Smart onboarding", done: ["IDV guidance", "Pre-filled data where safe", "Progress save/resume"] },
      ],
    },

    process: [
      { title: "Audit & goals", items: ["Heuristics, competitive scan"] },
      { title: "Flows & UI", items: ["Edge cases, empty/error states"] },
      { title: "Handoff", items: ["Specs, tokens, screen inventory"] },
    ],

    gallery: [
      "/assets/img_placeholder/th-1/content-image-6.jpg",
      "/assets/img_placeholder/th-1/funfact-image.jpg",
    ],

    // No business / problems / discovery / stageGroups / awards / quote
    results: [
      { title: "Higher confidence", copy: "Inline explanations and confirmations." },
      { title: "Lower drop-off", copy: "Less friction in ID verification." },
    ],
  },

  /* =========================================================================
   * 4) TerraAnalytics — AI dashboards (web + AI; no discovery/stageGroups)
   * ========================================================================= */
  {
    id: "cs-004",
    slug: "terra-analytics",
    href: "/portfolio/terra-analytics",
    title: "TerraAnalytics — ML insights for field operations",
    tagline: "AI/ML · Web app",
    client: "TerraAnalytics",
    industry: "Industrial IoT",
    cats: ["ai", "web"],
    delay: "0.24",
    timeline: "12 weeks",
    result: "MTTR −23%",
    img: "/assets/img_placeholder/th-1/funfact-image.jpg",
    alt: "TerraAnalytics dashboard",
    hero: { src: "/assets/img_placeholder/th-1/funfact-image.jpg", alt: "TerraAnalytics hero" },
    cta: { href: "#", label: "View live" },

    summary:
      "We shipped an explainable-AI dashboard for anomaly detection. Ops teams see what changed, why it matters, and the fastest path to resolution.",

    services: ["Product design", "Frontend build", "Telemetry & QA"],
    tech: ["Next.js", "Node", "Postgres", "Tailwind", "RAG notes", "Evals"],
    tags: ["Explainability", "Telemetry"],

    bullets: [
      { title: "Faster resolution", copy: "Mean time to resolution dropped by 23%." },
      { title: "Trust in AI", copy: "Inline explanations increased adoption across teams." },
      { title: "Cleaner ops", copy: "Fewer repeat issues via root-cause tagging." },
    ],

    metrics: [
      { label: "MTTR", value: "-23%", note: "6-week post-launch average" },
      { label: "Repeat issues", value: "-17%", note: "YoY vs. similar period" },
      { label: "User adoption", value: "+19%", note: "Weekly actives" },
    ],

    business: {
      copy:
        "Teams needed actionable AI—not black-box scores. We highlighted context, confidence, and playbooks for each anomaly.",
    },

    features: {
      items: [
        { title: "Anomaly timeline", done: ["Change-point markers", "Confidence bands", "One-click compare"] },
        { title: "Explainability", done: ["Top drivers", "Counterfactual hints", "Linked documentation"] },
        { title: "Playbooks", done: ["Resolution steps", "Auto-log to ticketing", "Owner routing"] },
      ],
    },

    process: [
      { title: "Discovery", items: ["Shadowed on-call rotation", "Interviewed SMEs"] },
      { title: "Design & build", items: ["Vertical slices with telemetry"] },
      { title: "QA & launch", items: ["Playwright scenarios", "Rollback plan"] },
    ],

    // No discovery/stageGroups/awards/quote
    gallery: [
      "/assets/img_placeholder/th-1/funfact-image.jpg",
      "/assets/img_placeholder/th-1/content-image-5.jpg",
    ],
    results: [
      { title: "Operational gains", copy: "Cut resolution time and repeat issues." },
      { title: "Team confidence", copy: "Clear rationale for decisions increased trust." },
    ],
  },
];
