import { PageHero } from "@/components/layout/page-hero"
import { Play, CheckCircle2 } from "lucide-react"

export default function PayrollSystemPage() {
  return (
    <>
      <PageHero
        title="HR & Payroll System."
        description="Customized Enterprise Payroll Solution used by Labor Companies to streamline employee management."
        align="left"
        sectionNumber="03"
        sectionLabel="HR Product"
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
                Payroll processing <span className="text-muted-foreground">automated.</span>
              </h2>
              <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-2xl mb-8">
                Our HR and Payroll system automates complex salary calculations, tax deductions, and compliance reporting. Designed specifically to match unique operational requirements and integrate with core banking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Complex Salary Calculations", 
                  "GRA & SSNIT Compliant Reporting", 
                  "Employee Profile Management", 
                  "Automated Payslip Generation", 
                  "Seamless Bank Transfer Exports", 
                  "Staff Loan Deductions"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="swiss-label text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-[#020617] text-white border-b-2 border-white/10 py-20 md:py-28 swiss-noise relative overflow-hidden">
        <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
            <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
              <span className="swiss-label text-accent">02 — See It In Action</span>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl">
                How HR & Payroll <span className="text-white/40">works.</span>
              </h2>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto group relative aspect-video bg-muted/20 border-2 border-white/10 overflow-hidden cursor-pointer">
            <img 
              src="/images/products/custom-logic.png" 
              alt="Payroll System Video Thumbnail" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="swiss-headline text-2xl">Payroll System Workflow</h3>
              <p className="swiss-label text-white/70">From Data Entry to Payslips</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
