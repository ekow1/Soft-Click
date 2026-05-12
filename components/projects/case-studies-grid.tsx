import * as React from "react"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

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
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">01 — Case Studies</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
              Proven <span className="text-muted-foreground">pedigree.</span>
            </h2>
            <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
              Explore how SoftClick Solutions has architected and delivered transformative technology for Africa's leading organizations.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l-2 border-t-2 border-border mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group border-r-2 border-b-2 border-border transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
            >
              {/* Top visual */}
              <div className="h-48 bg-muted/40 border-b-2 border-border relative overflow-hidden group-hover:border-background/20 transition-colors duration-150">
                <div className="absolute inset-0 swiss-dots opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-foreground text-background swiss-border-thick border-foreground px-6 py-4 swiss-label">
                    PROJECT 0{index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="swiss-label text-accent mb-3">{study.industry}</div>
                <h3 className="swiss-headline text-foreground group-hover:text-background text-2xl md:text-3xl mb-6 transition-colors duration-150">
                  {study.title}
                </h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="swiss-label text-muted-foreground group-hover:text-background/60 mb-2">Challenge</div>
                    <p className="swiss-body text-foreground group-hover:text-background/80 text-sm leading-relaxed transition-colors duration-150">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="swiss-label text-muted-foreground group-hover:text-background/60 mb-2">Solution</div>
                    <p className="swiss-body text-foreground group-hover:text-background/80 text-sm leading-relaxed transition-colors duration-150">
                      {study.solution}
                    </p>
                  </div>
                  <div className="p-4 swiss-border-thick border-border group-hover:border-accent transition-colors duration-150">
                    <div className="swiss-label text-accent mb-2">Impact</div>
                    <p className="swiss-body text-foreground group-hover:text-background text-sm font-medium transition-colors duration-150">
                      {study.impact}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t-2 border-border group-hover:border-background/20 transition-colors duration-150">
                  <span className="swiss-label text-muted-foreground group-hover:text-background/60">{study.client}</span>
                  <Link
                    href={study.href}
                    className="inline-flex items-center gap-3 swiss-label text-accent"
                  >
                    Full Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center border-t-2 border-border pt-16">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">02 — Resources</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h3 className="swiss-headline text-foreground text-2xl md:text-3xl">
              Need a detailed capability statement?
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <button className="group w-full h-14 swiss-border-thick bg-foreground text-background border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150 ease-linear flex items-center justify-center gap-3 swiss-label">
              <Download className="h-4 w-4" />
              Download Corporate Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
