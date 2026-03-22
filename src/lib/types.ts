export interface State {
  name: string;
  slug: string;
  abbr: string;
  permitRequired: boolean;
  constitutionalCarry: boolean;
  description: string;
}

export interface DealerCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
}

export interface Dealer {
  id: string;
  name: string;
  slug: string;
  categories: string[];
  state: string;
  city: string;
  citySlug: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  description: string;
  website?: string;
  featured?: boolean;
}

export interface City {
  name: string;
  slug: string;
  stateSlug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  readTime: string;
  content: string;
}
