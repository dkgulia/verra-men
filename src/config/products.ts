import type { Product, Review } from "@/types";
import { images } from "./images";

/**
 * Product catalog — the single source of truth for all SKUs.
 * Replace this file to swap an entire client's product range.
 */
export const products: Product[] = [
  // ——— SHIRTS ———
  {
    id: "p-01",
    slug: "linen-resort-shirt-sand",
    name: "Linen Resort Shirt — Sand",
    price: 2490,
    category: "shirts",
    description:
      "A lightweight linen shirt designed for warm days and easy evenings.",
    details: [
      "100% European linen",
      "Resort collar",
      "Mother-of-pearl buttons",
      "Relaxed fit through the body",
      "Made for warm climates",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size M",
      "Relaxed fit — size down for a closer silhouette",
      "Chest pocket optional styling",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Sand", hex: "#C4B49A" },
      { name: "White", hex: "#F5F5F0" },
    ],
    images: images.products.linenResortShirt,
    rating: 4.8,
    reviewCount: 24,
    bestseller: true,
    newArrival: true,
    featured: true,
  },
  {
    id: "p-02",
    slug: "oxford-essential-shirt-white",
    name: "Oxford Essential Shirt — White",
    price: 2290,
    category: "shirts",
    description:
      "A timeless Oxford shirt with a clean silhouette for everyday dressing.",
    details: [
      "Premium Oxford cotton",
      "Button-down collar",
      "Clean single-needle stitching",
      "Versatile everyday weight",
    ],
    sizeAndFit: [
      "Model is 6'1\" / 185cm and wears size M",
      "Classic contemporary fit",
      "Works layered or alone",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F8F8F5" },
      { name: "Sky Blue", hex: "#A8C4D4" },
    ],
    // Light Blue Shirt primary — clean studio presentation used on card + PDP
    images: images.products.oxfordEssentialShirt,
    rating: 4.7,
    reviewCount: 31,
    bestseller: true,
    featured: true,
  },
  {
    id: "p-03",
    slug: "signature-twill-shirt-olive",
    name: "Signature Twill Shirt — Olive",
    price: 2690,
    category: "shirts",
    description: "Soft structured twill with a relaxed contemporary fit.",
    details: [
      "Soft cotton twill",
      "Subtle structure with ease",
      "Horn-effect buttons",
      "Year-round weight",
    ],
    sizeAndFit: [
      "Model is 5'11\" / 180cm and wears size M",
      "Relaxed contemporary fit",
      "Slightly longer back hem",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Olive", hex: "#5C6B4A" },
      { name: "Navy", hex: "#1E2A3A" },
    ],
    images: images.products.signatureTwillShirt,
    rating: 4.6,
    reviewCount: 18,
    newArrival: true,
  },
  {
    id: "p-04",
    slug: "relaxed-stripe-shirt-blue",
    name: "Relaxed Stripe Shirt — Blue",
    price: 2490,
    category: "shirts",
    description:
      "A relaxed striped shirt made for effortless everyday styling.",
    details: [
      "Cotton blend with soft handfeel",
      "Subtle vertical stripe",
      "Relaxed camp-inspired silhouette",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size L",
      "Relaxed fit through chest and sleeve",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blue", hex: "#6B8FA8" },
      { name: "Beige", hex: "#D4C4A8" },
    ],
    images: images.products.relaxedStripeShirt,
    rating: 4.5,
    reviewCount: 12,
    newArrival: true,
  },
  {
    id: "p-05",
    slug: "premium-poplin-shirt-black",
    name: "Premium Poplin Shirt — Black",
    price: 2790,
    category: "shirts",
    description: "Smooth premium poplin with a sharp, minimal finish.",
    details: [
      "Fine cotton poplin",
      "Crisp handfeel with soft drape",
      "Minimal placket detailing",
      "Evening-to-day versatility",
    ],
    sizeAndFit: [
      "Model is 6'1\" / 185cm and wears size M",
      "Clean tailored fit — true to size",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "White", hex: "#F5F5F0" },
    ],
    images: images.products.premiumPoplinShirt,
    rating: 4.9,
    reviewCount: 27,
    bestseller: true,
    featured: true,
  },

  // ——— T-SHIRTS ———
  {
    id: "p-06",
    slug: "heavyweight-essential-tee",
    name: "Heavyweight Essential Tee",
    price: 1490,
    category: "t-shirts",
    description: "A substantial everyday tee with a relaxed silhouette.",
    details: [
      "220gsm heavyweight cotton",
      "Reinforced collar",
      "Pre-washed for softness",
      "Built to hold its shape",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size M",
      "Relaxed silhouette — size up for oversized",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "White", hex: "#F5F5F0" },
      { name: "Charcoal", hex: "#4A4A4A" },
    ],
    images: images.products.heavyweightEssentialTee,
    rating: 4.8,
    reviewCount: 45,
    bestseller: true,
    featured: true,
  },
  {
    id: "p-07",
    slug: "supima-everyday-tee",
    name: "Supima Everyday Tee",
    price: 1790,
    category: "t-shirts",
    description: "Soft Supima cotton made for everyday comfort.",
    details: [
      "100% Supima cotton",
      "Fine gauge knit",
      "Exceptional softness and durability",
    ],
    sizeAndFit: [
      "Model is 5'11\" / 180cm and wears size M",
      "Regular fit with slight ease",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F8F8F5" },
      { name: "Navy", hex: "#1E2A3A" },
      { name: "Olive", hex: "#5C6B4A" },
    ],
    images: images.products.supimaEverydayTee,
    rating: 4.7,
    reviewCount: 33,
    bestseller: true,
    newArrival: true,
  },
  {
    id: "p-08",
    slug: "relaxed-fit-tee-stone",
    name: "Relaxed Fit Tee — Stone",
    price: 1590,
    category: "t-shirts",
    description: "A relaxed essential in a muted stone tone.",
    details: [
      "Soft cotton jersey",
      "Muted stone dye",
      "Dropped shoulder for ease",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size L",
      "Relaxed fit — intentional ease through body",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Stone", hex: "#B8B0A4" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: images.products.relaxedFitTee,
    rating: 4.6,
    reviewCount: 19,
    newArrival: true,
  },

  // ——— TROUSERS ———
  {
    id: "p-09",
    slug: "relaxed-pleated-trousers",
    name: "Relaxed Pleated Trousers",
    price: 2990,
    category: "trousers",
    description:
      "Relaxed pleated trousers balancing comfort and tailored structure.",
    details: [
      "Soft wool-blend feel (seasonal blend)",
      "Single pleat",
      "Tapered leg with room through thigh",
      "Side adjusters",
    ],
    sizeAndFit: [
      "Model is 6'1\" / 185cm and wears size 32",
      "Mid-rise with relaxed seat",
      "Inseam approx. 30\"",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Beige", hex: "#C8B89A" },
      { name: "Charcoal", hex: "#3A3A3A" },
    ],
    images: images.products.relaxedPleatedTrousers,
    rating: 4.7,
    reviewCount: 22,
    bestseller: true,
    featured: true,
    newArrival: true,
  },
  {
    id: "p-10",
    slug: "everyday-chino-olive",
    name: "Everyday Chino — Olive",
    price: 2790,
    category: "trousers",
    description:
      "A versatile chino designed to move easily from workdays to weekends.",
    details: [
      "Durable cotton twill",
      "Clean flat front",
      "Versatile olive tone",
      "Reinforced pockets",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size 32",
      "Straight modern fit",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Olive", hex: "#5C6B4A" },
      { name: "Khaki", hex: "#B8A882" },
      { name: "Navy", hex: "#1E2A3A" },
    ],
    images: images.products.everydayChino,
    rating: 4.8,
    reviewCount: 38,
    bestseller: true,
  },
  {
    id: "p-11",
    slug: "tailored-trousers-charcoal",
    name: "Tailored Trousers — Charcoal",
    price: 3290,
    category: "trousers",
    description: "Clean tailored trousers with a contemporary straight fit.",
    details: [
      "Structured yet comfortable fabric",
      "Sharp crease-ready finish",
      "Contemporary straight leg",
    ],
    sizeAndFit: [
      "Model is 6'1\" / 185cm and wears size 32",
      "True to size for a clean tailored look",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: images.products.tailoredTrousers,
    rating: 4.6,
    reviewCount: 15,
    featured: true,
  },

  // ——— OUTERWEAR ———
  {
    id: "p-12",
    slug: "soft-structure-overshirt",
    name: "Soft Structure Overshirt",
    price: 3490,
    category: "outerwear",
    description: "A lightweight structured layer for transitional weather.",
    details: [
      "Soft structured cotton blend",
      "Chest pockets",
      "Works as shirt or light jacket",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size M",
      "Relaxed layering fit — size up over heavy knits",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", hex: "#6B4E3D" },
      { name: "Olive", hex: "#5C6B4A" },
    ],
    images: images.products.softStructureOvershirt,
    rating: 4.7,
    reviewCount: 14,
    newArrival: true,
    featured: true,
  },
  {
    id: "p-13",
    slug: "relaxed-linen-blazer",
    name: "Relaxed Linen Blazer",
    price: 5490,
    category: "outerwear",
    description: "Relaxed tailoring with the effortless character of linen.",
    details: [
      "Linen blend",
      "Unstructured shoulders",
      "Soft natural drape",
      "Two-button closure",
    ],
    sizeAndFit: [
      "Model is 6'1\" / 185cm and wears size M",
      "Relaxed tailored fit",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#C4B49A" },
      { name: "Navy", hex: "#1E2A3A" },
    ],
    images: images.products.relaxedLinenBlazer,
    rating: 4.9,
    reviewCount: 9,
    newArrival: true,
    featured: true,
  },
  {
    id: "p-14",
    slug: "everyday-harrington-jacket",
    name: "Everyday Harrington Jacket",
    price: 4290,
    category: "outerwear",
    description: "A clean everyday jacket with a timeless silhouette.",
    details: [
      "Classic Harrington proportions",
      "Ribbed hem and cuffs",
      "Lightweight shell",
    ],
    sizeAndFit: [
      "Model is 6'0\" / 183cm and wears size M",
      "True to size with room for a knit underneath",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Olive", hex: "#5C6B4A" },
    ],
    images: images.products.everydayHarrington,
    rating: 4.8,
    reviewCount: 21,
    bestseller: true,
  },

  // ——— ACCESSORIES ———
  {
    id: "p-15",
    slug: "leather-minimal-belt",
    name: "Leather Minimal Belt",
    price: 1490,
    category: "accessories",
    description: "A minimal leather belt designed for everyday wear.",
    details: [
      "Full-grain leather",
      "Brushed metal buckle",
      "Clean unfinished edge",
    ],
    sizeAndFit: [
      "Available in standard waist sizes",
      "Measure over trousers for best fit",
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Brown", hex: "#6B4E3D" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: images.products.leatherMinimalBelt,
    rating: 4.7,
    reviewCount: 28,
    bestseller: true,
  },
  {
    id: "p-16",
    slug: "classic-canvas-tote",
    name: "Classic Canvas Tote",
    price: 1290,
    category: "accessories",
    description: "A durable everyday tote with a clean VERRA MEN finish.",
    details: [
      "Heavyweight canvas",
      "Reinforced handles",
      "Interior slip pocket",
      "Subtle branded mark",
    ],
    sizeAndFit: ["One size — spacious everyday capacity"],
    sizes: ["One Size"],
    colors: [
      { name: "Natural", hex: "#E8DFD0" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: images.products.classicCanvasTote,
    rating: 4.6,
    reviewCount: 16,
    newArrival: true,
  },
  {
    id: "p-17",
    slug: "leather-card-holder",
    name: "Leather Card Holder",
    price: 990,
    category: "accessories",
    description: "A compact leather card holder for everyday carry.",
    details: [
      "Vegetable-tanned leather",
      "Holds 4–6 cards",
      "Slim profile for pocket carry",
    ],
    sizeAndFit: ["One size"],
    sizes: ["One Size"],
    colors: [
      { name: "Tan", hex: "#A67C52" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    images: images.products.leatherCardHolder,
    rating: 4.8,
    reviewCount: 20,
    featured: true,
  },
];

/** Demo reviews — clearly labeled as demo content */
export const demoReviews: Review[] = [
  {
    id: "r-1",
    productId: "p-01",
    author: "Demo Customer",
    rating: 5,
    title: "Perfect summer weight",
    body: "Demo review: The linen feels substantial without being heavy. Ideal for warm evenings.",
    isDemo: true,
  },
  {
    id: "r-2",
    productId: "p-02",
    author: "Demo Customer",
    rating: 5,
    title: "Clean everyday Oxford",
    body: "Demo review: Sharp enough for work, easy enough for weekends. The Sky Blue wears beautifully.",
    isDemo: true,
  },
  {
    id: "r-3",
    productId: "p-06",
    author: "Demo Customer",
    rating: 5,
    title: "Proper heavyweight tee",
    body: "Demo review: Holds its shape after washes. The kind of basic that earns its keep.",
    isDemo: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestsellers(limit = 8): Product[] {
  return products.filter((p) => p.bestseller).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.newArrival).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.colors.some((c) => c.name.toLowerCase().includes(q))
  );
}

export function getAllColors(): string[] {
  return Array.from(
    new Set(products.flatMap((p) => p.colors.map((c) => c.name)))
  ).sort();
}

export function getAllSizes(): string[] {
  const sizeOrder = [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "28",
    "30",
    "32",
    "34",
    "36",
    "38",
    "One Size",
  ];
  const sizes = Array.from(new Set(products.flatMap((p) => p.sizes)));
  return sizes.sort(
    (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b) || a.localeCompare(b)
  );
}

export function getPriceRange(): { min: number; max: number } {
  const prices = products.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
