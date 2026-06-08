import { SEOHead } from "../components/layout/SEOHead";
import { ContactSection } from "../components/sections/Contact";
import { BUSINESS_INFO } from "../lib/constants";

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact - ${BUSINESS_INFO.name}`,
    "description": `Get in touch with ${BUSINESS_INFO.name} in Hanamkonda.`,
    "url": "https://waterpurifiersolutions.in/contact",
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Phone, Email & Location"
        description="Connect with our Hanamkonda office. Reach out via WhatsApp, phone, or visit our Naimnagar service center. Same day response guaranteed."
        schemaMarkup={contactSchema}
      />
      <main className="pt-24 min-h-screen bg-surface-1">
        <ContactSection />
      </main>
    </>
  );
}
