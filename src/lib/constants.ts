export const SITE_DOMAIN = "hanamkondawaterservice.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const GOOGLE_SITE_VERIFICATION = "your-google-verification-code";

export const BUSINESS_INFO = {
  name: "Hanamkonda Water Service",
  phone: "+91 81064 97719",
  phoneRaw: "+918106497719",
  whatsapp: "+91 81064 97719",
  whatsappRaw: "918106497719",
  email: "dharamsothutnayak@gmail.com",
  dealerName: "Eureka Forbes Ltd",
  eurekaForbesPartnerLabel: "Eureka Forbes Partner",
  eurekaForbesBlurb:
    "We work with Eureka Forbes Ltd — authorised sales, installation, and service for water purifiers, softeners, and home cleaning solutions from our Shanti Nagar, Hunter Road office in Hanamkonda.",
  address:
    "Eureka Forbes Ltd, HNo: 1-7-780 Shanti Nagar, Hunter Rd, beside Govt School Line Adalth Center, Hanamkonda, Telangana 506001",
  streetAddress:
    "HNo: 1-7-780 Shanti Nagar, Hunter Rd, beside Govt School Line Adalth Center",
  locality: "Hanamkonda",
  region: "Telangana",
  postalCode: "506001",
  country: "IN",
  coordinates: {
    lat: 18.0142,
    lng: 79.5496,
  },
  openingHours: "Mon - Sat: 09:00 AM - 07:00 PM",
  openingHoursISO: "Mo-Sa 09:00-19:00",
  googleBusinessUrl: "https://g.page/hanamkonda-water-service",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Eureka+Forbes,+HNo+1-7-780+Shanti+Nagar,+Hunter+Rd,+Hanamkonda,+Telangana+506001&hl=en&z=16&output=embed",
  ogImage: `${SITE_URL}/images/og-image.jpg`,
  logoImage: `${SITE_URL}/images/logo.png`,
  areaServed: ["Hanamkonda", "Warangal", "Kazipet"] as const,
};

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  ABOUT: "/about",
  CONTACT: "/contact",
  FAQ: "/faq",
  PRODUCTS: "/products",
  WATER_PURIFIER_SALES: "/water-purifier-sales-hanamkonda",
  WATER_PURIFIER_INSTALLATION: "/water-purifier-installation-hanamkonda",
  WATER_PURIFIER_REPAIR: "/water-purifier-repair-hanamkonda",
  WATER_SOFTENER_SALES: "/water-softener-sales-hanamkonda",
  WATER_SOFTENER_INSTALLATION: "/water-softener-installation-hanamkonda",
  WATER_SOFTENER_REPAIR: "/water-softener-repair-hanamkonda",
  HARD_WATER_TREATMENT: "/hard-water-treatment-hanamkonda",
  ROBOT_VACUUM_SALES: "/robot-vacuum-cleaner-sales-hanamkonda",
  ROBOT_VACUUM_INSTALLATION: "/robot-vacuum-cleaner-installation-hanamkonda",
  ROBOT_VACUUM_REPAIR: "/robot-vacuum-cleaner-repair-hanamkonda",
  LOCATION_HANAMKONDA: "/locations/hanamkonda",
  LOCATION_WARANGAL: "/locations/warangal",
  LOCATION_KAZIPET: "/locations/kazipet",
} as const;

export const ALL_SERVICE_ROUTES = [
  ROUTES.WATER_PURIFIER_SALES,
  ROUTES.WATER_PURIFIER_INSTALLATION,
  ROUTES.WATER_PURIFIER_REPAIR,
  ROUTES.WATER_SOFTENER_SALES,
  ROUTES.WATER_SOFTENER_INSTALLATION,
  ROUTES.WATER_SOFTENER_REPAIR,
  ROUTES.HARD_WATER_TREATMENT,
  ROUTES.ROBOT_VACUUM_SALES,
  ROUTES.ROBOT_VACUUM_INSTALLATION,
  ROUTES.ROBOT_VACUUM_REPAIR,
] as const;

export const ALL_LOCATION_ROUTES = [
  ROUTES.LOCATION_HANAMKONDA,
  ROUTES.LOCATION_WARANGAL,
  ROUTES.LOCATION_KAZIPET,
] as const;

export const WHATSAPP_MESSAGES = {
  default: "Hi, I need service in Hanamkonda",
  product: (productName: string) =>
    `Hi! I'm interested in "${productName}". Please share details.`,
  service: (serviceName: string) =>
    `Hi! I need "${serviceName}" service. Please contact me.`,
  assessment: (source: string, recommendation: string) =>
    `Hi! My water source is ${source}. I got the recommendation for "${recommendation}". Let's discuss.`,
};
