import * as React from "react"
import { CtaBanner } from "@/components/shared/cta-banner"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesCtaSection() {
  return (
    <SectionWrapper background="background" padding="lg">
      <div className="container mx-auto px-4 md:px-6">
        <CtaBanner
          title="Scale Your Enterprise Today"
          subtitle="Stop managing legacy code and start building the future. Let's design a custom engineering plan tailored to your organization."
          primaryAction={{
            label: "Consult an Engineer",
            href: "/contact"
          }}
          secondaryAction={{
            label: "View Client Success",
            href: "/projects"
          }}
        />
      </div>
    </SectionWrapper>
  )
}
