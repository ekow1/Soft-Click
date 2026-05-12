"use client"

import * as React from "react"
import { Building2, Mail, Phone, Clock } from "lucide-react"

const contactDetails = [
  {
    title: "Headquarters",
    details: ["15 Independence Avenue", "Ridge, Accra", "Ghana, GA-012-3456"],
    icon: Building2,
  },
  {
    title: "Phone",
    details: ["Sales: +233 (0) 55 123 4567", "Support: +233 (0) 30 987 6543", "Toll-Free: 0800 123 456"],
    icon: Phone,
  },
  {
    title: "Email",
    details: ["enterprise@softclick.com", "support@softclick.com", "careers@softclick.com"],
    icon: Mail,
  },
  {
    title: "Hours",
    details: ["Mon — Fri: 8:00 AM — 6:00 PM (GMT)", "Sat: 9:00 AM — 1:00 PM (GMT)", "24/7 Priority SLA Support"],
    icon: Clock,
  },
]

export function ContactDetailsSection() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <span className="swiss-label text-accent">01 — Channels</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="swiss-headline text-foreground text-3xl md:text-4xl mb-4">
          Connect with us.
        </h2>
        <p className="swiss-body text-muted-foreground text-base md:text-lg max-w-xl">
          Whether you're modernizing your architecture or launching a new core banking platform, our engineers are ready.
        </p>
      </div>

      {/* Contact info cards - Swiss grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-l-2 border-t-2 border-border">
        {contactDetails.map((contact, index) => (
          <div
            key={index}
            className="group border-r-2 border-b-2 border-border p-6 md:p-8 transition-all duration-150 ease-linear hover:bg-foreground hover:text-background"
          >
            <div className="flex items-start justify-between mb-8">
              <span className="swiss-label text-muted-foreground group-hover:text-background/60">
                0{index + 1}
              </span>
              <div className="p-2.5 swiss-border-thick border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-150">
                <contact.icon className="w-4 h-4" />
              </div>
            </div>

            <h3 className="swiss-headline text-foreground group-hover:text-background text-xl md:text-2xl mb-4 transition-colors duration-150">
              {contact.title}
            </h3>

            <ul className="space-y-1">
              {contact.details.map((detail, i) => (
                <li key={i} className="swiss-body text-muted-foreground group-hover:text-background/70 text-sm transition-colors duration-150">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
