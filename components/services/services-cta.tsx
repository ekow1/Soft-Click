import * as React from "react"
import { SwissCta } from "@/components/shared/swiss-cta"

export function ServicesCtaSection() {
  return (
    <SwissCta
      sectionNumber="03"
      sectionLabel="Engage"
      title="Scale your"
      highlight="enterprise."
      description="Stop managing legacy code and start building the future. Let's design a custom engineering plan tailored to your organization."
      primaryAction={{ label: "Consult an Engineer", href: "/contact" }}
      secondaryAction={{ label: "View Case Studies", href: "/projects" }}
    />
  )
}
