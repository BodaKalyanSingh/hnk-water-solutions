import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { Categories } from "../components/sections/Categories";
import { WhyUs } from "../components/sections/WhyUs";
import { ProductShowcase } from "../components/sections/ProductShowcase";
import { WaterAssessment } from "../components/sections/WaterAssessment";
import { Services } from "../components/sections/Services";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { ContactSection } from "../components/sections/Contact";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_INFO } from "../lib/constants";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://waterpurifiersolutions.in/logo.png",
    "@id": "https://waterpurifiersolutions.in/#localbusiness",
    "url": "https://waterpurifiersolutions.in",
    "telephone": BUSINESS_INFO.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 45, Naimnagar",
      "addressLocality": "Hanamkonda, Warangal",
      "addressRegion": "Telangana",
      "postalCode": "506001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      <SEOHead
        title="Pure Water, Softeners & Cleaners Hanamkonda"
        description="Water Purifiers sales & repair service in Hanamkonda. Authorized whole-house water softeners, vacuum cleaners, and robotic cleaner services at Naimnagar, Subedari."
        schemaMarkup={localBusinessSchema}
      />
      <Hero />
      <TrustBar />
      <Categories />
      <WhyUs />
      <ProductShowcase />
      <WaterAssessment />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
