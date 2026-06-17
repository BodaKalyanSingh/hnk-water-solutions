import { ROUTES } from "../../lib/constants";
import type { ServiceFaq } from "./types";

export interface LocationPageData {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  localContext: string;
  bodyParagraphs: string[];
  faqs: ServiceFaq[];
}

export const LOCATION_PAGES: Record<string, LocationPageData> = {
  hanamkonda: {
    slug: "hanamkonda",
    path: ROUTES.LOCATION_HANAMKONDA,
    title: "Water Purifier & Softener Services in Hanamkonda",
    metaDescription:
      "Water purifier, softener and robot vacuum services in Hanamkonda. Sales, installation, repair and AMC by local certified technicians. Same-day service. Call now.",
    h1: "Water Purifier & Softener Services in Hanamkonda",
    localContext:
      "Hanamkonda is the historic twin city of Warangal, home to the iconic Thousand Pillar Temple, Kakatiya University, and bustling neighbourhoods like Naimnagar, Subedari, Hunter Road, and Kishanpura. Most homes here rely on borewell water with high TDS and hardness — making water purification and softening essential for every household.",
    bodyParagraphs: [
      "Hanamkonda Water Service has been serving Hanamkonda residents since 2016 from our Hunter Road office in Shanti Nagar. Our technicians live and work in this city — they know which areas have the hardest water, which apartment complexes need compact purifier models, and how to reach homes near the old Warangal fort within 30 minutes of a service call.",
      "We provide complete water and smart home solutions: RO and UV purifier sales, installation, and repair; whole-house and point-of-use water softeners; hard water treatment systems; and robot vacuum cleaner sales, setup, and maintenance. Every service is backed by genuine parts and a 90-day repair warranty.",
      "Whether you live in an independent house near Balasamudram, an apartment in Subedari, or a commercial establishment on Hunter Road, our service vans cover all of Hanamkonda PIN code 506001 and surrounding areas. Call or WhatsApp for same-day service.",
    ],
    faqs: [
      {
        question: "Do you provide same-day water purifier repair in Hanamkonda?",
        answer:
          "Yes. For Hanamkonda addresses, our average repair response time is 2–3 hours during business hours (9 AM – 7 PM, Monday to Saturday). Emergency leakage calls are prioritised.",
      },
      {
        question: "Which areas of Hanamkonda do you cover?",
        answer:
          "We cover all neighbourhoods including Naimnagar, Subedari, Hunter Road, Kishanpura, Waddepally, Lashkar Bazar, Gopalapuram, Hanuman Nagar, Balasamudram, and Adarsha Nagar.",
      },
      {
        question: "Is there a showroom where I can see water purifiers in Hanamkonda?",
        answer:
          "Yes. Visit us at Eureka Forbes Ltd, Shanti Nagar, Hunter Road, Hanamkonda. We display working models of RO purifiers, water softeners, and robot vacuums. Walk-ins welcome during business hours.",
      },
    ],
  },

  warangal: {
    slug: "warangal",
    path: ROUTES.LOCATION_WARANGAL,
    title: "Water Purifier & Softener Services in Warangal",
    metaDescription:
      "Water purifier sales, repair and softener services in Warangal. RO installation, hard water treatment and robot vacuum service. Fast local support. Book today.",
    h1: "Water Purifier & Softener Services in Warangal",
    localContext:
      "Warangal city — with landmarks like the Warangal Fort, Public Gardens, and MG Road commercial district — is one of Telangana's fastest-growing urban centres. Borewell water across Warangal frequently exceeds 500 ppm TDS, and hardness damages geysers and washing machines within a year without treatment.",
    bodyParagraphs: [
      "Hanamkonda Water Service extends full water purification, softening, and smart home cleaning support to Warangal city from our nearby Hanamkonda base. Our service vans reach Warangal addresses within 45 minutes, covering areas from Hanamkonda-Warangal Road to the MG Road and Subedari extension zones.",
      "Warangal customers rely on us for RO water purifier sales and same-day repair, water softener installation for hard borewell water, and robot vacuum setup and maintenance. We have serviced over 300 homes and offices in Warangal since 2018, building a reputation for reliable follow-up.",
      "Book a free water test, purifier demo, or repair visit through WhatsApp or phone. We serve Warangal PIN codes 506002 and 506003 with the same quality standards as our Hanamkonda home base.",
    ],
    faqs: [
      {
        question: "How quickly can you reach Warangal for a repair?",
        answer:
          "Our technicians typically reach Warangal addresses within 45 minutes to 1 hour from our Hanamkonda base. Same-day repair is available for most common issues.",
      },
      {
        question: "Do you charge extra for Warangal service visits?",
        answer:
          "No extra travel charges for Warangal city limits. Standard service and repair rates apply. Remote outskirts may incur a nominal visit fee — we confirm before dispatch.",
      },
      {
        question: "What is the best water purifier for Warangal borewell water?",
        answer:
          "Warangal borewell water typically needs a multi-stage RO purifier. We offer free TDS testing and recommend the right model based on your specific water quality.",
      },
    ],
  },

  kazipet: {
    slug: "kazipet",
    path: ROUTES.LOCATION_KAZIPET,
    title: "Water Purifier & Softener Services in Kazipet",
    metaDescription:
      "Water purifier and softener services in Kazipet. RO sales, installation, repair and robot vacuum cleaning near railway colony. Local technicians. WhatsApp now.",
    h1: "Water Purifier & Softener Services in Kazipet",
    localContext:
      "Kazipet is a major railway junction town adjacent to Warangal, known for its railway colony, SIDCO industrial area, and growing residential layouts along the Jangaon road. Water quality here varies — railway colony areas often have municipal supply while newer layouts depend on hard borewell water.",
    bodyParagraphs: [
      "Hanamkonda Water Service provides water purifier, softener, and robot vacuum services to Kazipet residents and businesses. Our team is familiar with the area's mixed water sources — municipal supply in older colonies and high-TDS borewell water in newer developments — and recommends appropriate treatment for each.",
      "From RO purifier installation in Kazipet railway colony apartments to whole-house softener setup in SIDCO-area independent houses, we handle projects of every size. Robot vacuum demos and setup are popular among Kazipet's growing community of working professionals who value smart home convenience.",
      "Service visits to Kazipet are scheduled within 1–2 business days for installations and within 3–4 hours for urgent repairs. Contact us via WhatsApp for the fastest response.",
    ],
    faqs: [
      {
        question: "Do you service the Kazipet railway colony area?",
        answer:
          "Yes. We regularly service homes and quarters in the Kazipet railway colony, including RO purifier installation and repair for railway employees' residences.",
      },
      {
        question: "Is borewell water in Kazipet very hard?",
        answer:
          "Newer layouts along Jangaon road and SIDCO area report hardness of 350–500 ppm. We recommend a free water test to determine if a softener is needed alongside your purifier.",
      },
      {
        question: "Can I book a robot vacuum demo in Kazipet?",
        answer:
          "Yes. We bring demo units to your home in Kazipet at no charge. Book via WhatsApp and we schedule a convenient time slot.",
      },
    ],
  },
};

