import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface SwissCtaProps {
  sectionNumber: string
  sectionLabel: string
  title: string
  highlight?: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function SwissCta({
  sectionNumber,
  sectionLabel,
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
}: SwissCtaProps) {
  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden swiss-noise">
      <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 right-[-10%] w-[60%] h-[80%] bg-accent/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-end">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">{sectionNumber} — {sectionLabel}</span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              {title} {highlight && <span className="text-white/40">{highlight}</span>}
            </h2>
            <p className="swiss-body text-white/70 text-base md:text-lg border-l-4 border-accent pl-6 max-w-xl">
              {description}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
            <Link
              href={primaryAction.href}
              className="group inline-flex items-center justify-between gap-3 px-6 h-14 swiss-border-thick bg-accent text-accent-foreground border-accent hover:bg-white hover:text-[#020617] hover:border-white swiss-label transition-all duration-150"
            >
              {primaryAction.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="group inline-flex items-center justify-between gap-3 px-6 h-14 swiss-border-thick bg-transparent text-white border-white/30 hover:bg-white hover:text-[#020617] hover:border-white swiss-label transition-all duration-150"
              >
                {secondaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
