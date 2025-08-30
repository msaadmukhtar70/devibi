// app/services/[slug]/layout.jsx
import { getService, ALL_SERVICES } from "@/lib/services";

export const revalidate = 60 * 60 * 24; // ISR: 1 day
export const dynamic = "error";         // block SSR
export const dynamicParams = false;     // build only known slugs

export async function generateStaticParams() {
  return (Array.isArray(ALL_SERVICES) ? ALL_SERVICES.map(s => ({ slug: s.slug })) : []);
}

export async function generateMetadata({ params }) {
  const svc = getService(params.slug);
  if (!svc) return {};

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.devibi.com";
  const url = `${siteUrl}/services/${params.slug}`;

  const title =
    svc.seo?.title || `${svc.title} — B2B SaaS Services | Devibi`;
  const description =
    svc.seo?.description ||
    (svc.summary ? String(svc.summary).slice(0, 160) : undefined) ||
    `Expert ${svc.title} for B2B SaaS founders. Clear scope, weekly demos, clean handoff.`;
  const image = svc.ogImage || svc.heroImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
    robots:
      "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    metadataBase: new URL(siteUrl),
  };
}

export default function ServiceSlugLayout({ children }) {
  return <>{children}</>;
}
