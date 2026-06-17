import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Card } from "../ui/Card";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../../lib/constants";
import { getWhatsAppLink } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { Phone } from "lucide-react";
import * as Icons from "lucide-react";

export function Services() {
  const { viewport, containerVariants, variants } = useScrollReveal();

  return (
    <section className="py-20 bg-surface-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Our Maintenance & Service Offerings
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Professional water purifier setups, repairs, and filter replacements.
          </p>
        </div>

        <motion.div
          variants={containerVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = (Icons as Record<string, any>)[service.iconName];

            return (
              <Card
                key={service.id}
                variants={variants}
                className="p-8 bg-white border border-brandBorder shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    {IconComponent && <IconComponent className="h-6 w-6" />}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-text-primary">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-brandBorder">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-xs text-text-secondary font-medium"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0 mt-1.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 flex gap-2">
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.service(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-[#25D366] text-xs font-semibold text-white hover:bg-[#1da851]"
                  >
                    <WhatsAppIcon size={14} />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-brand-primary text-xs font-semibold text-white hover:bg-brand-primary/90"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call
                  </a>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
