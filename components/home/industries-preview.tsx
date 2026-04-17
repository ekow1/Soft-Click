"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Network, ShieldCheck, Zap, Building2, Store, Landmark, ShoppingCart, Landmark as GovermentIcon, Briefcase, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"

const industries = [
  { 
    name: "Banking & Finance", 
    image: "/images/industries/banking.png",
    href: "/industries/banking",
    desc: "Digital banking, core systems, and high-frequency trading platforms."
  },
  { 
    name: "Healthcare", 
    image: "/images/industries/healthcare.png",
    href: "/industries/healthcare",
    desc: "Telemedicine, EHR systems, and secure medical data management."
  },
  { 
    name: "Technology", 
    image: "/images/industries/technology.png",
    href: "/industries/technology",
    desc: "Cloud infrastructure, AI implementation, and software architecture."
  },
  { 
    name: "Manufacturing", 
    image: "/images/industries/manufacturing.png",
    href: "/industries/manufacturing",
    desc: "Industrial IoT, supply chain automation, and digital twins."
  },
  { 
    name: "Logistics", 
    image: "/images/industries/logistics.png",
    href: "/industries/logistics",
    desc: "Fleet management, last-mile tracking, and smart warehousing."
  },
  { 
    name: "Government", 
    image: "/images/industries/government.png",
    href: "/industries/government",
    desc: "E-governance, secure data vaults, and civic engagement platforms."
  },
]

export function IndustriesPreview() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = React.useState(false)

  const scroll = React.useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      
      if (direction === "right" && scrollRef.current.scrollLeft + scrollAmount > maxScroll) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
      } else if (direction === "left" && scrollRef.current.scrollLeft - scrollAmount < 0) {
        scrollRef.current.scrollTo({ left: maxScroll, behavior: "smooth" })
      } else {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        })
      }
    }
  }, [])

  React.useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      scroll("right")
    }, 5000)

    return () => clearInterval(interval)
  }, [scroll, isPaused])

  return (
    <SectionWrapper background="navy" padding="xl" className="overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Industry Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-accent leading-[0.95]">
            Accelerating Growth <br />
            <span className="text-white/40 italic font-medium text-lg md:text-2xl lg:text-3xl">Across Diverse Industries.</span>
          </h2>
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-none border-white/10 bg-white/5 text-white hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-none border-white/10 bg-white/5 text-white hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {industries.map((industry, index) => (
          <Link
            key={index}
            href={industry.href}
            className="group relative flex-shrink-0 w-[280px] md:w-[400px] aspect-[4/5] overflow-hidden snap-start transition-all duration-500"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${industry.image})` }}
            />
            
            {/* Multi-layered Overlays */}
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-accent mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                  {industry.name}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {industry.desc}
                </p>
              </div>
            </div>

            {/* Sharp Corner Border Overlay on Hover */}
            <div className="absolute inset-0 border-0 group-hover:border-4 border-accent/30 transition-all pointer-events-none" />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}
