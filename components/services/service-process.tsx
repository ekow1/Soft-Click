import * as React from "react"
import { CheckCircle2 } from "lucide-react"

const serviceProcessSteps = [
  {
    title: "Discovery Session",
    description: "We discuss your business needs, technical constraints, and long-term vision.",
    deliverables: ["Needs Assessment", "Feasibility Study"],
  },
  {
    title: "System Design",
    description: "Our architects map out scalable systems, APIs, and data models before code is written.",
    deliverables: ["Architecture Diagram", "UX Wireframes", "Tech Stack Proposal"],
  },
  {
    title: "Agile Development",
    description: "Sprints deliver functional software increments regularly, ensuring constant alignment.",
    deliverables: ["Two-week Sprints", "Staging Environments", "Code Reviews"],
  },
  {
    title: "Testing & QA",
    description: "Rigorous automation testing, penetration testing, and load testing ensure robust performance.",
    deliverables: ["Test Coverage Reports", "Security Audits", "UAT Sign-off"],
  },
  {
    title: "Launch & Support",
    description: "Zero-downtime deployment, infrastructure monitoring, and post-launch SLAs.",
    deliverables: ["Production Deployment", "SLA Agreement", "System Monitoring"],
  },
]

const enterpriseGuarantees = [
  "Predictable delivery timelines",
  "Transparent communication channels",
  "Strict security and compliance audits",
  "Scalable containerized architecture",
]

export function ServiceProcess() {
  return (
    <section className="w-full bg-muted/30 border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">02 — Delivery</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              How we <span className="text-muted-foreground">deliver.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              A pragmatic, enterprise-grade engineering process from concept to production.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">

          {/* Left: Enterprise Guarantee Block */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative bg-[#020617] text-white swiss-border-thick border-[#020617] p-8 md:p-10 overflow-hidden lg:sticky lg:top-32 swiss-noise">
              <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />
              <div className="relative z-10">
                <div className="swiss-label text-accent mb-6">Enterprise Promise</div>
                <h3 className="swiss-headline text-white text-2xl md:text-3xl mb-6">
                  Built for the enterprise.
                </h3>
                <p className="swiss-body text-white/60 text-sm md:text-base mb-8 border-l-4 border-accent pl-6">
                  We know that downtime is not an option. Our delivery methodology ensures every line of code is secure, scalable, and maintainable.
                </p>
                <ul className="space-y-4 border-t-2 border-white/10 pt-6">
                  {enterpriseGuarantees.map((g, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="swiss-body text-white/80 text-sm">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="col-span-12 lg:col-span-7 border-l-2 border-t-2 border-border">
            {serviceProcessSteps.map((step, index) => (
              <div key={index} className="group border-r-2 border-b-2 border-border p-6 md:p-8 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background">
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-12 md:col-span-2">
                    <div className="swiss-headline text-3xl md:text-4xl text-muted-foreground group-hover:text-accent transition-colors duration-150">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <h4 className="swiss-headline text-foreground group-hover:text-background text-xl md:text-2xl mb-3 transition-colors duration-150">
                      {step.title}
                    </h4>
                    <p className="swiss-body text-muted-foreground group-hover:text-background/70 text-sm leading-relaxed mb-4 transition-colors duration-150">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item, i) => (
                        <span key={i} className="swiss-label text-muted-foreground group-hover:text-background/80 px-3 py-1.5 border-2 border-border group-hover:border-background/30 transition-colors duration-150">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
