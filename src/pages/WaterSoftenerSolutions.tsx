import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { products } from "../data/products";
import { faqs } from "../data/faqs";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { ContactSection } from "../components/sections/Contact";
import { useLeadStore } from "../store/leadStore";
import { Check, ShowerHead, Waves, Sparkles, ShieldCheck } from "lucide-react";

export default function WaterSoftenerSolutions() {
  const { openLeadModal } = useLeadStore();

  const softenerProducts = products.filter(p => p.categoryId === "water-softeners");
  const softenerFaqs = faqs.filter(f => f.id === "faq-5" || f.id === "faq-8" || f.id === "faq-3");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Water Softeners Sales & Service in Hanamkonda",
    "description": "Authorized whole-house water softener installations in Hanamkonda. Protect appliances and hair from hard water scale.",
    "url": "https://waterpurifiersolutions.in/water-softener-hanamkonda"
  };

  return (
    <>
      <SEOHead
        title="Water Softener Hanamkonda - Whole House Hard Water Softeners"
        description="Dealing with white scale deposits on taps or hair fall? Install a digital automatic water softener in Hanamkonda. Free water hardness test included."
        schemaMarkup={pageSchema}
      />

      <main className="pt-24 pb-16 min-h-screen bg-surface-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-brand-primary to-[#028090] text-white py-16 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Scale Protection Systems
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight max-w-3xl">
              Whole-House Water Softener Systems in Hanamkonda
            </h1>
            <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
              Hard borewell water causes scaling on bathroom fittings, geysers, and results in hair loss. Our automatic resin water softeners filter out hardness minerals at the inlet.
            </p>
            <div className="pt-2">
              <Button
                variant="cta"
                size="lg"
                onClick={() => openLeadModal("Free Hardness Test", "SEO Softener Page Banner")}
              >
                Book Free Hardness Test
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Key Advantages */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white" hoverEffect={false}>
              <ShowerHead className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">Skin & Hair Protection</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Softened water lathers easily, reducing soap residues on skin and preventing hair dryout/fall caused by calcium minerals.
              </p>
            </Card>
            <Card className="p-8 bg-white" hoverEffect={false}>
              <Sparkles className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">No White Scale Deposits</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Prevents white scale stains on bathroom tiles, luxury glass enclosures, and protects interior faucets from rusting/jamming.
              </p>
            </Card>
            <Card className="p-8 bg-white" hoverEffect={false}>
              <ShieldCheck className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">Appliance Lifespan</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Saves geysers, washing machines, and solar panels from internal scale clogging, reducing electricity bills by up to 20%.
              </p>
            </Card>
          </section>

          {/* Softeners Products Subset */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary font-display text-center">
              Our Softener Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {softenerProducts.map((product) => (
                <Card key={product.id} className="bg-white border border-brandBorder shadow-sm flex flex-col justify-between" hoverEffect={true}>
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                      <Waves className="h-6 w-6" />
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
                      onClick={() => openLeadModal(product.name, `SEO Softener Page: ${product.name}`)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Softener specific FAQ */}
          <section className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary text-center font-display">
              Water Softener FAQs
            </h2>
            <div className="bg-white p-6 md:p-8 border border-brandBorder rounded-2xl shadow-sm">
              <Accordion items={softenerFaqs} />
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-white border border-brandBorder rounded-3xl p-8 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-base font-bold text-text-primary font-display">Looking for other solutions?</h3>
            <p className="text-xs text-text-secondary">Explore advanced RO filtration setups and intelligent household cleaning vacuums optimized for local Hanamkonda homes.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link to="/water-purifier-hanamkonda" className="text-brand-primary hover:underline">Water Purifiers Hanamkonda &rarr;</Link>
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
