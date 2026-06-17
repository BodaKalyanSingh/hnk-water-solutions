import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { ServiceCTAs } from "../components/seo/ServiceCTAs";
import { ALL_SERVICE_ROUTES, ROUTES } from "../lib/constants";
import { buildBreadcrumbSchema } from "../lib/seo";
import { SERVICE_PAGES } from "../data/seo/service-pages";

export default function Services() {
  const breadcrumbItems = [{ name: "Services" }];
  const schemas = [buildBreadcrumbSchema(breadcrumbItems)];

  return (
    <>
      <SEOHead
        title="Water Purifier, Softener & Vacuum Services Hanamkonda"
        description="All water purifier, water softener, hard water treatment and robot vacuum services in Hanamkonda, Warangal and Kazipet. Sales, installation, repair and AMC. Book today."
        path={ROUTES.SERVICES}
        schemaMarkup={schemas}
      />

      <main className="pt-20 pb-10 md:pb-16 min-h-screen bg-surface-1">
        <section className="bg-brand-primary text-white py-14 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={breadcrumbItems} variant="light" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
              All Services — Water Purification, Softening &amp; Smart Home Cleaning
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-100 max-w-3xl leading-relaxed">
              Hanamkonda Water Service provides complete sales, installation, repair, and maintenance for water purifiers, water softeners, hard water treatment systems, and robot vacuum cleaners across Hanamkonda, Warangal, and Kazipet. Every service is delivered by certified local technicians with genuine spare parts.
            </p>
            <ServiceCTAs className="mt-5" onDark />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICE_ROUTES.map((path) => {
              const slug = path.replace(/^\//, "");
              const page = SERVICE_PAGES[slug];
              if (!page) return null;
              return (
                <article
                  key={path}
                  className="bg-white border border-brandBorder rounded-2xl p-6 space-y-4 flex flex-col"
                >
                  <h2 className="text-lg font-bold font-display text-text-primary">
                    {page.h1}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                    {page.heroIntro.slice(0, 160)}...
                  </p>
                  <Link
                    to={path}
                    className="text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
                  >
                    Learn more about {page.primaryKeyword} →
                  </Link>
                </article>
              );
            })}
          </section>

          <section className="bg-white border border-brandBorder rounded-3xl p-8 text-center space-y-4">
            <h2 className="text-xl font-bold font-display text-text-primary">
              Service Areas
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              We serve Hanamkonda, Warangal, and Kazipet with same-day repair and same-week installation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={ROUTES.LOCATION_HANAMKONDA} className="text-sm font-semibold text-brand-primary hover:underline">
                Water Services in Hanamkonda
              </Link>
              <Link to={ROUTES.LOCATION_WARANGAL} className="text-sm font-semibold text-brand-primary hover:underline">
                Water Softener Service in Warangal
              </Link>
              <Link to={ROUTES.LOCATION_KAZIPET} className="text-sm font-semibold text-brand-primary hover:underline">
                Vacuum Cleaner Service Near Me in Kazipet
              </Link>
            </div>
            <ServiceCTAs className="justify-center" />
          </section>
        </div>
      </main>
    </>
  );
}
