// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// SEO Optimized Metadata
export const metadata = {
  title: 'B2B SaaS Development & Activation Agency | Devibi',
  description: 'We help B2B SaaS companies launch products that users actually use. Our fixed-price Launch Blueprint, MVP Sprints, and Activation Lifts de-risk your investment.',
  alternates: { canonical: '/' },
};

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import RecentCases from "@/components/sections/RecentCases";
import HomeAccordion from "@/components/HomeAccordion";
import BrandSlider from "@/components/BrandSlider";

function Home() {

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


  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Header_01 />

      <main className="main-wrapper relative overflow-hidden">
        {/* ===========================
              HERO
        ============================ */}
        <section id="section-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                <h1 className={`jos slide-from-bottom mb-6 max-w-[1076px] ${H1}`}>
                  Stop Building Software Nobody Uses.
                </h1>

                <p
                  className={`jos slide-from-bottom mb-11 max-w-[980px] font-semibold ${LEAD}`}
                >
                  A product development agency for B2B SaaS founders who are tired of building features nobody uses. We help you de-risk your investment and build products that drive user activation.
                </p>

                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <Link
                    href="/contact"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >
                    Book a 30-min Backlog Tear-Down
                  </Link>
                  <Link
                    href="/portfolio"
                    className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >
                    See Our Work
                  </Link>
                </div>
              </div>

              <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20" />
              
              {/* This section can be used as a qualitative proof strip */}
              <div className="jos mx-auto mb-12 max-w-[900px] text-center lg:mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      <div className="text-center">
                          <p className={`font-semibold ${BODY}`}>From a 10-page idea to a clickable, user-tested prototype in 7 days.</p>
                      </div>
                      <div className="text-center">
                          <p className={`font-semibold ${BODY}`}>Weekly demos of working software, guaranteed.</p>
                      </div>
                      <div className="text-center">
                          <p className={`font-semibold ${BODY}`}>A dedicated team laser-focused on your user activation metrics.</p>
                      </div>
                  </div>
              </div>
              <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16 jos" bis_skin_checked="1" data-jos_once="1" data-jos_animation="fade-up" data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_delay="0.5" data-jos_counter="1">
                <p className="text-lg leading-[1.55] lg:text-[21px]">Designing and developing products for startups backed by</p>
                </div>

              <BrandSlider />
            </div>

            {/* decorative dots */}
            <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]" />
            <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]" />
          </div>
        </section>

        {/* ===========================
              CORE SERVICES
        ============================ */}
        <section id="section-service">
          <div className="pt-20 pb-20 xl:pb-[150px] xl:pt-[130px]">
            <div className="global-container">
              <div className="jos mb-10 lg:mb-16 xl:mb-20">
                <div className="md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
                  <h2 className={H2}>A Clear Path from Idea to Activation</h2>
                </div>
              </div>

              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[12px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "service-icon",
                    n: "1",
                    title: "Launch Blueprint",
                    copy:
                      "Validate your idea in 7 days. Get a clickable prototype, clear risks, and a fixed-price MVP scope to de-risk your investment.",
                    href: "/services/launch-blueprint",
                  },
                  {
                    icon: "service-icon",
                    n: "2",
                    title: "MVP Sprint",
                    copy:
                      "Go from approved scope to a market-ready MVP in 8–12 weeks. We build, you get weekly demos, and we ship to your first users.",
                    href: "/services/mvp-sprint",
                  },
                  {
                    icon: "service-icon",
                    n: "3",
                    title: "Activation Lift",
                    copy:
                      "Turn new signups into active users. We run data-driven experiments on your onboarding, pricing, and UX to reduce churn.",
                    href: "/services/activation-lift",
                  },
                  {
                    icon: "service-icon",
                    n: "4",
                    title: "Practical AI Pilot",
                    copy:
                      "Leverage AI to create a stickier product. We build and deploy solutions like RAG-powered search and support copilots in a 6-10 week pilot.",
                    href: "/services/practical-ai",
                  },
                ].map((s, i) => (
                  <li
                    key={s.title}
                    className="group bg-white p-[26px] transition-all duration-300 ease-in-out hover:bg-black sm:p-7"
                  >
                    <div className="relative mb-7 h-[56px] w-[56px]">
                      <Image
                        src={`/assets/img_placeholder/th-1/${s.icon}-black-${i + 1}.svg`}
                        alt=""
                        width="56"
                        height="56"
                        className="opacity-90"
                      />
                      <Image
                        src={`/assets/img_placeholder/th-1/${s.icon}-orange-${i + 1}.svg`}
                        alt=""
                        width="56"
                        height="56"
                        className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                      />
                    </div>

                    <h3
                      className={`mb-3 block -tracking-[0.5px] group-hover:text-white ${H3}`}
                    >
                      <Link href={s.href} className="hover:text-colorOrangyRed">
                        {s.title}
                      </Link>
                    </h3>

                    <p className={`mb-10 transition-colors ${BODY} group-hover:text-white`}>
                      {s.copy}
                    </p>

                    <Link
                      href={s.href}
                      aria-label={`${s.title} details`}
                      className="relative inline-grid h-[32px] w-[32px] place-content-center rounded-full ring-1 ring-black/10 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white"
                    >
                      <Image
                        src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                        alt=""
                        width="30"
                        height="30"
                        className="block group-hover:hidden"
                      />
                      <Image
                        src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                        alt=""
                        width="30"
                        height="30"
                        className="absolute left-0 top-0 hidden h-full w-full group-hover:block"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===========================
              SPRINTS / MEASUREMENT (dark)
        ============================ */}
        <section id="funfact-section">
          <div className="mx-auto max-w-[1500px] px-5">
            <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
              {/* media */}
              <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                <Image
                  src="/assets/img_placeholder/th-1/funfact-image.jpg"
                  alt="A B2B SaaS dashboard showing user activation metrics"
                  width="721"
                  height="784"
                  className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
                />
                <Link
                  data-fslightbox="gallery"
                  rel="noopener noreferrer"
                  aria-label="Play our process overview video"
                  href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                  className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorOrangyRed hover:text-white">
                    Play
                    <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30" />
                  </div>
                </Link>
              </div>

              {/* content */}
              <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                <div className="mb-8 lg:mb-16 xl:mb-6">
                  <h2 className={`${H2} text-white`}>Radical Transparency, Delivered Weekly</h2>
                </div>

                <div className={`${LEAD} text-left text-white`}>
                  <p className="mb-7 last:mb-0">
                    No more black box development. We work in tight, one-week sprints with a demo of working software every Friday. Every feature has clear acceptance criteria, and you have full access to our project boards. We track the metrics that matter and report on them weekly.
                  </p>
                </div>

                <div className="my-12 h-[1px] w-full bg-colorCodGray" />

                <ul className="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20">
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                    >
                      7
                    </h3>
                    <span className="block text-lg font-normal text-white lg:text-[21px]">
                      Days to a clickable prototype
                    </span>
                  </li>
                  <li>
                    <h3
                      className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]"
                    >
                      100
                      %
                    </h3>
                    <span className="block text-lg font-normal text-white lg:text-[21px]">
                      Weekly demo success rate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===========================
              MVP CONTENT SECTIONS
        ============================ */}
        <section id="content-section-1">
          <div className="pt-40 pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32">
                <div
                  className="jos order-2 overflow-hidden rounded-md md:order-1"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/img_placeholder/th-1/content-image-1.jpg"
                    alt="The Devibi team collaborating on wireflows during a product discovery workshop"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>

                <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
                  <div className="mb-6">
                    <h2 className={H2}>De-Risk Your Product Investment</h2>
                  </div>

                  <div className={LEAD}>
                    <p className="mb-7 last:mb-0">
                      Our fixed-price Launch Blueprint validates your idea before you commit to a full build. In one week, you get a clickable prototype, user feedback, a clear technical roadmap, and a fixed-price proposal for your MVP.
                    </p>
                    <p className="mb-7 last:mb-0">
                      This gives you a clear &quot;go/no-go&quot; decision point, backed by data, so you can invest with confidence or pivot before it&apos;s too late.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="content-section-2">
          <div className="pb-40 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                <div className="jos order-2 overflow-hidden rounded-md" data-jos_animation="fade-left">
                  <Image
                    src="/assets/img_placeholder/th-1/content-image-2.jpg"
                    alt="A user interacting with a B2B SaaS product's improved onboarding flow"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>

                <div className="jos order-1" data-jos_animation="fade-right">
                  <div className="mb-6">
                    <h2 className={H2}>An Obsession with User Activation</h2>
                  </div>

                  <div className={LEAD}>
                    <p className="mb-7 last:mb-0">
                      Launching is just the beginning. A successful SaaS product is one that users activate, adopt, and can&apos;t live without. That&apos;s why we don&apos;t stop at shipping code.
                    </p>

                    <ul className="lg:mt-12 font-dmSans text-xl leading-tight tracking-tighter text-black lg:text-[28px]">
                      {[
                        "Improve onboarding completion rates",
                        "Shorten time-to-first-value (&apos;Aha!&apos; moment)",
                        "Reduce customer support load",
                      ].map((li) => (
                        <li key={li} className="mb-5 flex items-start gap-x-3">
                          <div className="mt-[2.5px] h-[30px] w-[30px]">
                            <Image
                              src="/assets/img_placeholder/th-1/check-circle.svg"
                              alt=""
                              width="30"
                              height="30"
                              className="h-full w-full"
                            />
                          </div>
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===========================
              PROCESS (dark, compact)
        ============================ */}
        <section id="section-working-process">
          <div className="mx-auto max-w-[1500px] px-5">
            <div className="jos relative z-[1] mx-auto max-w-full rounded-[30px] bg-black lg:rounded-[50px]">
              <div className="py-16 sm:px-10 md:px-20 lg:py-20 xl:px-[100px] xl:py-[130px]">
                <div className="global-container">
                  <div className="jos mx-auto mb-6 text-center md:mb-10 md:max-w-xl lg:mb-12 lg:max-w-3xl xl:max-w-[1000px]">
                    <h2 className={`${H2} text-white`}>Our Process</h2>
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
                        title: "Launch Blueprint",
                        copy:
                          "We start with a fixed-price discovery to validate your idea, define scope, and de-risk the project.",
                        href: "/services/launch-blueprint",
                      },
                      {
                        n: "02",
                        icon: "icon-black-work-process-2.svg",
                        title: "MVP Sprint",
                        copy:
                          "We build your core product in 8-12 weeks, with weekly demos to ensure we&apos;re on the right track.",
                        href: "/services/mvp-sprint",
                      },
                      {
                        n: "03",
                        icon: "icon-black-work-process-3.svg",
                        title: "Ship & Learn",
                        copy: "We help you launch your MVP to your first users and start gathering critical feedback and data.",
                        href: "/services/mvp-sprint",
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
                          title: "Activation Lift",
                          copy: "We run data-driven experiments to improve your user onboarding and activation rates.",
                          href: "/services/activation-lift",
                        },
                        {
                          n: "05",
                          icon: "icon-black-work-process-5.svg",
                          title: "Scale & Grow",
                          copy:
                            "We help you scale your product with confidence, whether it's adding new features, improving performance, or integrating AI.",
                          href: "/services/scale",
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

              {/*...::: Who We Partner With :::...*/}
        <section id="who-we-partner-with">
          <div className="pb-20 pt-20 lg:pt-40">
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



        {/* ===========================
              RECENT CASES (shared cards)
        ============================ */}
        <RecentCases limit={3} />

              {/* ===========================
              TESTIMONIALS (dark)
        ============================ */}
        <section className="testimonial-section">
          <div className="bg-black pb-20 pt-20 xl:pb-[200px] xl:pt-[130px]">
            <div className="global-container">
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-[680px]">
                  <h2 className={`${H2} text-white`}>What founders say</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    copy:
                      "We shipped in ten weeks and closed our first paying users. The weekly demos kept us on track.",
                    name: "Max Weber",
                    role: "Founder",
                    img: "testimonial-img-1.jpg",
                    delay: "0.1",
                  },
                  {
                    copy:
                      "Onboarding time dropped from an hour to minutes. Support tickets fell. It made a real difference.",
                    name: "Douglas Smith",
                    role: "CEO",
                    img: "testimonial-img-2.jpg",
                    delay: "0.2",
                  },
                  {
                    copy:
                      "Clear scope, tight sprints, no surprises. Hand-over was smooth for our in-house team.",
                    name: "Abraham Maslo",
                    role: "CTO",
                    img: "testimonial-img-3.jpg",
                    delay: "0.3",
                  },
                  {
                    copy:
                      "The team owned outcomes. They shipped and they measured. That is rare.",
                    name: "Jack Fayol",
                    role: "Product Lead",
                    img: "testimonial-img-4.jpg",
                    delay: "0.1",
                  },
                  {
                    copy:
                      "Integration was smooth. Docs were clear. Our team could take over on day one.",
                    name: "Karen Lynn",
                    role: "Engineering Manager",
                    img: "testimonial-img-5.jpg",
                    delay: "0.2",
                  },
                  {
                    copy:
                      "The return made sense. Faster revenue and fewer tickets. We would do it again.",
                    name: "Henry Ochi",
                    role: "COO",
                    img: "testimonial-img-6.jpg",
                    delay: "0.3",
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                    data-jos_animation="fade-left"
                    data-jos_delay={t.delay}
                  >
                    <div className="block">
                      <Image
                        src="/assets/img_placeholder/th-1/rating.svg"
                        alt="5-star rating"
                        width="146"
                        height="25"
                      />
                    </div>
                    <p className={BODY}>{t.copy}</p>
                    <div className="flex items-center gap-x-4">
                      <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                        <Image
                          src={`/assets/img_placeholder/th-1/${t.img}`}
                          alt={`${t.name}`}
                          width="60"
                          height="60"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <span className="block text-lg font-semibold leading-[1.6]">
                          {t.name}
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

              {/* ===========================
              WHY US (light)
        ============================ */}
        <section id="section-why-us">
          <div className="global-container">
            <div
              className="jos mb-10 pt-40 text-center lg:mb-16 xl:mb-20"
              data-jos_animation="fade"
            >
              <p className={`mb-3 font-semibold ${MICRO}`}>Why We&apos;re Different</p>
              <h2 className={H2}>Built for founders who need outcomes</h2>
              <p className={`mx-auto mt-4 max-w-[760px] text-black/70 ${LEAD}`}>
                We focus on MVP speed, clean delivery, and the growth metrics that matter from day one. No fluff.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="jos" data-jos_animation="fade-right">
                <div className="relative border-l-2 border-[#DBD6CF]">
                  {[
                    {
                      n: "1",
                      t: "Fixed-Price Discovery",
                      c:
                        "Our Launch Blueprint de-risks your project with a clear scope, clickable prototype, and a fixed price for your MVP.",
                    },
                    {
                      n: "2",
                      t: "Activation-Obsessed",
                      c:
                        "We don&apos;t just ship code. We instrument analytics and run experiments to ensure users get to their &apos;Aha!&apos; moment, faster.",
                    },
                    {
                      n: "3",
                      t: "Owner-Ready Handover",
                      c:
                        "You get clean code, clear documentation, and a process your in-house team can adopt without missing a beat.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.n}
                      className={`relative pl-8 ${i < 2 ? "pb-10" : ""}`}
                    >
                      <span className="absolute -left-[15px] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-bold">
                        {item.n}
                      </span>
                      <h3 className={`mb-2 font-bold lg:text-2xl ${H3}`}>{item.t}</h3>
                      <p className="text-black/75">{item.c}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="jos" data-jos_animation="fade-left">
                <ul className="space-y-6">
                  {[
                    {
                      t: "Radical Transparency",
                      c:
                        "With weekly demos and full access to our project boards, you&apos;re never in the dark.",
                    },
                    {
                      t: "Practical AI, Not Science Projects",
                      c:
                        "We focus on AI that solves real problems: better onboarding, smarter search, and efficient support.",
                    },
                    {
                      t: "No Lock-In, Ever",
                      c:
                        "You own the code from day one. Our process is designed to empower your team, not create dependencies.",
                    },
                  ].map((li) => (
                    <li key={li.t} className="flex items-start gap-3">
                      <Image
                        src="/assets/img_placeholder/th-1/check-circle.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h3 className={`mb-1 lg:text-2xl ${H3}`}>{li.t}</h3>
                        <p className="text-black/75">{li.c}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { k: "1 Week", v: "Launch Blueprint" },
                    { k: "8–12w", v: "MVP Sprint" },
                    { k: "Aha!", v: "Activation Lift" },
                    { k: "AI", v: "Practical Pilots" },
                  ].map((chip) => (
                    <div
                      key={chip.k}
                      className="rounded-[10px] border-2 border-black bg-white p-4 text-center"
                    >
                      <div className="text-2xl font-bold">{chip.k}</div>
                      <div className="text-sm">{chip.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="jos mt-12 flex items-center justify-center gap-3"
              data-jos_animation="fade"
            >
              <Link
                href="/contact"
                className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
              >
                Book a 30-min Backlog Tear-Down
              </Link>
            </div>
          </div>
        </section>

        {/* ===========================
              FAQ
        ============================ */}
        <section className="faq-section">
          <div className="pb-20 pt-20 lg:pt-40 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                <div className="jos flex flex-col" data-jos_animation="fade-right">
                  <div className="mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2 className={H2}>Frequently Asked Questions</h2>
                    </div>
                  </div>

                  <div className={LEAD}>
                    <p className="mb-7 last:mb-0">
                      We believe in clear scope, weekly demos, and measurable outcomes. If you have a different question, we&apos;re happy to answer it on a call.
                    </p>
                    <Link
                      href="/contact"
                      className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    >
                      Ask a question
                    </Link>
                  </div>
                </div>

                <div
                  className="jos md:ml-10 lg:ml-20 xl:ml-32"
                  data-jos_animation="fade-left"
                >
                  <HomeAccordion />
                </div>
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
              Let&apos;s talk
            </span>
            <h2 className={`${H2} text-white`}>
              Ready to Build a Product Your Customers Love?
            </h2>
          </div>

          {/* Lead */}
          <p className={`${LEAD} text-white/90 max-w-2xl`}>
            Send your goals and constraints. We&apos;ll reply within 24–48 hours with a
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
              Book a 30-min Backlog Tear-Down
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

        {/* soft BG accents */}
        <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]" />
        <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]" />
      </main>

      <Footer_01 />
    </div>
  );
}

export default Home;