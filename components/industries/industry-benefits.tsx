import * as React from "react"
import { ShieldCheck, Crosshair, Cpu, Users } from "lucide-react"

const benefits = [
  {
    title: "Domain-Specific Competence",
    description: "Our engineers aren't just coders; they are domain experts who understand the intricacies of local African industries.",
    icon: Crosshair,
  },
  {
    title: "Uncompromising Security",
    description: "We build systems trusted by rural banks and government agencies, ensuring regulatory compliance and data integrity.",
    icon: ShieldCheck,
  },
  {
    title: "Future-Proof Architecture",
    description: "By leveraging microservices and cloud-native practices, your infrastructure scales autonomously as your business grows.",
    icon: Cpu,
  },
  {
    title: "Dedicated Local Support",
    description: "Enjoy the peace of mind that comes with a premium technical partner right here in your timezone.",
    icon: Users,
  },
]

export function IndustryBenefits() {
  return (
    <section className="w-full bg-muted/30 border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">02 — Advantage</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              Why leading firms <span className="text-muted-foreground">chose us.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              We don't just build software; we build robust engines that drive industry growth.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l-2 border-t-2 border-border">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group border-r-2 border-b-2 border-border p-8 md:p-12 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                  0{index + 1}
                </span>
                <div className="p-3 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150">
                  <benefit.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="swiss-headline text-foreground group-hover:text-background text-xl md:text-2xl mb-4 transition-colors duration-150">
                {benefit.title}
              </h3>
              <p className="swiss-body text-muted-foreground group-hover:text-background/70 text-sm leading-relaxed transition-colors duration-150">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
