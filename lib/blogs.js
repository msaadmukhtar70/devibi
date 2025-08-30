// /lib/blogs.js

export const BLOGS = [
  {
    slug: "mvp-go-to-market-strategy",
    title: "Don't Just Ship Features, Ship a Business: A Go-to-Market Playbook for Your MVP",
    category: "Strategy",
    date: "2025-08-28",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-hero-1.png",
      alt: "A founder at a whiteboard sketching out a go-to-market plan.",
    },
    excerpt: "Your MVP is finished. Now what? Most founders get this part wrong. Shipping the code is step one; acquiring your first 10 paying customers is the only thing that matters next. This is the playbook for turning your product into a business.",
    points: [
      {
        title: "Stop Hiding and Start Selling (Before You're 'Ready')",
        body: "The biggest mistake founders make is waiting for the product to be 'perfect.' Your real job is to get feedback from people who pay. We'll show you how to start manual, high-touch outreach on LinkedIn and in niche communities to land your first 5 customers by solving their problem directly, not just selling software.",
      },
      {
        title: "Nail Your 'Pain-Point' Messaging, Not Your Features",
        body: "Early customers don't buy features; they buy solutions to expensive, painful problems. We'll walk through a simple framework for turning your feature list into benefit-driven messaging that resonates. Hint: If you're talking about 'AI integration,' you're doing it wrong. Talk about 'cutting support tickets by 30%.'",
        image: {
            src: "/assets/img_placeholder/th-1/blog-inner-1.png",
            alt: "A diagram showing the shift from feature-based to benefit-driven messaging.",
        },
      },
      {
        title: "Instrument 'Aha!' Moment Analytics from Day One",
        body: "You can't improve what you don't measure. Before you even launch, you need to define your 'Aha!' moment—the key action a user takes that signals they 'get' your product's value. We'll cover the essential events to track with tools like PostHog or Mixpanel to measure your activation rate.",
      },
      {
        title: "Create a High-Touch, Manual Onboarding Process",
        body: "Don't build a fancy automated onboarding sequence for your first 100 users. Do it manually. A personal 30-minute call with every new signup will give you more insight than a thousand analytics dashboards. This is Paul Graham's 'do things that don't scale' in action.",
      },
    ],
    takeaways: [
      "Your go-to-market strategy starts before the MVP is finished.",
      "Sell the solution to a pain point, not the features of your software.",
      "Get your first 10 customers manually. Don't hide behind marketing automation.",
      "Measure your activation rate from the very first user.",
      "Your initial onboarding should be a conversation, not a product tour.",
    ],
    closing: "An MVP is not a product; it's a tool to learn what product you should have built. Your go-to-market is the process of using that tool effectively.",
    thanks: "Thanks for reading.",
    stats: { likes: 312, comments: 18 },
    tags: ["MVP", "Go-to-Market", "SaaS", "Strategy", "Sales"],
  },
  {
    slug: "saas-pricing-playbook",
    title: "The Practical SaaS Pricing Playbook for Founders",
    category: "Growth",
    date: "2025-08-15",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-hero-2.png",
      alt: "A pricing table with different tiers and features.",
    },
    excerpt: "Pricing is the most-feared and least-understood part of building a SaaS. Founders either copy competitors or anchor too low, leaving massive revenue on the table. This is a step-by-step playbook to get your V1 pricing right.",
    points: [
      {
        title: "Step 1: Identify Your Value Metric",
        body: "Don't price based on features. Price based on the value your customer receives. Your value metric is the 'per something' you charge for (e.g., per user, per 1,000 API calls, per project). A good value metric scales with your customer's success. We'll show you how to find yours.",
      },
      {
        title: "Step 2: Map Your Personas to Tiers",
        body: "Your pricing tiers shouldn't be 'Good, Better, Best.' They should map to your customer personas. A 'Startup' plan, a 'Business' plan, and an 'Enterprise' plan each solve the problems of a different type of customer. This makes the choice obvious for them.",
      },
      {
        title: "Step 3: Use the '10x Rule' for Your First Price Point",
        body: "If your product can't deliver at least 10x the value of its cost, it's a 'nice-to-have,' not a 'must-have.' We'll walk through a simple exercise to estimate the value you create (time saved, revenue gained) and set a price that's a no-brainer for your customers.",
        image: {
            src: "/assets/img_placeholder/th-1/blog-inner-2.png",
            alt: "A simple chart illustrating the 10x value rule for SaaS pricing.",
        },
      },
      {
        title: "Step 4: 'Grandfather' Your First 100 Customers",
        body: "You will get your V1 pricing wrong. That's okay. The most important thing is to get started. Offer a lifetime discount to your first 50-100 customers in exchange for feedback. This 'grandfathering' builds loyalty and gives you the freedom to raise prices later without alienating your earliest supporters.",
      },
    ],
    takeaways: [
      "Price based on value delivered, not features built.",
      "Your pricing tiers should align with your customer personas.",
      "Ensure your product delivers at least 10x its cost in value.",
      "Don't be afraid to change your pricing, but always protect your early adopters.",
      "A simple, two-tiered pricing model is often enough to start.",
    ],
    closing: "Pricing isn't a one-time decision; it's a process of continuous discovery. Get it 80% right, get it live, and start learning.",
    thanks: "Thanks for reading.",
    stats: { likes: 451, comments: 24 },
    tags: ["Pricing", "SaaS", "Growth", "Strategy"],
  },
  {
    slug: "practical-ai-wins-for-saas",
    title: "Beyond the Hype: 5 Practical AI Wins for Your SaaS",
    category: "AI",
    date: "2025-08-01",
    hero: {
      src: "/assets/img_placeholder/th-1/blog-hero-3.png",
      alt: "An AI assistant helping a user inside a B2B SaaS application.",
    },
    excerpt: "You don't need a team of data scientists to add real value with AI. Forget the buzzwords. Here are five practical, high-ROI AI features you can build into your B2B SaaS today to improve activation, reduce support load, and increase retention.",
    points: [
      {
        title: "1. The Onboarding Copilot",
        body: "Instead of a rigid product tour, use AI to create a conversational onboarding assistant. It can answer user questions in context, guide them through setup, and help them reach their 'Aha!' moment faster. This is a perfect use case for a RAG model trained on your help docs.",
      },
      {
        title: "2. The Support Ticket Deflector",
        body: "Embed an AI-powered chatbot that can answer common questions with citations from your knowledge base. This doesn't just reduce your support team's workload; it gives your users instant answers, improving their experience and building trust.",
      },
      {
        title: "3. The 'Smart Draft' Generator",
        body: "Identify a repetitive writing task your users do—like writing a project brief, a marketing email, or a performance review. Build a simple 'Smart Draft' feature that uses AI to generate a high-quality first draft. It saves your users hours and makes your product incredibly sticky.",
        image: {
            src: "/assets/img_placeholder/th-1/blog-inner-3.png",
            alt: "A UI showing an AI-generated draft of a marketing email.",
        },
      },
      {
        title: "4. The 'Ask My Data' Search",
        body: "Allow users to ask natural language questions about their own data within your app (e.g., 'Show me all projects that are over budget in Q3'). This turns a complex reporting interface into a simple search bar and delivers immense value.",
      },
      {
        title: "5. The Automated Content Tagger",
        body: "If your app deals with user-generated content (like support tickets, project notes, or feedback), use a simple classification model to automatically tag and categorize it. This unlocks powerful analytics and helps your users stay organized with zero extra effort.",
      },
    ],
    takeaways: [
      "Focus on AI features that save users time or improve their decision-making.",
      "Start with your own documentation; it's the perfect dataset for a practical AI pilot.",
      "Prioritize trust and reliability with citations and guardrails.",
      "A simple, well-executed AI feature is better than a complex, unreliable one.",
      "The best AI features feel like magic, but solve a boring, practical problem.",
    ],
    closing: "Don't chase the AI hype. Find a real, high-friction user problem and solve it with a practical, reliable AI feature. That's how you win.",
    thanks: "Thanks for reading.",
    stats: { likes: 528, comments: 32 },
    tags: ["AI", "SaaS", "Product", "RAG"],
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
