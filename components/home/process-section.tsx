import * as React from "react"
import { Search, PenTool, Braces, Rocket, LifeBuoy } from "lucide-react"

const processes = [
  { step: "01", name: "Discover", icon: Search, desc: "Requirements gathering and deep-dive domain analysis." },
  { step: "02", name: "Design", icon: PenTool, desc: "System architecture and precise UI/UX prototyping." },
  { step: "03", name: "Build", icon: Braces, desc: "Agile development with robust enterprise standards." },
  { step: "04", name: "Deploy", icon: Rocket, desc: "Seamless integration and zero-downtime deployment." },
  { step: "05", name: "Support", icon: LifeBuoy, desc: "24/7 monitoring, maintenance, and future-proofing." },
]

export function ProcessSection() {
  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden swiss-noise">

      {/* Swiss Grid Pattern */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 z-10">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">07 — Method</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Our delivery <span className="text-white/40">process.</span>
            </h2>
            <p className="swiss-body text-white/60 text-base md:text-lg max-w-2xl">
              A predictable, enterprise-grade methodology ensuring project success at every phase.
            </p>
          </div>
        </div>

        {/* Process Grid - Swiss style with thick borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-l-2 border-t-2 border-white/10">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group relative border-r-2 border-b-2 border-white/10 p-8 transition-all duration-150 ease-linear hover:bg-white hover:text-[#020617]"
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-4 swiss-headline text-5xl text-white/10 group-hover:text-[#020617]/10 transition-colors duration-150 select-none">
                {process.step}
              </span>

              {/* Icon box */}
              <div className="inline-flex p-3 swiss-border-thick border-white/20 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground mb-10 transition-all duration-150">
                <process.icon className="w-6 h-6" />
              </div>

              {/* Step label */}
              <div className="swiss-label text-accent mb-3">
                Phase {process.step}
              </div>

              {/* Name */}
              <h3 className="swiss-headline text-white group-hover:text-[#020617] text-2xl md:text-3xl mb-4 transition-colors duration-150">
                {process.name}
              </h3>

              {/* Description */}
              <p className="text-white/50 group-hover:text-[#020617]/70 text-sm leading-relaxed transition-colors duration-150">
                {process.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
