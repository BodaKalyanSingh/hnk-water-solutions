import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { products } from "../data/products";
import { faqs } from "../data/faqs";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { ContactSection } from "../components/sections/Contact";
import { useLeadStore } from "../store/leadStore";
import { Check, Cpu, Compass, ShieldCheck, Eye } from "lucide-react";

export default function RoboVacuumSolutions() {
  const { openLeadModal } = useLeadStore();

  const roboProducts = products.filter(p => p.categoryId === "robo-vacuums");
  const roboFaqs = faqs.filter(f => f.id === "faq-7" || f.id === "faq-4");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Robo Vacuum Cleaners Sales & Service in Hanamkonda",
    "description": "Smart LiDAR-guided robotic vacuum and mop sales & service in Hanamkonda. Book a free home demonstration today.",
    "url": "https://waterpurifiersolutions.in/robo-vacuum-hanamkonda"
  };

  return (
    <>
      <SEOHead
        title="Robo Vacuum Hanamkonda - Smart Robotic Vacuum Cleaners"
        description="Looking for smart floor cleaning solutions in Hanamkonda? Explore our LiDAR 2.0 mapping wet and dry robo vacuums. Request a free home demo."
        schemaMarkup={pageSchema}
      />

      <main className="pt-24 pb-16 min-h-screen bg-surface-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-brand-primary to-slate-800 text-white py-16 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Smart Clean Systems
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight max-w-3xl">
              Smart Robo Vacuum Cleaners & Mops in Hanamkonda
            </h1>
            <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
              Automate your daily floor cleaning with our smart robotic vacuum cleaners. Equipped with LiDAR navigation, pressurized mopping, and automated dust collection.
            </p>
            <div className="pt-2">
              <Button
                variant="cta"
                size="lg"
                onClick={() => openLeadModal("Robo Vacuum Demo", "SEO Robo Page Banner")}
              >
                Book Free Home Demo
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Key Advantages */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white" hoverEffect={false}>
              <Compass className="h-8 w-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">LiDAR 2.0 Navigation</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Builds instant, accurate 3D maps of your house to vacuum and mop in structured paths, avoiding pet bowls and cords.
              </p>
            </Card>
            <Card className="p-8 bg-white" hoverEffect={false}>
              <Eye className="h-8 w-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">Extreme 5000Pa Suction</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Pulls fine dust, sand, and pet hair out of deep tile joints and carpets effortlessly with custom auto-boost systems.
              </p>
            </Card>
            <Card className="p-8 bg-white" hoverEffect={false}>
              <ShieldCheck className="h-8 w-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">Local Service & Support</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Forget mailing units to other cities for repairs. Our local Hanamkonda service crew handles spares and setup support directly.
              </p>
            </Card>
          </section>

          {/* Robo Products Subset */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display text-center">
              Our Smart Vacuum Cleaners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {roboProducts.map((product) => (
                <Card key={product.id} className="bg-white border border-brandBorder shadow-sm flex flex-col justify-between" hoverEffect={true}>
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Cpu className="h-6 w-6" />
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
                      onClick={() => openLeadModal(product.name, `SEO Robo Page: ${product.name}`)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Robo specific FAQ */}
          <section className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary text-center font-display">
              Robo Vacuum FAQs
            </h2>
            <div className="bg-white p-6 md:p-8 border border-brandBorder rounded-2xl shadow-sm">
              <Accordion items={roboFaqs} />
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-white border border-brandBorder rounded-3xl p-8 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-base font-bold text-text-primary font-display">Looking for other solutions?</h3>
            <p className="text-xs text-text-secondary">Explore advanced RO filtration setups and whole-house hard water softeners optimized for local scaling issues in Telangana.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link to="/water-purifier-hanamkonda" className="text-brand-primary hover:underline">Water Purifiers Hanamkonda &rarr;</Link>
              <Link to="/water-softener-hanamkonda" className="text-brand-primary hover:underline">Water Softeners Hanamkonda &rarr;</Link>
            </div>
          </section>

          {/* Contact Inquiry form */}
          <ContactSection />
        </div>
      </main>
    </>
  );
}
