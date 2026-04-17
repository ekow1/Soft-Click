import * as React from "react"
import { CtaBanner } from "@/components/shared/cta-banner"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ProjectsCtaSection() {
  return (
    <SectionWrapper background="background" padding="lg">
      <div className="container mx-auto px-4 md:px-6">
        <CtaBanner
          title="See Your Company Here Next"
          subtitle="Ready to join the ranks of Africa's most innovative enterprises? Let's discuss your next major technology initiative."
          primaryAction={{
            label: "Initiate Project",
            href: "/contact"
          }}
          secondaryAction={{
            label: "Explore Services",
            href: "/services"
          }}
        />
      </div>
    </SectionWrapper>
  )
}
