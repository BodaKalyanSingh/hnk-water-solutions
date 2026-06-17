import { Link } from "react-router-dom";
import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { Categories } from "../components/sections/Categories";
import { WhyUs } from "../components/sections/WhyUs";
import { ProductShowcase } from "../components/sections/ProductShowcase";
import { WaterAssessment } from "../components/sections/WaterAssessment";
import { Services } from "../components/sections/Services";
import { FAQ } from "../components/sections/FAQ";
import { ContactSection } from "../components/sections/Contact";
import { SEOHead } from "../components/layout/SEOHead";
import {
  ALL_LOCATION_ROUTES,
  ALL_SERVICE_ROUTES,
  ROUTES,
} from "../lib/constants";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from "../lib/seo";

const SERVICE_LINK_LABELS: Record<string, string> = {
  [ROUTES.WATER_PURIFIER_SALES]: "Water Purifier Sales in Hanamkonda",
  [ROUTES.WATER_PURIFIER_INSTALLATION]: "Water Purifier Installation in Hanamkonda",
  [ROUTES.WATER_PURIFIER_REPAIR]: "Water Purifier Repair in Hanamkonda",
  [ROUTES.WATER_SOFTENER_SALES]: "Water Softener Sales in Hanamkonda",
  [ROUTES.WATER_SOFTENER_INSTALLATION]: "Water Softener Installation in Hanamkonda",
  [ROUTES.WATER_SOFTENER_REPAIR]: "Water Softener Repair in Hanamkonda",
  [ROUTES.HARD_WATER_TREATMENT]: "Hard Water Treatment in Hanamkonda",
  [ROUTES.ROBOT_VACUUM_SALES]: "Robot Vacuum Cleaner Sales in Hanamkonda",
  [ROUTES.ROBOT_VACUUM_INSTALLATION]: "Robot Vacuum Cleaner Installation in Hanamkonda",
  [ROUTES.ROBOT_VACUUM_REPAIR]: "Robot Vacuum Cleaner Repair in Warangal",
};

const LOCATION_LINK_LABELS: Record<string, string> = {
  [ROUTES.LOCATION_HANAMKONDA]: "Water Services in Hanamkonda",
  [ROUTES.LOCATION_WARANGAL]: "Water Purifier Service in Warangal",
  [ROUTES.LOCATION_KAZIPET]: "Water Services in Kazipet",
};

export default function Home() {
  const schemas = [
    buildBreadcrumbSchema([{ name: "Home" }]),
    buildLocalBusinessSchema(),
  ];

  return (
    <>
      <SEOHead
        title="Water Purifier, Water Softener & Robot Vacuum Cleaner Sales and Services in Hanamkonda"
        description="Water Purifier, Water Softener and Robot Vacuum Cleaner Sales, Installation, Repair and Maintenance Services in Hanamkonda, Warangal and Kazipet. Fast, reliable and professional service."
        path={ROUTES.HOME}
        schemaMarkup={schemas}
      />
      <Hero />
      <TrustBar />
      <Categories />
      <WhyUs />
      <ProductShowcase />
      <WaterAssessment />
      <Services />

      <section className="py-16 bg-surface-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display text-center">
            Our Services in Hanamkonda, Warangal &amp; Kazipet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ALL_SERVICE_ROUTES.map((path) => (
              <Link
                key={path}
                to={path}
                className="bg-white border border-brandBorder rounded-xl p-4 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition-colors"
              >
                {SERVICE_LINK_LABELS[path]}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {ALL_LOCATION_ROUTES.map((path) => (
              <Link
                key={path}
                to={path}
                className="bg-white border border-brandBorder rounded-xl p-4 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition-colors text-center"
              >
                {LOCATION_LINK_LABELS[path]}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to={ROUTES.ABOUT} className="text-sm font-semibold text-brand-primary hover:underline">
              About Hanamkonda Water Service
            </Link>
            <Link to={ROUTES.CONTACT} className="text-sm font-semibold text-brand-primary hover:underline">
              Contact Us
            </Link>
            <Link to={ROUTES.FAQ} className="text-sm font-semibold text-brand-primary hover:underline">
              Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <ContactSection />
    </>
  );
}
