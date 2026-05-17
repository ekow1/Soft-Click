"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, Cloud, Network, Briefcase, Database, Smartphone, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
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

        <div className="border-t-2 border-border">
          {detailedServices.map((service, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="border-b-2 border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 group text-left"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="swiss-label text-muted-foreground group-hover:text-accent transition-colors duration-300 w-8 hidden md:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={cn(
                      "swiss-headline text-2xl md:text-4xl transition-colors duration-300",
                      isOpen ? "text-accent" : "text-foreground group-hover:text-foreground/80"
                    )}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={cn(
                    "p-3 swiss-border-thick border-border transition-all duration-300 shrink-0",
                    isOpen ? "bg-accent border-accent text-accent-foreground rotate-180" : "group-hover:border-accent group-hover:text-accent"
                  )}>
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </button>
                
                <div className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 pb-0"
                )}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4 md:pl-[6rem]">
                      <div className="lg:col-span-7">
                        <p className="swiss-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-3 swiss-label text-accent hover:text-foreground transition-colors"
                        >
                          Enquire About This Service
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="lg:col-span-5">
                        <div className="bg-muted/30 p-6 border-l-2 border-accent">
                          <div className="swiss-label text-foreground mb-4 flex items-center gap-3">
                            <service.icon className="w-5 h-5 text-accent" />
                            Key Features
                          </div>
                          <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3 swiss-body text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
