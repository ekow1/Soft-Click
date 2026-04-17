import * as React from "react"
import { ShieldCheck, Target, Zap, Handshake } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"

const features = [
  {
    title: "Proven Enterprise Experience",
    description: "Years of building mission-critical systems for financial institutions, government agencies, and top-tier corporations.",
    icon: ShieldCheck,
  },
  {
    title: "Deep Market Understanding",
    description: "Built for Africa by Africans. We understand the unique challenges, regulations, and opportunities in our local markets.",
    icon: Target,
  },
  {
    title: "Scalable & Secure Architecture",
    description: "Deploy with confidence. Our solutions are built on modern, secure frameworks designed to handle extreme growth.",
    icon: Zap,
  },
  {
    title: "Long-Term Partnership",
    description: "We don't just build software; we build relationships. We act as an extension of your own engineering and strategy teams.",
    icon: Handshake,
  },
]

export function WhyChooseUs() {
  return (
    <SectionWrapper background="background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
            Why Forward-thinking Leaders Choose Us
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            At SoftClick Solutions, we bridge the gap between complex business challenges and elegant, powerful technology solutions. We deliver results that drive real growth.
          </p>
          <div className="hidden lg:block w-32 h-2 bg-primary mt-12 rounded-none" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="bg-slate-50 w-16 h-16 rounded-none flex items-center justify-center text-primary border border-slate-100 shadow-sm transition-transform hover:scale-105 duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
