"use client"

import * as React from "react"
import { VideoCarousel } from "@/components/products/video-carousel"

export function VideoSection() {
  return (
    <section className="w-full bg-[#020617] text-white border-b-2 border-white/10 py-20 md:py-28 swiss-noise relative overflow-hidden">
      {/* Swiss Grid Pattern */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">06 — Media</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl">
              See our solutions <span className="text-white/40">in action.</span>
            </h2>
            <p className="swiss-body text-white/70 text-base mt-4 max-w-xl">
              Watch how our bespoke systems and mobile applications are transforming the financial landscape.
            </p>
          </div>
        </div>

        {/* Premium Video Carousel */}
        <VideoCarousel 
          items={[
            {
              title: "GH Banker Overview",
              subtitle: "The Complete Core Banking Engine",
              image: "/images/hero/hero-bg.png"
            },
            {
              title: "GH Sika Agent in the Field",
              subtitle: "Mobile Collections & GPS Tracking",
              image: "/images/about/team.png"
            },
            {
              title: "Enterprise Security Architecture",
              subtitle: "Audit Trails & Multi-Level Approvals",
              image: "/images/products/custom-logic.png"
            }
          ]}
        />

      </div>
    </section>
  )
}
