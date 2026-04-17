"use client"

import * as React from "react"
import { ShieldCheck, Target, Zap, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

import { SectionWrapper } from "@/components/layout/section-wrapper"

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
    <SectionWrapper background="background" padding="xl" className="bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[0.95] max-w-4xl mb-8">
            What makes us the right partner
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            Choosing the right consulting partner can define the future of your business. 
            At SoftClick, we don't just advise — we collaborate, innovate, and deliver.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {values.map((item, i) => (
            <div 
              key={i} 
              className="bg-slate-950 p-8 md:p-10 rounded-none flex flex-col items-start transition-all duration-500 group hover:-translate-y-2 border border-white/5"
            >
              <div className="w-14 h-14 rounded-none bg-accent/20 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-white text-lg md:text-xl font-black tracking-tight mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Large Testimonial Card - High Fidelity Trust Section */}
        <div className="relative overflow-hidden bg-slate-950 p-10 md:p-16 lg:p-24 rounded-none min-h-[500px] flex flex-col justify-center">
          {/* Subtle blurred background visual */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-accent/20 to-transparent blur-[80px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 contrast-150 brightness-100 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col">
            <Quote className="text-accent w-12 h-12 md:w-16 md:h-16 opacity-30 mb-8" />
            
            <div className="relative">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "transition-all duration-700 ease-in-out",
                    idx === activeTestimonial 
                      ? "opacity-100 translate-x-0 relative pointer-events-auto" 
                      : "opacity-0 -translate-x-4 absolute inset-0 pointer-events-none"
                  )}
                >
                  <blockquote className="text-white text-xl md:text-2xl lg:text-xl font-medium leading-relaxed tracking-tight mb-12">
                    "{t.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 border-l-4 border-accent pl-10">
                    <div className="flex flex-col">
                      <h4 className="text-white text-xl md:text-2xl font-black tracking-tight leading-none mb-2">
                        {t.author}
                      </h4>
                      <p className="text-accent/60 text-xs md:text-sm font-black tracking-[0.2em] uppercase">
                        {t.role}
                      </p>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-white/20" />
                    <div className="text-white font-black tracking-tighter text-md md:text-md lg:text-xl opacity-100 italic">
                      {t.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Manual indicators */}
            <div className="flex justify-start gap-3 mt-16">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={cn(
                    "h-1.5 transition-all duration-500 rounded-none",
                    i === activeTestimonial ? "w-12 bg-accent" : "w-6 bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
