"use client";

import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CategorySection({ categories }: { categories: Category[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="section-title mb-10 md:mb-14">SHOP BY CATEGORY</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((category, i) => (
            <ScrollReveal key={category.id} delay={i * 0.08}>
              <Link href={category.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-border/40">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-background md:p-6">
                    <h3 className="text-lg tracking-wide2 md:text-xl">{category.name}</h3>
                    <p className="mt-1 text-sm text-background/80">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-block text-[11px] uppercase tracking-wide2 underline underline-offset-4">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
