export const BUSINESS_INFO = {
  name: "Water Purifier Solutions Hanamkonda",
  phone: "+91 63001 40176",
  phoneRaw: "+916300140176",
  whatsapp: "+91 63001 40176",
  whatsappRaw: "916300140176",
  email: "info@waterpurifiersolutions.in",
  address: "Plot No. 45, Naimnagar, Hanamkonda, Warangal, Telangana - 506001",
  coordinates: {
    lat: 18.0142,
    lng: 79.5496,
  },
  openingHours: "Mon - Sun: 09:00 AM - 08:00 PM",
  openingHoursISO: "Mo-Su 09:00-20:00",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.7570415307567!2d79.55394237586548!3d18.013233382998638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f59e0000001%3A0xe54fb713d2f92984!2sHanamkonda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717830000000!5m2!1sen!2sin",
};

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  SERVICES: "/services",
  CONTACT: "/contact",
  SEO_WATER_PURIFIER: "/water-purifier-hanamkonda",
  SEO_WATER_SOFTENER: "/water-softener-hanamkonda",
  SEO_ROBO_VACUUM: "/robo-vacuum-hanamkonda",
};

export const WHATSAPP_MESSAGES = {
  default: "Hi! I am interested in your products/services in Hanamkonda. Please contact me.",
  product: (productName: string) => `Hi! I want a quote for "${productName}". Please send me the details.`,
  service: (serviceName: string) => `Hi! I want to book "${serviceName}" service. Please contact me.`,
  assessment: (source: string, recommendation: string) => `Hi! My water source is ${source}. I got the recommendation for "${recommendation}". Let's discuss.`,
  demo: "Hi! I would like to book a free home demonstration.",
  callback: "Hi! I requested a callback. Please call me when you are free.",
};
