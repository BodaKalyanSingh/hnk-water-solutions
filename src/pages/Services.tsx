import { SEOHead } from "../components/layout/SEOHead";
import { services } from "../data/services";
import { Button } from "../components/ui/Button";
import { useLeadStore } from "../store/leadStore";
import { Check, ArrowRight, ClipboardList, HelpCircle } from "lucide-react";
import * as Icons from "lucide-react";

export default function Services() {
  const { openLeadModal } = useLeadStore();

  return (
    <>
      <SEOHead
        title="Our Services - Repairs, Installations & AMC"
        description="Authorized maintenance & repairs for water purifiers, softeners, air filters and vacuum cleaners in Hanamkonda. Inquire about custom annual service plans (AMC)."
      />

      <main className="pt-24 pb-16 min-h-screen bg-surface-1">
        {/* Banner */}
        <section className="bg-brand-primary text-white py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent opacity-40" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Our Service Catalog</h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              Same-day professional installation, quick repair responses, and preventive maintenance plans.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Detailed Service Cards */}
          <div className="space-y-12">
            {services.map((service, idx) => {
              const IconComponent = (Icons as Record<string, any>)[service.iconName];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-brandBorder rounded-3xl p-6 md:p-10 shadow-sm ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Service Details */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold font-display text-text-primary">
                        {service.title}
                      </h2>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary">Service Benefits:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2 text-xs text-text-secondary font-medium">
                            <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button
                        variant="cta"
                        size="sm"
                        onClick={() => openLeadModal(service.title, `Services Page: ${service.title}`)}
                        className="flex items-center space-x-2"
                      >
                        <span>Book Service Callback</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Service Process Steps */}
                  <div className={`lg:col-span-6 bg-surface-1 border border-brandBorder rounded-2xl p-6 md:p-8 space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <h3 className="text-xs font-bold uppercase font-mono tracking-wider text-text-secondary flex items-center space-x-2">
                      <ClipboardList className="h-4 w-4 text-brand-accent" />
                      <span>Service Execution Process</span>
                    </h3>

                    {service.steps && (
                      <ol className="relative border-l border-brandBorder ml-3.5 space-y-6 pt-2">
                        {service.steps.map((step, sIdx) => (
                          <li key={sIdx} className="ml-6 relative">
                            <span className="absolute -left-9 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-white text-[9px] font-bold font-mono">
                              {sIdx + 1}
                            </span>
                            <p className="text-xs text-text-primary font-semibold leading-relaxed">{step}</p>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Section */}
          <section className="bg-brand-primary/5 border border-brand-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-lg md:text-xl font-bold font-display text-text-primary flex items-center justify-center space-x-2">
              <HelpCircle className="h-5 w-5 text-brand-primary animate-pulse" />
              <span>Need custom assistance?</span>
            </h3>
            <p className="text-xs md:text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
              Not sure which filter or softener package is right? Speak to our customer support desk now. We are happy to help Hanamkonda residents with free advice.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                onClick={() => openLeadModal("General Assistant Request", "Services Page Bottom Banner")}
              >
                Connect With Water Consultant
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
