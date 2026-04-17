import * as React from "react"
import { CtaBanner } from "@/components/shared/cta-banner"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutCtaSection() {
  return (
    <SectionWrapper background="background" padding="lg">
      <div className="container mx-auto px-4 md:px-6">
        <CtaBanner
          title="Ready to Transform Your Business?"
          subtitle="Join the leading African enterprises that trust SoftClick Solutions for their critical infrastructure."
          primaryAction={{
            label: "Start a Conversation",
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
