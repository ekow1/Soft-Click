import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "background" | "muted" | "primary" | "navy"
}

export function SectionWrapper({
  className,
  container = true,
  padding = "lg",
  background = "background",
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "w-full",
        {
          "py-0": padding === "none",
          "py-8 md:py-12": padding === "sm",
          "py-12 md:py-16": padding === "md",
          "py-16 md:py-24": padding === "lg",
          "py-24 md:py-32": padding === "xl",
          "bg-background": background === "background",
          "bg-muted": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
          "bg-slate-950 text-white": background === "navy",
        },
        className
      )}
      {...props}
    >
      <div className={cn(container && "container px-4 md:px-6 mx-auto")}>
        {children}
      </div>
    </section>
  )
}
