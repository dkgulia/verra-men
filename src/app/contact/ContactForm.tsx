"use client";

import { useState } from "react";
import { storeConfig } from "@/config/store";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        className="mb-6"
      />
      <h1 className="section-title">CONTACT</h1>
      <p className="section-subtitle mb-10">
        Questions about an order, fit, or the brand? We&apos;re here.
      </p>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-secondary">
          <p>
            Email:{" "}
            <a
              className="text-primary underline-offset-2 hover:underline"
              href={`mailto:${storeConfig.contact.email}`}
            >
              {storeConfig.contact.email}
            </a>
          </p>
          <p>Phone: {storeConfig.contact.phone}</p>
          <p>{storeConfig.contact.address}</p>
        </div>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input className="input-field" placeholder="Name" required />
          <input className="input-field" type="email" placeholder="Email" required />
          <textarea className="input-field min-h-[140px]" placeholder="Message" required />
          <button type="submit" className="btn-primary">
            Send message
          </button>
          {sent ? (
            <p className="text-xs text-accent">Demo form received. Thank you.</p>
          ) : (
            <p className="text-xs text-muted">Demo form — messages are not sent.</p>
          )}
        </form>
      </div>
    </div>
  );
}
