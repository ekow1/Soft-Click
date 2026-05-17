import * as React from "react"
import { Award, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react"

const values = [
  {
    title: "Creativity",
    description: "We think outside the box to deliver unique interfaces and processes that set our software apart in the financial industry.",
    icon: Lightbulb,
  },
  {
    title: "Innovative",
    description: "We are constantly researching and adopting emerging technologies to ensure our clients maintain a competitive edge.",
    icon: Award,
  },
  {
    title: "Professionalism",
    description: "Transparency, honesty, and expert conduct define our client relationships. We deliver exactly what we promise.",
    icon: ShieldCheck,
  },
  {
    title: "Teamwork",
    description: "Your team's success is our success. We integrate closely with internal stakeholders to drive true impact.",
    icon: HeartHandshake,
  },
]

export function ValuesSection() {
  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">03 — Values</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              Core <span className="text-muted-foreground">values.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              The principles that guide our engineering culture and client engagements.
            </p>
          </div>
        </div>

        {/* Values Grid - 2x2 with thick borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l-2 border-t-2 border-border">
          {values.map((value, index) => (
            <div
              key={index}
              className="group border-r-2 border-b-2 border-border p-8 md:p-12 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                  0{index + 1}
                </span>
                <div className="p-3 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150">
                  <value.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="swiss-headline text-foreground group-hover:text-background text-2xl md:text-3xl mb-4 transition-colors duration-150">
                {value.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-background/70 text-base leading-relaxed transition-colors duration-150">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
