import { SEOHead } from "../components/layout/SEOHead";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useLeadStore } from "../store/leadStore";
import { ShieldCheck, Users, Target, MapPin, Award } from "lucide-react";

export default function About() {
  const { openLeadModal } = useLeadStore();

  const milestones = [
    { year: "2016", title: "Company Founded", desc: "Started with a small 2-member team servicing water purifiers in Hunter Road." },
    { year: "2018", title: "Softener Launch", desc: "Expanded into whole-house hard water softeners due to local high scaling issues." },
    { year: "2021", title: "Smart Home Tech", desc: "Introduced advanced robotic vacuums and air purifiers to Hanamkonda homes." },
    { year: "2024", title: "500+ Active Clients", desc: "Emerged as the leading home health solutions provider in the city." }
  ];

  const serviceAreas = [
    "Naimnagar", "Subedari", "Hunter Road", "Kishanpura", "Waddepally",
    "Lashkar Bazar", "Gopalapuram", "Hanuman Nagar", "Balasamudram", "Adarsha Nagar"
  ];

  return (
    <>
      <SEOHead
        title="About Us - Sales & Services"
        description="Serving Hanamkonda since 2016. Learn about our mission, specialized home technicians team, and active service areas in Warangal districts."
      />
      
      <main className="pt-24 pb-16 min-h-screen bg-surface-1">
        {/* Banner */}
        <section className="bg-brand-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent opacity-40" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Our Story & Mission</h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              We empower households in Hanamkonda with state-of-the-art filtration and automated home cleaning.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* Mission & Vision grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white flex flex-col items-start" hoverEffect={false}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-text-primary mb-3">Our Mission</h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                To eradicate water-borne diseases and hard water scale buildup in local homes by deploying high-rejection RO systems and digital softeners.
              </p>
            </Card>

            <Card className="p-8 bg-white flex flex-col items-start" hoverEffect={false}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-text-primary mb-3">Our Core Team</h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                A skilled group of 8 technicians and consultants trained directly by top manufacturing brands to offer faultless, same-day repairs.
              </p>
            </Card>

            <Card className="p-8 bg-white flex flex-col items-start" hoverEffect={false}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-text-primary mb-3">Quality Promise</h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                We never use unbranded duplicate filter cartridges or pumps. Quality and long-term durability remain our absolute indicators.
              </p>
            </Card>
          </section>

          {/* Milestone timeline */}
          <section className="space-y-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary text-center font-display">
              Our Growth Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative bg-white border border-brandBorder rounded-2xl p-6 shadow-sm space-y-3">
                  <span className="text-2xl font-extrabold text-brand-primary font-mono">{m.year}</span>
                  <h4 className="font-bold text-text-primary text-sm font-display">{m.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Service Area map / checklist */}
          <section className="bg-white border border-brandBorder rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-text-primary flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-brand-primary" />
                <span>Service Coverage Area</span>
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Our quick service response vans cover the entire Hanamkonda urban limits. If you live in any of these neighborhoods, a technician can reach you within 2 hours:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-text-secondary bg-surface-1 py-2 px-3 rounded-lg border border-brandBorder">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Button variant="cta" onClick={() => openLeadModal("Consultation", "About Page Service Area Call")}>
                  Check Service Availablity
                </Button>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden border border-brandBorder shadow-inner relative">
              {/* Google Maps view of Hanamkonda */}
              <iframe
                title="Google Map Hanamkonda Service Limits"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.7570415307567!2d79.55394237586548!3d18.013233382998638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f59e0000001%3A0xe54fb713d2f92984!2sHanamkonda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717830000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
