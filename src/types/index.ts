export interface Category {
  id: string;
  title: string;
  description: string;
  iconName: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  image: string; // Will store name of asset or local fallback representation
  benefits: string[];
  categoryId: string;
  isFeatured?: boolean;
  specifications?: Record<string, string>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  steps?: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WaterAssessmentData {
  waterSource: 'municipal' | 'borewell' | 'tanker' | '';
  familySize: '1-2' | '3-5' | '6+' | '';
  location: string;
}
