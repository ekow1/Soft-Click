import { PageHero } from "@/components/layout/page-hero"
import { Play, CheckCircle2, Shield, Database, Lock, Users, Briefcase, FileText, ArrowRight, Network, Server } from "lucide-react"
import { VideoCarousel } from "@/components/products/video-carousel"

export default function GHBankerPage() {
  return (
    <>
      <PageHero
        title="GH Banker."
        description="Developed by a blend of Ghanaian and foreign experts through wide consultation across the financial sector. Built to govern all rules and regulations for microfinance, credit unions, and rural banks."
        align="left"
        sectionNumber="01"
        sectionLabel="Core Product"
      />

      {/* Main Architecture & Modules Overview */}
      <section className="w-full bg-background border-b-2 border-border">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
          
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="swiss-headline text-4xl md:text-5xl lg:text-6xl mb-6">
                Total Financial <span className="text-muted-foreground">Information.</span>
              </h2>
              <p className="swiss-body text-muted-foreground text-lg mb-8 leading-relaxed">
                The modules in GH Banker are independently defined but seamlessly integrated into the Customer Information File (CIF) to provide a 360-degree view of your institution's financial position. It handles everything from loans and savings to placement management and real-time P&L reporting.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 swiss-border-thick border-border bg-muted/20">
                  <h3 className="swiss-headline text-xl mb-3">Front Office</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Handles daily transactions including account opening, deposits, withdrawals, validation of vouchers, and printing of balance enquiry details.
                  </p>
                </div>
                <div className="p-8 swiss-border-thick border-border bg-foreground text-background">
                  <h3 className="swiss-headline text-xl mb-3 text-background">Back Office</h3>
                  <p className="text-background/70 text-sm leading-relaxed">
                    Manages customer registration, loan processing, nominal/account transactions batch postings, fixed deposits, and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deep Dive Modules */}
      <section className="w-full bg-muted/10 border-b-2 border-border">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
          
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
            <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
              <span className="swiss-label text-accent">02 — Capabilities</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="swiss-headline text-foreground text-4xl md:text-5xl">
                Comprehensive <span className="text-muted-foreground">Banking Modules.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Loan Module */}
            <div className="p-8 border-2 border-border bg-background hover:border-accent transition-colors">
              <Briefcase className="w-8 h-8 text-accent mb-6" />
              <h3 className="swiss-headline text-2xl mb-4">Loan Management</h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                Operates in three stages: Application, Approval, and Disbursement. Supports Daily, Weekly, Bi-weekly, and Monthly rests. Automates overdue interest in suspense accounts and classifies loans into performing/non-performing.
              </p>
              <ul className="space-y-2">
                {["Instalment/Bullet Payments", "Guarantor & Security Profiles", "Base Lending Rate Pegging"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Savings & Current */}
            <div className="p-8 border-2 border-border bg-background hover:border-accent transition-colors">
              <Users className="w-8 h-8 text-accent mb-6" />
              <h3 className="swiss-headline text-2xl mb-4">Accounts & Deposits</h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                Fully managed Savings, Current, Fixed Deposit (FD), and Member Shares accounts. Allows up to 99 joint holders, automated cheque clearing, auto-sweeps, multi-tier overdraft limits, and flexible FD maturity releases.
              </p>
              <ul className="space-y-2">
                {["Multi-currency Support", "Auto-Computation of Charges", "Dormant Account Extraction"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Real-Time Financials */}
            <div className="p-8 border-2 border-border bg-background hover:border-accent transition-colors">
              <FileText className="w-8 h-8 text-accent mb-6" />
              <h3 className="swiss-headline text-2xl mb-4">Real-Time Financials</h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                Every single transaction instantly updates the Trial Balance, P&L, General Ledger, and Balance Sheet. Complete Microsoft report generator inbuilt for customized BOG and Credit Union reporting.
              </p>
              <ul className="space-y-2">
                {["Live Trial Balance & P&L", "Customized BOG Reports", "Cashbook Reconciliation"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CIF & Placements */}
            <div className="p-8 border-2 border-border bg-background hover:border-accent transition-colors">
              <Database className="w-8 h-8 text-accent mb-6" />
              <h3 className="swiss-headline text-2xl mb-4">CIF & Placements</h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                Customer Information File (CIF) captures and encrypts customer data inline with Central Bank requirements. Placement module tracks all funds invested with other financial houses to monitor daily income earnings.
              </p>
              <ul className="space-y-2">
                {["Encrypted Database", "Placement Partial Liquidation", "Follow-up Diary System"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Security & Tech Specs */}
      <section className="w-full bg-[#020617] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="swiss-headline text-4xl md:text-5xl mb-6">
                Enterprise <br/><span className="text-accent">Security.</span>
              </h2>
              <p className="swiss-body text-white/70 text-lg mb-8 leading-relaxed">
                GH Banker enforces strict Central Bank standards. From encrypted databases to multi-level approvals, your financial data is heavily guarded.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="swiss-headline text-xl mb-1">Multi-Level Approvals & Limits</h4>
                    <p className="text-white/60 text-sm">Centralized vetting. Any transaction above defined limits strictly requires superior officer authorization.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="swiss-headline text-xl mb-1">Audit Trail & Rollbacks</h4>
                    <p className="text-white/60 text-sm">Electronic audit trails stamp date, time, and user. Auto roll-back features prevent incomplete transactions from mutating the database.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Network className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="swiss-headline text-xl mb-1">Web-Based & Interoperable</h4>
                    <p className="text-white/60 text-sm">Cloud-hosted scalability across WAN. Easily interfaces with third-party applications like Mobile Money and E-Zwich.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-video bg-white/5 border-2 border-white/10 p-4 md:p-8 flex items-center justify-center overflow-hidden">
                <Server className="w-32 h-32 text-white/10 absolute -bottom-10 -right-10" />
                <div className="relative z-10 w-full">
                   <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-4">
                     <span className="swiss-label text-accent">Security Checklist</span>
                     <span className="text-xs text-white/50">GH Banker Protocol</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     {[
                       "Mandatory Initial Password Change", 
                       "Single User Concurrent Login", 
                       "Inactivity Logout Timeouts", 
                       "On-line Signature & Image Verification",
                       "Disaster Recovery & Live Sync",
                       "Brute Force Attempt Suspension"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-accent" />
                         <span className="text-sm text-white/80">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-background border-y-2 border-border py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
            <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
              <span className="swiss-label text-accent">03 — See It In Action</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="swiss-headline text-foreground text-4xl md:text-5xl lg:text-6xl">
                How GH Banker <span className="text-muted-foreground">works.</span>
              </h2>
            </div>
          </div>

          <VideoCarousel 
            items={[
              {
                title: "GH Banker Walkthrough",
                subtitle: "Master Interface & Modules Overview",
                image: "/images/products/gh-banker.png"
              },
              {
                title: "Front Office Operations",
                subtitle: "Daily Transactions & Account Opening",
                image: "/images/hero/hero-bg.png"
              },
              {
                title: "Real-Time Reporting",
                subtitle: "GL, Balance Sheet & Trial Balance",
                image: "/images/products/custom-logic.png"
              }
            ]}
          />
        </div>
      </section>
    </>
  )
}
