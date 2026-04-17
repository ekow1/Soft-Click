import * as React from "react"
import { Award, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const values = [
  {
    title: "Excellence",
    description: "We are committed to delivering world-class engineering, prioritizing performance, scalability, and clean code above all else.",
    icon: Award,
  },
  {
    title: "Integrity",
    description: "Transparency and honesty define our client relationships. We build trust by delivering exactly what we promise, securely.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description: "We constantly research, test, and adopt emerging technologies to ensure our clients always maintain a competitive edge.",
    icon: Lightbulb,
  },
  {
    title: "Partnership",
    description: "Your team's success is our success. We integrate closely with your internal stakeholders to drive true, lasting impact.",
    icon: HeartHandshake,
  },
]

export function ValuesSection() {
  return (
    <SectionWrapper background="background">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionHeading
            title="Core Values"
            subheading="The principles that guide our engineering culture and client engagements."
          />
          <div className="hidden lg:block w-full h-[1px] bg-slate-200 mt-8 relative">
            <div className="absolute top-0 left-0 w-1/3 h-[3px] bg-accent -mt-[1px] rounded-full" />
          </div>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <div key={index} className="group flex flex-col items-start">
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed font-normal">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
