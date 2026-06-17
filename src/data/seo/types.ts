export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface SeoServicePageData {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  category: string;
  categoryPath: string;
  primaryKeyword: string;
  serviceType: string;
  heroIntro: string;
  bodyParagraphs: string[];
  whyChooseUs: string[];
  howItWorks: string[];
  serviceArea: string;
  faqs: ServiceFaq[];
  relatedLinks: RelatedLink[];
}
