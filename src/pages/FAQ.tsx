import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { ServiceCTAs } from "../components/seo/ServiceCTAs";
import { Accordion } from "../components/ui/Accordion";
import { ROUTES } from "../lib/constants";
import { buildBreadcrumbSchema, buildFaqSchema } from "../lib/seo";

const FAQ_ITEMS = [
  {
    id: "faq-purifier-frequency",
    question: "How often should I replace water purifier filters in Hanamkonda?",
    answer:
      "In Hanamkonda's hard borewell water, sediment and carbon filters should be replaced every 6–8 months. RO membranes typically last 18–24 months. Our AMC plan covers scheduled replacements automatically.",
    serviceLink: { href: ROUTES.WATER_PURIFIER_REPAIR, label: "Water Purifier Repair in Hanamkonda" },
  },
  {
    id: "faq-softener-signs",
    question: "How do I know if I need a water softener?",
    answer:
      "White scale on taps, stiff laundry, dry skin, and geysers failing frequently are signs of hard water. We offer a free hardness test — book via our Hard Water Treatment page.",
    serviceLink: { href: ROUTES.HARD_WATER_TREATMENT, label: "Hard Water Treatment in Hanamkonda" },
  },
  {
    id: "faq-ro-borewell",
    question: "Which RO purifier is best for borewell water in Warangal?",
    answer:
      "Borewell water with TDS above 400 ppm needs a multi-stage RO with pre-filters. We recommend models with 10L storage for families of 4+. See our sales page for options.",
    serviceLink: { href: ROUTES.WATER_PURIFIER_SALES, label: "Water Purifier Sales in Hanamkonda" },
  },
  {
    id: "faq-same-day",
    question: "Do you offer same-day repair service?",
    answer:
      "Yes. Same-day repair is available in Hanamkonda and Warangal for water purifiers, softeners, and robot vacuums. Average response time is 2–4 hours during business hours.",
    serviceLink: { href: ROUTES.WATER_PURIFIER_REPAIR, label: "Water Purifier Service in Hanamkonda" },
  },
  {
    id: "faq-amc",
    question: "What is included in the Annual Maintenance Contract?",
    answer:
      "AMC includes scheduled filter replacements, priority breakdown visits, and discounts on spare parts. Contact us for purifier and softener AMC details.",
    serviceLink: { href: ROUTES.WATER_PURIFIER_REPAIR, label: "Water Purifier AMC in Hanamkonda" },
  },
  {
    id: "faq-robot-floor",
    question: "Will a robot vacuum work on Indian tile floors?",
    answer:
      "Yes. Our robot vacuums are tested on ceramic, vitrified, and marble floors common in Hanamkonda homes. Book a free home demo to see performance on your floors.",
    serviceLink: { href: ROUTES.ROBOT_VACUUM_SALES, label: "Robot Vacuum Cleaner Sales in Hanamkonda" },
  },
  {
    id: "faq-installation-time",
    question: "How long does water purifier installation take?",
    answer:
      "Standard wall-mount RO installation takes 45–60 minutes including leak testing and TDS verification. Installation is free with purifiers purchased from us.",
    serviceLink: { href: ROUTES.WATER_PURIFIER_INSTALLATION, label: "Water Purifier Installation in Hanamkonda" },
  },
  {
    id: "faq-areas",
    question: "Which areas do you serve?",
    answer:
      "We serve Hanamkonda, Warangal, and Kazipet including Naimnagar, Subedari, Hunter Road, Kazipet railway colony, and surrounding PIN codes 506001–506003.",
    serviceLink: { href: ROUTES.LOCATION_HANAMKONDA, label: "Water Services in Hanamkonda" },
  },
];

export default function FAQPage() {
  const breadcrumbItems = [{ name: "FAQ" }];

  const schemas = [
    buildBreadcrumbSchema(breadcrumbItems),
    buildFaqSchema(
      FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
    ),
  ];

  return (
    <>
      <SEOHead
        title="FAQ — Water Purifier, Softener & Vacuum Services"
        description="Answers to common questions about water purifier repair, softener installation, hard water treatment and robot vacuum service in Hanamkonda, Warangal and Kazipet."
        path={ROUTES.FAQ}
        schemaMarkup={schemas}
      />

      <main className="pt-20 pb-10 md:pb-16 min-h-screen bg-surface-1">
        <section className="bg-brand-primary text-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} variant="light" />
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
              Find answers about water purifier sales, installation, repair, water softeners, hard water treatment, and robot vacuum cleaners in Hanamkonda, Warangal, and Kazipet.
            </p>
            <ServiceCTAs className="mt-5" onDark />
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <section className="bg-white border border-brandBorder rounded-2xl p-6 md:p-8">
            <Accordion
              items={FAQ_ITEMS.map((item) => ({
                id: item.id,
                question: item.question,
                answer: item.answer,
              }))}
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold font-display text-text-primary">
              Browse Services by Topic
            </h2>
            <div className="flex flex-wrap gap-3">
              {FAQ_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.serviceLink.href}
                  className="text-sm font-semibold text-brand-primary hover:text-brand-accent underline underline-offset-2"
                >
                  {item.serviceLink.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
