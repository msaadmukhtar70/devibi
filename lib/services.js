// lib/services.js

// SEO-optimized service descriptions with human-centered copy
// Each service is crafted to rank well and convert visitors into customers

export const ALL_SERVICES = [
  /* =========================
   * Core Premium Services
   * ========================= */

  {
    slug: "launch-blueprint",
    title: "Launch Blueprint - MVP Strategy & Prototype",
    headline: "Turn your startup idea into investor-ready prototype in just 7 days",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Startup founder reviewing clickable MVP prototype on laptop",
    summary:
      "Don't waste months building the wrong product. Our Launch Blueprint transforms your startup idea into a clickable prototype with clear scope, budget, and timeline—giving you everything needed to secure funding and start building with confidence.",
    facts: [
      { k: "Delivery Time", v: "7 business days" },
      { k: "Format", v: "Interactive workshops + prototype" },
      { k: "Final Output", v: "Fixed-price MVP development plan" },
      { k: "Perfect for", v: "Pre-seed & seed stage startups" }
    ],
    chips: ["Product Discovery", "Interactive Prototype", "Scope Definition", "Risk Assessment"],
    badges: ["Investor Ready", "Clickable Demo"],
    footerBadge: "Blueprint to Build",
    technologies: ["Figma Prototyping", "User Journey Mapping", "Wireframe Tools"],
    challenges: [
      {
        title: "Unclear project scope leads to budget overruns",
        copy: "We help you separate must-have features from nice-to-haves, preventing costly scope creep and ensuring your budget stays on track throughout development.",
        icon: "/assets/img_placeholder/th-1/service-icon-black-1.svg",
      },
      {
        title: "Investors need proof beyond just presentations",
        copy: "Show don't tell with interactive prototypes that demonstrate user flows and reduce the narrative risk that kills funding rounds.",
        icon: "/assets/img_placeholder/th-1/service-icon-black-2.svg",
      },
      {
        title: "Hidden technical risks become expensive blockers",
        copy: "We surface integration challenges, scalability concerns, and technical constraints before they derail your development timeline and budget.",
        icon: "/assets/img_placeholder/th-1/service-icon-black-3.svg",
      },
    ],
    useCases: [
      { title: "Pre-MVP fundraising success", copy: "Present interactive demos that reduce investor risk and accelerate funding decisions." },
      { title: "Board and stakeholder alignment", copy: "Get everyone aligned on feature priorities and success metrics with crystal-clear acceptance criteria." },
      { title: "Development vendor selection", copy: "Provide detailed specifications for accurate, comparable quotes from development teams." },
    ],
    process: [
      { step: 1, title: "Discovery & goal alignment", items: ["Define success metrics and KPIs", "Identify constraints and risks", "Map key stakeholders and decision makers"] },
      { step: 2, title: "User journey mapping", items: ["Create detailed user stories", "Design core user journeys", "Account for edge cases and error states"] },
      { step: 3, title: "Interactive prototype creation", items: ["Build clickable wireframes", "Design all user states and error handling", "Iterate based on stakeholder feedback"] },
      { step: 4, title: "MVP scope definition", items: ["Break features into vertical slices", "Write testable acceptance criteria", "Plan analytics and measurement strategy"] },
      { step: 5, title: "Technical architecture planning", items: ["Draft initial data model", "Plan third-party integrations", "Set technical guardrails and constraints"] },
      { step: 6, title: "Development roadmap creation", items: ["Resource planning and team structure", "Realistic timeline with milestones", "Budget range with contingencies"] },
      { step: 7, title: "Stakeholder presentation", items: ["Present findings and trade-offs", "Outline recommended next steps", "Q&A and final adjustments"] },
      { step: 8, title: "Investor package preparation", items: ["Shareable prototype link", "Executive summary one-pager", "Detailed technical specification PDF"] }
    ],
    deliverablesGroups: [
      {
        title: "User Experience Design",
        items: [
          "Complete user flow diagrams with prioritized stories",
          "Interactive clickable prototype built in Figma",
          "Comprehensive empty states, error handling, and loading states"
        ],
      },
      {
        title: "User Interface Design",
        items: [
          "Key application screens and reusable components",
          "Design system tokens (typography, colors, spacing)",
          "WCAG AA accessibility compliance documentation"
        ],
      },
      {
        title: "Development Handoff Package",
        wide: true,
        items: [
          "Detailed MVP scope with testable acceptance criteria",
          "Technical architecture recommendations and constraints",
          "Fixed-price development estimate with timeline"
        ],
      },
    ],
    timelineNote: "Complete end-to-end process from kickoff meeting to final presentation delivered in 7 business days.",
    benefits: [
      { title: "Accelerate fundraising success", copy: "Investors can experience your vision through interactive demos, not just static presentations." },
      { title: "Bulletproof project scope", copy: "Get detailed, testable acceptance criteria that prevent scope creep and budget overruns." },
      { title: "Eliminate costly surprises", copy: "All technical risks, constraints, and integration challenges documented upfront." },
    ],
    faqs: [
      { q: "Do I need to have branding and visual design completed first?", a: "Not at all. We use neutral design systems during prototyping. Visual fidelity increases as product certainty grows through the process." },
      { q: "Can your team also build the MVP after the blueprint phase?", a: "Absolutely. The Launch Blueprint seamlessly transitions into our MVP Sprint service with the same team, ensuring no knowledge transfer delays." },
    ],
    approach: [
      { title: "Think with clarity", desc: "We document everything, simplify complex ideas, and establish clear priorities for maximum impact.", delay: "0.05" },
      { title: "Prototype for truth", desc: "Interactive prototypes reveal user experience gaps faster than any presentation or document.", delay: "0.1" },
      { title: "Own the outcomes", desc: "Every feature and decision must tie to measurable business metrics, or we question its priority.", delay: "0.3" }
    ]
  },

  {
    slug: "mvp-sprint",
    title: "MVP Sprint - Complete Product Development",
    headline: "From validated concept to paying customers in 8-12 weeks",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Development team presenting weekly MVP demo to startup founders",
    summary:
      "Skip the technical hiring headaches and months of uncertainty. Our MVP Sprint combines design and development expertise to build production-ready software with built-in analytics, security, and quality assurance—delivered with weekly demos so you're never in the dark.",
    facts: [
      { k: "Development Time", v: "8–12 weeks typical" },
      { k: "Demo Schedule", v: "Every Friday without fail" },
      { k: "Technology Stack", v: "Modern web & cloud infrastructure" },
      { k: "Best suited for", v: "Seed to Series A companies" },
    ],
    chips: ["Full-Stack Development", "UI/UX Design", "Quality Assurance", "Analytics Integration"],
    badges: ["Design + Development", "Weekly Demos"],
    footerBadge: "Production Ready",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "CI/CD Pipelines", "Playwright Testing"],
    challenges: [
      { title: "Scope creep destroys budgets and timelines", copy: "We build in focused vertical slices tied directly to user outcomes, preventing feature bloat that kills startups.", icon: "/assets/img_placeholder/th-1/service-icon-black-2.svg" },
      { title: "Technical debt slows future development", copy: "Quality guardrails, automated testing, and code reviews maintain development velocity as your product grows.", icon: "/assets/img_placeholder/th-1/service-icon-black-3.svg" },
      { title: "Black box development creates anxiety", copy: "Weekly Friday demos ensure constant alignment and eliminate the fear of not knowing what's being built.", icon: "/assets/img_placeholder/th-1/service-icon-black-4.svg" },
    ],
    useCases: [
      { title: "Acquire first paying customers", copy: "Ship the most focused, valuable slice of your product that customers will actually pay for." },
      { title: "Close enterprise pilot programs", copy: "Give design partners working software they can test, provide feedback on, and eventually purchase." },
      { title: "Hit investor milestone targets", copy: "Deliver measurable progress that boards can track and investors can validate with real user data." },
    ],
    process: [
      { step: 1, title: "Technical foundation setup", items: ["Code repository with version control", "CI/CD pipeline configuration", "Analytics and error tracking integration"] },
      { step: 2, title: "Design system creation", items: ["Component library and design tokens", "Accessible interface patterns", "Responsive layout frameworks"] },
      { step: 3, title: "Feature development in slices", items: ["User story-driven development approach", "Acceptance criteria-backed automated tests", "Weekly demo-ready increments"] },
      { step: 4, title: "Third-party integrations", items: ["User authentication and authorization", "Payment processing and billing systems", "Essential API connections"] },
      { step: 5, title: "Quality assurance and hardening", items: ["End-to-end automated test coverage", "Performance optimization and error budgets", "Security review and vulnerability scanning"] },
      { step: 6, title: "Production deployment", items: ["Staged rollout with monitoring", "Rollback procedures and safety nets", "User onboarding and support documentation"] },
      { step: 7, title: "Launch readiness review", items: ["Key performance indicator baseline establishment", "Post-launch optimization roadmap", "Team handoff and knowledge transfer"] },
    ],
    deliverablesGroups: [
      {
        title: "User Experience",
        items: ["Complete MVP user interface with all states", "Scalable design token system", "Component specifications and usage guidelines"],
      },
      {
        title: "User Interface",
        items: ["Fully responsive layouts for all devices", "WCAG AA accessibility compliance", "Dark and light theme support"],
      },
      {
        title: "Technical Handoff",
        wide: true,
        items: [
          "Deployed MVP application with comprehensive documentation",
          "Analytics dashboards and performance monitoring",
          "Complete test suite with continuous integration",
        ],
      },
    ],
    timelineNote: "Most MVPs launch within 8-12 weeks depending on feature complexity and integration requirements.",
    benefits: [
      { title: "Predictable, transparent delivery", copy: "See progress every Friday with working software demos. No surprises, no black box development." },
      { title: "Enterprise-quality from day one", copy: "Built-in analytics, automated testing, and error monitoring prevent technical debt as you scale." },
      { title: "Faster learning and iteration", copy: "Ship to real users quickly, measure what matters, and iterate based on actual usage data." },
    ],
    faqs: [
      { q: "Can you integrate with our existing design team and systems?", a: "Yes, we seamlessly work with your designers and adapt to your existing design systems and brand guidelines." },
      { q: "Who owns the intellectual property and source code?", a: "You own everything. All code and design assets live in your organization's repositories from day one of development." },
    ],
  },

  {
    slug: "activation-lift",
    title: "Activation Lift - User Onboarding Optimization",
    headline: "Convert more signups into active, paying customers",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Analytics dashboard showing improved user activation metrics",
    summary:
      "Your signup numbers look good, but activation rates are disappointing. We identify and fix the leaks in your user onboarding and core product experience using data-driven experiments that measurably improve activation and long-term retention.",
    facts: [
      { k: "Project Duration", v: "4–8 weeks typical" },
      { k: "Primary Focus", v: "Activation & retention optimization" },
      { k: "Experiment Frequency", v: "New tests launched weekly" },
      { k: "Ideal for", v: "Post-MVP SaaS products" },
    ],
    chips: ["User Onboarding", "Pricing Optimization", "A/B Testing", "Retention Loops"],
    badges: ["Data-Driven Experiments", "Analytics Setup"],
    footerBadge: "Measurable Results",
    technologies: ["Google Analytics 4", "Segment", "Amplitude", "A/B Testing Tools"],
    challenges: [
      { title: "Low activation rates waste marketing spend", copy: "We clarify the path to first value and remove friction that prevents users from experiencing your product's core benefit.", icon: "/assets/img_placeholder/th-1/service-icon-black-1.svg" },
      { title: "Pricing confusion kills conversions", copy: "Test plan names, paywall placement, and upgrade timing to find the sweet spot that maximizes revenue per user.", icon: "/assets/img_placeholder/th-1/service-icon-black-2.svg" },
      { title: "Users sign up but don't stick around", copy: "Build habit-forming product loops and retention mechanisms that keep users engaged beyond the first session.", icon: "/assets/img_placeholder/th-1/service-icon-black-3.svg" },
    ],
    useCases: [
      { title: "Redesign user onboarding experience", copy: "Guide new users to their first 'aha moment' faster with progressive disclosure and contextual guidance." },
      { title: "Optimize pricing and paywall strategy", copy: "Test different pricing presentations, paywall timing, and upgrade prompts to maximize revenue conversion." },
      { title: "Increase feature adoption rates", copy: "Use smart nudges, progress indicators, and empty state design to encourage exploration of key features." },
    ],
    process: [
      { step: 1, title: "Baseline measurement setup", items: ["Current metrics and user cohort analysis", "North star metrics and guardrail definitions", "Analytics implementation and data validation"] },
      { step: 2, title: "Friction point identification", items: ["Conversion funnel analysis with drop-off points", "Qualitative and quantitative user research", "Competitive analysis and best practices review"] },
      { step: 3, title: "Experiment hypothesis development", items: ["Prioritized test backlog creation", "Design mockups for promising concepts", "Success criteria and measurement plan"] },
      { step: 4, title: "A/B test implementation", items: ["Experiment setup and quality assurance", "Staged rollout with careful monitoring", "Statistical analysis and results interpretation"] },
      { step: 5, title: "Winning variant rollouts", items: ["Graduate successful tests to 100% traffic", "Plan follow-up experiments and iterations", "Document learnings for future optimization"] },
      { step: 6, title: "Impact assessment and roadmap", items: ["Measure impact against baseline metrics", "Recommend next optimization opportunities", "Create ongoing experimentation playbook"] },
    ],
    deliverablesGroups: [
      { title: "User Experience Improvements", items: ["Redesigned onboarding flow with progressive disclosure", "Interactive checklists and achievement systems", "Optimized empty states and error handling"] },
      { title: "Interface Optimizations", items: ["Refined user flows with reduced friction", "Mobile-responsive design improvements", "Enhanced error states and recovery options"] },
      { title: "Experiment Documentation", wide: true, items: ["Complete experiment documentation and results", "Impact analysis presentation with recommendations", "Implementation guides and code changes"] },
    ],
    timelineNote: "First measurable improvements typically seen within 2-3 weeks; complete optimization program runs 4-8 weeks.",
    benefits: [
      { title: "Measurably lift activation rates", copy: "Clearer path to value and reduced friction directly increases the percentage of signups who become active users." },
      { title: "Reduce customer support burden", copy: "Better user experience design significantly decreases confusion-driven support tickets and user frustration." },
      { title: "Increase customer lifetime value", copy: "Better activation leads to improved retention, which compounds into significantly higher customer lifetime value." },
    ],
    faqs: [
      { q: "Do we need existing analytics setup before starting?", a: "We can implement Google Analytics 4 or Amplitude and set up proper event tracking as part of the project if needed." },
      { q: "How many experiments will you run during the engagement?", a: "Typically 4-8 experiments, depending on your traffic volume and minimum detectable effect requirements." },
    ],
  },

  {
    slug: "practical-ai",
    title: "Practical AI Implementation - RAG & Automation",
    headline: "Deploy AI that drives real business metrics, not just hype",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "AI-powered search interface showing accurate results with citations",
    summary:
      "Cut through AI hype with targeted implementations that solve real problems. We build RAG search systems, support copilots, and workflow automation with proper safeguards, citations, and measurable impact on your key business metrics.",
    facts: [
      { k: "Implementation Time", v: "6–10 weeks typical" },
      { k: "Specialization Areas", v: "RAG search, copilots, automation" },
      { k: "Safety Standards", v: "PII protection & abuse prevention" },
      { k: "Best for", v: "Companies with existing data and workflows" },
    ],
    chips: ["RAG Systems", "LLM Integration", "Safety Guardrails", "Performance Evaluation"],
    badges: ["Source Citations", "Human Oversight"],
    footerBadge: "Enterprise Safe",
    technologies: ["Retrieval Augmented Generation", "Vector Databases", "LLMs", "Evaluation Frameworks", "Monitoring"],
    challenges: [
      { title: "AI hallucinations undermine trust", copy: "Source citations and evaluation frameworks ensure responses are grounded in your actual data, not AI imagination.", icon: "/assets/img_placeholder/th-1/service-icon-black-4.svg" },
      { title: "No clear connection to business value", copy: "We focus on measurable outcomes: customer deflection, time savings, or user activation rather than cool AI demos.", icon: "/assets/img_placeholder/th-1/service-icon-black-1.svg" },
      { title: "Privacy and safety concerns block adoption", copy: "Built-in PII redaction, abuse filters, and human oversight make AI safe for production environments.", icon: "/assets/img_placeholder/th-1/service-icon-black-2.svg" },
    ],
    useCases: [
      { title: "Intelligent document search with citations", copy: "Help users find accurate information in your knowledge base with source citations and confidence scores." },
      { title: "Customer support response drafting", copy: "Generate contextual support responses with human review workflows and escalation paths for complex issues." },
      { title: "Personalized user onboarding guidance", copy: "Provide tailored setup assistance and feature recommendations based on user goals and usage patterns." },
    ],
    process: [
      { step: 1, title: "Success metrics and use case definition", items: ["Identify measurable business impact target", "Map existing data sources and quality", "Define success criteria and failure modes"] },
      { step: 2, title: "Rapid prototype development", items: ["Build small-scale evaluation dataset", "Set latency and cost budgets", "Create initial user experience proof-of-concept"] },
      { step: 3, title: "Safety and compliance implementation", items: ["PII detection and redaction systems", "Abuse prevention and rate limiting", "Human review and escalation workflows"] },
      { step: 4, title: "Production system development", items: ["Data processing and retrieval pipelines", "Response generation and quality scoring", "User interface design and integration"] },
      { step: 5, title: "Evaluation and quality assurance", items: ["Offline evaluation suite development", "Human feedback collection systems", "Continuous quality monitoring setup"] },
      { step: 6, title: "Controlled production launch", items: ["Limited user group rollout strategy", "Real-time performance monitoring", "Feedback collection and iteration planning"] },
      { step: 7, title: "Impact measurement and optimization", items: ["Baseline comparison and impact analysis", "Scaling strategy and resource planning", "Ongoing optimization recommendations"] },
    ],
    deliverablesGroups: [
      { title: "User Experience", items: ["Task-focused interface design", "Clear failure state handling", "User feedback and rating systems"] },
      { title: "User Interface", items: ["Explainable AI response presentation", "Source citation and confidence display", "Human escalation and override options"] },
      { title: "Technical Handoff", wide: true, items: ["Comprehensive evaluation and testing suite", "Safety guardrails documentation and monitoring", "Performance dashboards and alerting systems"] },
    ],
    timelineNote: "Most AI pilots launch within 6-10 weeks; early proof-of-concept typically ready in 2-3 weeks.",
    benefits: [
      { title: "Measurable business impact", copy: "Every AI implementation ties directly to user satisfaction, cost reduction, or revenue metrics you can track." },
      { title: "Production-safe by design", copy: "Built-in safeguards, evaluation systems, and human oversight reduce AI risks in business-critical applications." },
      { title: "Maintainable and scalable", copy: "Clear data pipelines, monitoring systems, and evaluation frameworks make ongoing AI operations manageable." },
    ],
    faqs: [
      { q: "Which AI model and provider do you recommend?", a: "We select models based on your specific use case requirements, balancing cost, latency, and quality trade-offs for optimal results." },
      { q: "Can you deploy AI on-premises or in private cloud?", a: "Yes, we support both cloud and on-premises deployments with strict data handling protocols for sensitive information." },
    ],
  },

  /* =====================================
   * Additional Specialized Services
   * ===================================== */

  // Validate & Plan
  {
    slug: "product-discovery",
    title: "Product Discovery Workshop - Feature Planning & Risk Assessment",
    headline: "Align your team on features, user flows, and technical constraints",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Product team collaborating on user journey mapping workshop",
    summary:
      "Before writing code, get crystal clear on what you're building and why. Our structured discovery process aligns stakeholders on must-have features, maps detailed user journeys, and identifies technical risks that could derail your development timeline.",
    facts: [{ k: "Workshop Duration", v: "2–3 intensive weeks" }],
    chips: ["Product Discovery", "User Story Mapping", "Risk Assessment"],
    technologies: ["Figma", "Miro", "User Journey Mapping"],
    process: [
      { step: 1, title: "Goal alignment", items: ["Key performance indicators and success metrics", "Jobs-to-be-done framework analysis"] },
      { step: 2, title: "User flow mapping", items: ["Detailed user story creation", "Information architecture planning"] },
      { step: 3, title: "Interactive prototype", items: ["Clickable demonstration of core flows"] },
      { step: 4, title: "Scope definition", items: ["Feature slicing and acceptance criteria"] },
    ],
    deliverablesGroups: [
      { title: "User Experience", items: ["Complete user flows and story maps", "Interactive clickable prototype"] },
      { title: "Project Planning", wide: true, items: ["Detailed project scope and development plan", "Risk assessment with mitigation strategies"] },
    ],
    faqs: [{ q: "What format do you deliver the final recommendations?", a: "Interactive prototype plus comprehensive PDF scope document with recommended development roadmap." }],
  },

  {
    slug: "technical-workshop",
    title: "Technical Architecture Workshop - Stack Validation & Scalability",
    headline: "Validate your technical approach and identify scalability bottlenecks",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Senior engineers reviewing technical architecture diagrams",
    summary:
      "Get senior engineering expertise to pressure-test your technical decisions before they become expensive mistakes. We review your technology stack, integration strategy, and data architecture to ensure your foundation can scale with your business.",
    facts: [{ k: "Workshop Duration", v: "3–5 intensive days" }],
    chips: ["Architecture Review", "Security Assessment", "Operations Planning"],
    technologies: ["Node.js", "PostgreSQL", "Cloud Infrastructure"],
    process: [
      { step: 1, title: "Context gathering", items: ["Use case analysis", "Technical constraint identification"] },
      { step: 2, title: "Architecture review", items: ["Technology stack evaluation", "Data flow analysis"] },
      { step: 3, title: "Risk identification", items: ["Scalability bottlenecks", "Security vulnerabilities"] },
      { step: 4, title: "Recommendations", items: ["Prioritized action plan"] },
    ],
    deliverablesGroups: [
      { title: "Technical Assessment", items: ["Comprehensive findings presentation", "Prioritized improvement action items"] },
    ],
    faqs: [{ q: "Can your team continue with implementation after the workshop?", a: "Absolutely—the technical workshop often leads directly into our MVP Sprint or development services." }],
  },

  // Build & Develop
  {
    slug: "custom-mvp-development",
    title: "Custom MVP Development - Production-Ready Applications",
    headline: "Transform prototypes into scalable, production-ready software",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Developer reviewing code quality metrics and automated test results",
    summary:
      "Move beyond prototypes to software your customers can actually use and pay for. We build durable applications with automated testing, continuous integration, performance monitoring, and all the operational excellence needed for real business use.",
    facts: [{ k: "Development Timeline", v: "8–14 weeks depending on complexity" }],
    chips: ["Full-Stack Development", "Quality Assurance", "Production Deployment"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    process: [
      { step: 1, title: "Development setup", items: ["Repository setup, CI/CD, environment configuration"] },
      { step: 2, title: "Feature development", items: ["Acceptance criteria-driven development approach"] },
      { step: 3, title: "Quality hardening", items: ["End-to-end testing, performance optimization"] },
      { step: 4, title: "Production launch", items: ["Staged deployment, pilot user testing"] },
    ],
    deliverablesGroups: [
      { title: "User Interface", items: ["Responsive user interface", "WCAG AA accessibility compliance"] },
      { title: "Technical Handoff", wide: true, items: ["Complete documentation", "Monitoring dashboards", "Automated test suite"] },
    ],
    faqs: [{ q: "Do we retain full intellectual property ownership?", a: "Yes, 100% of code and design assets are owned by your organization." }],
  },

  {
    slug: "dedicated-team",
    title: "Dedicated Development Team - Embedded Engineering Squad",
    headline: "Get a senior product team embedded with your organization",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Dedicated development team in daily standup meeting",
    summary:
      "Skip the hiring headaches and onboarding delays. Our dedicated teams integrate directly with your processes, tools, and goals—providing strategy, design, and engineering expertise under one roof with predictable quarterly outcomes.",
    facts: [{ k: "Engagement Model", v: "Quarterly commitments with weekly milestones" }],
    chips: ["Product Strategy", "Development Velocity", "Growth Experiments"],
    technologies: ["Your existing technology stack"],
    process: [
      { step: 1, title: "Quarterly planning", items: ["Set measurable quarterly goals and success metrics"] },
      { step: 2, title: "Sprint execution", items: ["Regular sprint cadence with weekly demos"] },
      { step: 3, title: "Performance measurement", items: ["Track KPI improvements and user impact"] },
      { step: 4, title: "Strategy adjustment", items: ["Adapt approach based on results and new opportunities"] },
    ],
    deliverablesGroups: [
      { title: "Strategic Output", items: ["Quarterly product roadmap", "Development velocity and quality reports"] },
    ],
  },

  // Scale & Optimize
  {
    slug: "product-redesign",
    title: "Product Redesign - Scalable Design Systems & Modern UX",
    headline: "Transform legacy interfaces with scalable design systems",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Before and after comparison of modern product redesign",
    summary:
      "Modernize outdated product interfaces that hurt user experience and slow development. We create component-based design systems with contemporary UX patterns that improve usability, accessibility, and development velocity.",
    facts: [{ k: "Redesign Timeline", v: "6–10 weeks for complete transformation" }],
    chips: ["Design Systems", "Accessibility Compliance", "Component Libraries"],
    technologies: ["Figma", "Design Tokens", "Component Documentation"],
    process: [
      { step: 1, title: "Current state audit", items: ["UX heuristic analysis", "UI consistency review"] },
      { step: 2, title: "Design system creation", items: ["Design tokens and reusable components"] },
      { step: 3, title: "Core flow application", items: ["Apply new system to key user journeys"] },
      { step: 4, title: "Development handoff", items: ["Component specifications and implementation guides"] },
    ],
    deliverablesGroups: [
      { title: "Design System", items: ["Design tokens and variables", "Component library and patterns", "Usage guidelines and documentation"] },
      { title: "Implementation Guide", wide: true, items: ["Component specifications for developers", "Complete Figma design system library"] },
    ],
  },

  {
    slug: "team-extension",
    title: "Team Extension - Senior Developers & Designers on Demand",
    headline: "Add senior talent to your team without hiring overhead",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Extended team members collaborating in client's development environment",
    summary:
      "Scale your development capacity instantly with senior designers and engineers who integrate seamlessly with your existing team, tools, and processes—no black box development, just experienced hands working alongside your team.",
    facts: [{ k: "Engagement Flexibility", v: "Month-to-month scaling as needed" }],
    chips: ["Development Velocity", "Quality Assurance", "Seamless Integration"],
    technologies: ["Your existing technology stack and tools"],
    process: [
      { step: 1, title: "Team integration", items: ["Access to repositories, tools, and development processes"] },
      { step: 2, title: "Sprint delivery", items: ["Contribute to feature development with regular demos"] },
      { step: 3, title: "Quality measurement", items: ["Track throughput, code quality, and team satisfaction"] },
      { step: 4, title: "Capacity adjustment", items: ["Scale team size up or down based on needs"] },
    ],
    deliverablesGroups: [{ title: "Development Output", items: ["Pull requests, design specifications, automated tests"] }],
  },

  // Research & Optimization
  {
    slug: "ux-audit",
    title: "UX Audit - Conversion Rate & Usability Analysis",
    headline: "Identify friction points that hurt user conversion and satisfaction",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "UX analyst reviewing user behavior heatmaps and conversion funnels",
    summary:
      "Discover why users aren't converting or engaging as expected. Our comprehensive UX audit combines heuristic evaluation, conversion funnel analysis, and user behavior data to create a prioritized list of improvements that measurably lift user satisfaction and business metrics.",
    facts: [{ k: "Analysis Timeline", v: "1–2 weeks for complete audit" }],
    chips: ["Heuristic Evaluation", "Conversion Funnel Analysis", "Quick Win Identification"],
    technologies: ["Amplitude", "Google Analytics 4", "User Behavior Analysis"],
    process: [
      { step: 1, title: "Baseline establishment", items: ["Current conversion funnels and user cohort analysis"] },
      { step: 2, title: "Usability review", items: ["Heuristic evaluation and interface state analysis"] },
      { step: 3, title: "Improvement prioritization", items: ["Impact-effort matrix and prioritized improvement backlog"] },
      { step: 4, title: "Results presentation", items: ["Findings presentation with expected impact estimates"] },
    ],
    deliverablesGroups: [{ title: "Audit Results", items: ["Comprehensive findings presentation", "Prioritized improvement backlog with impact estimates"] }],
  },

  {
    slug: "website-design",
    title: "Website Design Services - High-Converting Marketing Sites",
    headline: "Create marketing websites that explain value clearly and convert visitors",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Modern website design showcasing clear value proposition and call-to-action",
    summary:
      "Your website is often the first impression potential customers have of your business. We design and build marketing sites that communicate your value proposition clearly, load fast, rank well in search results, and convert visitors into customers.",
    facts: [{ k: "Design & Development", v: "2–6 weeks depending on complexity" }],
    chips: ["SEO Optimization", "Fast Loading", "Accessibility Compliant"],
    technologies: ["Next.js", "Tailwind CSS", "MDX", "Content Management", "Vercel"],
    process: [
      { step: 1, title: "Message development", items: ["Ideal customer profile and value proposition clarity"] },
      { step: 2, title: "Wireframe planning", items: ["Page sections, content hierarchy, and call-to-action placement"] },
      { step: 3, title: "Visual design", items: ["Component-based design system implementation"] },
      { step: 4, title: "Development & launch", items: ["Performance optimization and SEO implementation"] },
    ],
    deliverablesGroups: [
      { title: "User Experience", items: ["Site architecture and wireframes", "Content strategy and messaging framework"] },
      { title: "User Interface", items: ["Visual component library", "Responsive page designs optimized for conversion"] },
    ],
  },

  {
    slug: "web-app-design",
    title: "Web Application Design - Complex Workflow Simplification",
    headline: "Transform complex business workflows into intuitive web experiences",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Clean dashboard interface showing complex data in an organized, accessible way",
    summary:
      "Business applications don't have to be complicated and frustrating. We specialize in designing web applications that make complex workflows feel simple—from admin dashboards to data analysis tools to multi-step business processes.",
    facts: [{ k: "Design Timeline", v: "3–8 weeks based on complexity" }],
    chips: ["Design Tokens", "State Management", "Accessibility Compliant"],
    technologies: ["Figma", "Component Systems", "Responsive Design"],
    process: [
      { step: 1, title: "Workflow analysis", items: ["Jobs-to-be-done analysis and user goal mapping"] },
      { step: 2, title: "Component system", items: ["Reusable component library and interaction states"] },
      { step: 3, title: "Screen design", items: ["Primary user journey interfaces and edge cases"] },
      { step: 4, title: "Developer handoff", items: ["Component specifications and implementation guidelines"] },
    ],
    deliverablesGroups: [{ title: "Design System", items: ["Component library with specifications", "Complete screen designs with developer handoff documentation"] }],
  },

  {
    slug: "mobile-app-design",
    title: "Mobile App Design - Native iOS & Android Experiences",
    headline: "Design intuitive mobile experiences that feel native to each platform",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Mobile app interface designs showing iOS and Android platform-specific patterns",
    summary:
      "Mobile users expect apps that feel natural on their device. We design mobile experiences that follow platform conventions while maintaining your brand identity, ensuring great usability and App Store approval.",
    facts: [{ k: "Design Process", v: "3–6 weeks for complete mobile design" }],
    chips: ["iOS Human Interface Guidelines", "Android Material Design", "Design Tokens"],
    technologies: ["Figma", "iOS Design Patterns", "Android Design System"],
    process: [
      { step: 1, title: "User flow planning", items: ["Navigation patterns and user state management"] },
      { step: 2, title: "Platform patterns", items: ["Native component usage and platform-specific interactions"] },
      { step: 3, title: "Screen design", items: ["Complete user journey interfaces with edge cases"] },
      { step: 4, title: "Developer specifications", items: ["Asset preparation and implementation guidelines"] },
    ],
    deliverablesGroups: [{ title: "Mobile Design System", items: ["Platform-optimized screen designs", "Design tokens and component specifications"] }],
  },

  {
    slug: "web-development",
    title: "Web Development Services - Modern SaaS & Dashboard Applications",
    headline: "Build scalable web applications with modern architecture and best practices",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Developer working on clean, well-structured web application code",
    summary:
      "Transform designs into robust web applications that can scale with your business. We build SaaS platforms, admin dashboards, and customer portals with automated testing, performance monitoring, and security best practices built in from day one.",
    facts: [{ k: "Development Approach", v: "Timeline varies based on application complexity" }],
    chips: ["Next.js Full-Stack", "Node.js Backend", "PostgreSQL Database"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    process: [
      { step: 1, title: "Project setup", items: ["Repository setup, CI/CD pipeline, environment configuration"] },
      { step: 2, title: "Feature development", items: ["User story-driven development with acceptance criteria"] },
      { step: 3, title: "Quality assurance", items: ["Automated testing and performance optimization"] },
      { step: 4, title: "Production deployment", items: ["Staged rollout with monitoring and documentation"] },
    ],
    deliverablesGroups: [{ title: "Technical Deliverables", items: ["Production-ready application", "Comprehensive documentation and monitoring dashboards"] }],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development - End-to-End iOS & Android Development",
    headline: "Build and launch mobile apps from concept to App Store success",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "Mobile app running on both iOS and Android devices",
    summary:
      "Take your mobile app idea from design to deployed reality. We handle the entire development process including App Store optimization, beta testing, user analytics integration, and post-launch support to ensure your app succeeds in competitive mobile markets.",
    facts: [{ k: "Development Timeline", v: "8–14 weeks from start to App Store launch" }],
    chips: ["iOS Native", "Android Native", "Cross-Platform Options"],
    technologies: ["React Native", "Native iOS/Android", "App Store Optimization"],
    process: [
      { step: 1, title: "Development setup", items: ["Project configuration and development environment setup"] },
      { step: 2, title: "Feature implementation", items: ["User interface development and functionality integration"] },
      { step: 3, title: "Quality assurance", items: ["Device testing and end-to-end quality assurance"] },
      { step: 4, title: "App Store launch", items: ["Store submission, analytics integration, and launch support"] },
    ],
    deliverablesGroups: [{ title: "Launch Package", items: ["App Store marketing assets and descriptions", "User analytics and crash reporting integration"] }],
  },

  {
    slug: "no-code-development",
    title: "No-Code Development - Rapid Prototyping & Internal Tools",
    headline: "Build functional applications quickly using no-code and low-code platforms",
    heroImage: "/assets/img_placeholder/th-1/content-image-4.jpg",
    heroAlt: "No-code application builder interface showing drag-and-drop functionality",
    summary:
      "Sometimes you need to move fast and validate ideas before investing in custom development. We build functional applications, internal tools, and process automation using modern no-code platforms—perfect for rapid prototyping and business process optimization.",
    facts: [{ k: "Development Speed", v: "1–4 weeks for most no-code projects" }],
    chips: ["Rapid Prototyping", "Process Automation", "Internal Tools"],
    technologies: ["Notion", "Airtable", "Bubble", "Make/Zapier", "Webflow"],
    process: [
      { step: 1, title: "Requirements analysis", items: ["User jobs-to-be-done and workflow mapping"] },
      { step: 2, title: "Platform development", items: ["Data structure setup and automation configuration"] },
      { step: 3, title: "User experience polish", items: ["Permission setup and user experience testing"] },
      { step: 4, title: "Launch and handoff", items: ["Documentation creation and team training"] },
    ],
    deliverablesGroups: [{ title: "No-Code Solution", items: ["Platform configuration documentation", "User training materials and how-to guides"] }],
    faqs: [{ q: "When should I choose no-code over custom development?", a: "No-code is perfect for rapid prototyping, internal tools, and validating ideas before investing in custom development. For customer-facing products at scale, custom development usually provides better user experience and performance." }],
  },
];

/** Quick lookup map for O(1) access */
const SERVICE_MAP = Object.fromEntries(ALL_SERVICES.map((s) => [s.slug, s]));

/** Return a service object by slug (undefined if not found) */
export function getService(slug) {
  if (!slug) return undefined;
  return SERVICE_MAP[String(slug)];
}

/** Convenience: list all services (already ordered for your site nav) */
export function listServices() {
  return ALL_SERVICES;
}