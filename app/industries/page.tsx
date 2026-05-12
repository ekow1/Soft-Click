import { PageHero } from "@/components/layout/page-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustryBenefits } from "@/components/industries/industry-benefits"
import { IndustriesCtaSection } from "@/components/industries/industries-cta"

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries we serve."
        description="We deliver bespoke digital transformation across vertical domains, understanding the regulatory constraints and operational nuances of your sector."
        align="left"
        sectionNumber="00"
        sectionLabel="Industries"
      />
      <IndustriesGrid />
      <IndustryBenefits />
      <IndustriesCtaSection />
    </>
  )
}
