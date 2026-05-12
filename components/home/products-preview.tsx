"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Plus, X, Layers, CreditCard, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: "banker",
    title: "GH Banker",
    subtitle: "Core Banking Platform",
    description: "A comprehensive, secure, and scalable banking solution tailored for Ghanaian financial institutions and rural banks.",
    features: ["Secure Transactions", "Real-time Reporting", "Mobile Banking"],
    image: "/images/products/gh-banker.png",
    href: "/products/gh-banker",
  },
  {
    id: "payroll",
    title: "PayrollPro System",
    subtitle: "Enterprise Payroll Management",
    description: "Automate complex payroll calculations, tax deductions, and compliance reporting with our cloud-native payroll engine.",
    features: ["Multi-currency", "GRA Compliant", "Self-Service"],
    image: "/images/products/payroll-pro.png",
    href: "/products/payroll-system",
  },
  {
    id: "custom",
    title: "Custom Business Logic",
    subtitle: "Tailored Enterprise Tooling",
    description: "We build bespoke software platforms designed specifically to match your unique operational requirements and workflows.",
    features: ["API Driven", "Scalable", "Secure Arch"],
    image: "/images/products/custom-logic.png",
    href: "/products/custom-solutions",
  },
]

export function ProductsPreview() {
  const [activeId, setActiveId] = React.useState(products[0].id)

  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header - Swiss style */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">04 — Products</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl">
              Flagship <span className="text-muted-foreground">Products.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base mt-4 max-w-xl">
              Enterprise-ready software designed to run modern African businesses.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex lg:justify-end items-end">
            <Link
              href="/products"
              className="group inline-flex items-center justify-between gap-3 px-6 h-12 swiss-border-thick bg-foreground text-background hover:bg-accent hover:text-accent-foreground hover:border-accent swiss-label transition-all duration-150"
            >
              All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Product Accordion + Preview */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">

          {/* Left: Product List */}
          <div className="col-span-12 lg:col-span-5 border-t-2 border-border">
            {products.map((product) => {
              const isActive = activeId === product.id
              return (
                <div
                  key={product.id}
                  onClick={() => setActiveId(product.id)}
                  className={cn(
                    "group cursor-pointer border-b-2 border-border py-6 px-4 transition-all duration-150 ease-linear",
                    isActive ? "bg-foreground text-background" : "hover:bg-muted/50"
                  )}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={cn(
                        "p-2.5 transition-colors duration-150 swiss-border-thick",
                        isActive ? "bg-accent text-accent-foreground border-accent" : "bg-background text-muted-foreground border-border group-hover:border-foreground"
                      )}>
                        {product.id === "banker" && <CreditCard className="h-5 w-5" />}
                        {product.id === "payroll" && <Layers className="h-5 w-5" />}
                        {product.id === "custom" && <ShieldCheck className="h-5 w-5" />}
                      </div>
                      <h3 className={cn(
                        "swiss-headline text-xl md:text-2xl transition-colors duration-150",
                        isActive ? "text-background" : "text-foreground"
                      )}>
                        {product.title}
                      </h3>
                    </div>
                    {isActive ? (
                      <X className="h-5 w-5 shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 transition-transform duration-150 group-hover:rotate-90" />
                    )}
                  </div>

                  {isActive && (
                    <div className="mt-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-background/70 mb-6 leading-relaxed text-sm">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="swiss-label text-background/80 px-3 py-1.5 border-2 border-background/30">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-3 swiss-label text-accent hover:text-background transition-colors duration-150"
                      >
                        View Detail
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Preview Area */}
          <div className="col-span-12 lg:col-span-7 lg:sticky lg:top-32">
            <div className="relative aspect-[16/10] swiss-border-thick bg-muted/30 overflow-hidden">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-150 ease-linear",
                    activeId === product.id
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Swiss-style label overlay */}
              <div className="absolute top-0 left-0 bg-foreground text-background px-4 py-2 swiss-label">
                {products.find(p => p.id === activeId)?.subtitle}
              </div>
              <div className="absolute bottom-0 right-0 bg-accent text-accent-foreground px-6 py-3 swiss-label">
                {products.find(p => p.id === activeId)?.title}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
