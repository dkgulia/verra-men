"use client";

import { useState } from "react";
import { Heart, Minus, Plus, Star } from "lucide-react";
import type { Product } from "@/types";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ColorSwatches } from "@/components/ui/ColorSwatches";
import { SizeSelector } from "@/components/ui/SizeSelector";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/product/ProductCard";
import { formatPrice, categoryLabel, cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { shippingCopy } from "@/config/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const wishlisted = useWishlistStore((s) => s.ids.includes(product.id));
  const router = useRouter();

  const addToBag = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem(product, { color, size, quantity: qty });
  };

  const buyNow = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    addItem(product, { color, size, quantity: qty });
    router.push("/checkout");
  };

  return (
    <div className="pb-20">
      <div className="container-site py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            {
              label: categoryLabel(product.category),
              href: `/shop/${product.category}`,
            },
            { label: product.name },
          ]}
        />
      </div>

      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <h1 className="font-display text-3xl tracking-tight md:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <p className="text-lg">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1.5 text-sm text-secondary">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span>
                {product.rating} · {product.reviewCount} demo reviews
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-secondary">
            {product.description}
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide2">Color</p>
                <p className="text-xs text-secondary">{color}</p>
              </div>
              <ColorSwatches colors={product.colors} value={color} onChange={setColor} />
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide2">Size</p>
                <Link href="/size-guide" className="text-xs text-secondary underline underline-offset-2">
                  Size guide
                </Link>
              </div>
              <SizeSelector
                sizes={product.sizes}
                value={size}
                onChange={(s) => {
                  setSize(s);
                  setSizeError(false);
                }}
              />
              {sizeError && (
                <p className="mt-2 text-xs text-accent">Please select a size.</p>
              )}
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-wide2">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  type="button"
                  className="px-3 py-2.5"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="min-w-[2.5rem] text-center text-sm">{qty}</span>
                <button
                  type="button"
                  className="px-3 py-2.5"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" className="btn-primary flex-1" onClick={addToBag}>
                Add to Bag
              </button>
              <button type="button" className="btn-secondary flex-1" onClick={buyNow}>
                Buy Now
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className={cn(
                  "inline-flex h-[46px] w-[46px] items-center justify-center border border-border transition-colors",
                  wishlisted && "border-accent text-accent"
                )}
                aria-label="Wishlist"
              >
                <Heart className={cn("h-4 w-4", wishlisted && "fill-accent")} />
              </button>
            </div>
          </div>

          <div className="mt-10">
            <Accordion
              defaultOpen="description"
              items={[
                {
                  id: "description",
                  title: "Description",
                  content: <p>{product.description}</p>,
                },
                {
                  id: "details",
                  title: "Details",
                  content: (
                    <ul className="list-disc space-y-1 pl-4">
                      {(product.details ?? []).map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  id: "fit",
                  title: "Size & Fit",
                  content: (
                    <ul className="list-disc space-y-1 pl-4">
                      {(product.sizeAndFit ?? []).map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  id: "shipping",
                  title: "Shipping & Returns",
                  content: (
                    <div className="space-y-2">
                      <p>{shippingCopy.description}</p>
                      <p>{shippingCopy.returns}</p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container-site mt-20 md:mt-28">
          <h2 className="section-title mb-10">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
