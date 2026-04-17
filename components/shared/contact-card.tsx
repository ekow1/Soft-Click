import * as React from "react"
import { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ContactCardProps {
  title: string
  details: string[]
  icon: LucideIcon
}

export function ContactCard({ title, details, icon: Icon }: ContactCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-slate-200">
      <CardContent className="p-8 flex items-start space-x-6">
        <div className="bg-primary/10 p-4 rounded-2xl flex-shrink-0">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
          <div className="space-y-1 text-slate-600">
            {details.map((detail, index) => (
              <p key={index} className="text-base">{detail}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
