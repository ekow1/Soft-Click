import * as React from "react"
import { ShieldCheck, Zap, BarChart } from "lucide-react"

const features = [
  {
    title: "Bank-Grade Security",
    description: "End-to-end encryption, MFA support, and strict RBAC controls to protect sensitive corporate data.",
    icon: ShieldCheck,
  },
  {
    title: "High Performance Architecture",
    description: "Thousands of concurrent transactions with millisecond latency. Zero bottlenecks.",
    icon: Zap,
  },
  {
    title: "Real-time Telemetry & Reporting",
    description: "Rich dashboards and exportable reports for instant visibility into system health and key metrics.",
    icon: BarChart,
  },
]

export function ProductFeatures() {
  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden swiss-noise border-b-2 border-white/10">
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">02 — Foundation</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Engineering <span className="text-white/40">excellence.</span>
            </h2>
            <p className="swiss-body text-white/70 text-base md:text-lg max-w-2xl">
              It's not just about features; it's about foundation. All our products share these core architectural principles.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l-2 border-t-2 border-white/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border-r-2 border-b-2 border-white/10 p-10 md:p-14 transition-all duration-150 ease-linear hover:bg-white hover:text-[#020617]"
            >
              <span className="absolute top-6 right-6 swiss-headline text-5xl text-white/10 group-hover:text-[#020617]/10 transition-colors duration-150">
                0{index + 1}
              </span>
              <div className="p-4 swiss-border-thick border-white/20 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground mb-8 inline-flex transition-all duration-150">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="swiss-headline text-white group-hover:text-[#020617] text-2xl md:text-3xl mb-4 transition-colors duration-150">
                {feature.title}
              </h3>
              <p className="swiss-body text-white/60 group-hover:text-[#020617]/70 text-sm md:text-base leading-relaxed transition-colors duration-150">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
