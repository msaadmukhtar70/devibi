"use client";

import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ServiceDetails() {
  // Lightbox
  const [toggler, setToggler] = useState(false);

  // -------- Typography tokens (keep styles consistent site-wide) --------
  const H1 =
    "font-raleway text-[40px] leading-[1.06] sm:text-[48px] lg:text-[64px] xl:text-[80px]";
  const H2 =
    "font-raleway text-[32px] leading-[1.06] sm:text-[40px] lg:text-[56px] xl:text-[64px]";
  const H3 =
    "font-raleway text-[22px] leading-[1.2] sm:text-[24px] lg:text-[26px]";
  const LEAD = "text-lg leading-[1.55] lg:text-[21px]";
  const BODY = "text-[15px] leading-[1.65] sm:text-base";
  const MICRO = "text-sm uppercase tracking-[0.12em] text-black/60";

  // -------- Buttons (normalized across pages) --------
  const BTN_PRIMARY =
    "button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";
  const BTN_GHOST =
    "button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";
  const BTN_INVERT =
    "button rounded-[50px] border-2 border-white bg-white py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white";

  // -------- Service meta (swap these to reuse this template) --------
  const SERVICE = {
    title: "Mobile App Design",
    heroImage: "/assets/img_placeholder/th-1/content-image-1.jpg",
    heroAlt: "Mobile app design overview",
    summary:
      "We design mobile apps that users love—and businesses can scale. Clear journeys, crisp UI, and components that hand off cleanly to iOS and Android.",
  };

  // -------- Content blocks --------
  const challenges = [
    {
      title: "Users drop before converting",
      copy:
        "Confusing flows kill activation. We redesign journeys so people reach value fast, boosting retention and revenue.",
      icon: "/assets/img_placeholder/th-1/trending-up-icon.svg",
    },
    {
      title: "Hard to stand out",
      copy:
        "In a crowded market, polish and clarity win. We craft app UI that’s unmistakably yours—and functionally superior.",
      icon: "/assets/img_placeholder/th-1/cog-icon.svg",
    },
    {
      title: "UI feels dated or clunky",
      copy:
        "Expectations evolve. We modernize visual language, motion, and states so your app feels current and trustworthy.",
      icon: "/assets/img_placeholder/th-1/icon-orange-clock.svg",
    },
  ];

  const useCases = [
    { title: "FinTech onboarding", copy: "Reduce KYC friction and drop-off with clearer steps and trust cues." },
    { title: "Health & wellness", copy: "Habit loops and reminders that improve week-4 retention." },
    { title: "Education", copy: "Better lesson navigation and progress visibility to boost completion." },
    { title: "Marketplaces", copy: "Supply–demand flows designed for speed and confidence." },
    { title: "SaaS mobile", copy: "Prioritize the 20% of actions that drive 80% of value on small screens." },
    { title: "AI assistants", copy: "Prompt UX, states, and feedback that set accurate user expectations." },
  ];

  const process = [
    { step: "01", title: "Stakeholder interview", items: ["Goals & KPIs", "Risks & constraints"] },
    { step: "02", title: "Research & trends", items: ["Competitor scan", "Opportunity map"] },
    { step: "03", title: "Feature prioritization", items: ["MVP scope", "Versioned roadmap"] },
    { step: "04", title: "User flows & wires", items: ["Journey diagrams", "Key screens"] },
    { step: "05", title: "Visual direction", items: ["Moodboard", "Concept options"] },
    { step: "06", title: "UI design", items: ["Dev-ready mockups", "States & variants"] },
    { step: "07", title: "Testing & validation", items: ["Usability findings", "Refinements"] },
    { step: "08", title: "Design handoff", items: ["Tokens & specs", "Implementation guide"] },
  ];

  const deliverables = {
    ux: ["Research summary", "Personas & JTBD", "User flows & IA"],
    ui: ["Figma components & tokens", "Key screens (iOS/Android)", "Motion & micro-interactions"],
    handoff: ["Specs & annotations", "Redlines & assets", "Design system starter"],
  };

  const benefits = [
    {
      title: "User-centric approach",
      copy:
        "Interviews, usability tests, and data synths drive decisions that improve activation and retention.",
    },
    {
      title: "Transparent collaboration",
      copy:
        "We plug into your tools and ship weekly demos with acceptance criteria and next steps.",
    },
    {
      title: "Dev-ready design",
      copy:
        "Tokens, specs, and states developers can implement quickly—less rework, faster releases.",
    },
    {
      title: "Senior team only",
      copy:
        "Mid-to-senior designers with experience in SaaS, FinTech, Health, and AI ship with confidence.",
    },
    {
      title: "Proven satisfaction",
      copy:
        "Long-term partnerships and referral work. We stay until it ships and behaves as intended.",
    },
  ];

  const faqs = [
    {
      q: "How long does mobile app design take?",
      a: "A focused MVP usually takes 6–10 weeks depending on scope and decision speed. Expect weekly demos and clear acceptance criteria.",
    },
    {
      q: "Do you design and develop?",
      a: "Yes. We can partner with your engineers or provide a full squad to deliver design + development through launch.",
    },
    {
      q: "Can you redesign an existing app?",
      a: "Absolutely. We audit current UX, identify bottlenecks, and prioritize high-leverage improvements to engagement and conversion.",
    },
    {
      q: "How do you price?",
      a: "Fixed scopes for well-defined outcomes, or monthly retainers for ongoing design. You’ll get a plan, risks, and a price band within 48 hours.",
    },
    {
      q: "What do you hand off to devs?",
      a: "Design tokens, component libraries, redlines, and an implementation guide. We support QA to keep intent intact.",
    },
  ];

  // Reusable chip (matches your style)
  const Chip = ({ children }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-semibold">
      <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
      {children}
    </span>
  );

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/* dotted backdrop (site-wide motif) */}
        <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/*...::: Breadcrumb :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                {/* Single H1 per page for SEO */}
                <h1 className="breadcrumb-title">{SERVICE.title}</h1>
                <ul className="breadcrumb-nav">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Overview :::... */}
        <section id="overview">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">
                {/* Media */}
                <div
                  className="jos order-2 overflow-hidden rounded-2xl ring-1 ring-black/10"
                  data-jos_animation="fade-left"
                >
                  <div className="relative">
                    <Image
                      src={SERVICE.heroImage}
                      alt={SERVICE.heroAlt}
                      width={526}
                      height={450}
                      className="h-auto w-full"
                      priority
                    />
                    {/* floating badges */}
                    <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold ring-1 ring-black/10">iOS & Android</span>
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold ring-1 ring-black/10">AA Accessible</span>
                    </div>
                    <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-black/40">
                      Dev-ready
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  <div className="mb-6 space-y-3">
                    <Chip>Overview</Chip>
                    <h2 className={H2}>Beautiful, functional, scalable</h2>
                  </div>
                  <div>
                    <p className={`${LEAD} mb-7`}>{SERVICE.summary}</p>

                    {/* Key facts */}
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                      {[
                        { k: "Avg. time to MVP", v: "8–12 weeks" },
                        { k: "Demos", v: "Weekly with criteria" },
                        { k: "Handoff", v: "Dev-ready tokens & specs" },
                        { k: "Focus", v: "Activation, retention, revenue" },
                      ].map((it) => (
                        <li
                          key={it.k}
                          className="rounded-[12px] bg-colorLinenRuffle p-3 ring-1 ring-black/5"
                        >
                          <div className={`${MICRO}`}>{it.k}</div>
                          <div className="font-raleway text-lg font-bold">{it.v}</div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {["Strategy", "UX", "UI", "Design system"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-black/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link href="/contact" className={BTN_PRIMARY}>
                        Get a scope
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Copy */}
              </div>
            </div>
          </div>
        </section>

        {/*...::: Problems we solve :::... */}
        <section id="problems">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div
                className="jos mb-10 text-center lg:mb-16 xl:mb-20"
                data-jos_animation="fade"
              >
                <div className="mx-auto md:max-w-xl lg:max-w-3xl">
                  <h2 className={H2}>We solve the right problems</h2>
                  <p className={`${BODY} mt-3 text-black/60`}>
                    When users stall or churn, we design a path to value they can’t miss.
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {challenges.map((c, i) => (
                  <li
                    key={c.title}
                    className="jos rounded-[20px] bg-white p-6 ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-0.5"
                    data-jos_animation="fade-up"
                    data-jos_delay={`${0.1 * (i + 1)}`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-[40px] w-[40px]">
                        <Image src={c.icon} alt="" width={40} height={40} />
                      </div>
                      <h3 className={`${H3} font-bold`}>{c.title}</h3>
                    </div>
                    <p className={BODY}>{c.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*...::: Approach (black band) :::... */}
        <section id="approach">
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
                  {
                    title: "Think clearly",
                    desc:
                      "Write it down, make it smaller, choose the order. Clear thinking beats clever planning.",
                    delay: "0.05",
                  },
                  {
                    title: "Prototype early",
                    desc:
                      "Clickable flows and vertical slices reveal truth faster than slideware and debates.",
                    delay: "0.1",
                  },
                  {
                    title: "Build for learning",
                    desc:
                      "Every feature ships with telemetry and a rollback path so we can move fast without fear.",
                    delay: "0.15",
                  },
                  {
                    title: "Quality by default",
                    desc:
                      "Accessible UI, resilient APIs, and thoughtful empty/error states—so growth doesn’t crack the product.",
                    delay: "0.2",
                  },
                  {
                    title: "One team",
                    desc:
                      "Same docs, same standup, same Slack. We operate like your in-house squad, not a black box.",
                    delay: "0.25",
                  },
                  {
                    title: "Own outcomes",
                    desc:
                      "We track activation, retention, and revenue. If a task won’t move a metric, we question it.",
                    delay: "0.3",
                  },
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
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-colorOrangyRed"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                          />
                        </svg>
                      </span>
                      <h3 className={`${H3} text-white`}>{item.title}</h3>
                    </div>
                    <p className="text-[15px] leading-[1.7] text-white/80">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*...::: Use cases :::... */}
        <section id="use-cases">
          <div className="pb-20 pt-20 xl:pb-[150px]">
            <div className="global-container">
              <div
                className="jos mb-10 text-center lg:mb-14"
                data-jos_animation="fade"
              >
                <div className="mx-auto md:max-w-xl lg:max-w-3xl">
                  <h2 className={H2}>Where this wins</h2>
                  <p className={`${BODY} mt-3 text-black/60`}>
                    Patterns we’ve shipped across industries.
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {useCases.map((u, i) => (
                  <li
                    key={u.title}
                    className="jos rounded-[16px] bg-white p-6 ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-0.5"
                    data-jos_animation="fade-up"
                    data-jos_delay={`${0.06 * (i + 1)}`}
                  >
                    <div className={`${H3}`}>{u.title}</div>
                    <p className={`${BODY} mt-2`}>{u.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*...::: Video + Metrics band :::... */}
        <section id="video-metrics">
          <div className="mx-auto max-w-[1500px] px-5">
            <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
              {/* Left: image + play */}
              <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                <Image
                  src="/assets/img_placeholder/th-1/funfact-image.jpg"
                  alt="Behind the design"
                  width={721}
                  height={784}
                  className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
                  priority
                />
                <button
                  className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
                  aria-label="Play video"
                  onClick={() => setToggler(!toggler)}
                >
                  <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorOrangyRed hover:text-white">
                    Play
                    <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30" />
                  </div>
                </button>
              </div>
              <FsLightbox
                toggler={toggler}
                sources={["https://www.youtube.com/watch?v=3nQNiWdeH2Q"]}
              />

              {/* Right: copy + counters */}
              <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                <div className="mb-8 lg:mb-6">
                  <h2 className={`${H2} text-white`}>Design that ships cleanly to dev</h2>
                </div>
                <div>
                  <p className={`${LEAD} text-white`}>
                    We don’t stop at pretty. We deliver tokens, states, and specs developers can implement fast—without guesswork.
                  </p>
                </div>
                <div className="my-10 h-[1px] w-full bg-colorCodGray" />
                <ul className="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20">
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                      data-module="countup"
                    >
                      <span className="start-number" data-countup-number={98}>98</span>%
                    </h3>
                    <span className={`${LEAD} block text-white`}>Client satisfaction</span>
                  </li>
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                      data-module="countup"
                    >
                      <span className="start-number" data-countup-number={10}>10</span>
                    </h3>
                    <span className={`${LEAD} block text-white`}>Weeks to MVP avg.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Process (vertical timeline) :::... */}
        <section id="process">
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            <div className="global-container">
              <div
                className="jos mb-10 text-center lg:mb-16 xl:mb-20"
                data-jos_animation="fade"
              >
                <div className="mx-auto md:max-w-xl lg:max-w-3xl">
                  <h2 className={H2}>Our process</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Left column timeline */}
                <ul
                  className="jos relative space-y-8 lg:space-y-10"
                  data-jos_animation="fade-right"
                >
                  <div className="pointer-events-none absolute left-[15px] top-0 hidden h-full w-px bg-black/10 sm:block" />
                  {process.slice(0, 4).map((p) => (
                    <li key={p.step} className="relative pl-10 sm:pl-12">
                      <span className="absolute left-0 top-1 grid h-8 w-8 place-content-center rounded-full bg-black text-xs font-semibold text-white ring-2 ring-white sm:left-0">
                        {p.step}
                      </span>
                      <div className="rounded-[16px] bg-white p-5 ring-1 ring-black/10">
                        <div className={`${H3}`}>{p.title}</div>
                        <ul className="mt-3 space-y-1 text-black/80">
                          {p.items.map((d) => (
                            <li key={d} className={`${BODY} flex items-start gap-2`}>
                              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/60" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Right column timeline */}
                <ul
                  className="jos relative space-y-8 lg:space-y-10"
                  data-jos_animation="fade-left"
                >
                  <div className="pointer-events-none absolute left-[15px] top-0 hidden h-full w-px bg-black/10 sm:block" />
                  {process.slice(4).map((p) => (
                    <li key={p.step} className="relative pl-10 sm:pl-12">
                      <span className="absolute left-0 top-1 grid h-8 w-8 place-content-center rounded-full bg-black text-xs font-semibold text-white ring-2 ring-white sm:left-0">
                        {p.step}
                      </span>
                      <div className="rounded-[16px] bg-white p-5 ring-1 ring-black/10">
                        <div className={`${H3}`}>{p.title}</div>
                        <ul className="mt-3 space-y-1 text-black/80">
                          {p.items.map((d) => (
                            <li key={d} className={`${BODY} flex items-start gap-2`}>
                              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/60" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*...::: Deliverables & timeline :::... */}
        <section id="deliverables">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">
                {/* Media */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/img_placeholder/th-1/content-image-4.jpg"
                    alt="Deliverables preview"
                    width={529}
                    height={500}
                    className="h-auto w-full"
                  />
                </div>

                {/* Copy */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  <div className="mb-6">
                    <Chip>Deliverables & timeline</Chip>
                    <h2 className={`${H2} mt-3`}>What you get</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className={`${H3} mb-2`}>UX</h3>
                      <ul className="space-y-2">
                        {deliverables.ux.map((d) => (
                          <li key={d} className={`${BODY} flex items-start gap-3`}>
                            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-black" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className={`${H3} mb-2`}>UI</h3>
                      <ul className="space-y-2">
                        {deliverables.ui.map((d) => (
                          <li key={d} className={`${BODY} flex items-start gap-3`}>
                            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-black" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:col-span-2">
                      <h3 className={`${H3} mb-2`}>Handoff</h3>
                      <ul className="space-y-2">
                        {deliverables.handoff.map((d) => (
                          <li key={d} className={`${BODY} flex items-start gap-3`}>
                            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-black" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[12px] bg-colorLinenRuffle p-4 ring-1 ring-black/5">
                    <div className={`${MICRO}`}>Typical timeline</div>
                    <div className="mt-1 font-raleway text-lg font-bold">
                      8–12 weeks • Weekly demos • Fixed scope or retainer
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/contact" className={BTN_PRIMARY}>
                      Start a project
                    </Link>
                  </div>
                </div>
              </div>

              {/* proof strip */}
              <div
                className="jos mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
                data-jos_animation="fade"
              >
                {[
                  { n: "01", t: "Outcomes, not output", c: "We set measurable targets and ship against them—no black boxes." },
                  { n: "02", t: "Build to learn", c: "Every sprint tightens activation, retention, or revenue." },
                  { n: "03", t: "Scale without bloat", c: "Clean UI, clean code, fewer regressions." },
                ].map((b) => (
                  <div
                    key={b.n}
                    className="rounded-[20px] bg-colorLinenRuffle p-6 ring-1 ring-black/5"
                  >
                    <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold ring-1 ring-black/10">
                      {b.n}
                    </div>
                    <h3 className="font-dmSans text-[20px] leading-[1.2]">
                      {b.t}
                    </h3>
                    <p className={`${BODY} mt-2 text-black/75`}>{b.c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*...::: Why choose us :::... */}
        <section id="why-choose-us">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div
                className="jos mb-10 text-center lg:mb-16 xl:mb-20"
                data-jos_animation="fade"
              >
                <div className="mx-auto md:max-w-xl lg:max-w-3xl">
                  <h2 className={H2}>Your success is our priority</h2>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {benefits.map((b, i) => (
                  <li
                    key={b.title}
                    className="jos rounded-[20px] bg-white p-6 ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-0.5"
                    data-jos_animation="fade-up"
                    data-jos_delay={`${0.08 * (i + 1)}`}
                  >
                    <div className={`${H3}`}>{b.title}</div>
                    <p className={`${BODY} mt-2`}>{b.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*...::: FAQs :::... */}
        <section id="faqs">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div
                className="jos mb-10 text-center lg:mb-16 xl:mb-20"
                data-jos_animation="fade"
              >
                <div className="mx-auto md:max-w-xl lg:max-w-3xl">
                  <h2 className={H2}>Questions—answered</h2>
                </div>
              </div>

              <ul className="mx-auto max-w-3xl">
                {faqs.map((f, i) => (
                  <li
                    key={f.q}
                    className="jos border-b border-[#DBD6CF] py-6 first:pt-0 last:border-b-0"
                    data-jos_animation="fade-up"
                    data-jos_delay={`${0.05 * (i + 1)}`}
                  >
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] lg:text-[28px]">
                        <span>{f.q}</span>
                        <span className="ml-6 grid h-7 w-7 place-content-center rounded-full ring-1 ring-black/10 transition-all group-open:bg-black group-open:text-white">
                          +
                        </span>
                      </summary>
                      <div className={`${BODY} mt-3 pr-2 text-[#2C2C2C]`}>{f.a}</div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*...::: Contact band :::... */}
        <section id="contact">
          <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
                {/* Left image */}
                <div
                  className="jos order-2 overflow-hidden rounded-[20px] md:order-1"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/img_placeholder/th-1/about-contact-img.jpg"
                    alt="Contact band"
                    width={526}
                    height={550}
                    className="h-auto w-full"
                  />
                </div>

                {/* Right copy */}
                <div
                  className="jos order-1 md:order-2"
                  data-jos_animation="fade-down"
                >
                  <div className="mb-8 max-w-sm md:max-w-max lg:mb-10 xl:mb-6">
                    <h2 className={`${H2} text-white`}>Let’s design your app</h2>
                  </div>
                  <div>
                    <p className={`${LEAD} text-white`}>
                      Share what you’re building. We’ll return a scope, risks, and a price band within 48 hours.
                    </p>
                  </div>

                  <ul className="mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                      Website:
                      <Link
                        rel="noopener noreferrer"
                        href="https://www.devibi.com"
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
                        href="tel:+0123456789"
                        className="text-white hover:text-colorOrangyRed"
                      >
                        (012) 345-6789
                      </Link>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Link href="/contact" className={BTN_INVERT}>
                      Start a project
                    </Link>
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

export default ServiceDetails;
