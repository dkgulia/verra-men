"use client";

import Link from "next/link";
import { useState } from "react";
import { storeConfig } from "@/config/store";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-xs font-medium uppercase tracking-wide2">
            {storeConfig.footer.newsletter.title}
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary">
            {storeConfig.footer.newsletter.description}
          </p>
          <form onSubmit={onSubmit} className="mt-6 flex max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="input-field"
              aria-label="Email address"
            />
            <button type="submit" className="btn-primary shrink-0 px-5">
              Join
            </button>
          </form>
          {submitted && (
            <p className="mt-3 text-xs text-accent">
              You&apos;re on the list. Welcome to VERRA MEN.
            </p>
          )}
        </div>

        {storeConfig.footer.columns.map((column) => (
          <div key={column.title} className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-wide2">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h3 className="text-xs font-medium uppercase tracking-wide2">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-secondary">
            <li>
              <a href={`mailto:${storeConfig.contact.email}`} className="hover:text-primary">
                {storeConfig.contact.email}
              </a>
            </li>
            <li>{storeConfig.contact.phone}</li>
            <li>{storeConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">{storeConfig.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-3">
            {storeConfig.footer.paymentMethods.map((method) => (
              <span
                key={method}
                className="border border-border px-2 py-1 text-[10px] uppercase tracking-wide2 text-secondary"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
