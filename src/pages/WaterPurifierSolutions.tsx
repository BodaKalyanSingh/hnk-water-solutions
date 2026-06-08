import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { products } from "../data/products";
import { faqs } from "../data/faqs";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { ContactSection } from "../components/sections/Contact";
import { useLeadStore } from "../store/leadStore";
import { Check, ArrowRight, Shield, Award, Sparkles, Droplet } from "lucide-react";

export default function WaterPurifierSolutions() {
  const { openLeadModal } = useLeadStore();
  
  const purifierProducts = products.filter(p => p.categoryId === "water-purifiers");
  const purifierFaqs = faqs.filter(f => f.category === "water-quality" || f.category === "maintenance" || f.category === "installation");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Water Purifier Sales & Service in Hanamkonda",
    "description": "Premium RO, UV and Alkaline water purifiers in Hanamkonda. Book free water testing and same-day maintenance services.",
    "url": "https://waterpurifiersolutions.in/water-purifier-hanamkonda"
  };

  return (
    <>
      <SEOHead
        title="Water Purifier Hanamkonda - Sales, Repair & Services"
        description="Looking for water purifier sales, filter changes, or RO repair in Hanamkonda? Get 100% original filters and same-day service. Inquire today."
        schemaMarkup={pageSchema}
      />

      <main className="pt-24 pb-16 min-h-screen bg-surface-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Hanamkonda Home Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight max-w-3xl">
              Water Purifier Sales, Repairs & Services in Hanamkonda
            </h1>
            <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
              We provide authorized, high-rejection RO, UV, and Copper water purifiers for residential households and commercial offices across Hanamkonda. Same-day repair support.
            </p>
            <div className="pt-2">
              <Button
                variant="cta"
                size="lg"
                onClick={() => openLeadModal("RO Purifier Consultation", "SEO Purifier Page Banner")}
              >
                Book Free Water Testing
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Key Advantages */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white" hoverEffect={false}>
              <Shield className="h-8 w-8 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">Original Spares</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                We only fit original booster pumps, adapters, and filter cartridges (sediment, pre-carbon, post-carbon) that guarantee water safety.
              </p>
            </Card>
            <Card className="p-8 bg-white" hoverEffect={false}>
              <Award className="h-8 w-8 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">Expert Technicians</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Our technicians are fully certified and have resolved over 2,000+ repair issues in Hanamkonda.
              </p>
            </Card>
            <Card className="p-8 bg-white" hoverEffect={false}>
              <Sparkles className="h-8 w-8 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">2-Hr Turnaround</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Emergency leakage or broken adapters? We dispatch a service specialist immediately, reaching you within 2 hours.
              </p>
            </Card>
          </section>

          {/* Purifier Products Subset */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display text-center">
              Recommended Water Purifiers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {purifierProducts.map((product) => (
                <Card key={product.id} className="bg-white border border-brandBorder shadow-sm flex flex-col justify-between" hoverEffect={true}>
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                      <Droplet className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary font-display">{product.name}</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2 text-xs text-text-secondary">
                          <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 border-t border-brandBorder bg-surface-1 flex gap-2">
                    <Button
                      variant="cta"
                      className="w-full"
                      onClick={() => openLeadModal(product.name, `SEO Purifier Page: ${product.name}`)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center pt-2">
              <Link to="/products?category=water-purifiers" className="text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors inline-flex items-center space-x-1">
                <span>View all purifiers</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Purifier specific FAQ */}
          <section className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary text-center font-display">
              Water Purifier FAQs
            </h2>
            <div className="bg-white p-6 md:p-8 border border-brandBorder rounded-2xl shadow-sm">
              <Accordion items={purifierFaqs} />
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-white border border-brandBorder rounded-3xl p-8 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-base font-bold text-text-primary font-display">Looking for other solutions?</h3>
            <p className="text-xs text-text-secondary">Explore whole-house water softeners and smart cleaning devices optimized for local scaling issues in Telangana.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link to="/water-softener-hanamkonda" className="text-brand-primary hover:underline">Water Softeners Hanamkonda &rarr;</Link>
              <Link to="/robo-vacuum-hanamkonda" className="text-brand-primary hover:underline">Robo Vacuum Cleaners Hanamkonda &rarr;</Link>
            </div>
          </section>

          {/* Contact Inquiry form */}
          <ContactSection />
        </div>
      </main>
    </>
  );
}
