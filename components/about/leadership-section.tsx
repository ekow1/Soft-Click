import * as React from "react"
import { Globe, Mail } from "lucide-react"

const leaders = [
  {
    name: "John K. Appiah",
    role: "Chief Executive Officer",
    image: "HEADSHOT PLACEHOLDER",
  },
  {
    name: "Dr. Sarah Mensah",
    role: "Chief Technology Officer",
    image: "HEADSHOT PLACEHOLDER",
  },
  {
    name: "Kwame Asare",
    role: "VP of Engineering",
    image: "HEADSHOT PLACEHOLDER",
  },
  {
    name: "Ama Serwaa",
    role: "Director of Delivery",
    image: "HEADSHOT PLACEHOLDER",
  },
]

export function LeadershipSection() {
  return (
    <section className="w-full bg-muted/30 border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">04 — Leadership</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              Executive <span className="text-muted-foreground">leadership.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              Guiding our vision with decades of enterprise technology experience.
            </p>
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l-2 border-t-2 border-border">
          {leaders.map((leader, index) => (
            <div key={index} className="group relative border-r-2 border-b-2 border-border bg-background">
              {/* Image */}
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <div className="absolute inset-0 swiss-dots opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center swiss-label text-muted-foreground text-center p-4">
                  {leader.image}
                </div>

                {/* Number badge */}
                <div className="absolute top-0 left-0 bg-foreground text-background w-10 h-10 flex items-center justify-center swiss-label">
                  0{index + 1}
                </div>

                {/* Hover overlay with socials */}
                <div className="absolute inset-0 bg-foreground/90 flex items-end justify-start p-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <a href="#" className="w-10 h-10 swiss-border-thick border-background bg-transparent text-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150">
                    <Globe className="w-4 h-4" />
                    <span className="sr-only">Network</span>
                  </a>
                  <a href="#" className="w-10 h-10 swiss-border-thick border-background bg-transparent text-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150">
                    <Mail className="w-4 h-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t-2 border-border">
                <h3 className="swiss-headline text-foreground text-lg md:text-xl mb-2">
                  {leader.name}
                </h3>
                <p className="swiss-label text-accent">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

