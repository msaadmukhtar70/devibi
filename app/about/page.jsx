// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// SEO Optimized Metadata
export const metadata = {
  title: 'About - Expert B2B SaaS Development Team | Devibi',
  description: 'Meet the senior product team helping B2B SaaS founders launch revenue-ready software in weeks, not quarters. We are a small, focused team of experts.',
  alternates: { canonical: '/about' },
};

import Footer_01 from "@/components/footer/Footer";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

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
                  <h2 className={H2}>You don’t need a bigger team. You need a more focused one.</h2>
                  <p className={`mt-5 text-black/80 ${LEAD}`}>
                    Devibi is the senior product squad you hire when you need to ship with speed and certainty. We turn fuzzy goals into a tight scope, build a market-ready MVP in weeks, and help you iterate against the metrics that matter—activation, retention, and revenue.
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
                  alt="A focused B2B SaaS development team at work on a product roadmap."
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
                { v: 150, s: "+", l: "Products Launched (INFERRED)" },
                { v: 97, s: "%", l: "On-Time Delivery (INFERRED)" },
                { v: 8, s: "", l: "Avg. Weeks to MVP (INFERRED)" },
                { v: 62, s: "%", l: "New Work from Referrals (INFERRED)" },
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
                      alt="The Devibi expert B2B SaaS development team building and shipping a product."
                      width={526}
                      height={550}
                      className="h-auto w-full"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-sm ring-1 ring-black/10">
                      Since 2024
                    </span>
                    <div className="absolute -bottom-6 right-6 w-[220px] translate-y-6 rounded-2xl bg-black p-4 text-white shadow-xl ring-1 ring-black/20 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                      <div className="text-xs uppercase tracking-wide text-white/70">Releases Shipped (INFERRED)</div>
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
                      Our Story
                    </span>
                    <h2 className={`mt-3 ${H2}`}>Lean Teams, Real Results.</h2>
                  </div>

                  <div className={LEAD}>
                    <p className="mb-5">
                      We started Devibi after seeing too many founders lose their runway to bloated teams, missed deadlines, and endless meetings that didn't move the needle. Our answer was a compact, senior-only team that integrates strategy, design, and engineering from day one.
                    </p>
                    <p className="mb-7">
                      Today, we're the partner you call when you need a credible plan this week and a live product next month. We scope with risks up front, demo weekly, and make decisions with data—so you always know what’s shipped, what’s next, and why it matters.
                    </p>

                    <ul className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        "A clear scope, risks, and price band in 48 hours",
                        "Weekly demos tied to your business goals",
                        "Analytics and feature flags from day one",
                        "APIs designed for scale, not accidental complexity",
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
                        Book a Free Call
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
                    Our Mission
                  </span>
                  <h2 className={`mt-3 ${H2}`}>Build with speed and signal.</h2>
                  <p className={`mt-4 text-black/80 ${LEAD}`}>
                    Our mission is to give founders the straightest possible line from "great idea" to "in-market." We ruthlessly cut scope to what matters, validate with real users, and invest engineering time where it moves the metric—not the roadmap slide.
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
                      "Ship meaningful value in weeks, then iterate in tight sprints.",
                      "Make trade-offs explicit so momentum never stalls.",
                      "Focus on activation and time-to-value before feature count.",
                      "Design for scale when the data demands it—not by default.",
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
                <h2 className={`${H2} text-white`}>Our Principles</h2>
                <div className="mx-auto mt-6 h-px w-full max-w-5xl bg-white/10" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Clarity Over Cleverness", desc: "Write it down. Make it smaller. Choose the order. Clear thinking beats clever planning every time.", delay: "0.05" },
                  { title: "Prototype Early & Often", desc: "Clickable flows and vertical slices reveal the truth much faster than slideware and endless debates.", delay: "0.1" },
                  { title: "Build for Learning", desc: "Every feature ships with telemetry and a rollback path, so we can move fast without breaking things.", delay: "0.15" },
                  { title: "Quality is a Prerequisite", desc: "Accessible UI, resilient APIs, and thoughtful empty states. We build products that don't crack under growth.", delay: "0.2" },
                  { title: "One Team, One Slack", desc: "We operate like your in-house squad, not a black-box vendor. You get direct access and daily updates.", delay: "0.25" },
                  { title: "Own the Outcome", desc: "We measure our success by your metrics: activation, retention, and revenue. If a task won’t move a KPI, we challenge it.", delay: "0.3" },
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

        {/* This section appears to be a duplicate from the original code, but I've kept it as per your instructions not to remove anything. */}
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
                      Let’s Talk
                    </span>
                    <h2 className={`${H2} text-white`}>
                      Ship your next release with confidence
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
                      Book a Free Call
                    </Link>
                    <p className="ml-0 sm:ml-3 text-sm text-white/60">
                      A 30-minute backlog tear-down to scope your MVP.
                    </p>
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
                      alt="The Devibi expert B2B SaaS team collaborating on a project."
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