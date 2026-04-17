"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

import { SectionWrapper } from "@/components/layout/section-wrapper"
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

const stats = [
  { label: "Years of Excellence", value: 10, suffix: "+" },
  { label: "Systems Engineered", value: 200, suffix: "+" },
  { label: "Mission Success", value: 100, suffix: "%" },
  { label: "Enterprise Partners", value: 50, suffix: "+" },
]

export function AboutPreview() {
  return (
    <SectionWrapper background="background" padding="xl" className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image and Experience Badge */}
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-none shadow-2xl">
              <img 
                src="/images/about/team.png" 
                alt="SoftClick Team" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-accent p-10 md:p-14 rounded-none shadow-2xl border-4 border-white transition-transform duration-500 group-hover:-translate-y-4">
                <div className="text-5xl md:text-7xl font-black text-accent-foreground leading-none mb-2">
                  <Counter value={15} />+
                </div>
                <div className="text-xs md:text-sm font-black text-accent-foreground/60 uppercase tracking-[0.2em] leading-tight max-w-[120px]">
                  Years of Technical Mastery
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start pt-12 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-accent/10 border border-accent/20 text-accent text-xs font-black tracking-[0.2em] uppercase mb-8">
              <span className="flex h-2 w-2 rounded-none bg-accent"></span>
              Our Legacy
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
              Engineering the Future <br />
              <span className="text-slate-400 italic font-medium">of African Business.</span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl">
              SoftClick Solutions is more than a software house. We are a digital powerhouse committed to solving complex enterprise challenges with elegant, high-throughput engineering.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 md:gap-12 mb-12 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col border-l-2 border-slate-100 pl-6 hover:border-accent transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
                    <Counter value={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest leading-none">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-none px-10 h-14 bg-slate-950 text-white hover:bg-accent hover:text-accent-foreground font-black text-sm tracking-tight transition-all shadow-xl hover:scale-105 active:scale-95">
                <Link href="/about" className="flex items-center gap-3">
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                 <CheckCircle2 className="w-5 h-5 text-green-500" />
                 ISO 27001 Certified Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
