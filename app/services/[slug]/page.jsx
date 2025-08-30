import JsonLd from "@/components/seo/JsonLd";
import ServiceDetailsClient from "./ServiceDetailsClient";
import { getService, ALL_SERVICES } from "@/lib/services";
import { baseMeta, urlFor } from "@/lib/seo/meta";
import { breadcrumbLD, serviceLD, faqLD, videoLD } from "@/lib/jsonld";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return Array.isArray(ALL_SERVICES) ? ALL_SERVICES.map(s => ({ slug: s.slug })) : [];
}

export function generateMetadata({ params }) {
  const data = getService(params.slug);
  if (!data) return {};
  const canonical = urlFor(`/services/${params.slug}`);
  const image = data.heroImage || "/og-default.jpg";
  return baseMeta({
    title: data.title,
    description: data.summary,
    canonical,
    image,
    type: "article"
  });
}

export default function Page({ params }) {
  const data = getService(params.slug);
  if (!data) return notFound();

  const canonical = urlFor(`/services/${params.slug}`);
  const crumbs = breadcrumbLD([
    { name: "Home", item: urlFor("/") },
    { name: "Services", item: urlFor("/services") },
    { name: data.title, item: canonical }
  ]);

  const ldService = serviceLD({
    canonical,
    title: data.title,
    description: data.summary,
    image: data.heroImage
  });

  const ldFAQ = faqLD(data.faqs || []);

  const ldVideo = videoLD({
    canonical,
    title: `Behind the design — ${data.title}`,
    description: "How we design for clean delivery to engineering.",
    thumbnail: data.heroImage,
    embedUrl: "https://www.youtube.com/embed/3nQNiWdeH2Q",
    contentUrl: "https://www.youtube.com/watch?v=3nQNiWdeH2Q"
  });

  return (
    <>
      <ServiceDetailsClient slug={params.slug} data={data} />
      <JsonLd id="ld-breadcrumb" data={crumbs} />
      <JsonLd id="ld-service" data={ldService} />
      <JsonLd id="ld-faq" data={ldFAQ} />
      <JsonLd id="ld-video" data={ldVideo} />
    </>
  );
}
