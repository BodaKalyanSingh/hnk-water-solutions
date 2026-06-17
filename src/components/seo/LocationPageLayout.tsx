import { Link } from "react-router-dom";
import { SEOHead } from "../layout/SEOHead";
import { Breadcrumbs } from "./Breadcrumbs";
import { ServiceCTAs } from "./ServiceCTAs";
import { Accordion } from "../ui/Accordion";
import { BUSINESS_INFO } from "../../lib/constants";
import {
  LOCATION_PAGES,
  LOCATION_SERVICE_LINKS,
  type LocationPageData,
} from "../../data/seo/location-pages";
import { buildBreadcrumbSchema, buildFaqSchema } from "../../lib/seo";
import { ROUTES } from "../../lib/constants";

interface LocationPageLayoutProps {
  data: LocationPageData;
}

export function LocationPageLayout({ data }: LocationPageLayoutProps) {
  const breadcrumbItems = [
    { name: "Locations", path: ROUTES.LOCATION_HANAMKONDA },
    { name: data.h1 },
  ];

  const schemas = [
    buildBreadcrumbSchema(breadcrumbItems),
    buildFaqSchema(data.faqs),
  ];

  const accordionItems = data.faqs.map((faq, idx) => ({
    id: `loc-faq-${idx}`,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.metaDescription}
        path={data.path}
        schemaMarkup={schemas}
      />

      <main className="pt-20 pb-10 md:pb-16 min-h-screen bg-surface-1">
        <section className="bg-brand-primary text-white py-14 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={breadcrumbItems} variant="light" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight max-w-4xl">
              {data.h1}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-100 max-w-3xl leading-relaxed">
              {data.localContext}
            </p>
            <ServiceCTAs className="mt-5" onDark />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <section>
            {data.bodyParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm md:text-base text-text-secondary leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-6">
              Our Services in {data.slug.charAt(0).toUpperCase() + data.slug.slice(1)}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LOCATION_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="block bg-white border border-brandBorder rounded-xl p-4 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-6">
              Location FAQs
            </h2>
            <div className="bg-white border border-brandBorder rounded-2xl p-6 md:p-8">
              <Accordion items={accordionItems} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-4">
              Find Us on the Map
            </h2>
            <div className="h-80 rounded-2xl overflow-hidden border border-brandBorder shadow-inner">
              <iframe
                title={`Google Map — Hanamkonda Water Service near ${data.slug}`}
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="bg-brand-primary text-white rounded-3xl p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl font-extrabold font-display">
              Get Service in {data.slug.charAt(0).toUpperCase() + data.slug.slice(1)} Today
            </h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              Call {BUSINESS_INFO.phone} or WhatsApp us for same-day water purifier, softener, and robot vacuum service.
            </p>
            <ServiceCTAs className="justify-center" onDark />
          </section>
        </div>
      </main>
    </>
  );
}

export function getLocationPage(slug: string): LocationPageData | undefined {
  return LOCATION_PAGES[slug];
}
