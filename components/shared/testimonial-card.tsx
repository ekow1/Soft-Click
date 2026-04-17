import * as React from "react"
import { Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export interface TestimonialCardProps {
  quote: string
  clientName: string
  role: string
  company: string
}

export function TestimonialCard({
  quote,
  clientName,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <Card className="h-full border-border bg-card hover:shadow-md transition-shadow flex flex-col justify-between p-8 md:p-10 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-primary/10 opacity-50">
        <Quote className="h-24 w-24" />
      </div>
      <CardContent className="p-0 relative z-10">
        <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed font-medium">
          &quot;{quote}&quot;
        </p>
      </div>
      <CardFooter className="p-0 mt-8 relative z-10 flex flex-col items-start space-y-1">
        <div className="font-bold text-foreground text-lg uppercase tracking-wide">
          {clientName}
        </div>
        <div className="text-sm text-muted-foreground font-medium">
          {role}, <span className="text-accent">{company}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
