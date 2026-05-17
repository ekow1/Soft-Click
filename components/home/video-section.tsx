"use client"

import * as React from "react"
import { Play } from "lucide-react"

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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Video Placeholder 1 */}
          <div className="group relative aspect-video bg-muted/20 border-2 border-white/10 overflow-hidden cursor-pointer">
            <img 
              src="/images/hero/hero-bg.png" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="swiss-headline text-lg">GH Banker Overview</h3>
              <p className="swiss-label text-white/70 text-sm">Product Demo</p>
            </div>
          </div>

          {/* Video Placeholder 2 */}
          <div className="group relative aspect-video bg-muted/20 border-2 border-white/10 overflow-hidden cursor-pointer">
            <img 
              src="/images/about/team.png" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="swiss-headline text-lg">GH Sika Agent in the Field</h3>
              <p className="swiss-label text-white/70 text-sm">Customer Success</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
