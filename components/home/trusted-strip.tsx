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
    <section className="w-full bg-white py-10 md:py-14 overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-4 mb-16 text-center max-w-5xl">
        <h2 className="text-slate-900 text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
          Trusted by 5,000+ Global Leaders
        </h2>
      </div>

      <div className="relative flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        {/* Row 1 */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-14 md:gap-20 items-center shrink-0 px-6 md:px-10">
              {row1Logos.map((logo, index) => (
                <div key={index} className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                  <logo.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                  <span className="text-slate-900 text-lg md:text-xl font-black tracking-tight">{logo.name}</span>
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
                <div key={index} className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                  <logo.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                  <span className="text-slate-900 text-lg md:text-xl font-black tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
