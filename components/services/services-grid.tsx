import * as React from "react"
import { ArrowRight, Code, LayoutDashboard, Cloud, Network, Briefcase, Database, Lock, Smartphone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"

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
    <SectionWrapper background="background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto border-t pt-16 mt-8 border-slate-100">
        {detailedServices.map((service, index) => (
          <Card key={index} className="flex flex-col border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-white">
            <CardHeader className="pb-4">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm font-medium text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0 border-t border-slate-100 pt-6 mt-auto">
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">
                Enquire
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
