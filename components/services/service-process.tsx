import * as React from "react"
import { CheckCircle2, ChevronRight } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"

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

export function ServiceProcess() {
  return (
    <SectionWrapper background="muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            title="How We Deliver"
            subheading="A pragmatic, enterprise-grade engineering process from concept to production."
          />
          <div className="mt-8 relative bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Built for the Enterprise</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-medium">
              We know that downtime is not an option. Our delivery methodology ensures that every line of code deployed is secure, scalable, and maintainable.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Predictable delivery timelines</span>
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Transparent communication channels</span>
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Strict security and compliance audits</span>
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>Scalable containerized architecture</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-10 bottom-10 w-px bg-slate-200" />
          <div className="space-y-12">
            {serviceProcessSteps.map((step, index) => (
              <div key={index} className="relative pl-16">
                <div className="absolute left-0 top-1 w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center font-bold text-slate-800 shadow-sm z-10">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Key Deliverables:</span>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item, i) => (
                      <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                        <ChevronRight className="w-3 h-3 mr-1 text-primary opacity-50" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
