import { PageHero } from "@/components/layout/page-hero"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductFeatures } from "@/components/products/product-features"
import { ProductsCtaSection } from "@/components/products/products-cta"

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Flagship Products"
        description="Robust, off-the-shelf software solutions that adapt to your complex enterprise workflows—not the other way around."
        align="center"
      />
      <ProductsGrid />
      <ProductFeatures />
      <ProductsCtaSection />
    </>
  )
}
