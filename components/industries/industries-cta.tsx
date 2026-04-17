import * as React from "react"
import { CtaBanner } from "@/components/shared/cta-banner"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function IndustriesCtaSection() {
  return (
    <SectionWrapper background="background" padding="lg">
      <div className="container mx-auto px-4 md:px-6">
        <CtaBanner
          title="Elevate Your Sector with Us"
          subtitle="Ready to modernize your operations? Speak to an expert who understands horizontal integration in your specific domain."
          primaryAction={{
            label: "Schedule a Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            label: "See Real Results",
            href: "/projects"
          }}
        />
      </div>
    </SectionWrapper>
  )
}
