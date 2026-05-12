import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, LayoutDashboard, Cloud, Network, Briefcase, Database, Lock, Smartphone } from "lucide-react"

const detailedServices = [
  {
    title: "Enterprise Software Architecture",
    description: "End-to-end design and development of monolithic and microservices-based software infrastructure built specifically for scale and high concurrency.",
    icon: Code,
    features: ["Domain-Driven Design", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Full-Stack Web Development",
    description: "Building responsive, highly performant web applications using modern React, Next.js, and server-side rendering technologies.",
    icon: LayoutDashboard,
    features: ["React & Next.js", "Progressive Web Apps", "Accessibility Compliance"],
  },
  {
    title: "Native Mobile Applications",
    description: "iOS and Android apps developed for speed and engagement, seamlessly integrating with your backend APIs.",
    icon: Smartphone,
    features: ["React Native", "Swift & Kotlin", "Offline-First Sync"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Design and deployment of scalable CI/CD pipelines, container orchestration, and multi-cloud strategies.",
    icon: Cloud,
    features: ["AWS / Azure / GCP", "Kubernetes", "Infrastructure as Code"],
  },
  {
    title: "Systems Integration",
    description: "We securely connect disparate legacy systems, core banking platforms, and modern APIs using enterprise service buses and gateways.",
    icon: Network,
    features: ["API Gateways", "Legacy System Modernization", "Secure Data Pipelines"],
  },
  {
    title: "Big Data & Analytics",
    description: "Implement data lakes and real-time processing engines to derive actionable intelligence from massive corporate datasets.",
    icon: Database,
    features: ["Data Warehousing", "Machine Learning", "Real-time Dashboards"],
  },
  {
    title: "Information Security",
    description: "Securing your applications with industry-standard encryption, identity management, and continuous vulnerability assessments.",
    icon: Lock,
    features: ["Penetration Testing", "Identity Access Management", "Compliance Auditing"],
  },
  {
    title: "IT Strategy Consulting",
    description: "Advising C-suite leadership on digital transformation roadmaps, technology procurement, and vendor management.",
    icon: Briefcase,
    features: ["Digital Transformation", "Vendor Evaluation", "Tech Auditing"],
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
