// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// SEO Optimized Metadata
export const metadata = {
  title: 'B2B SaaS Development & Activation Services | Devibi',
  description: 'A service for every stage of your journey. We offer a fixed-price Launch Blueprint, MVP Sprints, Activation Lifts, and Practical AI Pilots to help you succeed.',
  alternates: { canonical: '/services' },
};

import Footer_01 from "@/components/footer/Footer";
import Header_01 from "@/components/header/Header_01";
import ServicesAccordion from "@/components/ServicesAccordion";
import Image from "next/image";
import Link from "next/link";

function Services() {

  // Typography tokens (keep styles consistent site-wide)
  const H1 =
    "font-raleway text-[40px] leading-[1.06] sm:text-[48px] lg:text-[64px] xl:text-[80px]";
  const H2 =
    "font-raleway text-[32px] leading-[1.06] sm:text-[40px] lg:text-[56px] xl:text-[64px]";
  const H3 =
    "font-raleway text-[22px] leading-[1.2] sm:text-[24px] lg:text-[26px]";
  const LEAD = "text-lg leading-[1.55] lg:text-[21px]";
  const BODY = "text-[15px] leading-[1.65] sm:text-base";
  const MICRO = "text-sm uppercase tracking-[0.12em] text-black/60";

  // Buttons (normalized across pages)
  const BTN_PRIMARY =
    "button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";
  const BTN_GHOST =
    "button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb :::...*/}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                {/* Keep a single H1 per page for SEO; hero uses H2 */}
                <h1 className="breadcrumb-title">Our Services</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Hero (concise value) :::...*/}
        <section id="services-hero">
          <div className="relative pb-16 pt-14 lg:pb-20">
            <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="global-container">
              <div className="jos text-center" data-jos_animation="fade">
                <div className="mx-auto max-w-4xl">
                  <h2 className={H2}>A Service for Every Stage of Your B2B SaaS Journey</h2>
                  <p className={`${LEAD} mx-auto mt-4 max-w-2xl text-black/75`}>
                    Whether you're validating an idea, building an MVP, or scaling your growth, we have a service to help you succeed. We bring strategy, design, and engineering under one roof so you can move faster with less risk.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <Link href="/contact" className={BTN_PRIMARY}>
                      Book a Free Call
                    </Link>
                    <Link href="/portfolio" className={BTN_GHOST}>
                      See Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Funfact Section (black band) :::...*/}
        <section id="funfact-section">
          <div className="mx-auto mt-20 max-w-[1500px] px-5">
            <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
              {/* Media */}
              <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                <Image
                  src="/assets/img_placeholder/th-1/funfact-image.jpg"
                  alt="A B2B SaaS dashboard showing a rising user activation rate"
                  width={721}
                  height={784}
                  className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
                  priority
                />
                {/* Simple play CTA */}
                <Link
                  href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
                  aria-label="Play our process overview video"
                >
                  <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorOrangyRed hover:text-white">
                    Play
                    <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30" />
                  </div>
                </Link>
              </div>

              {/* Copy */}
              <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                <div className="mb-8 lg:mb-16 xl:mb-6">
                  <h2 className={`${H2} text-white`}>
                    Radical Transparency, Delivered Weekly
                  </h2>
                </div>
                <div className="text-left text-white">
                  <p className={LEAD}>
                    No more black box development. We work in tight, one-week sprints with a demo of working software every Friday. Every feature has clear acceptance criteria, and you have full access to our project boards. We track the metrics that matter and report on them weekly.
                  </p>
                </div>
                <div className="my-14 h-[1px] w-full bg-colorCodGray" />
                <ul className="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20">
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                    >
                      7
                    </h3>
                    <span className={`${LEAD} block text-white`}>
                      Days to a clickable prototype
                    </span>
                  </li>
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                    >
                      100%
                    </h3>
                    <span className={`${LEAD} block text-white`}>
                      Weekly demo success rate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Core services (packages) :::...*/}
        <section id="section-service">
          <div className="pb-20 pt-40 xl:pb-[150px]">
            <div className="global-container">
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-md lg:max-w-xl xl:max-w-[950px]">
                  <h2 className={H2}>Our Core Services</h2>
                </div>
                <p className={`${LEAD} mx-auto mt-4 max-w-2xl text-black/80`}>
                  Four packaged ways to work with us, each with clear deliverables, timelines, and success metrics designed for B2B SaaS founders.
                </p>
              </div>

              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-1.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-1.svg",
                    title: "Launch Blueprint",
                    desc: "Validate your idea in 7 days. Get a clickable prototype, clear risks, and a fixed-price MVP scope to de-risk your investment.",
                    bullets: [
                      "Feature list & acceptance criteria",
                      "Clickable wireflows",
                      "Risks, trade-offs, and price band",
                    ],
                    href: "/services/launch-blueprint",
                  },
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-2.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-2.svg",
                    title: "MVP Sprint",
                    desc: "Go from approved scope to a market-ready MVP in 8–12 weeks. We build, you get weekly demos, and we ship to your first users.",
                    bullets: [
                      "Vertical slices that ship",
                      "Instrumentation from day one",
                      "Security & reliability guardrails",
                    ],
                    href: "/services/mvp-sprint",
                  },
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-3.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-3.svg",
                    title: "Activation Lift",
                    desc: "Turn new signups into active users. We run data-driven experiments on your onboarding, pricing, and UX to reduce churn.",
                    bullets: [
                      "A/Bs and holdouts",
                      "Activation & retention loops",
                      "Pricing & paywall experiments",
                    ],
                    href: "/services/activation-lift",
                  },
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-4.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-4.svg",
                    title: "Practical AI Pilot",
                    desc: "Leverage AI to create a stickier product. We build and deploy solutions like RAG-powered search and support copilots in a 6-10 week pilot.",
                    bullets: [
                      "RAG with citations",
                      "Guided onboarding copilots",
                      "Support reply drafts w/ guardrails",
                    ],
                    href: "/services/practical-ai",
                  },
                ].map((card) => (
                  <li
                    key={card.title}
                    className="group relative overflow-hidden bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black"
                  >
                    <div className="relative mb-9 h-[70px] w-[70px]">
                      <Image
                        src={card.iconB}
                        alt=""
                        width={70}
                        height={70}
                        className="h-full w-full"
                      />
                      <Image
                        src={card.iconO}
                        alt=""
                        width={70}
                        height={70}
                        className="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-100"
                      />
                    </div>

                    <h3
                      className={`${H3} mb-3 -tracking-[0.5px] transition-colors group-hover:text-white`}
                    >
                      <Link
                        href={card.href}
                        className="hover:text-colorOrangyRed"
                        aria-label={card.title}
                      >
                        {card.title}
                      </Link>
                    </h3>

                    <p className={`${BODY} mb-6 transition-colors group-hover:text-white`}>
                      {card.desc}
                    </p>

                    <ul className="mb-10 space-y-2 text-sm text-black/70 transition-colors duration-300 group-hover:text-white/80">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black transition-colors group-hover:bg-white" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={card.href}
                      className="relative inline-block h-[30px] w-[30px]"
                      aria-label={`Learn more about ${card.title}`}
                    >
                      <Image
                        src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*...::: Stage lanes :::...*/}
        <section id="pick-your-lane">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="jos mb-8 text-center lg:mb-12" data-jos_animation="fade">
                <h2 className={H2}>Pick Your Lane</h2>
                <p className={`${BODY} mt-3 text-black/60`}>
                  Validate, build, or scale. We meet you where you are with a clear set of outcomes for each stage.
                </p>
              </div>

              {/* ===== VALIDATE ===== */}
              <div className="jos" data-jos_animation="fade-up">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                    01
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
                    Validate
                  </span>
                  <h3 className={`${H3} font-dmSans`}>De-risk your idea and attract early investors</h3>
                  <div className="ml-3 h-px flex-1 bg-black/10" />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      t: "Launch Blueprint",
                      d: "Test product ideas fast with a clickable prototype and a fixed-price MVP scope.",
                      href: "/services/launch-blueprint",
                      n: "01",
                    },
                    {
                      t: "Product Discovery",
                      d: "Map key features, user flows, and first-pass architecture to reduce risk.",
                      href: "/services/product-discovery",
                      n: "02",
                    },
                    {
                      t: "Technical Workshop",
                      d: "Validate your stack, constraints, and scalability path with senior engineers.",
                      href: "/services/technical-workshop",
                      n: "03",
                    },
                  ].map((c, i) => (
                    <li
                      key={c.t}
                      className="group relative overflow-hidden rounded-[20px] bg-colorLinenRuffle p-6 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                      data-jos_delay={`${0.1 * (i + 1)}`}
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold ring-1 ring-black/10">
                        {c.n}
                      </span>
                      <h4 className="font-dmSans text-[22px] leading-[1.2]">{c.t}</h4>
                      <p className={`${BODY} mt-2 text-black/75`}>{c.d}</p>
                      <Link
                        href={c.href}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/10 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                        aria-label={`Explore ${c.t}`}
                      >
                        Explore
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path
                            d="M5 12h12m0 0-4-4m4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ===== BUILD ===== */}
              <div className="jos mt-14" data-jos_animation="fade-up">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                    02
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
                    Build
                  </span>
                  <h3 className={`${H3} font-dmSans`}>Build your product and get to market, faster</h3>
                  <div className="ml-3 h-px flex-1 bg-black/10" />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      t: "MVP Sprint",
                      d: "Design & build in 8–12 weeks. Weekly demos and acceptance criteria.",
                      href: "/services/mvp-sprint",
                      n: "01",
                    },
                    {
                      t: "Custom MVP Development",
                      d: "Turn your prototype into a production-ready product with scalable foundations.",
                      href: "/services/custom-mvp-development",
                      n: "02",
                    },
                    {
                      t: "Dedicated Team",
                      d: "Access a senior squad—strategy, design, and engineering under one roof.",
                      href: "/services/dedicated-team",
                      n: "03",
                    },
                  ].map((c, i) => (
                    <li
                      key={c.t}
                      className="group relative overflow-hidden rounded-[20px] bg-colorLinenRuffle p-6 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                      data-jos_delay={`${0.1 * (i + 1)}`}
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold ring-1 ring-black/10">
                        {c.n}
                      </span>
                      <h4 className="font-dmSans text-[22px] leading-[1.2]">{c.t}</h4>
                      <p className={`${BODY} mt-2 text-black/75`}>{c.d}</p>
                      <Link
                        href={c.href}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/10 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                        aria-label={`Explore ${c.t}`}
                      >
                        Explore
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path
                            d="M5 12h12m0 0-4-4m4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ===== SCALE ===== */}
              <div className="jos mt-14" data-jos_animation="fade-up">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                    03
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
                    Scale
                  </span>
                  <h3 className={`${H3} font-dmSans`}>Scale your product and accelerate growth</h3>
                  <div className="ml-3 h-px flex-1 bg-black/10" />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      t: "Activation Lift",
                      d: "Identify usability bottlenecks and improve conversions with data-driven experiments.",
                      href: "/services/activation-lift",
                      n: "01",
                    },
                    {
                      t: "Product Redesign",
                      d: "Upgrade legacy UI with a scalable design system that improves user experience.",
                      href: "/services/product-redesign",
                      n: "02",
                    },
                    {
                      t: "Team Extension",
                      d: "Add senior designers and developers on demand without slowing down your roadmap.",
                      href: "/services/team-extension",
                      n: "03",
                    },
                  ].map((c, i) => (
                    <li
                      key={c.t}
                      className="group relative overflow-hidden rounded-[20px] bg-colorLinenRuffle p-6 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                      data-jos_delay={`${0.1 * (i + 1)}`}
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold ring-1 ring-black/10">
                        {c.n}
                      </span>
                      <h4 className="font-dmSans text-[22px] leading-[1.2]">{c.t}</h4>
                      <p className={`${BODY} mt-2 text-black/75`}>{c.d}</p>
                      <Link
                        href={c.href}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/10 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                        aria-label={`Explore ${c.t}`}
                      >
                        Explore
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path
                            d="M5 12h12m0 0-4-4m4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Full-cycle matrix :::...*/}
        <section id="services-matrix">
          <div className="relative pb-20 xl:pb-[150px]">
            <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="global-container">
              <div className="jos mb-8 text-center lg:mb-12" data-jos_animation="fade">
                <div className="mx-auto md:max-w-4xl">
                  <h2 className={H2}>
                    A Full-Cycle Approach to Product Success
                  </h2>
                  <p className={`${BODY} mt-3 text-black/60`}>
                    We cover the entire product lifecycle, from initial research to ongoing development and growth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {[
                  {
                    title: "Research",
                    n: "01",
                    items: [
                      {
                        t: "UX Audit",
                        d: "Identify friction, improve engagement, and lift conversions.",
                        href: "/services/ux-audit",
                      },
                      {
                        t: "Product Discovery",
                        d: "Align on features, flows, and architecture with less risk.",
                        href: "/services/product-discovery",
                      },
                      {
                        t: "Technical Workshop",
                        d: "Validate stack choices and scalability paths with seniors.",
                        href: "/services/technical-workshop",
                      },
                    ],
                  },
                  {
                    title: "Design",
                    n: "02",
                    items: [
                      {
                        t: "Website Design Services",
                        d: "Layouts and UX/UI that convert and scale with you.",
                        href: "/services/website-design",
                      },
                      {
                        t: "Web App Design",
                        d: "Responsive, user-focused platforms with strong UX logic.",
                        href: "/services/web-app-design",
                      },
                      {
                        t: "Mobile App Design",
                        d: "Intuitive, performance-optimized iOS & Android apps.",
                        href: "/services/mobile-app-design",
                      },
                    ],
                  },
                  {
                    title: "Development",
                    n: "03",
                    items: [
                      {
                        t: "Web Development",
                        d: "Custom platforms, dashboards, and scalable SaaS.",
                        href: "/services/web-development",
                      },
                      {
                        t: "Mobile App Development",
                        d: "End-to-end iOS and Android builds.",
                        href: "/services/mobile-app-development",
                      },
                      {
                        t: "No-Code Development",
                        d: "Fast delivery on low/no-code platforms.",
                        href: "/services/no-code-development",
                      },
                    ],
                  },
                ].map((col, i) => (
                  <div
                    key={col.title}
                    className="jos rounded-[20px] bg-white p-6 ring-1 ring-black/10"
                    data-jos_animation="fade-up"
                    data-jos_delay={`${0.1 * (i + 1)}`}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                        {col.n}
                      </span>
                      <h3 className="font-dmSans text-[22px] leading-[1.2]">
                        {col.title}
                      </h3>
                      <div className="ml-3 h-px flex-1 bg-black/10" />
                    </div>

                    <ul className="divide-y divide-black/5">
                      {col.items.map((it) => (
                        <li key={it.t}>
                          <Link
                            href={it.href}
                            className="group flex items-start justify-between gap-4 py-4"
                            aria-label={`${it.t} – ${col.title}`}
                          >
                            <div>
                              <div className="font-semibold leading-tight">
                                {it.t}
                              </div>
                              <p className={`${BODY} mt-1 text-black/70`}>
                                {it.d}
                              </p>
                            </div>
                            <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full ring-1 ring-black/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                <path
                                  d="M5 12h12m0 0-4-4m4 4-4 4"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*...::: Engagement models :::...*/}
        <section id="engagement-models">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="jos mb-8 text-center lg:mb-12" data-jos_animation="fade">
                <div className="mx-auto max-w-xl">
                  <h2 className={H2}>Ways to Work With Us</h2>
                  <p className={`${BODY} mt-3 text-black/70`}>
                    We offer flexible engagement models to fit your stage and speed.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div
                  className="jos rounded-[16px] bg-white p-6 ring-1 ring-black/10"
                  data-jos_animation="fade-right"
                >
                  <div className="font-raleway text-2xl font-bold">
                    Fixed-Scope Projects
                  </div>
                  <p className={`${BODY} mt-1 text-black/70`}>
                    Best for our Launch Blueprint, MVP Sprints, and Activation Lifts.
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px]">
                    {[
                      "Crisp deliverables, timelines, and a fixed price.",
                      "Weekly demos & clear acceptance criteria.",
                      "Transparent communication on risks and trade-offs.",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-black" />
                        <span className="text-black/75">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="jos rounded-[16px] bg-white p-6 ring-1 ring-black/10"
                  data-jos_animation="fade-left"
                >
                  <div className="font-raleway text-2xl font-bold">
                    Dedicated Team
                  </div>
                  <p className={`${BODY} mt-1 text-black/70`}>
                    Best for continuous product development and growth experiments.
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px]">
                    {[
                      "A senior product squad embedded with your team.",
                      "A rolling roadmap and experimentation pipeline.",
                      "Shared docs, rituals, and velocity metrics.",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-black" />
                        <span className="text-black/75">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="jos mt-8 flex justify-center" data-jos_animation="fade">
                <Link href="/contact" className={BTN_PRIMARY}>
                  Book a Free Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* This section appears to be a duplicate from the original code, but I've kept it as per your instructions. */}
        {/*...::: What we measure :::...*/}
        <section id="what-we-measure">
          <div className="relative pb-20 xl:pb-[150px]">
            <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="global-container">
              <div
                className="jos mb-8 text-center lg:mb-10"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <div className="mx-auto md:max-w-4xl">
                  <h2 className={H2}>What We Measure</h2>
                  <p className={`${BODY} mt-3 text-black/60`}>
                    We align sprints to outcomes you can explain to customers
                    and investors. If it doesn’t change a KPI, it’s a
                    distraction.
                  </p>
                </div>
              </div>

              {/* KPI chips */}
              <div
                className="jos mb-8 flex flex-wrap justify-center gap-3"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                {[
                  "Activation rate",
                  "Time to first value",
                  "Week-4 retention",
                  "Tickets resolved",
                  "Net revenue",
                  "Cycle time",
                ].map((k) => (
                  <span
                    key={k}
                    className={`${MICRO} button rounded-[50px] border-2 border-black bg-transparent py-3 text-black transition-all duration-300 hover:border-colorOrangyRed hover:text-white after:bg-colorOrangyRed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed`}
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*...::: FAQ :::...*/}
        <section className="faq-section">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                <div className="jos flex flex-col" data-jos_animation="fade-right">
                  <div className="mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2 className={H2}>Questions Founders Ask</h2>
                    </div>
                  </div>
                  <div className={LEAD}>
                    <p className="mb-7 last:mb-0">
                      We keep our process simple and transparent. Share your goals, and we'll reply with a clear plan. If you have more questions, we're happy to answer them on a call.
                    </p>
                    <Link href="/faq" className={`${BTN_PRIMARY} mt-5`}>
                      Read All FAQs
                    </Link>
                  </div>
                </div>

                <div
                  className="jos md:ml-10 lg:ml-20 xl:ml-32"
                  data-jos_animation="fade-left"
                >
                  <ServicesAccordion />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Testimonials :::...*/}
        <section className="testimonial-section">
          <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            <div className="global-container">
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-[680px]">
                  <h2 className={`${H2} text-white`}>
                    What Our Clients Say
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote:
                      "Devibi helped us validate our core loop in weeks. Clean handoffs, honest trade-offs, and shipping that sticks.",
                    who: "Max Weber",
                    role: "Founder, Acme Inc.",
                    img: "/assets/img_placeholder/th-1/testimonial-img-1.jpg",
                    side: "left",
                    d: "0.1",
                  },
                  {
                    quote:
                      "Weekly demos kept us aligned. We hit MVP in 9 weeks and had analytics ready on day one.",
                    who: "Douglas Smith",
                    role: "CEO, Stellar SaaS",
                    img: "/assets/img_placeholder/th-1/testimonial-img-2.jpg",
                    side: "left",
                    d: "0.2",
                  },
                  {
                    quote:
                      "The team balanced speed with quality. We finally have a foundation that scales.",
                    who: "Abraham Maslo",
                    role: "CTO, Fintech Innovations",
                    img: "/assets/img_placeholder/th-1/testimonial-img-3.jpg",
                    side: "left",
                    d: "0.3",
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                    data-jos_animation={t.side === "left" ? "fade-left" : "fade-right"}
                    data-jos_delay={t.d}
                  >
                    <div className="block">
                      <Image
                        src="/assets/img_placeholder/th-1/rating.svg"
                        alt="5-star rating"
                        width={146}
                        height={25}
                        className="h-auto w-[146px]"
                      />
                    </div>
                    <p className={BODY}>{t.quote}</p>
                    <div className="flex items-center gap-x-4">
                      <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                        <Image
                          src={t.img}
                          alt={`${t.who} avatar`}
                          width={60}
                          height={60}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <span className="block text-lg font-semibold leading-[1.6]">
                          {t.who}
                        </span>
                        <span className="block text-sm font-light leading-[1.4]">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default Services;