export const LOCATION_SERVICE_LINKS = [
  { href: ROUTES.WATER_PURIFIER_SALES, label: "Water Purifier Sales in Hanamkonda" },
  { href: ROUTES.WATER_PURIFIER_INSTALLATION, label: "Water Purifier Installation in Hanamkonda" },
  { href: ROUTES.WATER_PURIFIER_REPAIR, label: "Water Purifier Repair in Hanamkonda" },
  { href: ROUTES.WATER_SOFTENER_SALES, label: "Water Softener Sales in Hanamkonda" },
  { href: ROUTES.WATER_SOFTENER_INSTALLATION, label: "Water Softener Installation in Hanamkonda" },
  { href: ROUTES.WATER_SOFTENER_REPAIR, label: "Water Softener Repair in Hanamkonda" },
  { href: ROUTES.HARD_WATER_TREATMENT, label: "Hard Water Treatment in Hanamkonda" },
  { href: ROUTES.ROBOT_VACUUM_SALES, label: "Robot Vacuum Cleaner Sales in Hanamkonda" },
  { href: ROUTES.ROBOT_VACUUM_INSTALLATION, label: "Robot Vacuum Cleaner Installation in Hanamkonda" },
  { href: ROUTES.ROBOT_VACUUM_REPAIR, label: "Robot Vacuum Cleaner Repair in Warangal" },
];
