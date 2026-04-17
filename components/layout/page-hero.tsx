import * as React from "react"
import { cn } from "@/lib/utils"

export interface PageHeroProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function PageHero({
  title,
  description,
  className,
  align = "left",
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "w-full bg-slate-50 py-16 md:py-24 lg:py-32 border-b relative overflow-hidden",
        className
      )}
    >
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]pointer-events-none" />
      
      <div
        className={cn(
          "container mx-auto px-4 md:px-6 relative z-10",
          align === "center" && "text-center flex flex-col items-center"
        )}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
