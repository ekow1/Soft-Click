import * as React from "react"

export function CompanyStory() {
  return (
    <section className="w-full bg-background border-b-2 border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
            <span className="swiss-label text-accent">01 — Story</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl">
              Pioneering digital transformation <span className="text-muted-foreground">in Africa.</span>
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Image with overlay badge */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] swiss-border-thick bg-muted/30 overflow-hidden">
              <div className="absolute inset-0 swiss-dots opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center swiss-label text-muted-foreground">
                Office / Team
              </div>
              {/* Top-left meta */}
              <div className="absolute top-0 left-0 bg-foreground text-background px-4 py-2 swiss-label">
                Accra HQ
              </div>
              {/* Bottom-right year badge */}
              <div className="absolute -bottom-px -right-px bg-accent text-accent-foreground p-8 md:p-10 swiss-border-thick border-accent">
                <div className="swiss-headline text-5xl md:text-6xl mb-2">2015</div>
                <div className="swiss-label text-accent-foreground/70">
                  Year Established
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8 flex flex-col gap-6 border-l-2 border-border pl-8">
            <div className="space-y-6 swiss-body text-foreground text-base md:text-lg">
              <p>
                Founded with the vision to bridge the local technology gap, <strong className="font-black">SoftClick Solutions Limited</strong> emerged as a response to the growing need for high-quality, enterprise-grade software in the West African sub-region.
              </p>
              <p className="text-muted-foreground">
                We realized early on that off-the-shelf software rarely fit the unique regulatory and operational needs of African corporations. Our mission became clear: build scalable, secure, and custom-tailored digital infrastructure that empowers local businesses to operate on a global standard.
              </p>
              <p className="text-muted-foreground">
                Today, we are proud to be the trusted technology partner for numerous rural banks, government agencies, and Fortune 500 enterprises operating within the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
