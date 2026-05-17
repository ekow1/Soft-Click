import * as React from "react"
import { Building2, Store, Landmark, ShoppingCart, Landmark as GovernmentIcon, GraduationCap, ArrowRight } from "lucide-react"

const industriesData = [
  {
    name: "Rural Banks",
    icon: Landmark,
    description: "Core banking platforms specifically tailored to handle rural operations, offline synching, and local compliance requirements.",
    features: ["Offline Synchronization", "Local Compliance", "Agency Banking"],
  },
  {
    name: "Microfinance",
    icon: Building2,
    description: "Robust solutions for microfinance institutions to manage high-volume, low-value transactions and field collections efficiently.",
    features: ["Loan Portfolio Management", "Field Agent Tracking", "Customer Information File"],
  },
  {
    name: "Micro Credit Institutions",
    icon: Store,
    description: "Agile software providing rapid loan processing, group loans management, and detailed recovery reports.",
    features: ["Rapid Loan Processing", "Group Loans", "Recovery Reporting"],
  },
  {
    name: "Savings & Loans Companies",
    icon: GovernmentIcon,
    description: "Comprehensive financial suites managing fixed deposits, current accounts, and complex placement management.",
    features: ["Fixed Deposit Modules", "Placement Management", "Real-Time Ledgers"],
  },
  {
    name: "Credit Unions",
    icon: GraduationCap,
    description: "Member-focused platforms handling share accounts, customized BOG reporting, and automated dividend distribution.",
    features: ["Members Shares Account", "Customized Reporting", "Automated Dividends"],
  },
]

export function IndustriesGrid() {
  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">01 — Sectors</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              We speak your <span className="text-muted-foreground">language.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              Delivering bespoke digital transformation across vertical domains. We understand the regulatory constraints and operational nuances of your sector.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l-2 border-t-2 border-border">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="group border-r-2 border-b-2 border-border p-8 md:p-10 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="p-3 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150">
                  <industry.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="swiss-headline text-foreground group-hover:text-background text-xl md:text-2xl mb-4 transition-colors duration-150">
                {industry.name}
              </h3>
              <p className="swiss-body text-muted-foreground group-hover:text-background/70 text-sm leading-relaxed mb-6 transition-colors duration-150">
                {industry.description}
              </p>

              <ul className="space-y-2 pt-6 border-t-2 border-border group-hover:border-background/20 transition-colors duration-150">
                {industry.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-accent shrink-0" strokeWidth={3} />
                    <span className="swiss-label text-muted-foreground group-hover:text-background/80 text-xs transition-colors duration-150">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
