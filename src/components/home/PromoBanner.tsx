"use client";

import Image from "next/image";
import Link from "next/link";
import { storeConfig } from "@/config/store";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PromoBanner() {
  const { promo } = storeConfig.editorial;

  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
      <Image
        src={promo.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="container-site relative z-10 flex min-h-[420px] items-center md:min-h-[520px]">
        <ScrollReveal>
          <div className="max-w-xl text-background">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {promo.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-background/85">
              {promo.copy}
            </p>
            <Link
              href={promo.cta.href}
              className="mt-8 inline-flex bg-background px-6 py-3.5 text-[11px] font-medium uppercase tracking-wide2 text-primary transition-colors hover:bg-background/90"
            >
              {promo.cta.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
