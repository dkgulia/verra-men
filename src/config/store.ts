import type { Category, HeroSlide, StoreConfig } from "@/types";
import { images } from "./images";

/**
 * Store-wide branding & content configuration.
 * Swap this file to rebrand the entire template for another client.
 */
export const storeConfig: StoreConfig = {
  brand: {
    name: "VERRA MEN",
    shortName: "VERRA",
    tagline: "Made for the way you move.",
    description:
      "Modern menswear designed around effortless movement, considered details and everyday versatility.",
    logoText: "VERRA MEN",
  },
    colors: {
    background: "#F7F5F0",
    primary: "#171717",
    secondary: "#6B665E",
    accent: "#8A6A4A",
    muted: "#9A9590",
    border: "#E4E0D8",
    surface: "#FFFFFF",
  },
  typography: {
    display: "var(--font-display)",
    body: "var(--font-body)",
  },
  currency: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
  },
  freeShippingThreshold: 2999,
  announcement:
    "FREE SHIPPING ON ORDERS ABOVE ₹2,999  •  EASY 7-DAY RETURNS",
  navigation: [
    { label: "New Arrivals", href: "/shop?filter=new" },
    { label: "Shirts", href: "/shop/shirts" },
    { label: "T-Shirts", href: "/shop/t-shirts" },
    { label: "Trousers", href: "/shop/trousers" },
    { label: "Outerwear", href: "/shop/outerwear" },
    { label: "Accessories", href: "/shop/accessories" },
    { label: "Sale", href: "/shop?filter=sale" },
  ],
  footer: {
    columns: [
      {
        title: "SHOP",
        links: [
          { label: "New Arrivals", href: "/shop?filter=new" },
          { label: "Shirts", href: "/shop/shirts" },
          { label: "T-Shirts", href: "/shop/t-shirts" },
          { label: "Trousers", href: "/shop/trousers" },
          { label: "Outerwear", href: "/shop/outerwear" },
          { label: "Accessories", href: "/shop/accessories" },
        ],
      },
      {
        title: "HELP",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Shipping", href: "/shipping" },
          { label: "Returns", href: "/returns" },
          { label: "Size Guide", href: "/size-guide" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
      {
        title: "ABOUT",
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Journal", href: "/about#design" },
          { label: "Instagram", href: "https://instagram.com" },
        ],
      },
    ],
    newsletter: {
      title: "JOIN THE LIST",
      description:
        "Get first access to new drops, private offers and stories from VERRA MEN.",
    },
    copyright: "© 2026 VERRA MEN",
    paymentMethods: ["Visa", "Mastercard", "RuPay", "UPI", "Net Banking"],
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    email: "hello@verramen.com",
    phone: "+91 98765 43210",
    address: "Mumbai, India",
  },
  seo: {
    siteUrl: "https://verramen.com",
    defaultTitle: "VERRA MEN — Made for the way you move.",
    titleTemplate: "%s | VERRA MEN",
    description:
      "Modern menswear designed around effortless movement, considered details and everyday versatility.",
    ogImage: images.hero.slide1,
  },
  about: {
    headline: "BUILT AROUND THE EVERYDAY.",
    intro:
      "VERRA MEN creates modern menswear for people who value simplicity, versatility and thoughtful design.",
    sections: [
      {
        id: "philosophy",
        title: "Our Philosophy",
        body: "We design for movement through the day — from morning meetings to late dinners — with pieces that feel considered without trying too hard. Less noise. More intention.",
        image: images.editorial.philosophy,
      },
      {
        id: "materials",
        title: "Materials",
        body: "We choose fabrics for how they wear: linen that breathes, cottons with substance, and finishes that soften with time. Every fabric decision starts with how it feels on the body.",
        image: images.editorial.materials,
      },
      {
        id: "design",
        title: "Design Approach",
        body: "Clean silhouettes. Relaxed structure. Details that earn their place. Our design language stays quiet so the wearer — and the fabric — can speak.",
        image: images.editorial.design,
      },
    ],
  },
  editorial: {
    newSeason: {
      eyebrow: "NEW SEASON",
      headline: "THE ART OF LESS.",
      copy: "Thoughtful fabrics. Clean silhouettes. Pieces designed to stay in rotation.",
      cta: { label: "EXPLORE NEW ARRIVALS", href: "/shop?filter=new" },
      image: images.editorial.newSeason,
    },
    promo: {
      headline: "ESSENTIALS, REFINED.",
      copy: "Build a wardrobe around pieces that work harder and last longer.",
      cta: { label: "SHOP ESSENTIALS", href: "/shop" },
      image: images.editorial.promo,
    },
  },
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-1",
    headline: "EVERYDAY, ELEVATED.",
    subtitle:
      "Modern essentials designed for effortless days and dressed-up nights.",
    image: images.hero.slide1,
    primaryCta: { label: "SHOP NEW ARRIVALS", href: "/shop?filter=new" },
    secondaryCta: { label: "EXPLORE SHIRTS", href: "/shop/shirts" },
  },
  {
    id: "hero-2",
    headline: "TAILORED TO MOVE.",
    subtitle:
      "Relaxed structure and considered proportions for the modern wardrobe.",
    image: images.hero.slide2,
    primaryCta: { label: "SHOP TROUSERS", href: "/shop/trousers" },
    secondaryCta: { label: "VIEW ALL", href: "/shop" },
  },
  {
    id: "hero-3",
    headline: "LAYERS WITH INTENT.",
    subtitle: "Outerwear that completes the look without overcomplicating it.",
    image: images.hero.slide3,
    primaryCta: { label: "SHOP OUTERWEAR", href: "/shop/outerwear" },
    secondaryCta: { label: "NEW ARRIVALS", href: "/shop?filter=new" },
  },
];

export const categories: Category[] = [
  {
    id: "shirts",
    slug: "shirts",
    name: "SHIRTS",
    description: "Everyday staples, refined.",
    image: images.categories.shirts,
    href: "/shop/shirts",
  },
  {
    id: "t-shirts",
    slug: "t-shirts",
    name: "T-SHIRTS",
    description: "Premium essentials.",
    image: images.categories.tshirts,
    href: "/shop/t-shirts",
  },
  {
    id: "trousers",
    slug: "trousers",
    name: "TROUSERS",
    description: "Relaxed. Tailored. Versatile.",
    image: images.categories.trousers,
    href: "/shop/trousers",
  },
  {
    id: "outerwear",
    slug: "outerwear",
    name: "OUTERWEAR",
    description: "Layers with character.",
    image: images.categories.outerwear,
    href: "/shop/outerwear",
  },
];

export const shippingCopy = {
  description:
    "Orders ship within 2–4 business days. Free shipping on orders above ₹2,999.",
  returns:
    "Easy 7-day returns on unused items in original condition with tags attached.",
  sizeGuideNote:
    "Refer to our size guide for measurements. Between sizes? Size up for a more relaxed fit.",
};
