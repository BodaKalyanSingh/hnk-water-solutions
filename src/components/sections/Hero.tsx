import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, BadgeCheck } from "lucide-react";
import { ServiceCTAs } from "../seo/ServiceCTAs";
import { BUSINESS_INFO } from "../../lib/constants";
import { IMAGES } from "../../lib/images";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 overflow-hidden mesh-gradient">
      <Helmet>
        <link rel="preload" as="image" href={IMAGES.happyFamily} />
      </Helmet>

      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 text-left space-y-6 md:space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              <span>{BUSINESS_INFO.eurekaForbesPartnerLabel} · Hanamkonda</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15] font-display"
            >
              Water Purifier, Water Softener &amp; Robot Vacuum Cleaner Sales and Services in Hanamkonda
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              Professional water purification, hard water treatment, and smart home cleaning solutions for families across Hanamkonda, Warangal, and Kazipet. We work with {BUSINESS_INFO.dealerName} — same-day service with genuine parts and certified technicians.
            </motion.p>

            <motion.div variants={itemVariants}>
              <ServiceCTAs />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-brandBorder"
            >
              <div className="flex items-center space-x-2 text-xs font-semibold text-text-secondary">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>100% Genuine Spare Parts</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-text-secondary">
                <Zap className="h-4 w-4 text-brand-accent" />
                <span>Same-Day Service Response</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6 xl:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden border border-brandBorder shadow-premium bg-white"
            >
              <img
                src={IMAGES.happyFamily}
                alt="Happy family drinking pure RO water at home in Hanamkonda — Hanamkonda Water Service"
                width={800}
                height={500}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover aspect-[16/10]"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="absolute -bottom-3 -left-2 md:-left-4 glassmorphism px-3 py-2 rounded-xl shadow-lg flex items-center gap-2"
            >
              <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold">
                500+
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">Happy Customers</p>
                <p className="text-[10px] text-text-secondary">Hanamkonda &amp; Warangal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
