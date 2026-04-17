import * as React from "react"
import { MapPin } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"

export function MapSection() {
  return (
    <SectionWrapper background="muted" container={false} className="py-0 md:py-0 lg:py-0 border-y border-slate-200">
       <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-slate-200 flex items-center justify-center overflow-hidden">
          {/* Decorative Map Placeholder */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-slate-200 to-slate-300" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" />
          
          <div className="relative z-10 flex flex-col items-center">
             <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center animate-pulse mb-6 relative">
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
                <MapPin className="w-12 h-12 text-primary" />
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-xl text-center border border-slate-100">
               <h3 className="font-bold text-slate-900 text-xl tracking-tight mb-2">Accra Office</h3>
               <p className="text-slate-500 font-medium text-sm">15 Independence Avenue, Ridge</p>
               <p className="text-slate-500 font-medium text-sm">GA-012-3456</p>
             </div>
          </div>
       </div>
    </SectionWrapper>
  )
}
