import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CtaBannerProps {
  title: string
  subtitle?: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export function CtaBanner({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: CtaBannerProps) {
  return (
    <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 text-center shadow-xl border border-primary/20 relative overflow-hidden">
      {/* Abstract background gradient */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl opacity-50" />
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8 h-12 text-base font-semibold">
            <Link href={primaryAction.href}>
              {primaryAction.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          {secondaryAction && (
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full px-8 h-12 text-base font-semibold border-white/20 text-white hover:bg-white/10 dark:hover:bg-white/10"
            >
              <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
