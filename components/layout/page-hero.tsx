import * as React from "react"
import { cn } from "@/lib/utils"

export interface PageHeroProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
  sectionNumber?: string
  sectionLabel?: string
}

export function PageHero({
  title,
  description,
  className,
  align = "left",
  sectionNumber = "00",
  sectionLabel = "Page",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-[#020617] text-white overflow-hidden border-b-2 border-white/10 swiss-noise",
        className
      )}
    >
      {/* Swiss Grid Pattern */}
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-[-10%] w-[60%] h-[80%] bg-accent/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">

          {/* Section number */}
          <div className={cn(
            "col-span-12 lg:col-span-3 flex items-center gap-4 mb-8 lg:mb-0",
            align === "center" && "lg:col-span-12 lg:justify-center"
          )}>
            <span className="swiss-label text-accent">{sectionNumber} — {sectionLabel}</span>
            <span className={cn("h-px bg-white/20", align === "center" ? "w-24" : "flex-1")} />
          </div>

          {/* Headline + Description */}
          <div className={cn(
            "col-span-12 lg:col-span-9",
            align === "center" && "lg:col-span-12 text-center flex flex-col items-center"
          )}>
            <h1 className="swiss-headline text-white text-5xl md:text-7xl lg:text-8xl max-w-5xl">
              {title}
            </h1>
            {description && (
              <p className={cn(
                "swiss-body text-white/70 text-lg md:text-xl mt-8 max-w-2xl",
                align === "left" && "border-l-4 border-accent pl-6"
              )}>
                {description}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
