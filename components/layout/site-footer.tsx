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
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-24" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Navigation */}
          <div className="bg-slate-900/40 border border-white/5 p-8 md:p-12 lg:p-16 rounded-none flex flex-col justify-between min-h-[460px]">
            <div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-12 font-mono">
                Pages links
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <ul className="space-y-4">
                  {footerNavigation.column1.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm md:text-base hover:text-accent transition-colors font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {footerNavigation.column2.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm md:text-base hover:text-accent transition-colors font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Globe, href: "#" },
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-11 h-11 rounded-none border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all group"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Card: Contact & Newsletter */}
          <div className="bg-slate-900/50 border border-white/5 p-8 md:p-12 lg:p-16 rounded-none flex flex-col justify-between min-h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm md:text-base font-black tracking-widest uppercase text-white mb-6 font-mono">
                  Contact on
                </h3>
                <div className="space-y-2 text-slate-400 font-medium">
                  <p className="hover:text-accent cursor-pointer transition-colors">info@softclicksolutions.com</p>
                  <p className="hover:text-accent cursor-pointer transition-colors">+233 (0) 55 123 4567</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-black tracking-widest uppercase text-white mb-6 font-mono">
                  Address
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  SoftClick Solutions Ltd.<br />
                  Digital Innovation Hub, Accra, Ghana
                </p>
              </div>
            </div>

            <div className="mt-12">
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 border-b border-white/10 focus-within:border-accent transition-colors py-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-none focus:ring-0 w-full text-white placeholder:text-slate-600 text-sm md:text-base outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent/20 text-accent hover:bg-white hover:text-slate-950 px-8 py-3 rounded-none font-black text-sm tracking-tight transition-all flex items-center justify-center gap-2"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="flex justify-end mt-12">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="bg-accent text-accent-foreground p-2 rounded-none font-black text-xl tracking-tighter group-hover:scale-110 transition-transform">
                  SC
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-black text-lg tracking-tight text-white uppercase tracking-[0.2em]">SoftClick</span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Solutions</span>
                </div>
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-slate-600">
            Designed by SoftClick Solutions &bull; Powered by Excellence &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
