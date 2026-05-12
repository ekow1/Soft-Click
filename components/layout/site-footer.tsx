import * as React from "react"
import Link from "next/link"
import { Globe, Share2, MessageCircle, Send, ArrowRight } from "lucide-react"

const footerNavigation = {
  column1: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Service", href: "/services" },
  ],
  column2: [
    { name: "Case Studies", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Error 404", href: "/404" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-[#020617] text-white border-t-2 border-white/10 swiss-noise" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top CTA Block */}
      <div className="relative border-b-2 border-white/10 overflow-hidden">
        <div className="absolute inset-0 swiss-grid-pattern opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-end">
            <div className="col-span-12 lg:col-span-3 flex items-center gap-4">
              <span className="swiss-label text-accent">08 — Connect</span>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="swiss-headline text-white text-4xl md:text-5xl lg:text-6xl">
                Let's build something <span className="text-white/40">remarkable.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-3 px-6 h-14 swiss-border-thick bg-accent text-accent-foreground border-accent hover:bg-white hover:text-[#020617] hover:border-white swiss-label transition-all duration-150"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-10 border-l-2 border-t-2 border-white/10">

          {/* Brand Column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border-r-2 border-b-2 border-white/10 p-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
              <div className="bg-white text-[#020617] p-3 swiss-border-thick border-white font-black text-sm group-hover:bg-accent group-hover:border-accent transition-all duration-150">
                SC
              </div>
              <span className="swiss-headline text-white text-xl">SoftClick</span>
            </Link>

            <p className="swiss-body text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Engineering mission-critical systems for modern African business since 2008.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Globe, href: "#" },
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-11 h-11 swiss-border-thick border-white/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border-r-2 border-b-2 border-white/10 p-8">
            <h3 className="swiss-label text-accent mb-6">Navigate</h3>
            <ul className="space-y-3">
              {footerNavigation.column1.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="swiss-label text-white/70 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border-r-2 border-b-2 border-white/10 p-8">
            <h3 className="swiss-label text-accent mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.column2.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="swiss-label text-white/70 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="col-span-12 lg:col-span-4 border-r-2 border-b-2 border-white/10 p-8">
            <h3 className="swiss-label text-accent mb-6">Contact</h3>
            <div className="space-y-2 mb-8">
              <a href="mailto:info@softclicksolutions.com" className="block swiss-label text-white hover:text-accent transition-colors duration-150">
                info@softclicksolutions.com
              </a>
              <a href="tel:+233551234567" className="block swiss-label text-white/70 hover:text-white transition-colors duration-150">
                +233 (0) 55 123 4567
              </a>
              <p className="swiss-body text-white/50 text-xs leading-relaxed pt-2">
                Digital Innovation Hub<br />
                Accra, Ghana
              </p>
            </div>

            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-2 border-white/20 px-4 h-12 text-white placeholder:text-white/40 text-sm focus:border-accent outline-none transition-colors duration-150"
              />
              <button
                type="submit"
                className="h-12 px-5 swiss-border-thick bg-white text-[#020617] border-white hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150 -ml-0.5"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="swiss-label text-white/40">
            © {new Date().getFullYear()} SoftClick Solutions — All rights reserved
          </p>
          <p className="swiss-label text-white/40">
            Engineering Excellence Since 2008
          </p>
        </div>
      </div>
    </footer>
  )
}
