"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
]



export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  const isHome = pathname === "/"

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isTransparent = isHome && !isScrolled

  return (
    <header className={cn(
      isHome ? "fixed" : "sticky",
      "top-0 z-50 w-full transition-all duration-700 ease-in-out",
      isTransparent 
        ? "bg-transparent border-transparent pt-6" 
        : "bg-background/80 backdrop-blur-xl border-b border-border py-4 shadow-2xl"
    )}>
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        
        {/* Left: Minimalist Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "p-2 rounded-none flex items-center justify-center font-black text-xs transition-all duration-500 shadow-inner",
              isTransparent ? "bg-white text-slate-950 group-hover:scale-110" : "bg-primary text-primary-foreground group-hover:rotate-12"
            )}>
              SC
            </div>
            <span className={cn(
              "font-bold text-lg md:text-xl tracking-tight transition-colors duration-500",
              isTransparent ? "text-white" : "text-foreground"
            )}>
              SoftClick
            </span>
          </Link>
        </div>

        {/* Center: Floating Capsule Navigation */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className={cn(
            "flex gap-1 items-center px-2 py-1.5 rounded-none transition-all duration-700 shadow-2xl border",
            isTransparent 
              ? "bg-slate-900/40 backdrop-blur-md border-white/10" 
              : "bg-muted/50 backdrop-blur-lg border-border"
          )}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-5 py-1.5 rounded-none transition-all text-[13px] font-bold tracking-wide",
                  isTransparent 
                    ? (pathname === item.href ? "bg-white/10 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/5")
                    : (pathname === item.href ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted")
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right: Pill Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          <Button asChild variant="outline" className={cn(
            "hidden md:inline-flex rounded-none px-8 h-11 transition-all duration-500 border font-bold text-xs tracking-widest uppercase",
            isTransparent 
              ? "border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950 shadow-lg" 
              : "border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm"
          )}>
            <Link href="/contact">Get in touch</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden",
                  isTransparent ? "text-white" : "text-foreground"
                )}
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border text-foreground p-8">
              <div className="flex items-center gap-3 mb-12">
                 <div className="bg-primary text-primary-foreground p-2 rounded-none font-black text-xs">SC</div>
                 <span className="font-bold text-xl tracking-tight">SoftClick</span>
              </div>
              <nav className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-bold transition-all hover:translate-x-2",
                      pathname === item.href ? "text-primary font-black" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-12">
                  <Button asChild className="w-full h-14 rounded-none bg-primary text-primary-foreground hover:opacity-90 font-bold text-sm tracking-widest uppercase">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get in touch
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
