"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { HeroSlide } from "@/types";

export function Hero({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const slide = slides[index];

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  if (!slide) return null;

  return (
    <section className="relative h-[78vh] min-h-[520px] max-h-[880px] w-full overflow-hidden md:h-[86vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/20 to-primary/10" />
        </motion.div>
      </AnimatePresence>

      <div className="container-site relative z-10 flex h-full flex-col justify-end pb-16 pt-24 md:pb-20">
        <motion.div
          key={`copy-${slide.id}`}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-background"
        >
          <h1 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/85 sm:text-base">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.primaryCta.href}
              className="inline-flex items-center justify-center bg-background px-6 py-3.5 text-[11px] font-medium uppercase tracking-wide2 text-primary transition-colors hover:bg-background/90"
            >
              {slide.primaryCta.label}
            </Link>
            {slide.secondaryCta && (
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center justify-center border border-background/50 px-6 py-3.5 text-[11px] font-medium uppercase tracking-wide2 text-background transition-colors hover:bg-background hover:text-primary"
              >
                {slide.secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>

        {slides.length > 1 && (
          <div className="mt-10 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1 w-8 transition-colors ${
                  i === index ? "bg-background" : "bg-background/35"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
