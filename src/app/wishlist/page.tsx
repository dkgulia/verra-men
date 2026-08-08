"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/config/products";
import { useWishlistStore, getWishlistProducts } from "@/store/wishlist";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const ids = useWishlistStore((s) => s.ids);
  const remove = useWishlistStore((s) => s.remove);
  const addItem = useCartStore((s) => s.addItem);
  const items = getWishlistProducts(products, ids);

  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
        className="mb-6"
      />
      <h1 className="section-title mb-10">WISHLIST</h1>

      {items.length === 0 ? (
        <div className="border border-dashed border-border py-24 text-center">
          <Heart className="mx-auto h-8 w-8 text-muted" />
          <p className="mt-4 text-sm text-secondary">
            Your wishlist is empty. Save pieces you love for later.
          </p>
          <Link href="/shop" className="btn-primary mt-6 inline-flex">
            Explore the shop
          </Link>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <li key={product.id} className="border border-border bg-surface p-4">
              <Link href={`/products/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-border/40">
                <Image
                  src={product.images.primary}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </Link>
              <div className="mt-4">
                <Link href={`/products/${product.slug}`} className="font-medium">
                  {product.name}
                </Link>
                <p className="mt-1 text-sm">{formatPrice(product.price)}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="btn-primary flex-1 px-3 py-3"
                    onClick={() =>
                      addItem(product, {
                        color: product.colors[0]?.name ?? "",
                        size: product.sizes[0] ?? "One Size",
                      })
                    }
                  >
                    Move to bag
                  </button>
                  <button
                    type="button"
                    className="btn-secondary px-4"
                    onClick={() => remove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
