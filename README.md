# VERRA MEN — Agency Ecommerce Template

Premium menswear ecommerce demo built for agency reuse.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (cart + wishlist, persisted)
- Lucide React

## Rebrand for another client

Change **only** these files:

1. `src/config/store.ts` — brand, colors, nav, copy, hero, editorial, SEO  
   (hex colors in `storeConfig.colors` are applied automatically via the root layout)
2. `src/config/products.ts` — catalog, prices, variants
3. `src/config/images.ts` — all image URLs (or point to `/public/...` assets)

Core UI components read from config and should not need edits for a typical rebrand.

### Light blue / Oxford shirt imagery

`images.products.oxfordEssentialShirt.primary` is the studio shot used on both the product card and PDP for the Oxford Essential Shirt (Sky Blue variant). Replace that single URL to swap the image everywhere.

## Scripts

```bash
npm run dev
npm run build
npm start
```

## Routes

- `/` — Home
- `/shop` — Catalog + filters
- `/shop/[category]` — Category PLP
- `/products/[slug]` — PDP
- `/cart` `/wishlist` `/checkout`
- `/about` `/contact` `/shipping` `/returns` `/size-guide` `/faqs`

Checkout is a UI shell ready for Stripe/Razorpay — no real payments.
