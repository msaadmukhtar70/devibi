// lib/jsonld/services.js
import { SITE, abs } from "./index";

/**
 * Generates JSON-LD for a single service.
 */
export function generateServiceJsonLd(service) {
  const item = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${SITE}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Devibi",
      url: SITE,
    },
    serviceType:
      Array.isArray(service.chips) && service.chips.length
        ? service.chips.join(", ")
        : undefined,
    areaServed: "Worldwide",
    image: service.heroImage ? abs(service.heroImage) : undefined,
  };

  // Only add offers if you actually have a price
  if (service.price && service.priceCurrency) {
    item.offers = {
      "@type": "Offer",
      price: String(service.price),
      priceCurrency: service.priceCurrency,
      availability: "https://schema.org/InStock",
    };
  }

  return item;
}

/**
 * Generates JSON-LD for a list of services (ItemList).
 */
export function generateServiceListJsonLd(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        url: `${SITE}/services/${service.slug}`,
        description: service.summary,
      },
    })),
  };
}
