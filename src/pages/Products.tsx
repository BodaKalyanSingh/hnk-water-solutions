import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../lib/constants";
import { getWhatsAppLink } from "../lib/whatsapp";
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";
import { Check, Cpu, Droplet, Phone, Sparkles, Waves, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeTab, setActiveTab] = React.useState<string>("all");

  React.useEffect(() => {
    if (categoryParam) {
      const isValid = categories.some((c) => c.id === categoryParam);
      if (isValid) {
        setActiveTab(categoryParam);
      } else {
        setActiveTab("all");
      }
    } else {
      setActiveTab("all");
    }
  }, [categoryParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  };

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter((p) => p.categoryId === activeTab);

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
    <>
      <SEOHead
        title="Our Products - Purifiers, Softeners & Cleaners"
        description="Filter and browse our premium home product catalog. Active RO water systems, water softeners, vacuum cleaners, and air purifiers in Hanamkonda."
      />

      <main className="pt-24 pb-16 min-h-screen bg-surface-1">
        {/* Banner */}
        <section className="bg-brand-primary text-white py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent opacity-40" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Product Catalog</h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              Explore our range of premium, high-efficiency appliances designed for modern Indian homes.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Tab Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            <button
              onClick={() => handleTabChange("all")}
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
                onClick={() => handleTabChange(cat.id)}
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

          {/* Catalog Grid */}
          <motion.div
            layout
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
                      {/* Visual Graphic Representation */}
                      <div className="h-48 w-full bg-surface-1 flex items-center justify-center border-b border-brandBorder relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
                        
                        <div className="relative z-10 p-5 rounded-2xl bg-white border border-brandBorder shadow-md text-brand-primary flex items-center justify-center">
                          {product.categoryId === "water-purifiers" && <Droplet className="h-12 w-12 text-brand-primary animate-pulse" />}
                          {product.categoryId === "water-softeners" && <Waves className="h-12 w-12 text-brand-accent" />}
                          {product.categoryId === "robo-vacuums" && <Cpu className="h-12 w-12 text-brand-primary" />}
                          {product.categoryId === "vacuum-cleaners" && <Sparkles className="h-12 w-12 text-brand-accent" />}
                          {product.categoryId === "air-purifiers" && <Wind className="h-12 w-12 text-brand-primary" />}
                        </div>

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

                        {/* Specifications Summary */}
                        {product.specifications && (
                          <div className="pt-4 border-t border-brandBorder/50 space-y-2">
                            <h4 className="text-[10px] uppercase tracking-wider font-mono font-bold text-text-secondary">Key Specifications</h4>
                            <div className="grid grid-cols-2 gap-2 text-[10px] text-text-secondary">
                              {Object.entries(product.specifications).map(([key, val]) => (
                                <div key={key} className="bg-surface-2 p-2 rounded border border-brandBorder/50">
                                  <span className="block font-bold text-[9px] text-text-primary uppercase tracking-wide">{key}</span>
                                  <span className="block mt-0.5 line-clamp-1">{val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="p-6 border-t border-brandBorder bg-surface-1 flex items-center gap-2">
                      <a
                        href={getWhatsAppLink(WHATSAPP_MESSAGES.product(product.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-[#25D366] text-xs font-bold text-white hover:bg-[#1da851] shadow-sm"
                      >
                        <WhatsAppIcon size={14} />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-brand-primary text-xs font-bold text-white hover:bg-brand-primary/90 shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        Call Now
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </>
  );
}
