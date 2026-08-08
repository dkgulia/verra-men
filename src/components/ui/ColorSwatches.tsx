"use client";

import { cn } from "@/lib/utils";
import type { ProductColor } from "@/types";

export function ColorSwatches({
  colors,
  value,
  onChange,
  size = "md",
}: {
  colors: ProductColor[];
  value?: string;
  onChange?: (name: string) => void;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";

  return (
    <div className="flex flex-wrap items-center gap-2" role="listbox" aria-label="Colors">
      {colors.map((color) => {
        const selected = value === color.name;
        return (
          <button
            key={color.name}
            type="button"
            role="option"
            aria-selected={selected}
            aria-label={color.name}
            title={color.name}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onChange?.(color.name);
            }}
            className={cn(
              "rounded-full border border-primary/15 ring-offset-2 ring-offset-background transition-shadow",
              dim,
              selected && "ring-1 ring-primary",
              onChange ? "cursor-pointer" : "pointer-events-none"
            )}
            style={{ backgroundColor: color.hex }}
          />
        );
      })}
    </div>
  );
}
