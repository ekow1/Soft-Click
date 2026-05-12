import * as React from "react"

const aggregateStats = [
  { value: "$120M+", label: "Transactions Processed" },
  { value: "50+", label: "Enterprise Deployments" },
  { value: "99.99%", label: "Average Uptime" },
  { value: "10M+", label: "End Users Reached" },
]

export function ProjectResults() {
  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden swiss-noise border-b-2 border-white/10">
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">03 — Impact</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Impact at <span className="text-white/40">scale.</span>
            </h2>
            <p className="swiss-body text-white/70 text-base md:text-lg max-w-2xl">
              We don't just write code; we deliver measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l-2 border-t-2 border-white/10">
          {aggregateStats.map((stat, index) => (
            <div
              key={index}
              className="group border-r-2 border-b-2 border-white/10 p-8 md:p-12 transition-all duration-150 ease-linear hover:bg-white hover:text-[#020617]"
            >
              <div className="swiss-headline text-white group-hover:text-[#020617] text-4xl md:text-5xl lg:text-6xl mb-4 transition-colors duration-150">
                {stat.value}
              </div>
              <div className="swiss-label text-white/60 group-hover:text-[#020617]/70 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
