import * as React from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight, Layers, CreditCard, ShieldCheck } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const enterpriseProducts = [
  {
    title: "GH Banker",
    subtitle: "Core Banking Platform",
    description: "A comprehensive, secure, and scalable banking solution tailored for Ghanaian financial institutions and rural banks. It handles end-to-end ledger management, customer onboarding, and inter-bank clearing.",
    features: [
      "Secure Transaction Processing",
      "Real-time Regulatory Reporting",
      "Mobile Banking API Integration",
      "Maker-Checker Authorization Workflows",
      "Automated End-of-Day Reconciliation"
    ],
    icon: CreditCard,
    href: "/products/gh-banker",
    badge: "Flagship",
  },
  {
    title: "PayrollPro System",
    subtitle: "Enterprise Payroll Management",
    description: "Automate complex payroll calculations, tax deductions, and compliance reporting with our cloud-native payroll engine designed specifically for large-scale workforces.",
    features: [
      "Multi-currency & Multi-entity Support",
      "GRA & SSNIT Compliant",
      "Employee Self-Service Portal",
      "Automated Payslip Generation",
      "Bank Transfer Export Files"
    ],
    icon: Layers,
    href: "/products/payroll-system",
  },
  {
    title: "Custom Business Logic",
    subtitle: "Tailored Enterprise Tooling",
    description: "We build bespoke software platforms designed specifically to match your unique operational requirements, replacing rigid legacy systems with agile, cloud-native solutions.",
    features: [
      "API Driven Architecture",
      "Highly Scalable Databases",
      "Custom Workflow Automation",
      "Legacy System Integration",
      "Role-Based Access Control (RBAC)"
    ],
    icon: ShieldCheck,
    href: "/products/custom-solutions",
  },
]

export function ProductsGrid() {
  return (
    <SectionWrapper background="background">
      <div className="grid grid-cols-1 gap-12 lg:gap-16 max-w-5xl mx-auto border-t pt-16 mt-8 border-slate-100">
        {enterpriseProducts.map((product, index) => (
          <Card key={index} className="flex flex-col lg:flex-row border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-3xl overflow-hidden group">
            
            <div className="lg:w-1/3 bg-slate-50 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
               <div className="relative z-10 flex items-center justify-between lg:block lg:space-y-6">
                <div className="bg-white text-primary p-4 rounded-2xl shadow-sm border border-slate-200 inline-flex group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-10 w-10" />
                </div>
                {product.badge && (
                  <Badge className="bg-accent text-accent-foreground px-4 py-1.5 font-bold shadow-md rounded-full lg:mt-6">
                    {product.badge}
                  </Badge>
                )}
               </div>
            </div>

            <div className="lg:w-2/3 flex flex-col p-8 md:p-12">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-lg text-primary font-semibold tracking-wide">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm font-medium text-slate-700">
                      <ChevronRight className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link
                  href={product.href}
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-primary transition-colors group/link uppercase tracking-widest"
                >
                  Explore Details
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
