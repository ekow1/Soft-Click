import * as React from "react"
import { Eye, Target } from "lucide-react"

export function MissionVision() {
  return (
    <section className="relative w-full bg-[#020617] text-white border-b-2 border-white/10 overflow-hidden swiss-noise">
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">02 — Principles</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl">
              Our guiding <span className="text-white/40">principles.</span>
            </h2>
          </div>
        </div>

        {/* Mission + Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l-2 border-t-2 border-white/10">

          {/* Mission */}
          <div className="group relative border-r-2 border-b-2 border-white/10 p-10 md:p-14 transition-all duration-150 ease-linear hover:bg-white hover:text-[#020617]">
            <span className="absolute top-6 right-6 swiss-headline text-5xl text-white/10 group-hover:text-[#020617]/10 transition-colors duration-150">01</span>

            <div className="inline-flex p-4 swiss-border-thick border-white/20 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground mb-10 transition-all duration-150">
              <Target className="w-7 h-7" />
            </div>

            <div className="swiss-label text-accent mb-3">Mission</div>
            <h3 className="swiss-headline text-white group-hover:text-[#020617] text-3xl md:text-4xl mb-6 transition-colors duration-150">
              Identify & Address Gaps.
            </h3>
            <p className="swiss-body text-white/60 group-hover:text-[#020617]/70 text-base md:text-lg leading-relaxed transition-colors duration-150">
              We aspire to identify and address business gaps in financial technology and build high-quality, tailored software solutions for financial institutions.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative border-r-2 border-b-2 border-white/10 p-10 md:p-14 transition-all duration-150 ease-linear hover:bg-accent hover:text-accent-foreground">
            <span className="absolute top-6 right-6 swiss-headline text-5xl text-white/10 group-hover:text-accent-foreground/20 transition-colors duration-150">02</span>

            <div className="inline-flex p-4 swiss-border-thick border-white/20 group-hover:border-accent-foreground group-hover:bg-accent-foreground group-hover:text-accent mb-10 transition-all duration-150">
              <Eye className="w-7 h-7" />
            </div>

            <div className="swiss-label text-accent group-hover:text-accent-foreground mb-3">Vision</div>
            <h3 className="swiss-headline text-white group-hover:text-accent-foreground text-3xl md:text-4xl mb-6 transition-colors duration-150">
              The Preferred Provider.
            </h3>
            <p className="swiss-body text-white/60 group-hover:text-accent-foreground/80 text-base md:text-lg leading-relaxed transition-colors duration-150">
              Our vision is to become the preferred banking software solutions provider in Ghana and across Africa.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
