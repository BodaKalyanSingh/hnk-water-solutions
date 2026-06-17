import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Card } from "../ui/Card";
import { HelpCircle, PlayCircle, Wrench, Shield, CheckCircle2, Clock } from "lucide-react";
import { IMAGES } from "../../lib/images";
import { BUSINESS_INFO } from "../../lib/constants";

export function WhyUs() {
  const { viewport, variants, containerVariants } = useScrollReveal();

  const features = [
    {
      title: "Expert Consultation",
      description: "Our water specialists analyze your source water chemistry (TDS/Hardness) and recommend custom filters.",
      icon: HelpCircle,
    },
    {
      title: "Home Demonstration",
      description: "See the cleaning efficiency and pure outcomes first-hand. Call or WhatsApp to arrange a free demo at your home.",
      icon: PlayCircle,
    },
    {
      title: "Installation Support",
      description: "Zero-stress leakage-free setups. Experienced local technicians handle tubes, pressure meters, and clamps.",
      icon: Wrench,
    },
    {
      title: "AMC Assistance",
      description: "Comprehensive annual maintenance packages covering four routine services, breakdowns, and filter sets.",
      icon: Shield,
    },
    {
      title: "Genuine Products",
      description: `As an ${BUSINESS_INFO.dealerName} partner, we supply original OEM membranes, sediment filters, and mechanical pumps.`,
      icon: CheckCircle2,
    },
    {
      title: "Quick Response",
      description: "We are local! A technician reaches your home in Hanamkonda within 2-6 hours of placing a service ticket.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Why Choose Us?
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Trusted local service backed by {BUSINESS_INFO.dealerName} — water purifiers, softeners, and smart home cleaning in Hanamkonda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <img
            src={IMAGES.comparison}
            alt="Before and after water softener installation — hard water scale vs clean bathroom in Hanamkonda"
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-brandBorder shadow-sm object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display text-text-primary">
              See the Difference Clean Water Makes
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Hard borewell water leaves white scale on taps, mirrors, and geysers across Hanamkonda homes. Our water softeners and RO purifiers protect your family&apos;s health and your appliances — with visible results from day one.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                Free water TDS and hardness testing at your home
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                Same-day repair across Hanamkonda, Warangal &amp; Kazipet
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                Genuine spare parts with 90-day repair warranty
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          variants={containerVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                variants={variants}
                className="p-8 bg-surface-1 border border-brandBorder shadow-sm flex flex-col items-start"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm border border-brandBorder text-brand-primary mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold font-display text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
