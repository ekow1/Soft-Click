import * as React from "react"
import { Code, Cloud, Network, Briefcase, LayoutDashboard, Database, Cpu, Globe, Rocket, Shield } from "lucide-react"

const row1Logos = [
  { name: "Logoipsum", icon: Cpu },
  { name: "GlobalTech", icon: Globe },
  { name: "DataCore", icon: Database },
  { name: "SecureNet", icon: Shield },
  { name: "CloudSoft", icon: Cloud },
]

const row2Logos = [
  { name: "TechNova", icon: Rocket },
  { name: "DevFlow", icon: Code },
  { name: "NetworkX", icon: Network },
  { name: "BizLogic", icon: Briefcase },
  { name: "Designify", icon: LayoutDashboard },
]

export function TrustedStrip() {
  return (
    <section className="w-full bg-muted/40 py-12 md:py-16 overflow-hidden border-y-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center">
          <div className="col-span-12 md:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">02 — Trusted</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="swiss-label text-foreground text-sm md:text-base">
              Trusted by 5,000+ global leaders
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 md:gap-12 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        {/* Row 1 */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-14 md:gap-20 items-center shrink-0 px-6 md:px-10">
              {row1Logos.map((logo, index) => (
                <div key={index} className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-150 cursor-default">
                  <logo.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  <span className="text-foreground text-base md:text-lg font-black tracking-tight uppercase">{logo.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex animate-marquee whitespace-nowrap items-center" style={{ animationDirection: 'reverse' }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-14 md:gap-20 items-center shrink-0 px-6 md:px-10">
              {row2Logos.map((logo, index) => (
                <div key={index} className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-150 cursor-default">
                  <logo.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  <span className="text-foreground text-base md:text-lg font-black tracking-tight uppercase">{logo.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
