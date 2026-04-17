import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, LayoutDashboard, Cloud, Network, Briefcase } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const services = [
  {
    title: "Enterprise Software Development",
    description: "Custom, scalable software solutions built to streamline complex business operations and drive efficiency.",
    icon: Code,
    href: "/services",
  },
  {
    title: "Web & Mobile Applications",
    description: "High-performance native and cross-platform applications designed for optimal user experience and engagement.",
    icon: LayoutDashboard,
    href: "/services",
  },
  {
    title: "Cloud & DevOps Solutions",
    description: "Secure and scalable cloud infrastructure and CI/CD pipelines for robust deployment and continuous integration.",
    icon: Cloud,
    href: "/services",
  },
  {
    title: "Systems Integration",
    description: "Seamless connectivity between your core enterprise systems and third-party APIs for unified data flow.",
    icon: Network,
    href: "/services",
  },
  {
    title: "IT Consulting & Strategy",
    description: "Expert guidance to align your technology investments with your long-term corporate objectives.",
    icon: Briefcase,
    href: "/services",
  },
]

export function ServicesPreview() {
  return (
    <SectionWrapper background="muted">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <SectionHeading
          title="Our Services"
          subheading="Comprehensive technology solutions tailored for enterprise scale."
          className="mb-0"
        />
        <Link
          href="/services"
          className="group inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors whitespace-nowrap"
        >
          View All Services
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border border-slate-100">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-semibold text-primary/80 hover:text-primary group-hover:underline underline-offset-4 decoration-primary/30 outline-none"
              >
                Learn More
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
