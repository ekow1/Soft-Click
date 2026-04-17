import { PageHero } from "@/components/layout/page-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicesCtaSection } from "@/components/services/services-cta"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Engineering Solutions for the Enterprise"
        description="We plan, design, and deploy mission-critical software infrastructure, ensuring unparalleled security, scalability, and performance."
        align="center"
      />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesCtaSection />
    </>
  )
}
