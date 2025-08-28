// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// Add minimal metadata
export const metadata = {
  title: 'About - Expert B2B SaaS Development Team',
  description: 'Meet the senior designers and engineers who help startups launch revenue-ready SaaS products in 8-12 weeks.',
  alternates: { canonical: '/about' },
};

import Footer_01 from "@/components/footer/Footer";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, use } from "react";

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
// Buttons (add to about/page.jsx)
const BTN_PRIMARY =
  "button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";

const BTN_INVERT =
  "button rounded-[50px] border-2 border-white bg-white py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";


function About() {
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden font-dmSans">
        {/*...::: Breadcrumb :::...*/}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className={`breadcrumb-title ${H1}`}>About Us</h1>
                <ul className="breadcrumb-nav">
                  <li><Link href="/">Home</Link></li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Hero :::...*/}
        <section id="about-hero-section">
          <div className="mb-20 lg:mb-24">
            <div className="global-container">
              <div
                className="jos mb-10 text-center lg:mb-12 xl:mb-20"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
                  <h2 className={H2}>We build, ship, and grow products</h2>
                  <p className={`mt-5 text-black/80 ${LEAD}`}>
                    Devibi is a senior product squad you can drop into your company
                    when the next quarter matters. We turn fuzzy goals into a tight
                    scope, ship an MVP in weeks, and iterate against the metrics your
                    board cares about—activation, retention, and revenue.
                  </p>
                </div>
              </div>

              <div
                className="jos overflow-hidden rounded-3xl"
                data-jos_animation="zoom"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <Image
                  src="/assets/img_placeholder/th-1/about-hero-image.jpg"
                  alt="Team at work on product roadmap"
                  width={1296}
                  height={650}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/*...::: Metrics :::...*/}
        <section id="about-funfact-section">
          <div className="global-container">
            <ul className="grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
              {[
                { v: 150, s: "+", l: "Products launched" },
                { v: 97, s: "%", l: "On-time delivery" },
                { v: 8, s: "", l: "Avg weeks to MVP" },
                { v: 62, s: "%", l: "New work from referrals" },
              ].map((m, i) => (
                <li
                  key={i}
                  className="jos"
                  data-jos_delay={`${0.1 * (i + 1)}`}
                  data-jos_once="true"
                  data-jos_duration="700"
                >
                  <h3 className="font-raleway text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px]" data-module="countup">
                    <span className="start-number" data-countup-number={m.v}>{m.v}</span>
                    {m.s}
                  </h3>
                  <span className={`block font-normal text-black ${LEAD}`}>{m.l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/*...::: Our Story :::...*/}
        <section id="content-section-2">
          <div className="relative pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
                {/* Visual */}
                <div
                  className="jos order-2 md:order-1"
                  data-jos_animation="fade-left"
                  data-jos_once="true"
                  data-jos_duration="700"
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/10">
                    <Image
                      src="/assets/img_placeholder/th-1/about-image.jpg"
                      alt="Devibi team building and shipping"
                      width={526}
                      height={550}
                      className="h-auto w-full"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-sm ring-1 ring-black/10">
                      Since 2024
                    </span>
                    <div className="absolute -bottom-6 right-6 w-[220px] translate-y-6 rounded-2xl bg-black p-4 text-white shadow-xl ring-1 ring-black/20 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                      <div className="text-xs uppercase tracking-wide text-white/70">Releases shipped</div>
                      <div className="mt-1 font-raleway text-2xl font-bold leading-none">200+</div>
                      <div className="mt-2 h-[2px] w-10 rounded bg-colorOrangyRed" />
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div
                  className="jos order-1 md:order-2"
                  data-jos_animation="fade-right"
                  data-jos_once="true"
                  data-jos_duration="700"
                >
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 font-semibold ${MICRO}`}>
                      <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
                      Story
                    </span>
                    <h2 className={`mt-3 ${H2}`}>Lean teams. Real results</h2>
                  </div>

                  <div className={LEAD}>
                    <p className="mb-5">
                      We started Devibi after seeing founders lose quarters to handoffs,
                      rewrites, and meetings that didn’t move the metric. Our answer was a
                      compact, senior team that owns strategy, design, and engineering end-to-end.
                    </p>
                    <p className="mb-7">
                      Today we’re the partner you call when you need a credible plan this
                      week and a live product next month. We scope with risks up front,
                      demo weekly, and make decisions with data—so you always know what’s
                      shipped, what’s next, and why.
                    </p>

                    <ul className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        "48-hour scope with features, constraints, risks, and a price band",
                        "Weekly demos mapped to acceptance criteria and business goals",
                        "Analytics, flags, and logging from day one—no retrofits later",
                        "Interfaces and APIs designed to scale without accidental complexity",
                      ].map((line, i) => (
                        <li key={i} className="flex items-start gap-3 rounded-[12px] bg-colorLinenRuffle p-3 ring-1 ring-black/5">
                          <span className="mt-2 inline-block h-2 w-2 rounded-full bg-colorOrangyRed" />
                          <span className={BODY}>{line}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact"
                        className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
                      >
                        Get in touch
                      </Link>
                      <Link href="/portfolio" className="group inline-flex items-center gap-2 font-semibold">
                        <span className="rounded-full px-3 py-2 ring-1 ring-black/10 transition-colors duration-300 group-hover:bg-colorOrangyRed/10">
                          See our work
                        </span>
                        <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                          <path d="M5 12h12m0 0-4-4m4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[
                        { k: "95%", v: "Satisfaction" },
                        { k: "2K+", v: "Implementations" },
                        { k: "41%", v: "W4 retention" },
                      ].map((f, i) => (
                        <div key={i} className="rounded-2xl bg-white p-4 text-center ring-1 ring-black/10">
                          <div className="font-raleway text-xl font-bold">{f.k}</div>
                          <div className={`${BODY} text-black/60`}>{f.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* /Copy */}
              </div>
            </div>
          </div>
        </section>

        {/*...::: Mission :::...*/}
        <section id="mission-section">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr]">
                <div
                  className="jos"
                  data-jos_animation="fade-right"
                  data-jos_once="true"
                  data-jos_duration="700"
                >
                  <span className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 font-semibold ${MICRO}`}>
                    <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
                    Our mission
                  </span>
                  <h2 className={`mt-3 ${H2}`}>Build with speed and signal</h2>
                  <p className={`mt-4 text-black/80 ${LEAD}`}>
                    Give founders a straight line from “idea” to “in-market.” We cut scope
                    to what matters, validate with real users, and invest engineering time
                    where it moves the metric—not the roadmap slide.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Strategy", "Design", "Engineering", "Experimentation"].map((k) => (
                      <span
                        key={k}
                        className="button rounded-[50px] border-2 border-black bg-transparent py-2 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="jos"
                  data-jos_animation="fade-left"
                  data-jos_once="true"
                  data-jos_duration="700"
                >
                  <ul className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_4px_60px_0_rgba(0,0,0,0.06)]">
                    {[
                      "Ship meaningful value in weeks, then iterate in tight sprints",
                      "Make trade-offs explicit and reversible so momentum never stalls",
                      "Focus on activation and time-to-first-value before feature count",
                      "Design for scale when the data demands it—not by default",
                    ].map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 ${LEAD}`}>
                        <span className="mt-[6px] inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-black text-white" aria-hidden="true">
                          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
                            <path fill="currentColor" d="M8.1 13.3L4.8 10l-1.2 1.2 4.5 4.5 8-8-1.2-1.2z" />
                          </svg>
                        </span>
                        <span className="leading-[1.4]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="jos mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
                data-jos_animation="fade-up"
                data-jos_once="true"
                data-jos_duration="700"
              >
                {[
                  { t: "Outcome first", c: "Every sprint ties to a measurable outcome. If it doesn’t move a KPI, it doesn’t make the cut." },
                  { t: "Small senior teams", c: "Direct access to principals. No layers, no handoffs—just the people doing the work." },
                  { t: "Tight feedback loops", c: "Weekly demos, written decisions, and crisp acceptance criteria keep scope honest." },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="jos rounded-[16px] bg-white p-6 ring-1 ring-black/10 transition-all duration-100 hover:-translate-y-0.5"
                    data-jos_animation="fade-up"
                    data-jos_delay={`${0.06 * (i + 1)}`}
                  >
                    <div className={H3}>{card.t}</div>
                    <p className={`mt-2 ${BODY}`}>{card.c}</p>
                  </div>
                ))}
              </div>

              <div
                className="jos mt-8 flex justify-center"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <Link
                  href="/contact"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
                >
                  See how we work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Principles (black band) :::...*/}
        <section id="principles">
          <div className="bg-black py-20 xl:py-[130px]">
            <div className="global-container">
              <div
                className="jos mb-8 text-center lg:mb-10 xl:mb-12"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <h2 className={`${H2} text-white`}>Our principles</h2>
                <div className="mx-auto mt-6 h-px w-full max-w-5xl bg-white/10" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Think clearly", desc: "Write it down, make it smaller, choose the order. Clear thinking beats clever planning.", delay: "0.05" },
                  { title: "Prototype early", desc: "Clickable flows and vertical slices reveal truth faster than slideware and debates.", delay: "0.1" },
                  { title: "Build for learning", desc: "Every feature ships with telemetry and a rollback path so we can move fast without fear.", delay: "0.15" },
                  { title: "Quality by default", desc: "Accessible UI, resilient APIs, and thoughtful empty/error states—so growth doesn’t crack the product.", delay: "0.2" },
                  { title: "One team", desc: "Same docs, same standup, same Slack. We operate like your in-house squad, not a black box.", delay: "0.25" },
                  { title: "Own outcomes", desc: "We track activation, retention, and revenue. If a task won’t move a metric, we question it.", delay: "0.3" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="jos group rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#121212] motion-reduce:transition-none motion-reduce:transform-none"
                    data-jos_animation="fade-up"
                    data-jos_delay={item.delay}
                    data-jos_once="true"
                    data-jos_duration="700"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-colorOrangyRed">
                          <path fill="currentColor" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                        </svg>
                      </span>
                      <h3 className={`${H3} text-white`}>{item.title}</h3>
                    </div>
                    <p className={`${BODY} text-white/80`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*...::: Who We Partner With :::...*/}
        <section id="who-we-partner-with">
          <div className="pb-20 pt-20">
            <div className="global-container">
              <div
                className="jos mb-8 text-center lg:mb-12"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <div className="mx-auto md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
                  <h2 className={H2}>Who we partner with</h2>
                  <p className={`mt-3 text-black/60 ${BODY}`}>
                    From first demo to scaled growth, we plug in where it matters most.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-black/10 lg:block" />
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
                      title: "Pre-seed",
                      bullets: [
                        "Pressure-test the problem and audience with a lean, fundable MVP",
                        "Design a crisp demo story investors grasp in 3 minutes",
                        "Define guardrails, risks, and a path to first revenue",
                      ],
                      delay: "0.1",
                    },
                    {
                      title: "Seed",
                      bullets: [
                        "Find activation and retention loops you can scale",
                        "Tighten onboarding, pricing, and paywalls with experiments",
                        "Instrument the metrics that will drive your next round",
                      ],
                      delay: "0.2",
                    },
                    {
                      title: "Series A+",
                      bullets: [
                        "Scale architecture without bloat or regressions",
                        "Improve developer velocity with clean interfaces and CI",
                        "Run a rolling experimentation pipeline for compounding wins",
                      ],
                      delay: "0.3",
                    },
                  ].map((card, i) => (
                    <li
                      key={card.title}
                      className="jos group relative overflow-hidden rounded-[20px] bg-colorLinenRuffle p-6 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] motion-reduce:transition-none motion-reduce:transform-none"
                      data-jos_animation="flip"
                      data-jos_delay={card.delay}
                      data-jos_once="true"
                      data-jos_duration="700"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 font-raleway text-sm font-bold ring-1 ring-black/10 transition-all duration-300 group-hover:bg-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className={`${H3}`}>{card.title}</h3>
                        <span className="ml-auto hidden h-2 w-2 rounded-full bg-black/30 lg:block group-hover:bg-black/60" />
                      </div>

                      <ul className={`mt-2 space-y-3 ${LEAD}`}>
                        {card.bullets.map((line) => (
                          <li key={line} className="flex items-start gap-3">
                            <svg viewBox="0 0 24 24" className="mt-[6px] h-4 w-4 shrink-0 text-colorOrangyRed/80" aria-hidden="true">
                              <path fill="currentColor" d="M12 2l-2.5 6.5H3l5 3.6L5.5 19 12 14.8 18.5 19 16 12.1l5-3.6h-6.5L12 2z" />
                            </svg>
                            <span className="leading-[1.45]">{line}</span>
                          </li>
                        ))}
                      </ul>

                      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-colorOrangyRed/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="jos mt-8 flex justify-center"
                data-jos_animation="fade"
                data-jos_once="true"
                data-jos_duration="700"
              >
                <Link
                  href="/contact"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Working Process (black band) :::...*/}
        {/* ===========================
            PROCESS (dark, compact)
        ============================ */}
        <section id="section-working-process">
          <div className="mx-auto max-w-[1500px] px-5">
            <div className="jos relative z-[1] mx-auto max-w-full rounded-[30px] bg-black lg:rounded-[50px]">
              <div className="py-16 sm:px-10 md:px-20 lg:py-20 xl:px-[100px] xl:py-[130px]">
                <div className="global-container">
                  <div className="jos mx-auto mb-6 text-center md:mb-10 md:max-w-xl lg:mb-12 lg:max-w-3xl xl:max-w-[1000px]">
                    <h2 className={`${H2} text-white`}>How we work</h2>
                  </div>

                  {/* compact legend */}
                  <div className="jos mx-auto mb-10 flex items-center justify-center gap-2 opacity-80 md:mb-16">
                    {[1, 2, 3, 4, 5].map((n, i) => (
                      <Fragment key={n}>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[12px] font-semibold text-white/90">
                          {n}
                        </span>
                        {i < 4 && (
                          <Image
                            src="/assets/img_placeholder/th-3/icon-white-arrow-right.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="opacity-60"
                          />
                        )}
                      </Fragment>
                    ))}
                  </div>

                  <div className="grid grid-flow-dense gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {[
                      {
                        n: "01",
                        icon: "icon-black-work-process-1.svg",
                        title: "Scope in 48 hours",
                        copy:
                          "You get a plan with features, risks, and a price band.",
                        href: "/contact",
                      },
                      {
                        n: "02",
                        icon: "icon-black-work-process-2.svg",
                        title: "Build in sprints",
                        copy:
                          "Weekly demos and acceptance criteria keep us honest.",
                        href: "/service",
                      },
                      {
                        n: "03",
                        icon: "icon-black-work-process-3.svg",
                        title: "Ship the MVP",
                        copy: "Release, collect feedback, and start real use.",
                        href: "/portfolio",
                      },
                    ].map((step) => (
                      <div
                        key={step.n}
                        className="relative flex flex-col gap-y-5 rounded-[12px] bg-[#121212] p-6 text-white transition-all duration-300 hover:bg-[#fe330a] lg:p-7"
                      >
                        <span className="absolute right-4 top-4 inline-grid h-7 w-7 place-content-center rounded-full border border-white/25 text-[11px] font-bold text-white/80">
                          {step.n}
                        </span>
                        <div className="h-8 w-auto">
                          <Image
                            src={`/assets/img_placeholder/th-3/${step.icon}`}
                            alt=""
                            width={60}
                            height={48}
                            className="h-full w-auto opacity-90"
                          />
                        </div>
                        <div className={`${H3} text-white`}>{step.title}</div>
                        <p className={`${BODY} text-white/85`}>{step.copy}</p>
                        <Link
                          rel="noopener noreferrer"
                          href={step.href}
                          className="inline-grid h-[30px] w-[30px] place-content-center"
                          aria-label={`${step.title} →`}
                        >
                          <Image
                            src="/assets/img_placeholder/th-3/icon-white-arrow-right.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                    ))}

                    {/* row 2 */}
                    <div className="order-1 col-span-full grid gap-6 lg:grid-cols-2 xl:order-2 xl:grid-cols-2">
                      {[
                        {
                          n: "04",
                          icon: "icon-black-work-process-4.svg",
                          title: "Measure and learn",
                          copy: "Track activation, time to value, and tickets.",
                          href: "/service",
                        },
                        {
                          n: "05",
                          icon: "icon-black-work-process-5.svg",
                          title: "Grow activation",
                          copy:
                            "Improve onboarding, pricing, and the site with tests.",
                          href: "/service",
                        },
                      ].map((step) => (
                        <div
                          key={step.n}
                          className="relative flex flex-col gap-y-5 rounded-[12px] bg-[#121212] p-6 text-white transition-all duration-300 hover:bg-[#fe330a] lg:p-7"
                        >
                          <span className="absolute right-4 top-4 inline-grid h-7 w-7 place-content-center rounded-full border border-white/25 text-[11px] font-bold text-white/80">
                            {step.n}
                          </span>
                          <div className="h-8 w-auto">
                            <Image
                              src={`/assets/img_placeholder/th-3/${step.icon}`}
                              alt=""
                              width={60}
                              height={48}
                              className="h-full w-auto opacity-90"
                            />
                          </div>
                          <div className={`${H3} text-white`}>{step.title}</div>
                          <p className={`${BODY} text-white/85`}>{step.copy}</p>
                          <Link
                            rel="noopener noreferrer"
                            href={step.href}
                            className="inline-grid h-[30px] w-[30px] place-content-center"
                            aria-label={`${step.title} →`}
                          >
                            <Image
                              src="/assets/img_placeholder/th-3/icon-white-arrow-right.svg"
                              alt=""
                              width={30}
                              height={30}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* faint vertical grid lines */}
              <div className="absolute left-0 top-0 -z-[1] hidden h-full w-full justify-evenly lg:flex">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-full w-[1px] bg-[#121212]" />
                ))}
              </div>
            </div>
          </div>
        </section>

{/*...::: What We Measure :::...*/}
<section id="what-we-measure">
  <div className="relative pb-20 pt-20 xl:pb-[150px]">
    {/* softer dotted backdrop */}
    <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:18px_18px]" />

    <div className="global-container">
      {/* heading */}
      <div
        className="jos mb-8 text-center lg:mb-10"
        data-jos_animation="fade"
        data-jos_once="true"
        data-jos_duration="700"
      >
        <div className="mx-auto md:max-w-xl">
          <h2 className={H2}>What we measure</h2>
          <p className={`mt-3 text-black/60 ${BODY}`}>
            We align sprints to outcomes you can explain to customers and investors.
            If it doesn’t change a KPI, it’s a distraction.
          </p>
        </div>
      </div>

      {/* compact chip bar */}
      <div
        className="jos mb-8 flex flex-wrap justify-center gap-2"
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
          <button
            key={k}
            type="button"
            className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-semibold transition hover:border-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/30"
          >
            {k}
          </button>
        ))}
      </div>

      {/* KPI cards – minimal, airy (no sparkline) */}
      <div
        className="jos grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
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
              "Percent of new sign-ups that complete the key action tied to long-term retention.",
          },
          {
            title: "Time to first value",
            value: "6.5m",
            pct: 78,
            trend: "−18%",
            blurb:
              "Median minutes to an ‘aha’. We remove steps, autofill data, and guide with UI.",
          },
          {
            title: "Week-4 retention",
            value: "41%",
            pct: 41,
            trend: "+6%",
            blurb:
              "Share of a cohort still active after 28 days—simple product-market fit signal.",
          },
          {
            title: "Tickets resolved",
            value: "214 /wk",
            pct: 72,
            trend: "+9%",
            blurb:
              "Support + bug throughput. We reduce repeats with root-cause fixes.",
          },
          {
            title: "Net revenue",
            value: "$182k MRR",
            pct: 64,
            trend: "+14%",
            blurb:
              "Revenue after churn/expansion. Experiments focus on moving this line.",
          },
          {
            title: "Cycle time",
            value: "1.9d",
            pct: 83,
            trend: "−21%",
            blurb:
              "Idea → merged → shipped. Short cycles = faster learning, fewer surprises.",
          },
        ].map((kpi, i) => {
          const r = 18;
          const c = 2 * Math.PI * r;
          const dash = c - (c * kpi.pct) / 100;
          const down = kpi.trend.includes("−") || kpi.trend.includes("-");

          return (
            <div
              key={i}
              className="relative rounded-2xl bg-white p-5 ring-1 ring-black/10 transition hover:ring-black/20"
            >
              {/* header */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className={H3}>{kpi.title}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold text-white ${
                    down ? "bg-[#ef4444]" : "bg-black/80"
                  }`}
                >
                  {kpi.trend}
                </span>
              </div>

              {/* stat row */}
              <div className="flex items-center justify-between gap-4">
                <div className="font-raleway text-[22px] font-bold leading-none">
                  {kpi.value}
                </div>

                {/* compact radial */}
                <div className="relative grid place-items-center">
                  <svg
                    viewBox="0 0 44 44"
                    className="h-12 w-12 -rotate-90"
                    aria-hidden="true"
                  >
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
                      className="stroke-[#fe330a] transition-all duration-700 ease-out"
                      style={{
                        strokeDasharray: c,
                        strokeDashoffset: dash,
                        strokeLinecap: "round",
                      }}
                    />
                  </svg>
                  <span className="pointer-events-none absolute text-[11px] font-bold">
                    {kpi.pct}%
                  </span>
                </div>
              </div>

              {/* one-line blurb */}
              <p className={`${BODY} mt-3 text-black/70`}>{kpi.blurb}</p>
            </div>
          );
        })}
      </div>

      {/* concise bottom blurbs */}
      <div
        className="jos mt-10 grid grid-cols-1 gap-5 md:grid-cols-3"
        data-jos_animation="fade"
        data-jos_once="true"
        data-jos_duration="700"
      >
        {[
          {
            n: "01",
            title: "Outcomes, not output",
            copy:
              "We co-set targets and report progress in plain language. You always know what moved.",
          },
          {
            n: "02",
            title: "Build to learn",
            copy:
              "Every release asks a question and measures the answer. Learning drives the roadmap.",
          },
          {
            n: "03",
            title: "Scale without bloat",
            copy:
              "Clean interfaces and simple systems help you hire faster and ship more with fewer regressions.",
          },
        ].map((b, i) => (
          <div
            key={i}
            className="rounded-[18px] bg-colorLinenRuffle p-5 ring-1 ring-black/5"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sm font-bold ring-1 ring-black/10">
                {b.n}
              </span>
              <h3 className={H3}>{b.title}</h3>
            </div>
            <p className={BODY}>{b.copy}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/*...::: Contact Band :::...*/}
<section id="contact-cta">
  <div className="relative bg-black pb-28 pt-20 xl:pb-[200px] xl:pt-[130px]">
    {/* subtle backdrop glow */}
    <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
    <div className="global-container">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1.15fr)_1fr]">

        {/* Left — copy / CTA */}
        <div
          className="jos order-1"
          data-jos_animation="fade-right"
          data-jos_once="true"
          data-jos_duration="700"
        >
          {/* Eyebrow + Headline */}
          <div className="mb-6 space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
              Let’s talk
            </span>
            <h2 className={`${H2} text-white`}>
              Ship your{" "}
              <span className="text-white/90">
                {typeof SERVICE !== "undefined"
                  ? SERVICE.title.toLowerCase()
                  : "next release"}
              </span>{" "}
              with confidence
            </h2>
          </div>

          {/* Lead */}
          <p className={`${LEAD} text-white/90 max-w-2xl`}>
            Send your goals and constraints. We’ll reply within 24–48 hours with a
            scoped plan, risks, and a price band. If it’s a fit, we start with a
            short discovery and a week-one demo plan.
          </p>

          {/* Proof chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["NDA-friendly", "AA accessible", "Weekly demos", "Fixed scope or retainer"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Value bullets */}
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Clear acceptance criteria for every story",
              "Design tokens, specs, and state coverage",
              "Telemetry, QA support, and rollout plan",
              "Transparent cadence in your tools",
            ].map((d) => (
              <li key={d} className="relative pl-8 text-white/90">
                <span className="absolute left-0 top-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={BODY}>{d}</span>
              </li>
            ))}
          </ul>

          {/* CTA row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className={BTN_INVERT}>
              Start a project
            </Link>
            <Link
              href="/contact#intro"
              className="button rounded-[50px] border-2 border-white/25 bg-transparent py-4 text-white after:bg-white/10 hover:border-white hover:text-white"
            >
              Book an intro call
            </Link>
            <span className="ml-0 sm:ml-3 text-sm text-white/60">
              We reply in 24–48h.
            </span>
          </div>

          {/* Contact chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@devibi.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:border-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              hello@devibi.com
            </a>

            <a
              href="tel:+0123456789"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:border-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.67-1.23a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z" />
              </svg>
              +(012) 345 6789
            </a>

            <a
              href="https://www.devibi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:border-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 3h7v7" />
                <path d="M10 14 21 3" />
                <path d="M21 14v7h-7" />
                <path d="M3 10V3h7" />
                <path d="M3 21h7v-7" />
              </svg>
              devibi.com
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div
          className="jos order-2 overflow-hidden rounded-[22px] ring-1 ring-white/10"
          data-jos_animation="fade-left"
          data-jos_once="true"
          data-jos_duration="700"
        >
          <div className="relative">
            <Image
              src="/assets/img_placeholder/th-1/about-contact-img.jpg"
              alt="Team collaboration — weekly demos and clear handoff"
              width={720}
              height={560}
              className="h-auto w-full object-cover"
              priority
            />
            {/* corner badge */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold ring-1 ring-black/10">
              Week-one demo plan
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-black/40">
              Average 8–12 weeks to MVP
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      </main>
      <Footer_01 />
    </>
  );
}

export default About;
