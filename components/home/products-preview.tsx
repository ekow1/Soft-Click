"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Plus, X, ChevronRight, Layers, CreditCard, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

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
    <SectionWrapper background="background" padding="xl">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16 px-4">
        <SectionHeading
          title="Flagship Products"
          subheading="Enterprise-ready software products designed to run modern African businesses."
          className="mb-0 flex-1 max-w-2xl"
          align="left"
        />
        <div className="flex-shrink-0">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center rounded-none bg-slate-950 text-white px-8 h-12 text-sm font-black tracking-tight transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Explore All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-4">
        {/* Left: Product List Accordion */}
        <div className="lg:col-span-5 space-y-4">
          {products.map((product) => {
            const isActive = activeId === product.id
            return (
              <div
                key={product.id}
                onClick={() => setActiveId(product.id)}
                className={cn(
                  "group cursor-pointer border-t border-slate-100 py-6 transition-all duration-300",
                  isActive ? "bg-slate-50/50 px-6 -mx-6 border-y border-slate-200" : "hover:bg-slate-50 hover:px-2 hover:-mx-2"
                )}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2 rounded-none transition-colors",
                      isActive ? "bg-accent text-accent-foreground" : "bg-slate-100 text-slate-400 group-hover:text-slate-600"
                    )}>
                      {product.id === "banker" && <CreditCard className="h-5 w-5" />}
                      {product.id === "payroll" && <Layers className="h-5 w-5" />}
                      {product.id === "custom" && <ShieldCheck className="h-5 w-5" />}
                    </div>
                    <h3 className={cn(
                      "text-xl md:text-2xl font-black tracking-tight transition-colors",
                      isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-900"
                    )}>
                      {product.title}
                    </h3>
                  </div>
                  {isActive ? (
                    <X className="h-5 w-5 text-slate-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-300 group-hover:text-slate-500" />
                  )}
                </div>

                {isActive && (
                  <div className="mt-6 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-none">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={product.href}
                      className="inline-flex items-center text-sm font-black text-slate-950 group/link"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 bg-slate-950 text-white p-1 rounded-none rotate-[315deg]" />
                      View Detail
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right: Dynamic Preview Area */}
        <div className="lg:col-span-7 sticky top-32">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out transform",
                activeId === product.id 
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              )}
            >
              <div className="bg-white rounded-none shadow-2xl shadow-slate-200/50 overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product Info Label overlay */}
              <div className="absolute -bottom-6 -right-6 hidden xl:block bg-accent text-accent-foreground p-8 rounded-none shadow-xl border border-white/20 max-w-xs animate-in slide-in-from-right-4 duration-700 delay-300">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase opacity-70 mb-2">Selected Product</p>
                <h4 className="text-xl font-black tracking-tight leading-tight">{product.title}</h4>
              </div>
            </div>
          ))}
          {/* Placeholder for layout stability */}
          <div className="aspect-[16/10] invisible pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  )
}
