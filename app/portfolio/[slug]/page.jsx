import { CASES } from "@/lib/cases";
import { baseMeta, urlFor } from "@/lib/seo/meta";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbLD, caseStudyLD } from "@/lib/jsonld";
import { notFound } from "next/navigation";
import Header_01 from "@/components/header/Header_01";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return Array.isArray(CASES) ? CASES.map(c => ({ slug: c.slug })) : [];
}

export function generateMetadata({ params }) {
  const cs = Array.isArray(CASES) ? CASES.find(c => c.slug === params.slug) : null;
  if (!cs) return {};
  const canonical = urlFor(`/portfolio/${params.slug}`);
  return baseMeta({
    title: `${cs.title} — Case Study`,
    description: cs.seo?.description || cs.summary || "A detailed case study.",
    canonical,
    image: cs.hero?.src || cs.img,
    type: "article"
  });
}

export default function Page({ params }) {
  const cs = Array.isArray(CASES) ? CASES.find(c => c.slug === params.slug) : null;
  if (!cs) return notFound();

  const canonical = urlFor(`/portfolio/${params.slug}`);
  const crumbs = breadcrumbLD([
    { name: "Home", item: urlFor("/") },
    { name: "Portfolio", item: urlFor("/portfolio") },
    { name: cs.title, item: canonical }
  ]);
  const ld = caseStudyLD({
    canonical,
    title: cs.title,
    description: cs.summary,
    image: cs.hero?.src || cs.img
  });

  const H1 =
    "font-raleway text-[40px] leading-[1.06] sm:text-[48px] lg:text-[64px] xl:text-[80px]";
  const H2 =
    "font-raleway text-[32px] leading-[1.06] sm:text-[40px] lg:text-[56px] xl:text-[64px]";
  const H3 =
    "font-raleway text-[22px] leading-[1.2] sm:text-[24px] lg:text-[26px]";
  const LEAD = "text-lg leading-[1.55] lg:text-[21px]";
  const BODY = "text-[15px] leading-[1.7] sm:text-base";
  const MICRO = "text-[11px] uppercase tracking-[0.12em] text-black/60";

  const BTN_PRIMARY =
    "inline-flex items-center gap-2 rounded-full border-2 border-black bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:border-colorOrangyRed hover:bg-colorOrangyRed";
  const BTN_SECONDARY =
    "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black ring-1 ring-black/15 transition-all hover:ring-black/30";

  const heroImg = cs.hero?.src || cs.img;
  const heroAlt = cs.hero?.alt || cs.alt || cs.title;

  const Section = ({ id, children }) => (
    <section id={id}>
      <div className="pb-16 pt-12 xl:pb-[120px] xl:pt-[90px]">
        <div className="global-container">{children}</div>
      </div>
    </section>
  );

  const Card = ({ children, className = "" }) => (
    <div
      className={`rounded-[20px] bg-white p-6 ring-1 ring-black/10 ${className}`}
    >
      {children}
    </div>
  );

  const outline = [
    { id: "key-outcomes", label: "Outcomes", show: Array.isArray(cs.bullets) && cs.bullets.length > 0 },
    { id: "metrics", label: "Metrics", show: Array.isArray(cs.metrics) && cs.metrics.length > 0 },
    { id: "overview", label: "Story", show: Boolean(cs.overview || cs.overviewTitle || cs.summary) },
    { id: "business", label: "Challenges", show: Boolean(cs.business || cs.problems) },
    { id: "features", label: "Features", show: Boolean(cs.features?.items?.length) },
    { id: "process", label: "Process", show: Array.isArray(cs.process) && cs.process.length > 0 },
    { id: "gallery", label: "Highlights", show: Array.isArray(cs.gallery) && cs.gallery.length > 0 },
    { id: "quote", label: "Quote", show: Boolean(cs.quote?.text) },
    { id: "awards", label: "Recognition", show: Array.isArray(cs.awards) && cs.awards.length > 0 },
  ].filter((x) => x.show);

  return (
    <>
      <Header_01 />

      <main className="main-wrapper relative overflow-hidden">
        {/* dotted motif background */}
        <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* ----------------------------- Breadcrumb ----------------------------- */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">{cs.title}</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>Case Study</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ Hero + Snapshot ------------------------------ */}
        <Section id="hero">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
            {/* Media */}
            <div className="overflow-hidden rounded-[22px] ring-1 ring-black/10">
              {heroImg ? (
                <Image
                  src={heroImg}
                  alt={heroAlt}
                  width={1280}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              ) : (
                <div className="grid h-[340px] place-content-center bg-white text-black/50">
                  No image
                </div>
              )}
            </div>

            {/* Copy and “At a glance” */}
            <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
              {cs.tagline && <div className={`${MICRO}`}>{cs.tagline}</div>}
              <h2 className={H2}>The brief</h2>
              {cs.summary && <p className={`${LEAD} mt-2`}>{cs.summary}</p>}

              {/* Snapshot cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card>
                  <div className={MICRO}>Client</div>
                  <div className="mt-1 font-raleway text-xl font-bold">
                    {cs.client}
                    {cs.clientLocation ? ` · ${cs.clientLocation}` : ""}
                  </div>
                </Card>
                {cs.industry && (
                  <Card>
                    <div className={MICRO}>Industry</div>
                    <div className="mt-1 font-raleway text-xl font-bold">
                      {cs.industry}
                    </div>
                  </Card>
                )}
                {cs.timeline && (
                  <Card>
                    <div className={MICRO}>Timeline</div>
                    <div className="mt-1 font-raleway text-xl font-bold">
                      {cs.timeline}
                    </div>
                  </Card>
                )}
                {cs.result && (
                  <Card>
                    <div className={MICRO}>Headline result</div>
                    <div className="mt-1 font-raleway text-xl font-bold text-emerald-700">
                      {cs.result}
                    </div>
                  </Card>
                )}
              </div>

              {/* Tags */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Array.isArray(cs.services) && cs.services.length > 0 && (
                  <Card>
                    <div className={MICRO}>Services</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cs.services.slice(0, 8).map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-black/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}
                {Array.isArray(cs.tech) && cs.tech.length > 0 && (
                  <Card>
                    <div className={MICRO}>Tech stack</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cs.tech.slice(0, 10).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-2 rounded-xl bg-colorLinenRuffle px-3 py-1 text-[12px] ring-1 ring-black/10"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-colorOrangyRed" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-2 flex flex-wrap gap-3">
                {cs.cta?.href && (
                  <Link href={cs.cta.href} className={BTN_PRIMARY}>
                    {cs.cta.label || "View live"}
                  </Link>
                )}
                <Link href="/contact" className={BTN_SECONDARY}>
                  Start a project
                </Link>
                <Link href="/portfolio" className={BTN_SECONDARY}>
                  More cases
                </Link>
              </div>
            </aside>
          </div>
        </Section>

        {/* ------------------------------ Section Outline chips ------------------------------ */}
        {outline.length > 0 && (
          <Section id="outline">
            <div className="flex flex-wrap gap-2">
              {outline.map((o) => (
                <Link
                  key={o.id}
                  href={`#${o.id}`}
                  className="rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-black/10 hover:ring-black/20"
                >
                  {o.label}
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* ------------------------------ Outcomes (compact cards) ------------------------------ */}
        {Array.isArray(cs.bullets) && cs.bullets.length > 0 && (
          <Section id="key-outcomes">
            <div className="mx-auto mb-8 text-center lg:mb-10 xl:mb-12 md:max-w-2xl">
              <h2 className={H2}>Key outcomes</h2>
              <p className={`${BODY} mt-3 text-black/60`}>
                What changed after the engagement.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {cs.bullets.map((b, i) => (
                <li
                  key={i}
                  className="rounded-[20px] bg-white p-6 ring-1 ring-black/10"
                >
                  <h3 className={`${H3} mb-2`}>{b.title}</h3>
                  {b.copy && (
                    <p className={`${BODY} text-black/70`}>{b.copy}</p>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* ------------------------------ Metrics strip ------------------------------ */}
        {Array.isArray(cs.metrics) && cs.metrics.length > 0 && (
          <Section id="metrics">
            <div className="mx-auto mb-8 text-center md:max-w-xl">
              <h2 className={H2}>Impact in numbers</h2>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cs.metrics.map((m, i) => (
                <li
                  key={i}
                  className="rounded-[18px] bg-white p-5 ring-1 ring-black/10"
                >
                  <div className={MICRO}>{m.label}</div>
                  <div className="mt-1 font-raleway text-[28px] font-bold leading-none">
                    {m.value}
                  </div>
                  {m.note && (
                    <div className={`${BODY} mt-2 text-black/70`}>{m.note}</div>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* ------------------------------ Story (Overview + Highlights) ------------------------------ */}
        {(cs.overview || cs.overviewTitle || cs.summary) && (
          <Section id="overview">
            <div className="mx-auto text-center md:max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-colorOrangyRed" />
                Overview
              </span>
              <h2 className={`${H2} mt-3`}>
                {cs.overviewTitle || "The story at a glance"}
              </h2>
              {cs.overview && (
                <p className={`${LEAD} mt-3 text-black/70`}>{cs.overview}</p>
              )}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr]">
              {/* Narrative */}
              <Card>
                {cs.summary && (
                  <p className={`${BODY} text-black/80`}>{cs.summary}</p>
                )}
                {Array.isArray(cs.bullets) && cs.bullets.length > 0 && (
                  <div className="mt-6">
                    <div className={MICRO}>Highlights</div>
                    <ul className="mt-3 space-y-3">
                      {cs.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="rounded-xl border border-black/10 bg-white p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-black text-white">
                              <svg
                                viewBox="0 0 20 20"
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              >
                                <path
                                  d="M15.5 6.5 8.6 13.4 4.5 9.3"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <div className="flex-1">
                              <div className="font-raleway text-[18px] font-semibold">
                                {b.title}
                              </div>
                              {b.copy && (
                                <p className={`${BODY} mt-1 text-black/70`}>
                                  {b.copy}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>

              {/* At a glance mini again for long reads on mobile */}
              <aside className="relative overflow-hidden rounded-2xl bg-[#0B0B0B] p-6 text-white ring-1 ring-black/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <div className="text-[11px] uppercase tracking-[0.12em] text-white/70">
                  At a glance
                </div>

                <ul className="mt-3 space-y-3">
                  <li>
                    <div className="text-white/60 text-[12px]">Client</div>
                    <div className="font-raleway text-lg font-bold">
                      {cs.client}
                      {cs.clientLocation ? ` · ${cs.clientLocation}` : ""}
                    </div>
                  </li>
                  {cs.industry && (
                    <li>
                      <div className="text-white/60 text-[12px]">Industry</div>
                      <div className="font-raleway text-lg font-bold">
                        {cs.industry}
                      </div>
                    </li>
                  )}
                  {cs.timeline && (
                    <li>
                      <div className="text-white/60 text-[12px]">Timeline</div>
                      <div className="font-raleway text-lg font-bold">
                        {cs.timeline}
                      </div>
                    </li>
                  )}
                  {cs.result && (
                    <li>
                      <div className="text-white/60 text-[12px]">
                        Headline result
                      </div>
                      <div className="font-raleway text-lg font-bold text-emerald-300">
                        {cs.result}
                      </div>
                    </li>
                  )}
                </ul>
              </aside>
            </div>
          </Section>
        )}

        {/* --- Business needs + Challenges (progressive disclosure) --- */}
        {(cs.business || Array.isArray(cs.problems)) && (
          <Section id="business">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr]">
              {/* LEFT — Business needs */}
              <Card>
                <div className={MICRO}>Business needs</div>
                <h3 className={`${H3} mt-1`}>
                  {cs.business?.title || "Client request and goals"}
                </h3>
                {cs.business?.copy && (
                  <p className={`${BODY} mt-3 text-black/70`}>
                    {cs.business.copy}
                  </p>
                )}

                {(() => {
                  const goals =
                    cs.business?.goals ||
                    cs.business?.objectives ||
                    (Array.isArray(cs.services) ? cs.services.slice(0, 6) : []);
                  return goals.length ? (
                    <div className="mt-6">
                      <div className={MICRO}>Key objectives</div>
                      <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {goals.map((g) => (
                          <li
                            key={g}
                            className={`${BODY} flex items-start gap-2`}
                          >
                            <span className="mt-[6px] inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-black text-white ring-1 ring-black/10">
                              <svg
                                viewBox="0 0 20 20"
                                className="h-3 w-3"
                                aria-hidden="true"
                              >
                                <path
                                  d="M15.5 6.5 8.6 13.4 4.5 9.3"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null;
                })()}

                {Array.isArray(cs.metrics) && cs.metrics.length > 0 && (
                  <div className="mt-6">
                    <div className={MICRO}>Success criteria</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cs.metrics.slice(0, 3).map((m, i) => (
                        <span
                          key={`${m.label}-${i}`}
                          className="rounded-full bg-colorLinenRuffle px-3 py-1 text-xs font-semibold ring-1 ring-black/10"
                        >
                          {m.value} · {m.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              {/* RIGHT — Challenges & solutions */}
              <Card>
                <div className={MICRO}>Challenges and solutions</div>
                <ul className="mt-3 space-y-4">
                  {(cs.problems || [
                    {
                      problem:
                        "Improve usability within a legacy backend without major refactors.",
                      solution:
                        "Refined information architecture and flows while working within existing constraints, unlocking quick-win UX gains.",
                    },
                  ]).map((p, i) => (
                    <li key={i} className="rounded-xl ring-1 ring-black/10">
                      <details className="group rounded-xl bg-white p-4 open:bg-white">
                        <summary className="flex cursor-pointer list-none items-start gap-4">
                          <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                            {(i + 1).toString().padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <div className="font-raleway text-[18px] font-semibold">
                              Problem
                            </div>
                            <p className={`${BODY} mt-1 text-black/70`}>
                              {p.problem}
                            </p>
                          </div>
                          <span className="ml-2 rounded-full bg-black/80 px-2 py-1 text-[11px] text-white transition-colors group-open:bg-colorOrangyRed">
                            Solution
                          </span>
                        </summary>

                        <div className="mt-4 rounded-xl bg-colorLinenRuffle/70 p-4 ring-1 ring-black/5">
                          <div className="font-raleway text-[16px] font-semibold">
                            What we did
                          </div>
                          <p className={`${BODY} mt-1 text-black/75`}>
                            {p.solution}
                          </p>
                          {Array.isArray(p.actions) && p.actions.length > 0 && (
                            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {p.actions.map((a) => (
                                <li
                                  key={a}
                                  className={`${BODY} flex items-start gap-2`}
                                >
                                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/60" />
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </details>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>
        )}

        {/* ------------------------------ Features ------------------------------ */}
        {cs.features?.items?.length > 0 && (
          <Section id="features">
            <div className="mx-auto mb-8 text-center md:max-w-xl">
              <h2 className={H2}>{cs.features.title || "Key features"}</h2>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cs.features.items.map((f, i) => (
                <li
                  key={i}
                  className="rounded-[18px] bg-white p-6 ring-1 ring-black/10"
                >
                  <h3 className={`${H3} mb-1`}>{f.title}</h3>
                  {f.pain && (
                    <p className={`${BODY} text-black/60`}>Pain: {f.pain}</p>
                  )}
                  {Array.isArray(f.done) && f.done.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {f.done.map((d) => (
                        <li key={d} className={`${BODY} flex items-start gap-2`}>
                          <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-black/60" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* ------------------------------ Process ------------------------------ */}
        {Array.isArray(cs.process) && cs.process.length > 0 && (
          <Section id="process">
            <div className="mx-auto mb-8 text-center md:max-w-md">
              <h2 className={H2}>Process</h2>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {cs.process.map((p, i) => (
                <li
                  key={i}
                  className="relative rounded-[18px] bg-white p-6 ring-1 ring-black/10"
                >
                  <span className="absolute -left-3 -top-3 grid h-10 w-10 place-content-center rounded-full bg-black text-xs font-semibold text-white ring-2 ring-white">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className={H3}>{p.title}</h3>
                  {Array.isArray(p.items) && (
                    <ul className="mt-3 space-y-1">
                      {p.items.map((it) => (
                        <li
                          key={it}
                          className={`${BODY} flex items-start gap-2`}
                        >
                          <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/60" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* ------------------------------ Gallery (collapsible for lighter feel) ------------------------------ */}
        {Array.isArray(cs.gallery) && cs.gallery.length > 0 && (
          <Section id="gallery">
            <div className="mx-auto mb-6 text-center md:max-w-xl">
              <h2 className={H2}>Highlights</h2>
            </div>
            <details className="rounded-[16px] bg-white ring-1 ring-black/10 open:pb-4">
              <summary className="cursor-pointer list-none rounded-[16px] p-4 text-center font-raleway text-lg font-semibold">
                View gallery
              </summary>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {cs.gallery.slice(0, 6).map((g, i) => (
                    <figure
                      key={i}
                      className="overflow-hidden rounded-[16px] bg-white ring-1 ring-black/10"
                    >
                      <Image
                        src={g.src || g}
                        alt={g.alt || "Case study image"}
                        width={1200}
                        height={800}
                        className="h-auto w-full object-cover"
                      />
                      {g.caption && (
                        <figcaption className="p-4 text-sm text-black/70">
                          {g.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            </details>
          </Section>
        )}

        {/* ------------------------------ Quote ------------------------------ */}
        {cs.quote?.text && (
          <Section id="quote">
            <blockquote className="rounded-[20px] bg-black p-8 text-white ring-1 ring-black/50">
              <p className="text-[20px] leading-[1.5] md:text-[24px]">
                “{cs.quote.text}”
              </p>
              <footer className="mt-4 text-sm text-white/80">
                — {cs.quote.author}
                {cs.quote.role ? `, ${cs.quote.role}` : ""}
              </footer>
            </blockquote>
          </Section>
        )}

        {/* ------------------------------ Recognition ------------------------------ */}
        {Array.isArray(cs.awards) && cs.awards.length > 0 && (
          <Section id="awards">
            <div className="mx-auto mb-8 text-center md:max-w-md">
              <h2 className={H2}>Recognition</h2>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cs.awards.map((a, i) => (
                <li
                  key={i}
                  className="rounded-[18px] bg-white p-6 ring-1 ring-black/10"
                >
                  <div className="font-raleway text-[18px] font-semibold">
                    {a.title}
                  </div>
                  {(a.org || a.year) && (
                    <div className={`${BODY} mt-1 text-black/60`}>
                      {[a.org, a.year].filter(Boolean).join(" • ")}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* ------------------------------ Related work ------------------------------ */}
        {Array.isArray(CASES) && CASES.length > 1 && (
          <Section id="related">
            <div className="mx-auto mb-8 text-center md:max-w-xl">
              <h2 className={H2}>More cases</h2>
            </div>
            <ul className="flex flex-col gap-10 lg:gap-12">
              {CASES.filter((c) => c.slug !== cs.slug)
                .slice(0, 3)
                .map((r, i) => (
                  <li key={r.id}>
                    <CaseStudyCard cs={r} index={i} />
                  </li>
                ))}
            </ul>
          </Section>
        )}

        {/* ------------------------------ CTA band ------------------------------ */}
        <section id="cta">
          <div className="bg-black pb-28 pt-16 xl:pb-36 xl:pt-24">
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.2fr]">
                <div className="order-2 md:order-1">
                  <h2 className={`${H2} text-white`}>
                    Let’s talk {cs.title.toLowerCase()}
                  </h2>
                  <p className={`${LEAD} mt-3 text-white/90`}>
                    Share your goals. We’ll return a scope, risks, and a price
                    band within 48 hours.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {cs.cta?.href && (
                      <Link href={cs.cta.href} className={BTN_PRIMARY}>
                        {cs.cta.label || "View live"}
                      </Link>
                    )}
                    <Link href="/contact" className={BTN_SECONDARY}>
                      Start a project
                    </Link>
                    <Link href="/portfolio" className={BTN_SECONDARY}>
                      More cases
                    </Link>
                  </div>
                </div>
                <div className="order-1 overflow-hidden rounded-[20px] ring-1 ring-white/10 md:order-2">
                  <Image
                    src={
                      cs.ctaImage ||
                      "/assets/img_placeholder/th-1/about-contact-img.jpg"
                    }
                    alt="Contact"
                    width={640}
                    height={520}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <JsonLd id="ld-breadcrumb" data={crumbs} />
        <JsonLd id="ld-case" data={ld} />
      </main>

      <Footer />
    </>
  );
}