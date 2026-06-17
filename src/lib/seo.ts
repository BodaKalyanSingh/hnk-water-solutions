import { BUSINESS_INFO, SITE_URL } from "./constants";

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

export function canonicalUrl(path: string): string {
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}/`;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: canonicalUrl(item.path) } : {}),
    })),
  };
}

export function buildServiceSchema(name: string, description: string, serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
    },
    areaServed: [...BUSINESS_INFO.areaServed],
    serviceType,
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    image: BUSINESS_INFO.logoImage,
    telephone: BUSINESS_INFO.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.streetAddress,
      addressLocality: BUSINESS_INFO.locality,
      addressRegion: BUSINESS_INFO.region,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: BUSINESS_INFO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    url: SITE_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [...BUSINESS_INFO.areaServed],
    sameAs: [BUSINESS_INFO.googleBusinessUrl],
  };
}
