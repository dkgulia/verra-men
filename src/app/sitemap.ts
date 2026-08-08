import type { MetadataRoute } from "next";
import { storeConfig } from "@/config/store";
import { products } from "@/config/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = storeConfig.seo.siteUrl;
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping",
    "/returns",
    "/size-guide",
    "/faqs",
    "/cart",
    "/wishlist",
    "/checkout",
  ];
  const categories = [
    "shirts",
    "t-shirts",
    "trousers",
    "outerwear",
    "accessories",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...categories.map((category) => ({
      url: `${base}/shop/${category}`,
      lastModified: new Date(),
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
