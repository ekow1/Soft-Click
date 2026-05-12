import * as React from "react"
import { SwissCta } from "@/components/shared/swiss-cta"

export function ProjectsCtaSection() {
  return (
    <SwissCta
      sectionNumber="04"
      sectionLabel="Engage"
      title="Ready to be our"
      highlight="next success story?"
      description="Let's discuss how SoftClick Solutions can architect and deliver your next transformative project."
      primaryAction={{ label: "Start a Project", href: "/contact" }}
      secondaryAction={{ label: "Explore Services", href: "/services" }}
    />
  )
}
