import type { Metadata } from "next";
import Image from "next/image";
import { storeConfig } from "@/config/store";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description: storeConfig.about.intro,
  path: "/about",
});

export default function AboutPage() {
  const { about } = storeConfig;

  return (
    <div>
      <section className="relative min-h-[56vh] overflow-hidden">
        <Image
          src={images.editorial.aboutHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/45" />
        <div className="container-site relative z-10 flex min-h-[56vh] items-end pb-16">
          <div className="max-w-2xl text-background">
            <p className="text-xs uppercase tracking-wide2 text-background/80">
              Our Story
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {about.headline}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-background/85">
              {about.intro}
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-20 md:py-28">
        <div className="space-y-24 md:space-y-32">
          {about.sections.map((section, i) => (
            <ScrollReveal key={section.id}>
              <div
                id={section.id}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-border/40">
                  <Image
                    src={section.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="max-w-lg">
                  <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-secondary">
                    {section.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
