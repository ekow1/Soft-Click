import * as React from "react"
import { SwissCta } from "@/components/shared/swiss-cta"

export function IndustriesCtaSection() {
  return (
    <SwissCta
      sectionNumber="03"
      sectionLabel="Engage"
      title="Transform your"
      highlight="industry."
      description="Let's discuss how SoftClick Solutions can modernize your sector-specific operations."
      primaryAction={{ label: "Schedule a Consultation", href: "/contact" }}
      secondaryAction={{ label: "View Case Studies", href: "/projects" }}
    />
  )
}
