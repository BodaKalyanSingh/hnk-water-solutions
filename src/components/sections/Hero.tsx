import { motion } from "framer-motion";
import { useLeadStore } from "../../store/leadStore";
import { Button } from "../ui/Button";
import { Star, Shield, Zap, CheckCircle2, Droplet } from "lucide-react";

export function Hero() {
  const { openLeadModal } = useLeadStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden mesh-gradient">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 md:space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono">
              <Shield className="h-3.5 w-3.5" />
              <span>Hanamkonda's Most Trusted Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1] font-display"
            >
              Pure Water.<br />
              <span className="text-brand-primary">Smarter Living.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              Water Purifiers, Water Softeners & Smart Cleaning Solutions for Modern Homes in Hanamkonda. Protect your family's health with same-day service support.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                variant="cta"
                size="lg"
                onClick={() => openLeadModal("Book Free Demo", "Hero Main CTA")}
              >
                Book Free Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openLeadModal("Request Callback", "Hero Secondary CTA")}
              >
                Request Callback
              </Button>
            </motion.div>

            {/* Hero Trust Badges */}
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
                <span>2-Hour Service Response</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Graphic & Animated Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Purifier Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-72 h-96 md:w-80 md:h-[420px] bg-gradient-to-b from-white to-surface-2 rounded-3xl border border-brandBorder shadow-premium flex flex-col items-center justify-center p-8 overflow-hidden"
            >
              {/* Mesh inside Graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              
              {/* Purifier Block */}
              <div className="relative w-44 h-64 md:w-48 md:h-72 bg-white rounded-2xl border border-brandBorder shadow-lg flex flex-col justify-between p-4 z-10">
                <div className="flex justify-between items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  </div>
                  <div className="h-1.5 w-10 bg-slate-200 rounded" />
                </div>
                
                {/* Purifier Inner Panel */}
                <div className="flex-1 my-6 rounded-lg bg-surface-1 border border-brandBorder flex flex-col justify-around items-center p-3">
                  <div className="text-center">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-text-secondary block">TDS Output</span>
                    <span className="text-2xl font-extrabold text-brand-primary font-mono tracking-tighter">45 ppm</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-brand-accent rounded-full" />
                  </div>
                  <div className="flex space-x-2">
                    <span className="h-1.5 w-6 bg-emerald-400 rounded-full" />
                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
                  </div>
                </div>

                {/* Dispensing Tap Area */}
                <div className="flex justify-between items-end">
                  <div className="h-6 w-3 bg-slate-300 rounded-b" />
                  <div className="h-10 w-16 bg-brand-primary/5 rounded border border-brand-primary/10 flex items-center justify-center">
                    <Droplet className="h-5 w-5 text-brand-primary animate-bounce animate-duration-1000" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stat Card 1 - 500+ Happy Customers (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="absolute -top-4 -right-2 md:-right-8 z-20 glassmorphism p-3.5 rounded-2xl shadow-xl flex items-center space-x-2.5 max-w-[180px]"
            >
              <div className="h-9 w-9 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                500+
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">Happy Customers</p>
                <p className="text-[9px] text-text-secondary">In Hanamkonda</p>
              </div>
            </motion.div>

            {/* Floating Stat Card 2 - Same Day Service (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute bottom-16 -left-4 md:-left-12 z-20 glassmorphism p-3.5 rounded-2xl shadow-xl flex items-center space-x-2.5 max-w-[170px]"
            >
              <div className="h-9 w-9 rounded-xl bg-brand-cta/15 flex items-center justify-center text-brand-cta font-bold">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">Same Day</p>
                <p className="text-[9px] text-text-secondary">Service Response</p>
              </div>
            </motion.div>

            {/* Floating Stat Card 3 - 5★ Rated (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 right-2 md:right-8 z-20 glassmorphism p-3.5 rounded-2xl shadow-xl flex items-center space-x-2.5 max-w-[140px]"
            >
              <div className="h-9 w-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500 font-bold">
                <Star className="h-5 w-5 fill-amber-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">5★ Rated</p>
                <p className="text-[9px] text-text-secondary">Local Reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
