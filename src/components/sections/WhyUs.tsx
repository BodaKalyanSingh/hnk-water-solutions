import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Card } from "../ui/Card";
import { HelpCircle, PlayCircle, Wrench, Shield, CheckCircle2, Clock } from "lucide-react";

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
      description: "See the cleaning efficiency and pure outcomes first-hand. Request a free live demo at your home.",
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
      description: "Direct-from-factory machines and original OEM membranes, sediment filters, and mechanical pumps.",
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
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Why Choose Us?
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Hanamkonda's premier home service provider offering certified equipment and same-day maintenance.
          </p>
        </div>

        {/* Feature Cards Grid */}
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
