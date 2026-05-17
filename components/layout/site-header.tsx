"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { MegaMenu } from "@/components/shared/mega-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    hasSubmenu: true,
    items: [
      { name: "GH Banker", href: "/products/gh-banker", description: "Core Banking Platform" },
      { name: "Sika Agent GH", href: "/products/sika-agent", description: "Agent Banking Solution" },
      { name: "Payroll", href: "/products/payroll", description: "Enterprise Payroll Management" },
      { name: "Oil Management System", href: "/products/oil-management", description: "Fuel Distribution Management" },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]



export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [mobileOpenMenu, setMobileOpenMenu] = React.useState<string | null>(null)

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
      "top-0 z-50 w-full transition-all duration-200 ease-linear",
      isTransparent
        ? "bg-transparent border-transparent pt-6"
        : "bg-background/95 backdrop-blur-xl border-b-2 border-border py-4"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-12">

        {/* Left: Logo - Swiss Style */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "p-3 rounded-none flex items-center justify-center font-black text-sm transition-all duration-150 swiss-border-thick",
              isTransparent ? "bg-white text-[#020617] hover:bg-accent hover:text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            )}>
              SC
            </div>
            <span className={cn(
              "swiss-headline text-lg md:text-xl transition-colors duration-150",
              isTransparent ? "text-white" : "text-foreground"
            )}>
              SoftClick
            </span>
          </Link>
        </div>

        {/* Center: Swiss Grid Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex gap-1 items-center">
            {navigation.map((item) => {
              if (item.hasSubmenu && item.items) {
                return (
                  <MegaMenu
                    key={item.name}
                    trigger={
                      <button
                        className={cn(
                          "px-4 py-2 rounded-none transition-all duration-150 ease-linear text-xs font-bold uppercase tracking-widest flex items-center gap-2 swiss-border-thin",
                          isTransparent
                            ? (openMenu === item.name ? "bg-white text-[#020617] border-white" : "text-white/70 hover:text-white hover:bg-white/10 border-transparent")
                            : (openMenu === item.name ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent")
                        )}
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    }
                    items={item.items}
                    isOpen={openMenu === item.name}
                    onOpenChange={(open) => setOpenMenu(open ? item.name : null)}
                    isTransparent={isTransparent}
                  />
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-none transition-all duration-150 ease-linear text-xs font-bold uppercase tracking-widest swiss-border-thin",
                    isTransparent
                      ? (pathname === item.href ? "bg-white text-[#020617] border-white" : "text-white/70 hover:text-white hover:bg-white/10 border-transparent")
                      : (pathname === item.href ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent")
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">

          <Button asChild variant="outline" className={cn(
            "hidden md:inline-flex swiss-border-thick px-6 h-12 transition-all duration-150 ease-linear font-bold text-xs tracking-widest uppercase",
            isTransparent
              ? "border-white/30 bg-transparent text-white hover:bg-white hover:text-[#020617]"
              : "border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
          )}>
            <Link href="/contact">Contact</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "px-3 h-12 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden swiss-border-thin",
                  isTransparent ? "text-white border-white/20" : "text-foreground border-border"
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-2 border-border text-foreground p-8 swiss-noise">
              <div className="flex items-center gap-3 mb-12 border-b-2 border-border pb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-none font-black text-sm swiss-border-thick">SC</div>
                <span className="swiss-headline text-xl">SoftClick</span>
              </div>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => {
                  if (item.hasSubmenu && item.items) {
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() => setMobileOpenMenu(mobileOpenMenu === item.name ? null : item.name)}
                          className={cn(
                            "swiss-label text-left w-full py-2 flex items-center gap-2 transition-all duration-150",
                            pathname.startsWith(item.href) ? "text-primary font-black" : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-150",
                            mobileOpenMenu === item.name ? "rotate-180" : ""
                          )} />
                        </button>
                        {mobileOpenMenu === item.name && (
                          <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => {
                                  setIsOpen(false)
                                  setMobileOpenMenu(null)
                                }}
                                className={cn(
                                  "block text-xs font-bold uppercase tracking-widest py-2 transition-all duration-150",
                                  pathname === subItem.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "swiss-label py-2 transition-all duration-150",
                        pathname === item.href ? "text-primary font-black" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="mt-12 pt-8 border-t-2 border-border">
                  <Button asChild className="w-full h-14 swiss-border-thick bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold text-xs tracking-widest uppercase">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
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
