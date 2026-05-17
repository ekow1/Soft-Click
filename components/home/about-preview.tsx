"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

function Counter({ value, duration = 2000 }: { value: number, duration?: number }) {
  const [count, setCount] = React.useState(0)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const totalTicks = 60
          const increment = end / totalTicks
          const tickDuration = duration / totalTicks

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, tickDuration)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return <span ref={elementRef}>{count}</span>
}

const coreValues = [
  { label: "Core Value", value: "Creativity" },
  { label: "Core Value", value: "Innovation" },
  { label: "Core Value", value: "Professionalism" },
  { label: "Core Value", value: "Teamwork" },
]

export function AboutPreview() {
  return (
    <section className="relative w-full bg-[#020617] text-white border-b-2 border-white/10 overflow-hidden swiss-noise">

      {/* Swiss Grid Pattern */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 z-10">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">05 — Legacy</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-white text-5xl md:text-6xl lg:text-7xl">
              Engineering the future <br />
              <span className="text-white/40">of banking in Ghana and Africa.</span>
            </h2>
          </div>
        </div>

        {/* Content Grid: image left, content right */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">

          {/* Left: Image with Swiss-style overlay */}
          <div className="col-span-12 lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] overflow-hidden swiss-border-thick border-white/20">
              <img
                src="/images/about/team.png"
                alt="SoftClick Team"
                className="w-full h-full object-cover grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
              />
              {/* Top-left meta */}
              <div className="absolute top-0 left-0 bg-white text-[#020617] px-4 py-2 swiss-label">
                Team — 2018
              </div>
              {/* Bottom-right experience badge */}
              <div className="absolute -bottom-px -right-px bg-accent text-accent-foreground p-8 md:p-10 swiss-border-thick border-accent">
                <div className="swiss-headline text-5xl md:text-6xl mb-2">
                  <Counter value={8} />+
                </div>
                <div className="swiss-label text-accent-foreground/70 max-w-[140px]">
                  Years of Technical Mastery
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8 flex flex-col gap-10">

            <p className="swiss-body text-white/70 text-lg md:text-xl border-l-4 border-accent pl-6 max-w-2xl">
              SoftClick Solutions Limited is a wholly Ghanaian owned multi-disciplinary company that specializes in customized ICT and software solutions. We combine industry expertise with modern technology to create competitive digital solutions for financial institutions.
            </p>

            {/* Core Values - Swiss grid with thick borders */}
            <div className="grid grid-cols-2 border-l-2 border-t-2 border-white/10">
              {coreValues.map((val, i) => (
                <div
                  key={i}
                  className="group/stat border-r-2 border-b-2 border-white/10 p-6 md:p-8 transition-all duration-150 hover:bg-white hover:text-[#020617]"
                >
                  <div className="swiss-label text-accent group-hover/stat:text-accent mb-4">
                    0{i + 1}
                  </div>
                  <div className="swiss-headline text-2xl md:text-3xl lg:text-4xl mb-2">
                    {val.value}
                  </div>
                  <div className="swiss-label text-white/60 group-hover/stat:text-[#020617]/60">
                    {val.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild className="swiss-border-thick h-12 px-6 bg-white text-[#020617] border-white hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <Link href="/about">
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <div className="flex items-center gap-3 text-white/60">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="swiss-label">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
