import * as React from "react"
import { CheckCircle2, ShieldCheck, Zap, BarChart } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const features = [
  {
    title: "Bank-Grade Security",
    description: "Every product is built with end-to-end encryption, multi-factor authentication support, and strict RBAC controls to protect sensitive corporate data.",
    icon: ShieldCheck,
  },
  {
    title: "High Performance Architecture",
    description: "Built for throughput. Our systems handle thousands of concurrent transactions with millisecond latency, ensuring zero bottlenecks.",
    icon: Zap,
  },
  {
    title: "Real-time Telemetry & Reporting",
    description: "Rich dashboards and exportable reports give your stakeholders instant visibility into system health and key business metrics.",
    icon: BarChart,
  },
]

export function ProductFeatures() {
  return (
    <SectionWrapper background="navy" className="overflow-hidden relative">
      <SectionHeading
        title="Engineering Excellence Baked In"
        subheading="It's not just about features; it's about foundation. All our products share these core architectural principles."
        align="center"
        className="text-white mb-20"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
         {features.map((feature, index) => (
           <div key={index} className="flex flex-col text-center items-center group">
             <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
               <feature.icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-xl font-bold tracking-tight text-white mb-4">
               {feature.title}
             </h3>
             <p className="text-slate-400 leading-relaxed max-w-xs">
               {feature.description}
             </p>
           </div>
         ))}
      </div>
    </SectionWrapper>
  )
}
