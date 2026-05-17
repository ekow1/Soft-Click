import { PageHero } from "@/components/layout/page-hero"
import { ServicesAccordion } from "@/components/services/services-accordion"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicesCtaSection } from "@/components/services/services-cta"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Engineering solutions for the enterprise."
        description="We plan, design, and deploy mission-critical software infrastructure, ensuring unparalleled security, scalability, and performance."
        align="left"
        sectionNumber="00"
        sectionLabel="Services"
      />
      <ServicesAccordion />
      <ServiceProcess />
      <ServicesCtaSection />
    </>
  )
}
