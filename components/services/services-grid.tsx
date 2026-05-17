import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, LayoutDashboard, Cloud, Network, Briefcase, Database, Lock, Smartphone } from "lucide-react"

const detailedServices = [
  {
    title: "Software Application Development",
    description: "We undertake full-cycle software development. By consulting with charted bankers and auditors, we build bespoke, robust systems that address distinct gaps in financial technology and handle high transaction volumes securely.",
    icon: Code,
    features: ["Bespoke Financial Software", "Regulatory Requirement Analysis", "Agile & Secure Development"],
  },
  {
    title: "IT Advisory & Consultation",
    description: "Our seasoned consultants audit your existing infrastructure, identify technology gaps, and architect robust IT roadmaps that align with Central Bank regulations and modern industry best practices.",
    icon: Briefcase,
    features: ["Strategic IT Roadmaps", "Central Bank Compliance Audits", "Infrastructure Vendor Management"],
  },
  {
    title: "System Integration Services",
    description: "We seamlessly connect your core platforms with vital third-party applications. Our services provide encrypted pipelines linking your systems to Mobile Money, E-Zwich, and national payment gateways.",
    icon: Network,
    features: ["Mobile Money Integration", "E-Zwich & Payment Gateways", "Secure API Bridging"],
  },
  {
    title: "Cloud Hosting Services",
    description: "We provide highly secure, encrypted, and accessible cloud environments tailored for financial institutions. Our hosting guarantees continuous availability, backed by automated disaster recovery.",
    icon: Cloud,
    features: ["Encrypted Cloud Storage", "Disaster Recovery Sync", "High Availability Servers"],
  },
  {
    title: "Networking Services",
    description: "We design and implement robust Wide Area Networks (WAN) that securely link your head office with multiple branch locations, ensuring low-latency communication and centralized data access.",
    icon: Database,
    features: ["Secure WAN Configuration", "Branch Interconnectivity", "Network Access Control"],
  },
  {
    title: "ICT Support Services",
    description: "Our commitment extends beyond deployment. We offer comprehensive ongoing support, including rigorous user training, system troubleshooting, and routine feature updates to adapt to market trends.",
    icon: Smartphone,
    features: ["Comprehensive Staff Training", "Routine System Updates", "24/7 Technical Troubleshooting"],
  },
]

export function ServicesGrid() {
  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">01 — Capabilities</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              What we <span className="text-muted-foreground">build.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              Comprehensive engineering services across the modern enterprise technology stack.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l-2 border-t-2 border-border">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col border-r-2 border-b-2 border-border p-8 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="p-3 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150">
                  <service.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="swiss-headline text-foreground group-hover:text-background text-xl md:text-2xl mb-4 transition-colors duration-150">
                {service.title}
              </h3>
              <p className="swiss-body text-muted-foreground group-hover:text-background/70 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-150">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8 pt-6 border-t-2 border-border group-hover:border-background/20 transition-colors duration-150">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 swiss-label text-muted-foreground group-hover:text-background/80 transition-colors duration-150">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-between swiss-label text-accent gap-3 mt-auto"
              >
                Enquire
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
