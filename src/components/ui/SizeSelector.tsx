"use client";

import { cn } from "@/lib/utils";

export function SizeSelector({
  sizes,
  value,
  onChange,
}: {
  sizes: string[];
  value?: string;
  onChange?: (size: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const selected = value === size;
        return (
          <button
            key={size}
            type="button"
            onClick={() => onChange?.(size)}
            className={cn(
              "min-w-[3rem] border px-3 py-2.5 text-xs tracking-wide2 transition-colors",
              selected
                ? "border-primary bg-primary text-background"
                : "border-border bg-surface text-primary hover:border-primary"
            )}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
