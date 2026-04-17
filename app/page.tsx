import { HomeHeroSection } from "@/components/home/hero-section"
import { TrustedStrip } from "@/components/home/trusted-strip"
import { ProductsPreview } from "@/components/home/products-preview"
import { ProcessSection } from "@/components/home/process-section"
import { AboutPreview } from "@/components/home/about-preview"
import { PartnerSection } from "@/components/home/partner-section"

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TrustedStrip />
      <ProductsPreview />
      <AboutPreview />
      <PartnerSection />
      <ProcessSection />
    </>
  )
}
