import type { Metadata } from "next";
import { storeConfig } from "@/config/store";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title
    ? storeConfig.seo.titleTemplate.replace("%s", title)
    : storeConfig.seo.defaultTitle;
  const desc = description ?? storeConfig.seo.description;
  const url = `${storeConfig.seo.siteUrl}${path}`;
  const ogImage = image ?? storeConfig.seo.ogImage;

  return {
    title: pageTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: desc,
      url,
      siteName: storeConfig.brand.name,
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  price: number;
  images: { primary: string };
  rating: number;
  reviewCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.images.primary],
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: storeConfig.brand.name,
    },
    offers: {
      "@type": "Offer",
      url: `${storeConfig.seo.siteUrl}/products/${product.slug}`,
      priceCurrency: storeConfig.currency.code,
      price: product.price,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };
}
