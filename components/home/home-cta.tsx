import * as React from "react"
import { CtaBanner } from "@/components/shared/cta-banner"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeCtaSection() {
  return (
    <SectionWrapper background="background" padding="lg">
      <div className="container mx-auto px-4 md:px-6">
        <CtaBanner
          title="Let's Build Your Next Digital Solution"
          subtitle="Partner with SoftClick Solutions to future-proof your business operations with tailored, enterprise-tier technology."
          primaryAction={{
            label: "Book a Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            label: "Contact Us",
            href: "/contact"
          }}
        />
      </div>
    </SectionWrapper>
  )
}
