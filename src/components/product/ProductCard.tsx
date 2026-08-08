"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { ColorSwatches } from "@/components/ui/ColorSwatches";
import { useWishlistStore } from "@/store/wishlist";
import { useCartStore } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const hasWishlist = useWishlistStore((s) => s.ids.includes(product.id));
  const addItem = useCartStore((s) => s.addItem);

  const showSecondary = hovered && Boolean(product.images.secondary);
  const imageSrc = showSecondary
    ? product.images.secondary!
    : product.images.primary;

  const quickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const size = product.sizes[0];
    if (!size) return;
    addItem(product, { color: color || product.colors[0]?.name || "", size });
  };

  const onWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-border/40">
          <motion.div
            key={imageSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
            />
          </motion.div>

          {product.newArrival && (
            <span className="absolute left-3 top-3 bg-background/90 px-2 py-1 text-[10px] uppercase tracking-wide2 backdrop-blur-sm">
              New
            </span>
          )}

          <button
            type="button"
            onClick={onWishlist}
            aria-label={hasWishlist ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-background/85 backdrop-blur-sm transition-colors hover:bg-background"
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                hasWishlist ? "fill-accent text-accent" : "text-primary"
              )}
            />
          </button>

          <button
            type="button"
            onClick={quickAdd}
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-primary text-background opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            aria-label={`Quick add ${product.name}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-medium leading-snug text-primary">
              {product.name}
            </h3>
            <p className="shrink-0 text-sm text-primary">{formatPrice(product.price)}</p>
          </div>
          <ColorSwatches
            colors={product.colors}
            value={color}
            onChange={setColor}
            size="sm"
          />
        </div>
      </Link>
    </article>
  );
}
