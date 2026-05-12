import { PageHero } from "@/components/layout/page-hero"

export default function GHBankerPage() {
  return (
    <>
      <PageHero
        title="GH Banker."
        description="Core Banking Platform built for African financial institutions with modern microservices architecture."
        align="left"
        sectionNumber="00"
        sectionLabel="Product"
      />
      <section className="w-full bg-background border-b-2 border-border">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
            <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
              <span className="swiss-label text-accent">01 — Overview</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl mb-6">
                Modern core <span className="text-muted-foreground">banking.</span>
              </h2>
              <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
                GH Banker is a comprehensive core banking platform designed for African financial institutions. Built with microservices architecture, it offers unparalleled scalability, security, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
