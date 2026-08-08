"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { storeConfig } from "@/config/store";

/**
 * Checkout UI shell — payment provider (Stripe / Razorpay) can be wired here later.
 * No real charges are processed.
 */
export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const [placed, setPlaced] = useState(false);

  if (items.length === 0 && !placed) {
    return (
      <div className="container-site py-16 text-center">
        <p className="text-sm text-secondary">Your bag is empty.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">
          Shop essentials
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="container-site py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-wide2 text-accent">Demo checkout</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
          Order received.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-secondary">
          This is a demo confirmation. Connect Stripe or Razorpay in the checkout
          architecture to process real payments.
        </p>
        <Link href="/shop" className="btn-primary mt-8 inline-flex">
          Continue shopping
        </Link>
      </div>
    );
  }

  const shipping =
    subtotal >= storeConfig.freeShippingThreshold ? 0 : 149;
  const total = subtotal + shipping;

  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" },
        ]}
        className="mb-6"
      />
      <h1 className="section-title mb-10">CHECKOUT</h1>

      <div className="grid gap-12 lg:grid-cols-2">
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setPlaced(true);
          }}
        >
          <section>
            <h2 className="text-xs uppercase tracking-wide2">Contact</h2>
            <div className="mt-4 space-y-3">
              <input className="input-field" type="email" required placeholder="Email" />
              <input className="input-field" type="tel" placeholder="Phone" />
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide2">Shipping address</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input className="input-field sm:col-span-2" required placeholder="Full name" />
              <input className="input-field sm:col-span-2" required placeholder="Address" />
              <input className="input-field" required placeholder="City" />
              <input className="input-field" required placeholder="PIN code" />
              <input className="input-field sm:col-span-2" required placeholder="State" />
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide2">Payment</h2>
            <p className="mt-3 text-sm text-secondary">
              Payment integration placeholder. Ready for Stripe or Razorpay —
              no charges will be processed in this demo.
            </p>
            <div className="mt-4 grid gap-3">
              <input className="input-field" placeholder="Card number (demo)" disabled />
              <div className="grid grid-cols-2 gap-3">
                <input className="input-field" placeholder="MM/YY" disabled />
                <input className="input-field" placeholder="CVC" disabled />
              </div>
            </div>
          </section>

          <button type="submit" className="btn-primary w-full">
            Place demo order · {formatPrice(total)}
          </button>
        </form>

        <aside className="h-fit border border-border bg-surface p-6">
          <h2 className="text-xs uppercase tracking-wide2">Order summary</h2>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between gap-4 text-sm">
                <span className="text-secondary">
                  {item.name} × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-secondary">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between pt-2 font-medium">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
