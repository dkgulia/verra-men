"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { storeConfig } from "@/config/store";
import { formatPrice } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const remaining = Math.max(0, storeConfig.freeShippingThreshold - subtotal);

  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        className="mb-6"
      />
      <h1 className="section-title mb-10">YOUR BAG</h1>

      {items.length === 0 ? (
        <div className="border border-dashed border-border py-24 text-center">
          <p className="text-sm text-secondary">Your bag is empty.</p>
          <Link href="/shop" className="btn-primary mt-6 inline-flex">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <ul className="divide-y divide-border border-y border-border">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 py-6 sm:gap-6">
                <Link
                  href={`/products/${item.slug}`}
                  className="relative h-32 w-24 shrink-0 overflow-hidden bg-border/40 sm:h-40 sm:w-28"
                >
                  <Image src={item.image} alt="" fill className="object-cover" sizes="112px" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/products/${item.slug}`} className="font-medium">
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-secondary">
                        {item.color} / {item.size}
                      </p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} aria-label="Remove">
                      <X className="h-4 w-4 text-muted" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center border border-border">
                      <button
                        type="button"
                        className="px-3 py-2"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-[2rem] text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-3 py-2"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-border bg-surface p-6">
            <h2 className="text-xs uppercase tracking-wide2">Order summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Shipping</span>
                <span>
                  {remaining > 0 ? "Calculated at checkout" : "Free"}
                </span>
              </div>
              {remaining > 0 && (
                <p className="text-xs text-secondary">
                  You&apos;re {formatPrice(remaining)} away from free shipping.
                </p>
              )}
            </div>
            <div className="mt-6 flex justify-between border-t border-border pt-4 text-sm font-medium">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link href="/checkout" className="btn-primary mt-6 w-full">
              Checkout
            </Link>
            <Link href="/shop" className="btn-ghost mt-3 w-full">
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
