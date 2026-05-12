"use client"

import * as React from "react"

function Counter({ value, duration = 2000 }: { value: number, duration?: number }) {
  const [count, setCount] = React.useState(0)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const elementRef = React.useRef<HTMLSpanElement>(null)

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

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence", desc: "Engineering since 2008" },
  { value: 200, suffix: "+", label: "Systems Engineered", desc: "Across 14 industries" },
  { value: 50, suffix: "+", label: "Enterprise Partners", desc: "Banks, Telcos, Energy" },
  { value: 100, suffix: "%", label: "Mission Success", desc: "Zero failed deployments" },
]

export function StatsSection() {
  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">03 — Impact</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl">
              Numbers that <span className="text-muted-foreground">build trust.</span>
            </h2>
          </div>
        </div>

        {/* Stats Grid - 4 columns, asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l-2 border-t-2 border-border">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group border-r-2 border-b-2 border-border p-8 md:p-10 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                  0{i + 1}
                </span>
                <span className="swiss-label text-accent">
                  KPI
                </span>
              </div>
              
              <div className="swiss-headline text-6xl md:text-7xl lg:text-8xl mb-6">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              
              <div className="border-t-2 border-border group-hover:border-background/20 pt-4">
                <div className="swiss-subheadline text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground group-hover:text-background/60 font-medium">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
