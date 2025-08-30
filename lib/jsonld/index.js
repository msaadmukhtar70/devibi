// lib/jsonld/index.js
const RAW_SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devibi.com";
export const SITE = RAW_SITE.replace(/\/$/, ""); // normalize no trailing slash

// Socials (add/adjust as needed)
export const SOCIALS = [
  "https://x.com/devibi",
  "https://instagram.com/devibi",
  "https://www.facebook.com/devibi",
  "https://www.linkedin.com/company/devibi",
];

// Convenience: make absolute URLs
export const abs = (path = "") =>
  /^https?:\/\//i.test(path) ? path : `${SITE}${path}`;

export const orgLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Devibi",
  url: SITE,
  logo: abs("/divibi-logo.png"), // <-- your logo file
  sameAs: SOCIALS,
};

export const websiteLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Devibi",
  url: SITE,
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Devibi",
    logo: {
      "@type": "ImageObject",
      url: abs("/divibi-logo.png"),
    },
  },
};

export const breadcrumbLD = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.item),
  })),
});

export const serviceLD = ({ canonical, title, description, image }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  description,
  provider: { "@type": "Organization", name: "Devibi", url: SITE },
  url: abs(canonical),
  image: image ? abs(image) : undefined,
});

export const blogPostingLD = ({
  canonical,
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: image ? [abs(image)] : undefined,
  datePublished,
  dateModified: dateModified || datePublished,
  author: author ? [{ "@type": "Person", name: author }] : undefined,
  publisher: {
    "@type": "Organization",
    name: "Devibi",
    url: SITE,
    logo: { "@type": "ImageObject", url: abs("/divibi-logo.png") },
  },
  mainEntityOfPage: abs(canonical),
  url: abs(canonical),
});

export const caseStudyLD = ({ canonical, title, description, image }) => ({
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  name: title,
  description,
  url: abs(canonical),
  image: image ? abs(image) : undefined,
});

export const faqLD = (faqs = []) =>
  faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

export const itemListLD = (items = []) =>
  items.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: items.slice(0, 10).map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: abs(it.url),
          name: it.name,
        })),
      }
    : null;

export const videoLD = ({
  canonical,
  title,
  description,
  thumbnail,
  embedUrl,
  contentUrl,
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: title,
  description,
  thumbnailUrl: thumbnail ? [abs(thumbnail)] : undefined,
  uploadDate: "2024-01-01",
  embedUrl,
  contentUrl,
  publisher: { "@type": "Organization", name: "Devibi" },
  url: abs(canonical),
});

export const webPageLD = ({ canonical, title, description, type = "WebPage" }) => ({
  "@context": "https://schema.org",
  "@type": type, // e.g. "AboutPage", "FAQPage", "ContactPage"
  name: title,
  description,
  url: abs(canonical),
});

export const personLD = ({ name, jobTitle, image, sameAs = [], url }) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  image: image ? abs(image) : undefined,
  sameAs,
  url: url ? abs(url) : undefined,
});
