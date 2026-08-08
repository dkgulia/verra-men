import type { Metadata } from "next";
import { products } from "@/config/products";
import { ShopCatalog } from "@/components/product/ShopCatalog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shop",
  description:
    "Shop modern menswear essentials from VERRA MEN — shirts, trousers, outerwear and more.",
  path: "/shop",
});

export default function ShopPage({
  searchParams,
}: {
  searchParams: { filter?: string };
}) {
  const filter = searchParams.filter;
  const title =
    filter === "new"
      ? "New Arrivals"
      : filter === "sale"
        ? "Sale"
        : "Shop All";

  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: title },
        ]}
        className="mb-6"
      />
      <h1 className="section-title mb-10">{title.toUpperCase()}</h1>
      <ShopCatalog products={products} initialFilter={filter} />
    </div>
  );
}
