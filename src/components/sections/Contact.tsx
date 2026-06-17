import { BUSINESS_INFO } from "../../lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "../ui/Card";
import { ServiceCTAs } from "../seo/ServiceCTAs";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display mt-2">
                  Contact Our Hanamkonda Office
                </h2>
              </div>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                Questions about water softeners, filter replacements, or robot cleaners? Call or
                WhatsApp us, or visit our {BUSINESS_INFO.dealerName} office on Hunter Road, Shanti Nagar.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Office Address</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Phone Numbers</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="hover:text-brand-primary transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Email Support</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="hover:text-brand-primary transition-colors"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Working Hours</h4>
                    <p className="text-xs md:text-sm text-text-secondary mt-0.5">
                      {BUSINESS_INFO.openingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-2xl overflow-hidden border border-brandBorder shadow-sm relative">
              <iframe
                title="Google Maps — Hanamkonda Water Service, Shanti Nagar, Hunter Road"
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card
              className="bg-surface-1 border border-brandBorder shadow-xl p-6 md:p-10 h-full flex flex-col justify-center"
              hoverEffect={false}
            >
              <div className="space-y-6 max-w-md mx-auto w-full">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="text-xl font-bold font-display text-text-primary">
                    Call or WhatsApp
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Reach our team directly for sales, service, or repair. We respond within 30
                    minutes during business hours.
                  </p>
                </div>
                <ServiceCTAs layout="stack" className="w-full" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
