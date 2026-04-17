import * as React from "react"
import { CtaBanner } from "@/components/shared/cta-banner"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ProductsCtaSection() {
  return (
    <SectionWrapper background="background" padding="lg">
      <div className="container mx-auto px-4 md:px-6">
        <CtaBanner
          title="See Our Products in Action"
          subtitle="Discover how SoftClick Solutions can streamline your operations. Request a personalized demo today."
          primaryAction={{
            label: "Request Demo",
            href: "/contact"
          }}
          secondaryAction={{
            label: "Explore Custom Solutions",
            href: "/services"
          }}
        />
      </div>
    </SectionWrapper>
  )
}
