export const FAQ_DATA = [
  {
    category: "Process & Pricing",
    questions: [
      {
        q: "What is a Launch Blueprint and why do we start there?",
        a: "The Launch Blueprint is a 7-day, fixed-price discovery engagement. We start here to de-risk your investment. You get a clickable prototype, a defined scope with acceptance criteria, and a firm price band for your MVP. It gives you a clear 'go/no-go' decision point before committing to a full build.",
      },
      {
        q: "How does your pricing work?",
        a: "We use fixed-price billing for defined projects like the Launch Blueprint and MVP Sprints, so you have cost certainty. For ongoing optimization and feature development, we offer a dedicated team model on a monthly retainer. We'll recommend the best fit for your stage.",
      },
      {
        q: "How quickly can you start a new project?",
        a: "Typically, we can kick off a Launch Blueprint within 1-2 weeks of signing a proposal. This allows us to align our senior team and ensure we hit the ground running with maximum focus from day one.",
      },
    ],
  },
  {
    category: "Deliverables & IP",
    questions: [
      {
        q: "Who owns the intellectual property and code?",
        a: "You do. 100%. We ensure a clean handover of all source code, design files, documentation, and any other project assets upon completion and final payment. You have full ownership with no licensing strings attached.",
      },
      {
        q: "What do we get at the end of an MVP Sprint?",
        a: "You get a production-ready, deployed application that's ready for your first users. This includes the complete source code, a scalable infrastructure setup, and analytics instrumentation so you can start tracking key metrics like user activation immediately.",
      },
      {
        q: "What happens after you hand the project over?",
        a: "Our goal is to make ourselves redundant. We provide clear documentation and can help onboard your first in-house engineering hire. Many clients also choose to retain us for an ongoing Activation Lift or a dedicated team engagement to continue iterating and growing the product.",
      },
    ],
  },
  {
    category: "Practical AI",
    questions: [
      {
        q: "Is your Practical AI Pilot just an experiment?",
        a: "No. We focus on production-ready AI features that solve real user problems. Our pilot is a 6-10 week engagement to build and ship a tangible feature, like an onboarding copilot or a support-ticket-deflector using RAG with citations, that delivers measurable value.",
      },
      {
        q: "What are 'guardrails' and 'evals' in the context of AI?",
        a: "Guardrails are the safety systems we build to prevent the AI from producing inaccurate, harmful, or off-brand content. Evals (Evaluations) are the rigorous tests we run to measure the AI's performance on key metrics like accuracy, helpfulness, and factual consistency before it ever interacts with a user.",
      },
      {
        q: "How do we measure the ROI of an AI feature?",
        a: "We work with you to define clear success metrics before we start. For a support copilot, the KPI might be 'percentage of tickets deflected.' For an onboarding assistant, it might be 'increased user activation rate.' We instrument the analytics to track these outcomes directly.",
      },
    ],
  },
  {
    category: "Working With Us",
    questions: [
      {
        q: "Who will be working on our project?",
        a: "Only senior talent. We don't have junior staff or layers of project managers. You'll work directly with the senior product strategists, designers, and engineers who are building your product. This ensures clear communication and high-quality execution.",
      },
      {
        q: "What does your communication cadence look like?",
        a: "Radical transparency. You'll have a shared Slack channel for daily updates, full access to our project management board (e.g., Jira or Linear), and a mandatory demo of working software every single week. No surprises.",
      },
      {
        q: "How do you handle timezones?",
        a: "We are a remote-first team primarily serving the US, UK, and AU. We ensure a minimum of 4 hours of overlap with your primary timezone for collaborative sessions and are available during your working hours for asynchronous communication in Slack.",
      },
    ],
  },
];

// Helper function to flatten FAQ data for JSON-LD (if your faqLD function expects a flat array)
export const FAQS = FAQ_DATA.flatMap(category => 
  category.questions.map(item => ({
    question: item.q,
    answer: item.a,
    category: category.category
  }))
);