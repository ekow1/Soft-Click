import * as React from "react"
import { MapPin } from "lucide-react"

export function MapSection() {
   return (
      <section className="w-full bg-background border-b-2 border-border">
         <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">

            {/* Section Header */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-12 lg:mb-16">
               <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
                  <span className="swiss-label text-accent">03 — Location</span>
                  <span className="h-px flex-1 bg-border" />
               </div>
               <div className="col-span-12 lg:col-span-9">
                  <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl">
                     Find us <span className="text-muted-foreground">in Accra.</span>
                  </h2>
               </div>
            </div>

            {/* Map area */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] swiss-border-thick bg-muted/40 overflow-hidden">
               {/* Pattern background */}
               <div className="absolute inset-0 swiss-dots opacity-30" />
               <div className="absolute inset-0 swiss-diagonal opacity-20" />

               {/* Pin marker */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative w-16 h-16 swiss-border-thick border-accent bg-accent text-accent-foreground flex items-center justify-center mb-4">
                     <MapPin className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div className="bg-foreground text-background swiss-border-thick border-foreground p-6 max-w-xs">
                     <div className="swiss-label text-accent mb-3">Accra Office</div>
                     <h3 className="swiss-headline text-background text-lg mb-2">
                        15 Independence Avenue
                     </h3>
                     <p className="swiss-label text-background/60">
                        Ridge, GA-012-3456
                     </p>
                  </div>
               </div>

               {/* Corner labels */}
               <div className="absolute top-0 left-0 bg-foreground text-background px-4 py-2 swiss-label">
                  05°33'N 00°12'W
               </div>
               <div className="absolute top-0 right-0 bg-foreground text-background px-4 py-2 swiss-label">
                  GMT+0
               </div>
            </div>
         </div>
      </section>
   )
}
