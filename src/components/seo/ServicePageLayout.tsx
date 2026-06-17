import { Link } from "react-router-dom";
import { SEOHead } from "../layout/SEOHead";
import { Breadcrumbs } from "./Breadcrumbs";
import { ServiceCTAs } from "./ServiceCTAs";
import { Accordion } from "../ui/Accordion";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "../../lib/seo";
import type { SeoServicePageData } from "../../data/seo/types";
import { SERVICE_HERO_IMAGES } from "../../lib/images";

interface ServicePageLayoutProps {
  data: SeoServicePageData;
}

export function ServicePageLayout({ data }: ServicePageLayoutProps) {
  const breadcrumbItems = [
    { name: data.category, path: data.categoryPath },
    { name: data.h1 },
  ];

  const schemas = [
    buildBreadcrumbSchema(breadcrumbItems),
    buildServiceSchema(data.h1, data.metaDescription, data.serviceType),
    buildFaqSchema(data.faqs),
  ];

  const accordionItems = data.faqs.map((faq, idx) => ({
    id: `faq-${idx}`,
    question: faq.question,
    answer: faq.answer,
  }));

  const heroImage = SERVICE_HERO_IMAGES[data.category];

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.metaDescription}
        path={data.path}
        schemaMarkup={schemas}
      />

      <main className="pt-20 pb-10 md:pb-16 min-h-screen bg-surface-1">
        <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-14 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Breadcrumbs items={breadcrumbItems} variant="light" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight max-w-4xl">
                {data.h1}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-100 max-w-3xl leading-relaxed">
                {data.heroIntro}
              </p>
              <ServiceCTAs className="mt-5" onDark />
            </div>
            {heroImage && (
              <div className="hidden lg:block">
                <img
                  src={heroImage}
                  alt={`${data.serviceType} in Hanamkonda — Hanamkonda Water Service`}
                  width={560}
                  height={360}
                  loading="eager"
                  decoding="async"
                  className="w-full rounded-xl border border-white/20 shadow-lg object-cover aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            )}
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
              Why Choose Hanamkonda Water Service
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.whyChooseUs.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-white border border-brandBorder rounded-xl p-4 text-sm text-text-secondary"
                >
                  <span className="text-brand-primary font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-6">
              How It Works
            </h2>
            <ol className="space-y-4">
              {data.howItWorks.map((step, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 bg-white border border-brandBorder rounded-xl p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-4">
              Service Area
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              {data.serviceArea}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display mb-6">
              Frequently Asked Questions
            </h2>
            <div className="bg-white border border-brandBorder rounded-2xl p-6 md:p-8">
              <Accordion items={accordionItems} />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary font-display mb-4">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-semibold text-brand-primary hover:text-brand-accent underline underline-offset-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-brand-primary text-white rounded-3xl p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl font-extrabold font-display">
              Need {data.primaryKeyword}?
            </h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              Contact Hanamkonda Water Service today for fast, professional service in Hanamkonda, Warangal, and Kazipet.
            </p>
            <ServiceCTAs className="justify-center" onDark />
          </section>
        </div>
      </main>
    </>
  );
}
