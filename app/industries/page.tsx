import { PageHero } from "@/components/layout/page-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustryBenefits } from "@/components/industries/industry-benefits"
import { IndustriesCtaSection } from "@/components/industries/industries-cta"

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="We Speak Your Language"
        description="Delivering bespoke digital transformation across vertical domains. We understand the regulatory constraints and operational nuances of your sector."
        align="center"
      />
      <IndustriesGrid />
      <IndustryBenefits />
      <IndustriesCtaSection />
    </>
  )
}
