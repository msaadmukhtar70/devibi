const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devibi.com";

export function urlFor(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE}${clean}`;
}

export function baseMeta({ title, description, canonical, image, type = "website" }) {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Devibi",
      type,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : []
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : []
    },
    robots: { index: true, follow: true }
  };
}