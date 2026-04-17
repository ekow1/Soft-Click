import * as React from "react"
import { TestimonialCard } from "@/components/shared/testimonial-card"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const testimonials = [
  {
    quote: "SoftClick Solutions didn't just understand our technological needs; they understood our business. The core banking system they implemented has transformed our rural operations, saving us countless hours in reconciliation.",
    clientName: "Samuel Osei",
    role: "Chief Operations Officer",
    company: "RuralBank Trust",
  },
  {
    quote: "The level of professionalism and technical expertise they brought to our cloud migration was unparalleled. We experienced zero downtime and our performance metrics have doubled since the switch.",
    clientName: "Grace Abena Teye",
    role: "Director of IT",
    company: "TechHub Africa",
  },
  {
    quote: "When we needed a custom payroll solution that adhered to complex local tax regulations, SoftClick delivered flawlessly. Their robust testing and support proved they are a partner you can trust.",
    clientName: "David K. Mensah",
    role: "Head of Human Resources",
    company: "Goldmine Extractors",
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper background="background">
      <SectionHeading
        title="What Our Clients Say"
        subheading="Don't just take our word for it. Hear from the leaders we've collaborated with."
        align="center"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full">
            <TestimonialCard
              quote={testimonial.quote}
              clientName={testimonial.clientName}
              role={testimonial.role}
              company={testimonial.company}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
