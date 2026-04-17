import * as React from "react"

interface StatItem {
  value: string
  label: string
}

interface StatsStripProps {
  stats: StatItem[]
}

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16 bg-white border-y">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            {stat.value}
          </div>
          <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
