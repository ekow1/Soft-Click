import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subheading?: string
  align?: "left" | "center"
}

export function SectionHeading({
  title,
  subheading,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
      {...props}
    >
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.95] max-w-5xl",
        className?.includes('text-white') ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      {subheading && (
        <p className={cn(
          "mt-4 text-lg md:text-xl max-w-2xl leading-relaxed",
          className?.includes('text-white') ? "text-white/90" : "text-slate-600"
        )}>
          {subheading}
        </p>
      )}
    </div>
  )
}
