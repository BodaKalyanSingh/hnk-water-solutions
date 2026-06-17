import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { ServiceCTAs } from "../components/seo/ServiceCTAs";
import { ContactSection } from "../components/sections/Contact";
import { BUSINESS_INFO, ROUTES } from "../lib/constants";
import { buildBreadcrumbSchema } from "../lib/seo";

export default function Contact() {
  const breadcrumbItems = [{ name: "Contact" }];
  const schemas = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Contact — ${BUSINESS_INFO.name}`,
      description: `Contact ${BUSINESS_INFO.name} for water purifier, softener and robot vacuum service in Hanamkonda.`,
      url: `https://hanamkondawaterservice.com/contact/`,
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Hanamkonda Water Service | Call or WhatsApp"
        description="Contact Hanamkonda Water Service for water purifier, softener and robot vacuum sales and repair. Call, WhatsApp or visit our Shanti Nagar, Hunter Road office. Same-day response."
        path={ROUTES.CONTACT}
        schemaMarkup={schemas}
      />
      <main className="pt-20 pb-10 md:pb-16 min-h-screen bg-surface-1">
        <section className="bg-brand-primary text-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} variant="light" />
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
              Contact Hanamkonda Water Service
            </h1>
            <p className="mt-3 text-sm text-slate-100 max-w-2xl">
              Call or WhatsApp for water purifier repair, softener installation, or robot vacuum
              service. We respond within 30 minutes during business hours.
            </p>
            <ServiceCTAs className="mt-5" onDark />
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap gap-4 text-sm">
          <Link to={ROUTES.HOME} className="font-semibold text-brand-primary hover:underline">← Back to Homepage</Link>
          <Link to={ROUTES.SERVICES} className="font-semibold text-brand-primary hover:underline">View All Services</Link>
        </div>
        <ContactSection />
      </main>
    </>
  );
}
