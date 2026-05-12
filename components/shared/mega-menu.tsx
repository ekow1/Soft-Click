"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  href: string
  description?: string
}

interface MegaMenuProps {
  trigger: React.ReactNode
  items: MenuItem[]
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  isTransparent?: boolean
}

export function MegaMenu({ trigger, items, isOpen, onOpenChange, isTransparent = false }: MegaMenuProps) {
  const menuRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    onOpenChange(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onOpenChange(false)
    }, 200)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onOpenChange(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isOpen, onOpenChange])

  return (
    <div className="relative" ref={menuRef}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] max-w-[90vw]",
            "bg-background border border-border shadow-2xl rounded-none",
            "transition-all duration-200 ease-out",
            "z-50",
            isTransparent ? "bg-slate-950/95 backdrop-blur-xl border-white/10" : "bg-background"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group p-4 rounded-none transition-all duration-200",
                    "hover:bg-muted/50 border border-transparent hover:border-border",
                    isTransparent ? "hover:bg-white/5 hover:border-white/10" : ""
                  )}
                >
                  <div className="flex items-start gap-3">
                    <ChevronRight className={cn(
                      "w-4 h-4 mt-0.5 transition-transform duration-200",
                      isTransparent ? "text-accent" : "text-primary",
                      "group-hover:translate-x-1"
                    )} />
                    <div className="flex-1">
                      <h4 className={cn(
                        "font-bold text-sm mb-1 transition-colors",
                        isTransparent ? "text-white group-hover:text-accent" : "text-foreground group-hover:text-primary"
                      )}>
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className={cn(
                          "text-xs leading-relaxed",
                          isTransparent ? "text-white/60" : "text-muted-foreground"
                        )}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
