import * as React from "react"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const caseStudies = [
  {
    title: "Digital Payment Gateway",
    client: "National Bank of Ghana",
    industry: "Banking & Finance",
    challenge: "The bank was experiencing high legacy infrastructure maintenance costs and frequent clearing delays with inter-bank transactions.",
    solution: "We designed and implemented a microservices-based payment processing engine deployed on scalable cloud infrastructure, handling over 1M transactions daily.",
    impact: "Reduced processing latency by 40% and decreased infrastructure IT overhead by 22% within the first year.",
    href: "/projects/payment-gateway",
  },
  {
    title: "Citizen Identity Portal",
    client: "GovTech Initiative",
    industry: "Government",
    challenge: "Fragmented database systems led to duplicated records and a slow, frustrating onboarding experience for citizens accessing public services.",
    solution: "A secure, nationwide digital identity portal integrating with legacy mainframe databases via custom API gateways, serving millions of citizens.",
    impact: "Streamlined registration by 60%, eliminating 1.5M duplicate records through automated biometric matching.",
    href: "/projects/identity-portal",
  },
  {
    title: "Agri-Supply Logistics System",
    client: "AgroTrade Co.",
    industry: "Agriculture",
    challenge: "Lack of visibility tracking agricultural yields from rural farms to urban centers resulted in high perishability rates and revenue loss.",
    solution: "End-to-end supply chain visibility tool built with offline-first mobile applications for rural field officers, syncing to a centralized real-time dashboard.",
    impact: "Cut supply chain delays by 25% and reduced crop spoilage incidents by 18% in the first harvest season.",
    href: "/projects/agri-logistics",
  },
  {
    title: "Cross-Border B2B Marketplace",
    client: "TradeLink Africa",
    industry: "Trade & Commerce",
    challenge: "SMEs struggled to find reliable wholesale suppliers across regional borders with secure escrow payment options.",
    solution: "A robust B2B e-commerce platform featuring multi-currency wallets, vendor verification, and integrated logistics tracking.",
    impact: "Facilitated over $50M in cross-border trade volume within 18 months of launch.",
    href: "/projects/tradelink",
  },
]

export function CaseStudiesGrid() {
  return (
    <SectionWrapper background="background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto border-t pt-16 mt-8 border-slate-100">
        {caseStudies.map((study, index) => (
          <Card key={index} className="flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden rounded-3xl">
             <div className="h-64 bg-slate-100 flex items-center justify-center border-b border-slate-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10" />
              <div className="w-24 h-24 rounded-full border border-primary/20 flex flex-col items-center justify-center gap-2 group-hover:scale-110 transition-transform duration-500 bg-white shadow-sm z-10">
                <span className="font-bold text-slate-800 tracking-wider">PROJECT</span>
                <span className="text-xs text-primary font-mono">{index + 1}</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col p-8 lg:p-10">
              <CardHeader className="p-0 mb-6 flex-row gap-4 justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">The Challenge</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Our Solution</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {study.solution}
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Business Impact</h4>
                  <p className="text-slate-800 font-medium">
                    {study.impact}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-0 mt-8">
                <div className="flex w-full items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-sm text-slate-500 font-medium">{study.client}</span>
                  <Link
                    href={study.href}
                    className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-primary transition-colors group/link px-4 py-2 border border-slate-200 rounded-lg shadow-sm hover:shadow"
                  >
                    Full Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-20 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Need a detailed capability statement?</h3>
        <Button variant="outline" size="lg" className="rounded-full px-8 h-12">
          <Download className="mr-2 h-4 w-4" />
          Download Corporate Profile
        </Button>
      </div>
    </SectionWrapper>
  )
}
