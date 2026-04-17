import * as React from "react"
import { Eye, Target } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export function MissionVision() {
  return (
    <SectionWrapper background="muted">
      <SectionHeading title="Our Guiding Principles" align="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group rounded-3xl overflow-hidden">
          <CardContent className="p-10 md:p-14 text-center flex flex-col items-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 relative">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping group-hover:animate-none" />
              <Target className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To drive digital transformation in Africa by providing modern, secure, and scalable enterprise technology solutions tailored to real-world business challenges.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group rounded-3xl overflow-hidden">
          <CardContent className="p-10 md:p-14 text-center flex flex-col items-center">
            <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300 relative">
              <Eye className="w-10 h-10 text-accent-foreground group-hover:text-amber-950 transition-colors" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Our Vision</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To be the premier technology partner for African corporations, recognized globally for innovation, robust engineering, and local market mastery.
            </p>
          </CardContent>
        </Card>

      </div>
    </SectionWrapper>
  )
}
