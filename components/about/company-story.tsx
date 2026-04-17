import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function CompanyStory() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Pioneering Digital Transformation in Africa
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Founded with the vision to bridge the local technology gap, <strong>SoftClick Solutions Limited</strong> emerged as a response to the growing need for high-quality, enterprise-grade software in the West African sub-region.
            </p>
            <p>
              We realized early on that off-the-shelf software rarely fit the unique regulatory and operational needs of African corporations. Our mission became clear: build scalable, secure, and custom-tailored digital infrastructure that empowers local businesses to operate on a global standard.
            </p>
            <p>
              Today, we are proud to be the trusted technology partner for numerous rural banks, government agencies, and Fortune 500 enterprises operating within the region.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono tracking-widest text-lg bg-slate-200">
               OFFICE / TEAM IMAGE
             </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl border border-primary/20 max-w-[200px]">
            <div className="text-3xl font-extrabold mb-1">2015</div>
            <div className="text-sm uppercase tracking-wider text-primary-foreground/80 font-bold">Year Established</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
