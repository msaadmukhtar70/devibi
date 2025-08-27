// /components/sections/RecentCases.jsx
import Link from "next/link";
import { CASES } from "@/lib/cases";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";

export default function RecentCases({
  limit = 3,
  filter = "all",
  heading = "Recent case studies",
}) {
  // Typography tokens (align with site-wide scale)
  const H2 =
    "font-raleway text-[32px] leading-[1.06] sm:text-[40px] lg:text-[56px] xl:text-[64px]";
  const LEAD = "text-lg leading-[1.55] lg:text-[21px]";

  const sorted = [...CASES].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const filtered =
    filter === "all" ? sorted : sorted.filter((c) => c.cats.includes(filter));
  const list = filtered.slice(0, limit);

  return (
    <section id="recent-cases" aria-labelledby="recent-cases-heading">
      <div className="global-container pt-20 pb-20 xl:pb-[150px]">
        {/* Header */}
        <div
          className="jos mb-8 text-center lg:mb-12"
          data-jos_animation="fade"
          data-jos_once="true"
          data-jos_duration="700"
        >
          <div className="mx-auto md:max-w-sm lg:max-w-xl xl:max-w-3xl">
            <h2 id="recent-cases-heading" className={H2}>
              {heading}
            </h2>
            <p className={`mt-3 ${LEAD} text-black/70`}>
              Fresh wins from the team—same card design, just fewer at once.
            </p>
          </div>
        </div>

        {/* Cards */}
        <ul className="flex flex-col gap-10 lg:gap-12">
          {list.map((cs, i) => (
            <li
              key={cs.id}
              className="jos"
              data-jos_animation="fade-up"
              data-jos_delay={cs.delay}
              data-jos_once="true"
              data-jos_duration="700"
            >
              <CaseStudyCard cs={cs} index={i} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div
          className="jos mt-8 flex justify-center"
          data-jos_animation="fade"
          data-jos_once="true"
          data-jos_duration="700"
        >
          <Link
            href="/portfolio"
            aria-label="View all portfolio case studies"
            className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-colorOrangyRed"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}
