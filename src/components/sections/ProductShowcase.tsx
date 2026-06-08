import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../data/products";
import { categories } from "../../data/categories";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { useLeadStore } from "../../store/leadStore";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Check, Info, Cpu, Droplet, Sparkles, Waves, Wind } from "lucide-react";

export function ProductShowcase() {
  const { openLeadModal } = useLeadStore();
  const { viewport, containerVariants } = useScrollReveal();
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(p => p.categoryId === activeTab);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "water-purifiers": return <Droplet className="h-4 w-4" />;
      case "water-softeners": return <Waves className="h-4 w-4" />;
      case "robo-vacuums": return <Cpu className="h-4 w-4" />;
      case "vacuum-cleaners": return <Sparkles className="h-4 w-4" />;
      case "air-purifiers": return <Wind className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-surface-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Premium Product Showcase
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            High-efficiency systems designed to deliver safe drinking water and intelligent cleaning.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              activeTab === "all"
                ? "bg-brand-primary text-white border-brand-primary shadow-md"
                : "bg-white text-text-secondary border-brandBorder hover:bg-surface-1"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeTab === cat.id
                  ? "bg-brand-primary text-white border-brand-primary shadow-md"
                  : "bg-white text-text-secondary border-brandBorder hover:bg-surface-1"
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          variants={containerVariants(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
              >
                <Card className="h-full flex flex-col justify-between bg-white border border-brandBorder shadow-sm relative group overflow-hidden">
                  <div>
                    {/* Visual Product representation - Stripe/Linear styled */}
                    <div className="h-48 w-full bg-surface-1 flex items-center justify-center border-b border-brandBorder relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
                      
                      {/* Product Symbol Indicator */}
                      <div className="relative z-10 p-5 rounded-2xl bg-white border border-brandBorder shadow-md text-brand-primary flex items-center justify-center">
                        {product.categoryId === "water-purifiers" && <Droplet className="h-12 w-12 text-brand-primary animate-pulse" />}
                        {product.categoryId === "water-softeners" && <Waves className="h-12 w-12 text-brand-accent" />}
                        {product.categoryId === "robo-vacuums" && <Cpu className="h-12 w-12 text-brand-primary" />}
                        {product.categoryId === "vacuum-cleaners" && <Sparkles className="h-12 w-12 text-brand-accent" />}
                        {product.categoryId === "air-purifiers" && <Wind className="h-12 w-12 text-brand-primary" />}
                      </div>

                      {/* Featured Badge */}
                      {product.isFeatured && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="cta">Best Seller</Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold">
                          {categories.find((c) => c.id === product.categoryId)?.title}
                        </span>
                        <h3 className="text-base font-bold font-display text-text-primary mt-1">
                          {product.name}
                        </h3>
                      </div>

                      {/* Benefits */}
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-text-secondary">
                            <Check className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 border-t border-brandBorder bg-surface-1 flex items-center justify-between gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => openLeadModal(product.name, `Product Showcase Specs: ${product.name}`)}
                    >
                      <Info className="h-4 w-4 mr-1.5" />
                      <span>Specs</span>
                    </Button>
                    <Button
                      variant="cta"
                      size="sm"
                      className="flex-1"
                      onClick={() => openLeadModal(product.name, `Product Showcase Get Quote: ${product.name}`)}
                    >
                      <span>Get Quote</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
