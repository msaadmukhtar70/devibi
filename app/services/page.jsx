// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// Add minimal metadata
export const metadata = {
  title: 'Services - Expert SaaS Design & Development',
  description: 'From idea validation to launch. MVP sprints, activation optimization, and AI integration services for B2B SaaS startups.',
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
                  <h2 className={H2}>Services that move the needle</h2>
                  <p className={`${LEAD} mx-auto mt-4 max-w-2xl text-black/75`}>
                    Scope in days, ship in weeks, and grow with signal. We bring
                    strategy, design, and engineering under one roof so founders
                    can move faster with less risk.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <Link href="/contact" className={BTN_PRIMARY}>
                      Start your scope
                    </Link>
                    <Link href="/portfolio" className={BTN_GHOST}>
                      See our work
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
                  alt="Deviby sprint work"
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
                  aria-label="Play video"
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
                    Build fast and measure what matters
                  </h2>
                </div>
                <div className="text-left text-white">
                  <p className={LEAD}>
                    We work in tight sprints. You see weekly demos. Every
                    feature has acceptance criteria. After launch we track
                    activation and time to value and make focused changes.
                  </p>
                </div>
                <div className="my-14 h-[1px] w-full bg-colorCodGray" />
                <ul className="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20">
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                      data-module="countup"
                    >
                      <span className="start-number" data-countup-number="60">
                        60
                      </span>
                      %
                    </h3>
                    <span className={`${LEAD} block text-white`}>
                      Trial users reach first aha
                    </span>
                  </li>
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                      data-module="countup"
                    >
                      <span className="start-number" data-countup-number="30">
                        30
                      </span>
                      %
                    </h3>
                    <span className={`${LEAD} block text-white`}>
                      Fewer tickets per 100 new users
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
                  <h2 className={H2}>Core services we run end-to-end</h2>
                </div>
                <p className={`${LEAD} mx-auto mt-4 max-w-2xl text-black/80`}>
                  Four packaged ways to work—each with crisp deliverables,
                  timelines, and success metrics.
                </p>
              </div>

              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-1.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-1.svg",
                    title: "Launch Blueprint",
                    desc: "Scope, wireframes, and a plan in seven days. Clear risks and a price band.",
                    bullets: [
                      "Feature list & acceptance criteria",
                      "Clickable wireflows",
                      "Risks, trade-offs, and price band",
                    ],
                    href: "/service-details",
                  },
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-2.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-2.svg",
                    title: "MVP Sprint",
                    desc: "Design and build in eight to twelve weeks. Weekly demos and acceptance criteria.",
                    bullets: [
                      "Vertical slices that ship",
                      "Instrumentation from day one",
                      "Security & reliability guardrails",
                    ],
                    href: "/service-details",
                  },
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-3.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-3.svg",
                    title: "Activation Lift",
                    desc: "Onboarding, pricing, and site tests that convert. Clear targets and tracking.",
                    bullets: [
                      "A/Bs and holdouts",
                      "Activation & retention loops",
                      "Pricing & paywall experiments",
                    ],
                    href: "/service-details",
                  },
                  {
                    iconB: "/assets/img_placeholder/th-1/service-icon-black-4.svg",
                    iconO: "/assets/img_placeholder/th-1/service-icon-orange-4.svg",
                    title: "Practical AI",
                    desc: "Onboarding helper, search with sources, and support replies. Only if it helps.",
                    bullets: [
                      "RAG with citations",
                      "Guided onboarding copilots",
                      "Support reply drafts w/ guardrails",
                    ],
                    href: "/service-details",
                  },
                ].map((card, i) => (
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
                      aria-label={`Open ${card.title}`}
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
                <h2 className={H2}>Pick your lane</h2>
                <p className={`${BODY} mt-3 text-black/60`}>
                  Validate, build, or scale. We meet you where you are with clear outcomes.
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
                  <h3 className={`${H3} font-dmSans`}>Validate your idea and attract early investors</h3>
                  <div className="ml-3 h-px flex-1 bg-black/10" />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      t: "Design prototype",
                      d: "Test product ideas fast with clickable journeys and visual flows.",
                      href: "/services/design-prototype",
                      n: "01",
                    },
                    {
                      t: "Product discovery",
                      d: "Map key features, user flows, and first-pass architecture to reduce risk.",
                      href: "/services/product-discovery",
                      n: "02",
                    },
                    {
                      t: "Technical workshop",
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
                  <h3 className={`${H3} font-dmSans`}>Build your product and drive market traction</h3>
                  <div className="ml-3 h-px flex-1 bg-black/10" />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      t: "MVP sprint",
                      d: "Design & build in 8–12 weeks. Weekly demos and acceptance criteria.",
                      href: "/services/mvp-sprint",
                      n: "01",
                    },
                    {
                      t: "Custom MVP development",
                      d: "Turn your prototype into a production-ready product with scalable foundations.",
                      href: "/services/custom-mvp",
                      n: "02",
                    },
                    {
                      t: "Dedicated team",
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
                  <h3 className={`${H3} font-dmSans`}>Scale your product & expand your user base</h3>
                  <div className="ml-3 h-px flex-1 bg-black/10" />
                </div>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      t: "UX audit",
                      d: "Identify usability bottlenecks, lift engagement, and improve conversions.",
                      href: "/services/ux-audit",
                      n: "01",
                    },
                    {
                      t: "Product redesign",
                      d: "Upgrade legacy UI with scalable, business-driven UX.",
                      href: "/services/product-redesign",
                      n: "02",
                    },
                    {
                      t: "Team extension",
                      d: "Add designers/developers on demand without slowing down.",
                      href: "/services/team-extension",
                      n: "03",
                    },
                    {
                      t: "Website redesign",
                      d: "Modernize your web presence for authority and growth.",
                      href: "/services/website-redesign",
                      n: "04",
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
                    A full-cycle approach to digital product success
                  </h2>
                  <p className={`${BODY} mt-3 text-black/60`}>
                    Research, design and development — all in one place
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
                        t: "UX audit",
                        d: "Identify friction, improve engagement, and lift conversions.",
                        href: "/services/ux-audit",
                      },
                      {
                        t: "Product discovery",
                        d: "Align on features, flows, and architecture with less risk.",
                        href: "/services/product-discovery",
                      },
                      {
                        t: "Technical workshop",
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
                        t: "Website design services",
                        d: "Layouts and UX/UI that convert and scale with you.",
                        href: "/services/website-design",
                      },
                      {
                        t: "Website redesign",
                        d: "Modernize your presence to match momentum.",
                        href: "/services/website-redesign",
                      },
                      {
                        t: "Web app design",
                        d: "Responsive, user-focused platforms with strong UX logic.",
                        href: "/services/web-app-design",
                      },
                      {
                        t: "Mobile app design",
                        d: "Intuitive, performance-optimized iOS & Android apps.",
                        href: "/services/mobile-app-design",
                      },
                      {
                        t: "Branding",
                        d: "A visual identity that resonates and scales.",
                        href: "/services/branding",
                      },
                    ],
                  },
                  {
                    title: "Development",
                    n: "03",
                    items: [
                      {
                        t: "Web development",
                        d: "Custom platforms, dashboards, and scalable SaaS.",
                        href: "/services/web-development",
                      },
                      {
                        t: "Mobile app development",
                        d: "End-to-end iOS and Android builds.",
                        href: "/services/mobile-app-development",
                      },
                      {
                        t: "No-code development",
                        d: "Fast delivery on low/no-code platforms.",
                        href: "/services/no-code-development",
                      },
                      {
                        t: "Blockchain development",
                        d: "Secure apps, smart contracts, and DeFi.",
                        href: "/services/blockchain-development",
                      },
                      {
                        t: "Website development",
                        d: "Fast, scalable sites to support growth.",
                        href: "/services/website-development",
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

                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-black/10 transition-colors duration-300 hover:bg-black hover:text-white"
                      >
                        Talk to an expert
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
                    </div>
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
                  <h2 className={H2}>Ways to work together</h2>
                  <p className={`${BODY} mt-3 text-black/70`}>
                    Pick what fits your stage and speed.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div
                  className="jos rounded-[16px] bg-white p-6 ring-1 ring-black/10"
                  data-jos_animation="fade-right"
                >
                  <div className="font-raleway text-2xl font-bold">
                    Fixed scope
                  </div>
                  <p className={`${BODY} mt-1 text-black/70`}>
                    Best for Launch Blueprint, MVP Sprint, or Activation Lift.
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px]">
                    {[
                      "Crisp deliverables, timeline, and price band",
                      "Weekly demos & acceptance criteria",
                      "Transparent risks and trade-offs",
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
                    Dedicated team
                  </div>
                  <p className={`${BODY} mt-1 text-black/70`}>
                    Best for continuous growth and experiments.
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px]">
                    {[
                      "Senior design + engineering squad",
                      "Roadmap shaping and experiment pipeline",
                      "Shared docs, rituals, and velocity metrics",
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
                  Let’s connect
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                  <h2 className={H2}>What we measure</h2>
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

              {/* KPI cards */}
              <div
                className="jos grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                data-jos_animation="fade-up"
                data-jos_once="true"
                data-jos_duration="700"
              >
                {[
                  {
                    title: "Activation rate",
                    value: "62%",
                    pct: 62,
                    trend: "+12%",
                    blurb:
                      "Percent of new sign-ups that complete the key action that correlates with long-term retention.",
                    points:
                      "M3 14 C8 4, 14 8, 19 6 S29 12, 35 9 S41 12, 45 7",
                  },
                  {
                    title: "Time to first value",
                    value: "6.5m",
                    pct: 78,
                    trend: "−18%",
                    blurb:
                      "Median minutes to an ‘aha’ moment. We remove steps, autofill data, and guide with UI.",
                    points:
                      "M3 10 C9 11, 14 13, 19 9 S29 7, 35 10 S41 14, 45 12",
                  },
                  {
                    title: "Week-4 retention",
                    value: "41%",
                    pct: 41,
                    trend: "+6%",
                    blurb:
                      "Share of a cohort still active after 28 days—a simple test of product-market fit trajectory.",
                    points:
                      "M3 12 C8 8, 14 6, 19 9 S29 15, 35 11 S41 9, 45 13",
                  },
                  {
                    title: "Tickets resolved",
                    value: "214 /wk",
                    pct: 72,
                    trend: "+9%",
                    blurb:
                      "Support + bug throughput. We target fewer repeat issues through root-cause fixes.",
                    points:
                      "M3 9 C8 12, 14 10, 19 11 S29 8, 35 10 S41 12, 45 9",
                  },
                  {
                    title: "Net revenue",
                    value: "$182k MRR",
                    pct: 64,
                    trend: "+14%",
                    blurb:
                      "Revenue after churn and expansion. We prioritize experiments that move this line.",
                    points:
                      "M3 13 C9 9, 14 10, 19 7 S29 9, 35 6 S41 10, 45 8",
                  },
                  {
                    title: "Cycle time",
                    value: "1.9d",
                    pct: 83,
                    trend: "−21%",
                    blurb:
                      "Idea → merged → shipped. Short cycles mean faster learning and fewer big surprises.",
                    points:
                      "M3 8 C8 9, 14 12, 19 10 S29 7, 35 9 S41 13, 45 11",
                  },
                ].map((kpi, i) => {
                  const r = 18;
                  const c = 2 * Math.PI * r;
                  const dash = c - (c * kpi.pct) / 100;

                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-[20px] bg-white p-6 ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] motion-reduce:transition-none motion-reduce:transform-none"
                    >
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-black/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="font-dmSans text-[22px] leading-[1.2]">
                          {kpi.title}
                        </h3>
                        <span className="rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                          {kpi.trend}
                        </span>
                      </div>

                      <div className="flex items-center gap-5">
                        <div className="relative grid place-items-center">
                          <svg viewBox="0 0 44 44" className="h-16 w-16 -rotate-90">
                            <circle
                              cx="22"
                              cy="22"
                              r={r}
                              className="stroke-black/10"
                              fill="none"
                              strokeWidth="4"
                            />
                            <circle
                              cx="22"
                              cy="22"
                              r={r}
                              fill="none"
                              strokeWidth="4"
                              className="transition-all duration-700 ease-out stroke-[#fe330a]"
                              style={{
                                strokeDasharray: c,
                                strokeDashoffset: dash,
                                strokeLinecap: "round",
                              }}
                            />
                          </svg>
                          <span className="pointer-events-none absolute text-sm font-bold">
                            {kpi.pct}%
                          </span>
                        </div>

                        <div className="flex-1">
                          <div className="font-raleway text-xl font-bold leading-none">
                            {kpi.value}
                          </div>
                          <p className={`${BODY} mt-2 text-black/70`}>
                            {kpi.blurb}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 h-14 w-full rounded-[12px] bg-colorLinenRuffle/60 p-2">
                        <svg
                          viewBox="0 0 48 20"
                          className="h-full w-full stroke-black/70 transition-colors duration-300 group-hover:stroke-black"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d={kpi.points} strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Principles-ish reinforcement chips */}
              <div
                className="jos mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                {[
                  {
                    n: "01",
                    title: "Outcomes, not output",
                    copy:
                      "We co-set targets for each sprint and report progress in plain language. Your team always knows what shipped and what moved.",
                  },
                  {
                    n: "02",
                    title: "Build to learn",
                    copy:
                      "Every release carries a question and a way to measure the answer. Learning drives the backlog—not opinions.",
                  },
                  {
                    n: "03",
                    title: "Scale without bloat",
                    copy:
                      "We keep interfaces clean and systems simple so you can hire faster, onboard quicker, and ship more without regressions.",
                  },
                ].map((b) => (
                  <div
                    key={b.n}
                    className="rounded-[20px] bg-colorLinenRuffle p-6 ring-1 ring-black/5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sm font-bold ring-1 ring-black/10">
                        {b.n}
                      </span>
                      <h3 className="font-dmSans text-[20px] leading-[1.2]">
                        {b.title}
                      </h3>
                    </div>
                    <p className={`${BODY} text-black/75`}>{b.copy}</p>
                  </div>
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
                      <h2 className={H2}>Questions founders ask</h2>
                    </div>
                  </div>
                  <div className={LEAD}>
                    <p className="mb-7 last:mb-0">
                      Share context and goals. We’ll return a scope + price band
                      within 24–48 hours. Then a short discovery to align on
                      risks, milestones, and success metrics.
                    </p>
                    <Link href="/faq-1" className={`${BTN_PRIMARY} mt-5`}>
                      Read all FAQs
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
                    Positive feedback from our users
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote:
                      "Devibi helped us validate our core loop in weeks. Clean handoffs, honest trade-offs, and shipping that sticks.",
                    who: "Max Weber",
                    role: "HR Manager",
                    img: "/assets/img_placeholder/th-1/testimonial-img-1.jpg",
                    side: "left",
                    d: "0.1",
                  },
                  {
                    quote:
                      "Weekly demos kept us aligned. We hit MVP in 9 weeks and had analytics ready on day one.",
                    who: "Douglas Smith",
                    role: "Businessman",
                    img: "/assets/img_placeholder/th-1/testimonial-img-2.jpg",
                    side: "left",
                    d: "0.2",
                  },
                  {
                    quote:
                      "The team balanced speed with quality. We finally have a foundation that scales.",
                    who: "Abraham Maslo",
                    role: "Founder @ Marketing Company",
                    img: "/assets/img_placeholder/th-1/testimonial-img-3.jpg",
                    side: "left",
                    d: "0.3",
                  },
                  {
                    quote:
                      "Security and privacy were first-class. Guardrails gave our board real confidence.",
                    who: "Jack Fayol",
                    role: "HR Manager",
                    img: "/assets/img_placeholder/th-1/testimonial-img-4.jpg",
                    side: "right",
                    d: "0.1",
                  },
                  {
                    quote:
                      "Integration was straightforward and docs were clear. The team was responsive and pragmatic.",
                    who: "Karen Lynn",
                    role: "Software Engineer",
                    img: "/assets/img_placeholder/th-1/testimonial-img-5.jpg",
                    side: "right",
                    d: "0.2",
                  },
                  {
                    quote:
                      "ROI exceeded expectations. We’re shipping faster and learning from real usage every week.",
                    who: "Henry Ochi",
                    role: "Bank Manager",
                    img: "/assets/img_placeholder/th-1/testimonial-img-6.jpg",
                    side: "right",
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
                        alt="rating"
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
