import * as React from "react"
import { ShieldCheck, Crosshair, Cpu, Users } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const benefits = [
  {
    title: "Domain-Specific Competence",
    description: "Our engineers aren't just coders; they are domain experts who understand the intricacies of local African industries.",
    icon: Crosshair,
  },
  {
    title: "Uncompromising Security",
    description: "We build systems trusted by rural banks and government agencies, ensuring regulatory compliance and data integrity.",
    icon: ShieldCheck,
  },
  {
    title: "Future-Proof Architecture",
    description: "By leveraging microservices and cloud-native practices, your infrastructure scales autonomously as your business grows.",
    icon: Cpu,
  },
  {
    title: "Dedicated Local Support",
    description: "Enjoy the peace of mind that comes with a premium technical partner right here in your timezone.",
    icon: Users,
  },
]

export function IndustryBenefits() {
  return (
    <SectionWrapper background="muted">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionHeading
            title="Why Leading Firms Chose Us"
            subheading="We don't just build software; we build robust engines that drive industry growth."
          />
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <div className="inline-flex w-14 h-14 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-6 shadow-md transition-transform hover:scale-105 duration-300">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
