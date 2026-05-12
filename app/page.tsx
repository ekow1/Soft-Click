import { HomeHeroSection } from "@/components/home/hero-section"
import { TrustedStrip } from "@/components/home/trusted-strip"
import { StatsSection } from "@/components/home/stats-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ProductsPreview } from "@/components/home/products-preview"
import { PartnerSection } from "@/components/home/partner-section"
import { ProcessSection } from "@/components/home/process-section"

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TrustedStrip />
      <StatsSection />
      <AboutPreview />
      <ProductsPreview />
      <PartnerSection />
      <ProcessSection />
    </>
  )
}
