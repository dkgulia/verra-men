import type { Product, ShopFilters, SortOption } from "@/types";
import { storeConfig } from "@/config/store";

export function formatPrice(amount: number): string {
  const { symbol, locale } = storeConfig.currency;
  return `${symbol}${amount.toLocaleString(locale)}`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function sortProducts(
  items: Product[],
  sort: SortOption
): Product[] {
  const sorted = [...items];
  switch (sort) {
    case "newest":
      return sorted.sort(
        (a, b) => Number(Boolean(b.newArrival)) - Number(Boolean(a.newArrival))
      );
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "bestselling":
      return sorted.sort(
        (a, b) => Number(Boolean(b.bestseller)) - Number(Boolean(a.bestseller))
      );
    case "featured":
    default:
      return sorted.sort(
        (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
      );
  }
}

export function filterProducts(
  items: Product[],
  filters: Partial<ShopFilters>
): Product[] {
  let result = [...items];

  if (filters.categories?.length) {
    result = result.filter((p) => filters.categories!.includes(p.category));
  }
  if (filters.colors?.length) {
    result = result.filter((p) =>
      p.colors.some((c) => filters.colors!.includes(c.name))
    );
  }
  if (filters.sizes?.length) {
    result = result.filter((p) =>
      p.sizes.some((s) => filters.sizes!.includes(s))
    );
  }
  if (typeof filters.priceMin === "number") {
    result = result.filter((p) => p.price >= filters.priceMin!);
  }
  if (typeof filters.priceMax === "number") {
    result = result.filter((p) => p.price <= filters.priceMax!);
  }

  return sortProducts(result, filters.sort ?? "featured");
}

export function categoryLabel(slug: string): string {
  const map: Record<string, string> = {
    shirts: "Shirts",
    "t-shirts": "T-Shirts",
    trousers: "Trousers",
    outerwear: "Outerwear",
    accessories: "Accessories",
  };
  return map[slug] ?? slug;
}
