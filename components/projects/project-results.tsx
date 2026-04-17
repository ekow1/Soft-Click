import * as React from "react"
import { StatsStrip } from "@/components/shared/stats-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const aggregateStats = [
  { value: "$120M+", label: "Transactions Processed" },
  { value: "50+", label: "Enterprise Deployments" },
  { value: "99.99%", label: "Average Uptime" },
  { value: "10M+", label: "End Users Reached" },
]

export function ProjectResults() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading
        title="Impact at Scale"
        subheading="We don't just write code; we deliver measurable business outcomes."
        align="center"
        className="mb-16"
      />
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">
        <StatsStrip stats={aggregateStats} />
      </div>
    </SectionWrapper>
  )
}
