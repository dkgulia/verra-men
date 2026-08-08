export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductImages {
  primary: string;
  secondary?: string;
  detail?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  description: string;
  details?: string[];
  sizeAndFit?: string[];
  sizes: string[];
  colors: ProductColor[];
  images: ProductImages;
  rating: number;
  reviewCount: number;
  bestseller?: boolean;
  newArrival?: boolean;
  featured?: boolean;
  onSale?: boolean;
}

export interface ProductVariant {
  productId: string;
  color: string;
  size: string;
  quantity: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  headline: string;
  subtitle: string;
  image: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  isDemo: true;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface StoreColors {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  border: string;
  surface: string;
}

export interface StoreConfig {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    logoText: string;
  };
  colors: StoreColors;
  typography: {
    display: string;
    body: string;
  };
  currency: {
    code: string;
    symbol: string;
    locale: string;
  };
  freeShippingThreshold: number;
  announcement: string;
  navigation: NavItem[];
  footer: {
    columns: FooterColumn[];
    newsletter: {
      title: string;
      description: string;
    };
    copyright: string;
    paymentMethods: string[];
  };
  social: {
    instagram: string;
    facebook?: string;
    twitter?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  seo: {
    siteUrl: string;
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    ogImage: string;
  };
  about: {
    headline: string;
    intro: string;
    sections: Array<{
      id: string;
      title: string;
      body: string;
      image: string;
    }>;
  };
  editorial: {
    newSeason: {
      eyebrow: string;
      headline: string;
      copy: string;
      cta: { label: string; href: string };
      image: string;
    };
    promo: {
      headline: string;
      copy: string;
      cta: { label: string; href: string };
      image: string;
    };
  };
}

export interface CartItem {
  id: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export type SortOption =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "bestselling";

export interface ShopFilters {
  categories: string[];
  colors: string[];
  sizes: string[];
  priceMin: number;
  priceMax: number;
  sort: SortOption;
}
