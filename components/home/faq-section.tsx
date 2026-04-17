"use client"

import * as React from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"

const faqs = [
  {
    question: "How long does it take for a custom software solution to be ready?",
    answer: "Project timelines vary based on complexity. A standard enterprise MVP typically takes 8-12 weeks, while more complex core banking or government systems can range from 4-8 months. We provide a detailed roadmap during the discovery phase."
  },
  {
    question: "How do you determine the pricing for your services?",
    answer: "We offer both fixed-price contracts for well-defined projects and time-and-materials models for agile, evolving requirements. Our pricing is transparent and reflects the technical expertise and security standards required for enterprise-grade software."
  },
  {
    question: "How secure is the software developed by SoftClick?",
    answer: "Security is baked into our SDLC. We follow OWASP standards, implement multi-factor authentication, data encryption at rest and in transit, and perform regular security audits. Our banking systems are designed to exceed GRA and Bank of Ghana compliance requirements."
  },
  {
    question: "Do you provide post-deployment support and maintenance?",
    answer: "Yes. Every project includes a standard warranty period, followed by optional Service Level Agreements (SLAs). We provide 24/7 technical support, regular security patches, and performance optimizations to ensure your system remains mission-critical ready."
  },
  {
    question: "Can your solutions integrate with our existing legacy systems?",
    answer: "Absolutely. We specialize in building API-first middleware and custom connectors that allow modern platforms to communicate securely with legacy core systems, ensuring a smooth digital transformation without disrupting your current operations."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <SectionWrapper background="background" padding="xl" className="bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions"
          subheading="Everything you need to know about partnering with SoftClick for your enterprise digital transformation."
          align="center"
          className="mb-16 md:mb-24"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx}
                className={cn(
                  "border border-slate-200 transition-all duration-300",
                  isOpen ? "bg-slate-50 border-slate-300 shadow-sm" : "hover:border-slate-300 bg-white"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className={cn(
                    "text-lg md:text-xl font-black tracking-tight font-mono transition-colors",
                    isOpen ? "text-slate-950" : "text-slate-600 group-hover:text-slate-900"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300",
                    isOpen ? "bg-slate-950 border-slate-950 text-white" : "border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
