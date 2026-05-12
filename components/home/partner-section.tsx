"use client"

import * as React from "react"
import { ShieldCheck, Target, Zap, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    title: "Enterprise Software Development",
    description: "Architecting robust, scalable applications that solve complex business challenges with modern backends and precise engineering.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic IT Consulting",
    description: "Comprehensive technology roadmaps from initial roadmap discovery to mission-critical deployment and system optimization.",
    icon: Target,
  },
  {
    title: "Data-Driven System Intelligence",
    description: "Building intelligent data architectures that leverage advanced analytics to mitigate risk and drive enterprise-wide growth.",
    icon: Zap,
  },
]

const testimonials = [
  {
    quote: "Working with SoftClick was a game-changer for our B2B strategy. Their team didn't just offer advice — they became an extension of our leadership. Their insights, professionalism, and tailored approach helped us unlock new growth and streamline our operations.",
    author: "Orion Blake",
    role: "COO",
    company: "Lead Global Dynamics"
  },
  {
    quote: "The core banking transformation led by SoftClick has redefined our efficiency. Their understanding of the Ghanaian financial landscape combined with world-class engineering is simply unmatched in the region.",
    author: "Grace Mensah",
    role: "Executive Director",
    company: "Apex Finance"
  },
  {
    quote: "From initial consulting to final deployment, the SoftClick team demonstrated exceptional technical depth. Our custom logistics platform is now a key competitive advantage for our West African operations.",
    author: "Kwame Asante",
    role: "Head of Operations",
    company: "SwiftLogistics"
  }
]

export function PartnerSection() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">06 — Partner</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              What makes us the <span className="text-muted-foreground">right partner.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              Choosing the right consulting partner can define the future of your business.
              At SoftClick, we don't just advise — we collaborate, innovate, and deliver.
            </p>
          </div>
        </div>

        {/* Value Cards - Swiss grid with thick borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l-2 border-t-2 border-border mb-20">
          {values.map((item, i) => (
            <div
              key={i}
              className="group border-r-2 border-b-2 border-border p-8 md:p-10 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                  0{i + 1}
                </span>
                <div className="p-3 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="swiss-headline text-foreground group-hover:text-background text-xl md:text-2xl mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-background/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial - Dark contrast block */}
        <div className="relative bg-[#020617] text-white swiss-border-thick border-[#020617] overflow-hidden swiss-noise">

          {/* Swiss Grid Pattern */}
          <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 p-8 md:p-12 lg:p-16">

            {/* Left: Label + Quote icon */}
            <div className="col-span-12 lg:col-span-3">
              <div className="flex items-center gap-4 mb-10">
                <span className="swiss-label text-accent">Testimonial</span>
                <span className="h-px flex-1 bg-white/20 lg:hidden" />
              </div>
              <Quote className="text-accent w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
            </div>

            {/* Right: Rotating testimonial content */}
            <div className="col-span-12 lg:col-span-9 min-h-[400px] flex flex-col justify-between">
              <div className="relative">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "transition-opacity duration-150 ease-linear",
                      idx === activeTestimonial
                        ? "opacity-100 relative pointer-events-auto"
                        : "opacity-0 absolute inset-0 pointer-events-none"
                    )}
                  >
                    <blockquote className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
                      "{t.quote}"
                    </blockquote>

                    <div className="border-t-2 border-white/10 pt-6 grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-12 md:col-span-5">
                        <h4 className="swiss-headline text-white text-xl md:text-2xl mb-1">
                          {t.author}
                        </h4>
                        <p className="swiss-label text-accent">
                          {t.role}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-7 md:border-l-2 md:border-white/10 md:pl-6">
                        <span className="swiss-label text-white/40">Company</span>
                        <div className="swiss-headline text-white text-lg md:text-xl mt-1">
                          {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex gap-3 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={cn(
                      "h-2 transition-all duration-150 ease-linear",
                      i === activeTestimonial ? "w-16 bg-accent" : "w-8 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
