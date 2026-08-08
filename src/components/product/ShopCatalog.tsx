"use client";

import { useMemo, useState } from "react";
import type { Product, SortOption } from "@/types";
import { filterProducts, cn, formatPrice, categoryLabel } from "@/lib/utils";
import { getAllColors, getAllSizes, getPriceRange } from "@/config/products";
import { ProductCard } from "./ProductCard";
import { useUIStore } from "@/store/ui";
import { X, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "bestselling", label: "Bestselling" },
];

const CATEGORY_OPTIONS = [
  "shirts",
  "t-shirts",
  "trousers",
  "outerwear",
  "accessories",
];

export function ShopCatalog({
  products,
  initialCategory,
  initialFilter,
}: {
  products: Product[];
  initialCategory?: string;
  initialFilter?: string;
}) {
  const range = getPriceRange();
  const colors = getAllColors();
  const sizes = getAllSizes();
  const filterOpen = useUIStore((s) => s.filterOpen);
  const openFilters = useUIStore((s) => s.openFilters);
  const closeFilters = useUIStore((s) => s.closeFilters);

  const [categories, setCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState(range.max);
  const [sort, setSort] = useState<SortOption>("featured");
  const [flagFilter] = useState(initialFilter);

  const filtered = useMemo(() => {
    let base = products;
    if (flagFilter === "new") base = base.filter((p) => p.newArrival);
    if (flagFilter === "sale") base = base.filter((p) => p.onSale || p.compareAtPrice);
    return filterProducts(base, {
      categories,
      colors: selectedColors,
      sizes: selectedSizes,
      priceMin: range.min,
      priceMax,
      sort,
    });
  }, [
    products,
    categories,
    selectedColors,
    selectedSizes,
    priceMax,
    sort,
    flagFilter,
    range.min,
  ]);

  const toggle = (
    list: string[],
    value: string,
    setter: (v: string[]) => void
  ) => {
    setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  };

  const Filters = (
    <div className="space-y-8">
      {!initialCategory && (
        <FilterGroup title="Category">
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat} className="flex items-center gap-3 text-sm text-secondary">
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => toggle(categories, cat, setCategories)}
                className="accent-primary"
              />
              {categoryLabel(cat)}
            </label>
          ))}
        </FilterGroup>
      )}

      <FilterGroup title="Color">
        {colors.map((color) => (
          <label key={color} className="flex items-center gap-3 text-sm text-secondary">
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => toggle(selectedColors, color, setSelectedColors)}
              className="accent-primary"
            />
            {color}
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => toggle(selectedSizes, size, setSelectedSizes)}
              className={cn(
                "min-w-[2.75rem] border px-2 py-1.5 text-xs",
                selectedSizes.includes(size)
                  ? "border-primary bg-primary text-background"
                  : "border-border"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-3">
          <input
            type="range"
            min={range.min}
            max={range.max}
            step={100}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <p className="text-sm text-secondary">
            Up to {formatPrice(priceMax)}
          </p>
        </div>
      </FilterGroup>
    </div>
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openFilters}
            className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs uppercase tracking-wide2 lg:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>
          <label className="flex items-center gap-2 text-xs uppercase tracking-wide2 text-secondary">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-border bg-surface px-3 py-2 text-xs text-primary outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">{Filters}</aside>

        <div>
          {filtered.length === 0 ? (
            <div className="border border-dashed border-border py-24 text-center">
              <p className="text-sm text-secondary">No pieces found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 md:grid-cols-3 md:gap-x-5 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-primary/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFilters}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-[min(100%,320px)] overflow-y-auto bg-background p-6 lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-sm uppercase tracking-wide2">Filters</h2>
                <button type="button" onClick={closeFilters} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>
              {Filters}
              <button type="button" className="btn-primary mt-8 w-full" onClick={closeFilters}>
                View results
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wide2">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
