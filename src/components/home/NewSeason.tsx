"use client";

import Image from "next/image";
import Link from "next/link";
import { storeConfig } from "@/config/store";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function NewSeason() {
  const { newSeason } = storeConfig.editorial;

  return (
    <section className="py-16 md:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative aspect-[4/5] overflow-hidden bg-border/40 lg:aspect-[3/4]">
            <Image
              src={newSeason.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-lg lg:py-10">
            <p className="text-xs uppercase tracking-wide2 text-accent">
              {newSeason.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {newSeason.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-secondary">
              {newSeason.copy}
            </p>
            <Link href={newSeason.cta.href} className="btn-primary mt-8">
              {newSeason.cta.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
