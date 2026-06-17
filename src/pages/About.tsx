import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { ServiceCTAs } from "../components/seo/ServiceCTAs";
import { Card } from "../components/ui/Card";
import { ROUTES, BUSINESS_INFO } from "../lib/constants";
import { buildBreadcrumbSchema } from "../lib/seo";
import { IMAGES } from "../lib/images";
import { ShieldCheck, Users, Target, MapPin, Award } from "lucide-react";

export default function About() {
  const breadcrumbItems = [{ name: "About" }];
  const schemas = [buildBreadcrumbSchema(breadcrumbItems)];

  const milestones = [
    { year: "2016", title: "Company Founded", desc: "Started with a 2-member team servicing water purifiers in Hunter Road, Hanamkonda." },
    { year: "2018", title: "Softener Launch", desc: "Expanded into whole-house hard water softeners due to local high scaling issues." },
    { year: "2021", title: "Smart Home Tech", desc: "Introduced robot vacuum cleaners and smart home cleaning to Hanamkonda homes." },
    { year: "2024", title: "500+ Active Clients", desc: "Emerged as a leading water and home service provider across Hanamkonda, Warangal, and Kazipet." },
  ];

  const serviceAreas = [
    "Naimnagar", "Subedari", "Hunter Road", "Kishanpura", "Waddepally",
    "Lashkar Bazar", "Gopalapuram", "Hanuman Nagar", "Balasamudram", "Adarsha Nagar",
  ];

  return (
    <>
      <SEOHead
        title="About Hanamkonda Water Service | Local Experts Since 2016"
        description="Hanamkonda Water Service — trusted water purifier, softener and robot vacuum experts since 2016. Certified technicians serving Hanamkonda, Warangal and Kazipet."
        path={ROUTES.ABOUT}
        schemaMarkup={schemas}
      />

      <main className="pt-20 pb-10 md:pb-16 min-h-screen bg-surface-1">
        <section className="bg-brand-primary text-white py-14 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Breadcrumbs items={breadcrumbItems} variant="light" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
                About Hanamkonda Water Service
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
                Since 2016, we have helped families across Hanamkonda, Warangal, and Kazipet access clean drinking water, treat hard borewell water, and maintain smart home cleaning appliances — with honest advice, genuine parts, and same-day service. We work with {BUSINESS_INFO.dealerName} from our Shanti Nagar, Hunter Road office.
              </p>
              <ServiceCTAs className="mt-5" onDark />
            </div>
            <div className="hidden lg:block">
              <img
                src={IMAGES.purifier}
                alt="Certified Water Purifier Technician in Warangal — Hanamkonda Water Service"
                width={560}
                height={360}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl border border-white/20 shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <section className="bg-white border border-brandBorder rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <Award className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-extrabold font-display text-text-primary">
                {BUSINESS_INFO.eurekaForbesPartnerLabel}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                {BUSINESS_INFO.eurekaForbesBlurb}
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white flex flex-col items-start" hoverEffect={false}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary mb-6">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-bold font-display text-text-primary mb-3">Our Mission</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                To protect every household in Hanamkonda from hard water damage and water-borne health risks through affordable purification, softening, and professional maintenance services.
              </p>
            </Card>
            <Card className="p-8 bg-white flex flex-col items-start" hoverEffect={false}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary mb-6">
                <Users className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-bold font-display text-text-primary mb-3">Our Team</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Eight certified technicians trained by leading purifier and softener brands, delivering same-day repairs and professional installations across three cities.
              </p>
            </Card>
            <Card className="p-8 bg-white flex flex-col items-start" hoverEffect={false}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary mb-6">
                <Award className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-bold font-display text-text-primary mb-3">Quality Promise</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We never use duplicate spare parts. Every filter, pump, and membrane we fit is genuine — backed by a 90-day repair warranty.
              </p>
            </Card>
          </section>

          <section className="space-y-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary text-center font-display">
              Our Growth Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-white border border-brandBorder rounded-2xl p-6 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-brand-primary font-mono">{m.year}</span>
                  <h3 className="font-bold text-text-primary text-sm font-display">{m.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-brandBorder rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-display text-text-primary flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-brand-primary" aria-hidden="true" />
                <span>Service Coverage Area</span>
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Our service vans cover Hanamkonda, Warangal, and Kazipet. Technicians reach most Hanamkonda neighbourhoods within 2 hours of a service call.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-text-secondary bg-surface-1 py-2 px-3 rounded-lg border border-brandBorder">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to={ROUTES.SERVICES} className="text-sm font-bold text-brand-primary hover:underline">
                  View All Services →
                </Link>
                <Link to={ROUTES.FAQ} className="text-sm font-bold text-brand-primary hover:underline">
                  Read FAQs →
                </Link>
                <Link to={ROUTES.CONTACT} className="text-sm font-bold text-brand-primary hover:underline">
                  Contact Us →
                </Link>
              </div>
            </div>
            <div className="h-80 rounded-2xl overflow-hidden border border-brandBorder shadow-inner">
              <iframe
                title="Hanamkonda Water Service location on Google Maps"
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
        </div>
      </main>
    </>
  );
}
