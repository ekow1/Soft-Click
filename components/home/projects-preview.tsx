"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "payment",
    headline: "High-throughput payment processing for national banking.",
    name: "Digital Payment Gateway",
    client: "National Bank of Ghana",
    industry: "FINANCIAL SERVICES",
    challenge: "Processing over 1M daily transactions with legacy architecture was causing high latency and frequent downtimes.",
    solution: "Rebuilt the core engine using a cloud-native microservices architecture with distributed ledger technology for real-time settlements.",
    stats: [
      { label: "99.99%", value: "System Uptime" },
      { label: "40%", value: "Latency Reduction" }
    ],
    image: "/images/projects/payment-gateway.png",
    href: "/projects/payment-gateway",
  },
  {
    id: "identity",
    headline: "Secure nationwide digital identity for millions of citizens.",
    name: "Citizen Identity Portal",
    client: "GovTech Initiative",
    industry: "GOVERNMENT",
    challenge: "Manual registration processes were slow, prone to error, and lacked secure biometric verification at scale.",
    solution: "Developed a secure web portal integrating state-of-the-art biometric matching engine and encrypted citizen data vaults.",
    stats: [
      { label: "60%", value: "Faster Registration" },
      { label: "Secure", label2: "Encrypted Data" }
    ],
    image: "/images/projects/identity-portal.png",
    href: "/projects/identity-portal",
  },
  {
    id: "agri",
    headline: "End-to-end supply chain visibility for agricultural trade.",
    name: "Agri-Supply Logistics",
    client: "AgroTrade Co.",
    industry: "LOGISTICS & SUPPLY CHAIN",
    challenge: "Lack of transparency in the supply chain led to significant food waste and payment delays for rural farmers.",
    solution: "Implemented a real-time tracking dashboard and automated payment system using IoT sensor data and mobile notifications.",
    stats: [
      { label: "25%", value: "Reduced Waste" },
      { label: "Real-time", label2: "IoT Tracking" }
    ],
    image: "/images/projects/agri-logistics.png",
    href: "/projects/agri-logistics",
  },
]

export function ProjectsPreview() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const project = projects[activeIndex]

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <SectionWrapper background="background" padding="xl" className="overflow-hidden">
      <div className="mb-20 md:mb-32">
        {/* Badge and Title */}
        <div className="flex flex-col gap-6 ">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.2em] uppercase self-start">
            {project.industry}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] max-w-5xl">
            {project.headline}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start border-t border-slate-100 pt-12 md:pt-20">
        {/* Left: Image */}
        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden group">
          <img 
            key={project.id}
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-1000"
          />
          <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-between py-2">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-8">
                {project.name}
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3">Challenge:</h4>
                  <p className="text-slate-600 leading-relaxed max-w-lg">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3">Solution:</h4>
                  <p className="text-slate-600 leading-relaxed max-w-lg">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-6 flex flex-col justify-center min-w-[160px]">
                  <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-[10px] font-black tracking-widest uppercase text-slate-400">{stat.value || stat.label2}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              href={project.href}
              className="inline-flex items-center text-sm font-black text-slate-950 group/link"
            >
              <ArrowRight className="mr-2 h-4 w-4 bg-slate-950 text-white p-1 rounded-none rotate-[315deg] group-hover:rotate-0 transition-transform duration-300" />
              View Detail
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-100">
        <Link
          href="/projects"
          className="bg-accent text-accent-foreground px-8 h-14 flex items-center justify-center text-sm font-black tracking-tight rounded-none hover:bg-slate-950 hover:text-white transition-all shadow-lg hover:shadow-xl"
        >
          View all case studies
        </Link>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="rounded-none border-slate-200 bg-white text-slate-900 hover:bg-accent hover:text-accent-foreground transition-all w-14 h-14"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-none border-slate-200 bg-white text-slate-900 hover:bg-accent hover:text-accent-foreground transition-all w-14 h-14"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
