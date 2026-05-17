import * as React from "react"
import Link from "next/link"
import { Code, LayoutDashboard, Network, Cloud, Briefcase, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  { icon: Code, label: "Software Application Dev" },
  { icon: LayoutDashboard, label: "IT Advisory & Consulting" },
  { icon: Network, label: "Systems Integration" },
  { icon: Cloud, label: "Cloud Hosting" },
  { icon: Briefcase, label: "Networking Services" },
]

export function HomeHeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex flex-col swiss-noise">

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-in fade-in duration-1000"
          style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/70 z-10" />
        {/* Accent Glows */}
        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-accent/10 blur-[120px] z-10" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-primary/20 blur-[100px] z-10" />
      </div>

      {/* Swiss Grid Pattern Overlay */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none z-20" />

      {/* Main Content */}
      <div className="relative z-30 flex-1 flex flex-col justify-center pt-32 pb-32 lg:pt-40 lg:pb-40">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">

          {/* Top Meta Row - Swiss Label + Badges */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-12 lg:mb-20">
            <div className="col-span-12 lg:col-span-3">
              <div className="flex items-center gap-4">
                <span className="swiss-label text-accent">01 — Hero</span>
                <span className="h-px flex-1 bg-white/20" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border-2 border-white/20 backdrop-blur-md text-white/80 swiss-label">
                <span className="flex h-2 w-2 bg-accent animate-pulse" />
                Digital Transformation
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border-2 border-white/30 swiss-label">
                Established 2018
              </div>
            </div>
          </div>

          {/* Asymmetric Hero Grid: 8 / 4 */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-end">

            {/* Headline - 8 columns */}
            <div className="col-span-12 lg:col-span-8">
              <h1 className="swiss-headline text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                Building
                <br />
                <span className="text-accent">Scalable</span>
                <br />
                Digital Solutions.
              </h1>
            </div>

            {/* Description + CTAs - 4 columns */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="border-l-4 border-accent pl-6">
                <p className="swiss-body text-white/80 text-base md:text-lg">
                  Specializing in customized ICT and software solutions for businesses of all sizes, combining industry expertise with modern technology.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="swiss-border-thick h-12 px-6 bg-white text-[#020617] border-white hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  <Link href="/services">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="swiss-border-thick h-12 px-6 bg-transparent text-white border-white/30 hover:bg-white hover:text-[#020617] hover:border-white">
                  <Link href="/about">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service Strip - Bottom */}
      <div className="relative z-30 overflow-hidden py-6 bg-[#020617]/80 backdrop-blur-sm border-t-2 border-white/10">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-20 items-center shrink-0 px-6 md:px-10">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="w-9 h-9 bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-150">
                    <service.icon className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors duration-150" />
                  </div>
                  <span className="swiss-label text-white/60 group-hover:text-white transition-colors duration-150">{service.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



