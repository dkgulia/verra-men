import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { NewSeason } from "@/components/home/NewSeason";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { categories, heroSlides } from "@/config/store";
import { getBestsellers } from "@/config/products";

export default function HomePage() {
  const bestsellers = getBestsellers(8);

  return (
    <>
      <Hero slides={heroSlides} />
      <CategorySection categories={categories} />
      <ProductCarousel
        title="BESTSELLERS"
        subtitle="Pieces our customers keep coming back to."
        products={bestsellers}
      />
      <NewSeason />
      <PromoBanner />
    </>
  );
}
