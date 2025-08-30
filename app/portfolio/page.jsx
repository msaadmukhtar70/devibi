import { CASES } from "@/lib/cases";
import { baseMeta, urlFor } from "@/lib/seo/meta";
import { breadcrumbLD, itemListLD } from "@/lib/jsonld";
import JsonLd from "@/components/seo/JsonLd";
import PortfolioClient from './PortfolioClient';

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateMetadata() {
  const canonical = urlFor("/portfolio");
  return baseMeta({
    title: "Portfolio - Revenue-Ready B2B SaaS Products | Devibi",
    description: "Case studies showing how we help founders launch and scale. See the outcomes, timelines, and tech stacks behind our B2B SaaS development work.",
    canonical
  });
}

export default function Page() {
  const canonical = urlFor("/portfolio");
  const crumbs = breadcrumbLD([{ name: "Home", item: urlFor("/") }, { name: "Portfolio", item: canonical }]);
  const list = itemListLD(
    (CASES || []).slice(0, 10).map(c => ({ url: urlFor(`/portfolio/${c.slug}`), name: c.title }))
  );

  return (
    <>
      <PortfolioClient cases={CASES} />
      <JsonLd id="ld-breadcrumb" data={crumbs} />
      <JsonLd id="ld-itemlist" data={list} />
    </>
  );
}
