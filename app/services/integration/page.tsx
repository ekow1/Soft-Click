import { PageHero } from "@/components/layout/page-hero"

export default function IntegrationPage() {
  return (
    <>
      <PageHero
        title="System Integration."
        description="Enterprise system integration connecting your disparate systems into a unified digital ecosystem."
        align="left"
        sectionNumber="00"
        sectionLabel="Service"
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
                Systems <span className="text-muted-foreground">connected.</span>
              </h2>
              <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl">
                We integrate your legacy systems with modern applications through secure APIs and middleware. Break down data silos and enable real-time information flow across your entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
