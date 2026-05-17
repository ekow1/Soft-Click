import * as React from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight, Layers, CreditCard, ShieldCheck } from "lucide-react"

const enterpriseProducts = [
  {
    title: "GH Banker",
    subtitle: "Complete Banking System",
    description: "A comprehensive, secure, and scalable banking solution developed through wide consultation. It features multi-branch support, real-time financials, multi-level approvals, and SMS prompts.",
    features: [
      "Customer Information File (CIF)",
      "Real-Time Financial Reports",
      "Multi-Level Approvals",
      "SMS & Mobile Banking Interfaced",
      "Auto Roll-Back Database Security"
    ],
    icon: CreditCard,
    href: "/products/gh-banker",
    badge: "Flagship",
  },
  {
    title: "GH Sika Agent",
    subtitle: "Mobile Banking Application",
    description: "A complete, secured, and affordable revenue collection app for field agents. It enables real-time field data syncing, SMS alerts, and GPS location tracking to prevent under-reporting.",
    features: [
      "Customer Profile & Account Opening",
      "Field Agent GPS Tracking",
      "Instant SMS Prompt Receipts",
      "Live Monitoring Activity Interface",
      "Encrypted Local Database"
    ],
    icon: ShieldCheck,
    href: "/products/gh-sika-agent",
  },
  {
    title: "HR and Payroll System",
    subtitle: "Enterprise Payroll Management",
    description: "Customized Payroll Solution currently used by Labor Companies. Automate complex payroll calculations, tax deductions, and compliance reporting tailored to local laws.",
    features: [
      "Salary Crediting via GH Banker",
      "Tax & Compliance Reporting",
      "Automated Payslips",
      "Employee Profile Management",
      "Staff Loan Integration"
    ],
    icon: Layers,
    href: "/products/payroll-system",
  },
  {
    title: "GH Susu (GASCA)",
    subtitle: "Susu Operations System",
    description: "Customized mobile application tailored specifically for the Ghana Susu Association (GASCA), currently used by over 155 susu operators to manage collections smoothly.",
    features: [
      "Daily Deposit Management",
      "Agent Commission Tracking",
      "Offline Synching Capabilities",
      "Management Reports",
      "Client Balance Enquiry"
    ],
    icon: ChevronRight,
    href: "/products/gh-susu",
  },
]

export function ProductsGrid() {
  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">01 — Portfolio</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              Enterprise <span className="text-muted-foreground">platforms.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              Battle-tested software products designed to power Africa's most demanding workloads.
            </p>
          </div>
        </div>

        {/* Products List */}
        <div className="border-t-2 border-border">
          {enterpriseProducts.map((product, index) => (
            <div
              key={index}
              className="group grid grid-cols-12 gap-0 border-b-2 border-border transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              {/* Index + Icon */}
              <div className="col-span-12 lg:col-span-3 p-8 md:p-12 border-r-2 border-border group-hover:border-background/20 transition-colors duration-150 flex lg:flex-col items-start lg:items-stretch gap-6 justify-between">
                <div>
                  <div className="swiss-headline text-5xl md:text-6xl text-muted-foreground group-hover:text-accent transition-colors duration-150">
                    0{index + 1}
                  </div>
                  {product.badge && (
                    <span className="inline-block mt-4 bg-accent text-accent-foreground px-3 py-1.5 swiss-label">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150 self-end lg:self-start">
                  <product.icon className="h-7 w-7" />
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 lg:col-span-9 p-8 md:p-12">
                <div className="swiss-label text-accent mb-3">{product.subtitle}</div>
                <h3 className="swiss-headline text-foreground group-hover:text-background text-3xl md:text-4xl lg:text-5xl mb-6 transition-colors duration-150">
                  {product.title}
                </h3>
                <p className="swiss-body text-muted-foreground group-hover:text-background/70 text-base md:text-lg mb-8 max-w-3xl transition-colors duration-150">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 pt-6 border-t-2 border-border group-hover:border-background/20 transition-colors duration-150">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="swiss-body text-foreground group-hover:text-background text-sm transition-colors duration-150">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className="inline-flex items-center gap-3 mt-10 swiss-label text-accent"
                >
                  Explore Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
