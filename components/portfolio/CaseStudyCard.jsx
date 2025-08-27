// /components/portfolio/CaseStudyCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyCard({ cs, index = 0 }) {
  const reverse = index % 2 === 1;

  // Typography tokens (keep in sync with site-wide tokens)
  const H3 = "font-raleway text-[22px] leading-[1.2] sm:text-[24px] lg:text-[26px]";
  const BODY = "text-[15px] leading-[1.65] sm:text-base";
  const MICRO = "text-sm uppercase tracking-[0.12em] text-black/60";

  const renderTech = (list = []) => {
    const shown = list.slice(0, 4);
    const extra = list.length - shown.length;
    return (
      <>
        {shown.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1 font-mono text-[12px] ring-1 ring-black/10"
          >
            <span className="h-1.5 w-1.5 rounded-[2px] bg-black/60" />
            {t}
          </span>
        ))}
        {extra > 0 && (
          <span className="rounded-xl bg-white px-3 py-1 font-mono text-[12px] ring-1 ring-black/10">
            +{extra}
          </span>
        )}
      </>
    );
  };

  const renderTags = (list = []) => {
    const shown = list.slice(0, 3);
    const extra = list.length - shown.length;
    return (
      <>
        {shown.map((t) => (
          <span
            key={t}
            className="rounded-[10px] border border-black/20 px-2.5 py-1 text-xs uppercase tracking-[0.08em] text-black/70"
          >
            {t}
          </span>
        ))}
        {extra > 0 && (
          <span className="rounded-[10px] border border-black/20 px-2.5 py-1 text-xs uppercase tracking-[0.08em] text-black/70">
            +{extra}
          </span>
        )}
      </>
    );
  };

  return (
    <article className="group relative overflow-hidden rounded-[28px] bg-white ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)] hover:ring-2 hover:ring-colorOrangyRed/40">
      <div className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Media */}
        <Link
          href={cs.href}
          aria-label={cs.title}
          className="relative w-full md:w-[55%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
        >
          <div className="relative h-[320px] w-full md:h-[560px]">
            <Image
              src={cs.img}
              alt={cs.alt ?? cs.title}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              priority={index < 2}
            />
          </div>

          {/* Chips */}
          <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur ring-1 ring-black/10">
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-8.6V6a1 1 0 1 0-2 0v4a1 1 0 0 0 .4.8l3 2a1 1 0 1 0 1.2-1.6L11 9.4Z"
                  fill="currentColor"
                />
              </svg>
              {cs.timeline}
            </span>
            {cs.result && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white ring-1 ring-emerald-700/30">
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M3 14.5 8.2 9.3l2.9 2.9 4.6-5.1a1 1 0 1 1 1.5 1.3l-5.4 6a1 1 0 0 1-1.4 0l-2.9-3-4 4A1 1 0 0 1 3 14.5Z"
                    fill="currentColor"
                  />
                </svg>
                {cs.result}
              </span>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="relative w-full md:w-[45%]">
          <div className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
            {/* Title + CTA */}
            <div className={`mb-6 flex items-start justify-between gap-4 ${reverse ? "md:flex-row-reverse" : ""}`}>
              <Link
                href={cs.href}
                className="group/title max-w-[34ch] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
              >
                <h3 className={`${H3} font-bold`}>{cs.title}</h3>
                <span className="sr-only">{cs.title}</span>
              </Link>

              <Link
                href={cs.href}
                className="grid h-12 w-12 place-content-center rounded-full ring-1 ring-black/10 transition-all duration-300 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
                aria-label={`Open case study: ${cs.title}`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
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

            {/* Meta */}
            <div className="mb-5 text-sm text-black/60">
              {cs.client} • {cs.industry}
            </div>

            {/* Services */}
            <div className="mb-5">
              <div className={`${MICRO} mb-2`}>Services</div>
              <div className="flex flex-wrap gap-2">
                {(cs.services || []).slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 rounded-xl bg-colorLinenRuffle px-3 py-1 text-[12px] ring-1 ring-black/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-colorOrangyRed" />
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mb-5 h-[3px] w-20 rounded-full bg-colorOrangyRed/90" />

            {/* Tech */}
            <div className="mb-5">
              <div className={`${MICRO} mb-2`}>Tech stack</div>
              <div className="flex flex-wrap gap-2">{renderTech(cs.tech || [])}</div>
            </div>

            {/* Tags */}
            <div>
              <div className={`${MICRO} mb-2`}>Topics</div>
              <div className="flex flex-wrap gap-1.5">{renderTags(cs.tags || [])}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
