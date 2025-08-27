"use client";

import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CASES } from "@/lib/cases";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";

export default function Portfolio() {
  // ---------------- Typography tokens ----------------
  const H2 =
    "font-raleway text-[32px] leading-[1.06] sm:text-[40px] lg:text-[56px] xl:text-[64px]";
  const LEAD = "text-lg leading-[1.55] lg:text-[21px]";
  const MICRO = "text-sm uppercase tracking-[0.12em] text-black/60";

  // ---------------- Buttons ----------------
  const BTN_SECONDARY =
    "inline-flex items-center gap-3 rounded-full ring-1 ring-black/15 bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all hover:ring-black/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]";

  // ---------------- Tabs ----------------
  const TABS = useMemo(
    () => [
      { key: "all", label: "All" },
      { key: "web", label: "Web" },
      { key: "app", label: "Apps" },
      { key: "branding", label: "Branding" },
      { key: "ai", label: "AI/ML" },
      { key: "platform", label: "Platform" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Guard against missing fields
  const safeCases = useMemo(
    () =>
      (CASES || []).map((c) => ({
        ...c,
        cats: Array.isArray(c.cats) ? c.cats : [],
        // For JSON-LD & links
        _href: c.href || (c.slug ? `/portfolio/${c.slug}` : "#"),
        _img: c.img || c.heroImage || "",
        _title: c.title || "Case study",
      })),
    []
  );

  // Counts per tab
  const counts = useMemo(() => {
    const base = { all: safeCases.length };
    for (const t of TABS.filter((t) => t.key !== "all")) base[t.key] = 0;
    for (const c of safeCases) {
      for (const k of c.cats) if (k in base) base[k] += 1;
    }
    return base;
  }, [TABS, safeCases]);

  // Filtered list
  const filtered = useMemo(() => {
    if (activeTab === "all") return safeCases;
    return safeCases.filter((c) => c.cats.includes(activeTab));
  }, [activeTab, safeCases]);

  useEffect(() => setVisibleCount(6), [activeTab]);

  const remaining = Math.max(filtered.length - visibleCount, 0);

  // JSON-LD (uses computed href/img and skips empties)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Devibi Portfolio",
    description:
      "Selected product and AI case studies with timelines, outcomes, and tech stacks.",
    mainEntity: filtered.map((c) => ({
      "@type": "CreativeWork",
      name: c._title,
      url: c._href,
      image: c._img || undefined,
      about: Array.isArray(c.tags) ? c.tags : undefined,
      headline: c._title,
    })),
  };

  const tabPanelId = "portfolio-cards";

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/* dotted background motif */}
        <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Breadcrumb */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Our Portfolio</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Our Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio-section">
          <div className="pb-40 xl:pb-[220px]">
            <div className="global-container">
              {/* Header */}
              <div
                className="jos mb-8 text-center lg:mb-12 xl:mb-14"
                data-jos_animation="fade"
              >
                <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
                  <h2 className={H2}>Work that moves the needle</h2>
                  <p className={`${LEAD} mt-3 text-black/60`}>
                    Filter by focus. Each project shows timeframe, outcome, stack, and the essentials founders ask about.
                  </p>
                </div>
              </div>

              {/* Filter Tabs */}
              <div
                className="jos mb-8 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3"
                data-jos_animation="fade"
                role="tablist"
                aria-label="Portfolio filters"
              >
                {TABS.map((t) => {
                  const active = activeTab === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setActiveTab(t.key)}
                      role="tab"
                      aria-selected={active}
                      aria-controls={tabPanelId}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                        active
                          ? "bg-black text-white"
                          : "bg-white text-black ring-1 ring-black/15 hover:ring-black/30",
                      ].join(" ")}
                    >
                      {t.label}
                      {counts[t.key] !== undefined && (
                        <span
                          className={[
                            "ml-2 rounded-full px-2 py-0.5 text-xs",
                            active
                              ? "bg-white/20 text-white"
                              : "bg-black/5 text-black/70",
                          ].join(" ")}
                        >
                          {counts[t.key]}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Cards */}
              <ul
                id={tabPanelId}
                role="tabpanel"
                aria-live="polite"
                className="flex flex-col gap-10 lg:gap-12"
              >
                {filtered.slice(0, visibleCount).map((cs, i) => (
                  <li
                    key={cs.id ?? cs.slug ?? cs._href ?? i}
                    className="jos"
                    data-jos_animation="fade-up"
                    data-jos_delay={cs.delay}
                  >
                    <CaseStudyCard cs={cs} index={i} />
                  </li>
                ))}

                {filtered.length === 0 && (
                  <li className="rounded-2xl bg-white p-8 text-center ring-1 ring-black/10">
                    <div className="font-raleway text-xl font-bold">
                      No projects in this filter… yet.
                    </div>
                    <p className="mt-2 text-black/70">
                      Try another tab or{" "}
                      <Link href="/contact" className="underline">
                        tell us what you’re building
                      </Link>
                      .
                    </p>
                  </li>
                )}
              </ul>

              {/* Show more */}
              {remaining > 0 && (
                <div className="jos mt-10" data-jos_animation="fade">
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-black/10" />
                      <button
                        onClick={() => setVisibleCount((v) => v + 6)}
                        className={BTN_SECONDARY}
                      >
                        <span>Show {Math.min(6, remaining)} more</span>
                        <span className="relative -mr-1 grid h-5 w-5 place-content-center rounded-full bg-black text-white">
                          <svg
                            viewBox="0 0 20 20"
                            className="h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              d="M6 7l4 4 4-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>
                    <div className={`${MICRO} mt-2 text-center`}>
                      Showing {Math.min(visibleCount, filtered.length)} / {filtered.length}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer_01 />
    </>
  );
}
