import * as React from "react"
import { Search, PenTool, Braces, Rocket, LifeBuoy } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const processes = [
  { step: "01", name: "Discover", icon: Search, desc: "Requirements gathering and deep-dive domain analysis." },
  { step: "02", name: "Design", icon: PenTool, desc: "System architecture and precise UI/UX prototyping." },
  { step: "03", name: "Build", icon: Braces, desc: "Agile development with robust enterprise standards." },
  { step: "04", name: "Deploy", icon: Rocket, desc: "Seamless integration and zero-downtime deployment." },
  { step: "05", name: "Support", icon: LifeBuoy, desc: "24/7 monitoring, maintenance, and future-proofing." },
]

export function ProcessSection() {
  return (
    <SectionWrapper background="navy" className="overflow-hidden relative">
      <SectionHeading
        title="Our Delivery Process"
        subheading="A predictable, enterprise-grade methodology ensuring project success."
        align="center"
        className="mb-20 text-white"
        // Override subheading color for dark bg inside SectionHeading if needed or pass custom classes
      />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Connecting Line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-16 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
          {processes.map((process, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              {/* Step Watermark */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.07] transition-colors">
                {process.step}
              </span>

              <div className="w-24 h-24 rounded-none bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent group-hover:-translate-y-2 transition-all duration-500 relative shadow-2xl">
                <process.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                {process.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[200px] group-hover:text-white/60 transition-colors">
                {process.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
