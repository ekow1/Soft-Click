import * as React from "react"
import { ClientLogos } from "@/components/shared/client-logos"

export function ClientsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ClientLogos title="Trusted by Forward-Thinking Organizations" className="border-t-0" />
      </div>
    </section>
  )
}
