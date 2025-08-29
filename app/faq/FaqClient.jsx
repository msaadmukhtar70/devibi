'use client';
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Image from "next/image";
import Link from "next/link";

const FAQ_DATA = [
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


export default function FaqClient() {
    const [activeIndex, handleAccordion] = useAccordion();
    const [activeTab, handleTab] = useTabs();

    return (
        <>
            {/*...::: FAQ Section Start :::...*/}
            <section className="faq-section">
                {/* Section Spacer */}
                <div className="pb-20 xl:pb-[130px]">
                    {/* Section Container */}
                    <div className="global-container">
                        {/* Section Content Block */}
                        <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                            <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
                                <h2>Clear answers to founder questions.</h2>
                            </div>
                        </div>
                        {/* Section Content Block */}
                        {/* Faq Wrapper */}
                        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-[minmax(0,_auto)_1fr] lg:grid-cols-[minmax(354px,_auto)_1fr] lg:gap-x-[86px]">
                            <div className="flex flex-col gap-y-6">
                                {FAQ_DATA.map((tab, index) => (
                                    <button
                                        key={tab.category}
                                        className={`tab-button faq-button ${
                                            activeTab === index ? "active" : ""
                                        }`}
                                        onClick={() => handleTab(index)}
                                    >
                                        {tab.category}
                                    </button>
                                ))}
                            </div>
                            <div>
                                {FAQ_DATA.map((tabData, tabIndex) => (
                                    activeTab === tabIndex && (
                                        <ul
                                            key={tabData.category}
                                            className="accordion tab-content flex flex-col gap-y-6"
                                        >
                                            {tabData.questions.map((item, itemIndex) => (
                                                <li
                                                    key={item.q}
                                                    className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                                                        activeIndex === itemIndex ? "active" : ""
                                                    }`}
                                                    data-jos_delay="0.1"
                                                    onClick={() => handleAccordion(itemIndex)}
                                                >
                                                    <div className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]">
                                                        <h5>{item.q}</h5>
                                                        <div className="accordion-icon">
                                                            <Image
                                                                src="/assets/img_placeholder/plus.svg"
                                                                width={24}
                                                                height={24}
                                                                alt="plus"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="accordion-content text-[#2C2C2C]">
                                                        <p>{item.a}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                ))}
                            </div>
                        </div>
                        {/* Faq Wrapper */}
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>
            {/*...::: FAQ Section End :::...*/}
            {/*...::: About Contact Section Start :::...*/}
            <section id="about-conact">
                {/* Section Spacer */}
                <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
                    {/* Section Container */}
                    <div className="global-container">
                        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
                            {/* Content Left Block */}
                            <div
                                className="jos order-2 overflow-hidden rounded-[20px] md:order-1"
                                data-jos_animation="fade-left"
                            >
                                <Image
                                    src="/assets/img_placeholder/th-1/about-contact-img.jpg"
                                    alt="A member of the Devibi team ready to answer questions."
                                    width={526}
                                    height={550}
                                    className="h-auto w-full"
                                />
                            </div>
                            {/* Content Left Block */}
                            {/* Content Right Block */}
                            <div
                                className="jos order-1 md:order-2"
                                data-jos_animation="fade-down"
                            >
                                {/* Section Content Block */}
                                <div className="mb-8 max-w-sm md:max-w-max lg:mb-16 xl:mb-6">
                                    <h2 className="text-white">
                                        Have a Different Question?
                                    </h2>
                                </div>
                                {/* Section Content Block */}
                                <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                                    <p className="mb-7 last:mb-0">
                                        If you don't see your question here, book a free call. We’re happy to talk through your specific goals, constraints, and timeline. No obligation, no sales pitch.
                                    </p>
                                </div>
                                <ul className="mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
                                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                                        Website:
                                        <Link
                                            rel="noopener noreferrer"
                                            href="https://devibi.com"
                                            className="text-white hover:text-colorOrangyRed"
                                        >
                                            www.devibi.com
                                        </Link>
                                    </li>
                                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                                        Email:
                                        <Link
                                            href="mailto:hello@devibi.com"
                                            className="text-white hover:text-colorOrangyRed"
                                        >
                                            hello@devibi.com
                                        </Link>
                                    </li>
                                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                                        Phone:
                                        <Link
                                            href="tel:+1234567890"
                                            className="text-white hover:text-colorOrangyRed"
                                        >
                                            (123) 456-7890
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Content Right Block */}
                        </div>
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>
            {/*...::: About Contact Section End :::...*/}
        </>
    );
}