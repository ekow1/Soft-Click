import * as React from "react"
import Link from "next/link"
import { Code, LayoutDashboard, Network, Cloud, Briefcase, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HomeHeroSection() {
  return (
     <section className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex flex-col pt-32 pb-0">
      
      {/* Premium Image Background with Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Real Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-in fade-in duration-1000"
          style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
        />
        
        {/* Deep Gradient Overlays for Readability - STRENGTHENED */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/70 z-10" />
        
        {/* Accent Glows (Reduced opacity to keep image visible but maintain brand feel) */}
        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] rounded-none bg-accent/10 blur-[120px] animate-pulse duration-[10s] z-20"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-none bg-primary/20 blur-[100px] animate-pulse duration-[8s] z-20"></div>
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay z-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20 flex-1 flex flex-col justify-end pb-36 lg:pb-52">
        <div className="flex flex-col lg:flex-row items-end justify-between w-full gap-12 lg:gap-24">
           
           {/* Bottom Left: Hero Text */}
            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/10 border border-white/20 backdrop-blur-md text-white/70 text-xs font-black tracking-[0.2em] uppercase">
                  <span className="flex h-2 w-2 rounded-none bg-accent animate-ping"></span>
                  Digital Transformation
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-accent text-accent-foreground text-xs font-black tracking-[0.2em] uppercase">
                  15+ Years of Excellence
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.85] md:leading-[0.85] mb-8 drop-shadow-2xl">
                Building Scalable <br />
                <span className="text-white/60 italic font-medium text-2xl sm:text-3xl md:text-4xl block mt-2">Digital Solutions.</span>
              </h1>
 
              <p className="text-white/70 text-sm md:text-base font-medium max-w-xl leading-relaxed tracking-wide border-l-2 border-accent/40 pl-6 animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
                A legacy of engineering mission-critical systems that bridge the gap between complex business challenges and elegant technology. 
              </p>
            </div>

           {/* Bottom Right: High-Contrast CTA */}
           <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
             <Button asChild size="lg" variant="outline" className="group relative overflow-hidden  rounded-none px-8 h-12 md:h-14  hover:bg-white text-accent-foreground hover:text-slate-950 font-black text-sm md:text-base transition-all shadow-xl hover:scale-105 active:scale-95 border-b-2 border-black/10 w-full sm:w-auto">
               <Link href="/services" className="flex items-center gap-3">
                 Explore our services
                 <div className="w-5 h-5 rounded-none bg-black/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                   <Network className="w-3.5 h-3.5" />
                 </div>
               </Link>
             </Button>

             <Button asChild size="lg" variant="outline" className="group relative overflow-hidden rounded-none px-8 h-12 md:h-14 bg-transparent hover:bg-white text-white hover:text-slate-950 font-black text-sm md:text-base border-white/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
               <Link href="/about" className="flex items-center gap-3">
                 Learn more about us
                 <div className="w-5 h-5 rounded-none bg-white/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                   <ArrowRight className="w-3.5 h-3.5" />
                 </div>
               </Link>
             </Button>
           </div>

        </div>
      </div>

      {/* Bottom Service Strip - Ultra-Slim Transparent Endless Carousel */}
      <div className="absolute bottom-8 left-0 w-full z-20 overflow-hidden py-4 bg-slate-950/20 backdrop-blur-[2px] border-y border-white/5 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="flex animate-marquee whitespace-nowrap items-center h-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-20 items-center shrink-0 px-6 md:px-10">
               <div className="flex items-center gap-3 group cursor-default">
                 <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                   <Code className="w-4 h-4 text-accent" />
                 </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Enterprise Software</span>
               </div>
               
               <div className="flex items-center gap-3 group cursor-default">
                 <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                   <LayoutDashboard className="w-4 h-4 text-accent" />
                 </div>
                 <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Web & Mobile</span>
               </div>
 
               <div className="flex items-center gap-3 group cursor-default">
                 <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                   <Network className="w-4 h-4 text-accent" />
                 </div>
                 <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Systems Integration</span>
               </div>
 
               <div className="flex items-center gap-3 group cursor-default">
                 <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                   <Cloud className="w-4 h-4 text-accent" />
                 </div>
                 <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Cloud & DevOps</span>
               </div>
 
               <div className="flex items-center gap-3 group cursor-default">
                 <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                   <Briefcase className="w-4 h-4 text-accent" />
                 </div>
                 <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">IT Consulting</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



