import * as React from "react"
import { Globe, Mail } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const leaders = [
  {
    name: "John K. Appiah",
    role: "Chief Executive Officer",
    image: "HEADSHOT PLACEHOLDER",
  },
  {
    name: "Dr. Sarah Mensah",
    role: "Chief Technology Officer",
    image: "HEADSHOT PLACEHOLDER",
  },
  {
    name: "Kwame Asare",
    role: "VP of Engineering",
    image: "HEADSHOT PLACEHOLDER",
  },
  {
    name: "Ama Serwaa",
    role: "Director of Delivery",
    image: "HEADSHOT PLACEHOLDER",
  },
]

export function LeadershipSection() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading
        title="Executive Leadership"
        subheading="Guiding our vision with decades of enterprise tech experience."
        align="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <div key={index} className="group relative">
            <div className="aspect-[3/4] bg-slate-200 border border-slate-100 rounded-3xl overflow-hidden mb-6 relative shadow-md">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono tracking-widest text-xs text-center p-4">
                {leader.image}
              </div>
              <div className="absolute inset-0 bg-primary/80 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center w-full gap-4 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" className="bg-white text-primary p-3 rounded-full hover:bg-accent transition-colors shadow-lg">
                    <Globe className="w-5 h-5" />
                    <span className="sr-only">Network</span>
                  </a>
                  <a href="#" className="bg-white text-primary p-3 rounded-full hover:bg-accent transition-colors shadow-lg">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                {leader.name}
              </h3>
              <p className="text-slate-500 font-medium text-sm tracking-wide uppercase mt-1">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

