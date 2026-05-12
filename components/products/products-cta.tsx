import * as React from "react"
import { SwissCta } from "@/components/shared/swiss-cta"

export function ProductsCtaSection() {
  return (
    <SwissCta
      sectionNumber="03"
      sectionLabel="Deploy"
      title="Ready to"
      highlight="deploy?"
      description="Our products are production-ready and can be deployed within weeks. Contact our team for a demo."
      primaryAction={{ label: "Request a Demo", href: "/contact" }}
      secondaryAction={{ label: "Explore Services", href: "/services" }}
    />
  )
}
