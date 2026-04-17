import * as React from "react"
import { cn } from "@/lib/utils"

interface ClientLogosProps {
  className?: string
  title?: string
}

export function ClientLogos({ className, title }: ClientLogosProps) {
  const logos = [
    { name: "Client 1", url: "#" },
    { name: "Client 2", url: "#" },
    { name: "Client 3", url: "#" },
    { name: "Client 4", url: "#" },
    { name: "Client 5", url: "#" },
    { name: "Client 6", url: "#" },
  ]

  return (
    <div className={cn("py-12 md:py-16 text-center border-t border-slate-100", className)}>
      {title && (
        <h3 className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-widest mb-10 md:mb-12">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 h-16 w-32 md:w-40 border border-slate-200 rounded text-slate-400 font-bold bg-slate-50 hover:bg-white hover:text-primary transition-colors cursor-pointer"
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  )
}
