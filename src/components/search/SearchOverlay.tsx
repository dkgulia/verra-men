"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "@/store/ui";
import { searchProducts } from "@/config/products";
import { formatPrice } from "@/lib/utils";

export function SearchOverlay() {
  const open = useUIStore((s) => s.searchOpen);
  const closeSearch = useUIStore((s) => s.closeSearch);
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchProducts(query).slice(0, 8), [query]);

  useEffect(() => {
    if (!open) setQuery("");
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeSearch]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container-site pt-8 md:pt-14">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide2 text-secondary">Search</p>
              <button type="button" onClick={closeSearch} aria-label="Close search">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative border-b border-primary pb-3">
              <Search className="absolute left-0 top-1 h-5 w-5 text-muted" />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shirts, trousers, essentials…"
                className="w-full bg-transparent pl-8 text-xl outline-none placeholder:text-muted md:text-3xl"
              />
            </div>

            <div className="mt-8">
              {!query.trim() ? (
                <p className="text-sm text-secondary">
                  Try “linen”, “olive”, or “trousers”.
                </p>
              ) : results.length === 0 ? (
                <p className="text-sm text-secondary">No pieces found.</p>
              ) : (
                <ul className="divide-y divide-border">
                  {results.map((product, i) => (
                    <motion.li
                      key={product.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={closeSearch}
                        className="flex items-center gap-4 py-4 transition-opacity hover:opacity-70"
                      >
                        <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-border/40">
                          <Image
                            src={product.images.primary}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="mt-0.5 text-xs capitalize text-secondary">
                            {product.category.replace("-", " ")}
                          </p>
                        </div>
                        <p className="text-sm">{formatPrice(product.price)}</p>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
