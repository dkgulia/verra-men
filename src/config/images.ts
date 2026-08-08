/**
 * Central image registry for VERRA MEN.
 * Replace any path here to update imagery across the entire storefront.
 *
 * Images live in /public/images — swap files or point to new URLs without
 * touching components.
 *
 * Tip: Keep aspect ratios consistent —
 * - Hero / editorial: landscape lifestyle
 * - Category cards: portrait
 * - Product: portrait studio / model shots
 */

const local = (path: string) => `/images/${path}`;

export const images = {
  hero: {
    slide1: local("hero/slide-1.jpg"),
    slide2: local("hero/slide-2.jpg"),
    slide3: local("hero/slide-3.jpg"),
  },
  categories: {
    shirts: local("categories/shirts.jpg"),
    tshirts: local("categories/tshirts.jpg"),
    trousers: local("categories/trousers.jpg"),
    outerwear: local("categories/outerwear.jpg"),
  },
  editorial: {
    newSeason: local("editorial/new-season.jpg"),
    promo: local("editorial/promo.jpg"),
    aboutHero: local("editorial/about-hero.jpg"),
    philosophy: local("editorial/philosophy.jpg"),
    materials: local("editorial/materials.jpg"),
    design: local("editorial/design.jpg"),
  },
  /**
   * Product imagery slots.
   * Each product supports primary / secondary / detail.
   * Oxford Essential (Sky Blue / light blue shirt) uses a clean studio-style
   * primary reused on the product card and PDP.
   */
  products: {
    linenResortShirt: {
      primary: local("products/linen-resort-1.jpg"),
      secondary: local("products/linen-resort-2.jpg"),
      detail: local("products/linen-detail.jpg"),
    },
    oxfordEssentialShirt: {
      // Light Blue Shirt — primary used on card + PDP
      primary: local("products/oxford-lightblue-1.jpg"),
      secondary: local("products/oxford-lightblue-2.jpg"),
      detail: local("products/oxford-lightblue-3.jpg"),
    },
    signatureTwillShirt: {
      primary: local("products/twill-1.jpg"),
      secondary: local("products/twill-2.jpg"),
      detail: local("products/linen-detail.jpg"),
    },
    relaxedStripeShirt: {
      primary: local("products/stripe-1.jpg"),
      secondary: local("products/stripe-2.jpg"),
      detail: local("products/oxford-lightblue-2.jpg"),
    },
    premiumPoplinShirt: {
      primary: local("products/poplin-1.jpg"),
      secondary: local("products/twill-2.jpg"),
      detail: local("products/linen-detail.jpg"),
    },
    heavyweightEssentialTee: {
      primary: local("products/tee-heavy-1.jpg"),
      secondary: local("products/tee-heavy-2.jpg"),
      detail: local("products/tee-alt.jpg"),
    },
    supimaEverydayTee: {
      primary: local("products/tee-supima-1.jpg"),
      secondary: local("products/tee-heavy-1.jpg"),
      detail: local("products/tee-alt.jpg"),
    },
    relaxedFitTee: {
      primary: local("products/tee-stone-1.jpg"),
      secondary: local("products/tee-heavy-2.jpg"),
      detail: local("products/tee-alt.jpg"),
    },
    relaxedPleatedTrousers: {
      primary: local("products/trousers-pleat-1.jpg"),
      secondary: local("products/chino-1.jpg"),
      detail: local("products/tailored-1.jpg"),
    },
    everydayChino: {
      primary: local("products/chino-1.jpg"),
      secondary: local("products/trousers-pleat-1.jpg"),
      detail: local("products/tailored-1.jpg"),
    },
    tailoredTrousers: {
      primary: local("products/tailored-1.jpg"),
      secondary: local("products/chino-1.jpg"),
      detail: local("products/trousers-pleat-1.jpg"),
    },
    softStructureOvershirt: {
      primary: local("products/overshirt-1.jpg"),
      secondary: local("products/harrington-1.jpg"),
      detail: local("hero/slide-3.jpg"),
    },
    relaxedLinenBlazer: {
      primary: local("products/blazer-1.jpg"),
      secondary: local("hero/slide-1.jpg"),
      detail: local("editorial/new-season.jpg"),
    },
    everydayHarrington: {
      primary: local("products/harrington-1.jpg"),
      secondary: local("products/overshirt-1.jpg"),
      detail: local("hero/slide-3.jpg"),
    },
    leatherMinimalBelt: {
      primary: local("products/belt-1.jpg"),
      secondary: local("products/accessory-alt.jpg"),
      detail: local("products/cardholder-1.jpg"),
    },
    classicCanvasTote: {
      primary: local("products/tote-1.jpg"),
      secondary: local("products/accessory-alt.jpg"),
      detail: local("products/belt-1.jpg"),
    },
    leatherCardHolder: {
      primary: local("products/cardholder-1.jpg"),
      secondary: local("products/belt-1.jpg"),
      detail: local("products/accessory-alt.jpg"),
    },
  },
} as const;

export type ImageRegistry = typeof images;
