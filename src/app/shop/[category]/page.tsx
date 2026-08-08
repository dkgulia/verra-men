import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductsByCategory } from "@/config/products";
import { ShopCatalog } from "@/components/product/ShopCatalog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { categoryLabel } from "@/lib/utils";
import { categories } from "@/config/store";

const VALID = [
  "shirts",
  "t-shirts",
  "trousers",
  "outerwear",
  "accessories",
] as const;

type CategorySlug = (typeof VALID)[number];

export function generateStaticParams() {
  return VALID.map((category) => ({ category }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  if (!VALID.includes(params.category as CategorySlug)) {
    return buildMetadata({ title: "Shop" });
  }
  const label = categoryLabel(params.category);
  return buildMetadata({
    title: label,
    description: `Shop ${label.toLowerCase()} from VERRA MEN.`,
    path: `/shop/${params.category}`,
  });
}

export default function CategoryShopPage({
  params,
}: {
  params: { category: string };
}) {
  if (!VALID.includes(params.category as CategorySlug)) notFound();

  const label = categoryLabel(params.category);
  const categoryMeta = categories.find((c) => c.slug === params.category);
  const items =
    params.category === "accessories"
      ? getProductsByCategory("accessories")
      : getProductsByCategory(params.category);

  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label },
        ]}
        className="mb-6"
      />
      <h1 className="section-title">{label.toUpperCase()}</h1>
      {categoryMeta && (
        <p className="section-subtitle mb-10">{categoryMeta.description}</p>
      )}
      {!categoryMeta && <div className="mb-10" />}
      <ShopCatalog
        products={items.length ? items : products}
        initialCategory={params.category}
      />
    </div>
  );
}
