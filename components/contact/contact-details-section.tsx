"use client"

import * as React from "react"
import { Building2, Mail, Phone, Clock } from "lucide-react"

import { ContactCard } from "@/components/shared/contact-card"

const contactDetails = [
  {
    title: "Corporate Headquarters",
    details: ["15 Independence Avenue", "Ridge, Accra", "Ghana, GA-012-3456"],
    icon: Building2,
  },
  {
    title: "Direct Channels",
    details: ["Sales: +233 (0) 55 123 4567", "Support: +233 (0) 30 987 6543", "Toll-Free: 0800 123 456"],
    icon: Phone,
  },
  {
    title: "Electronic Mail",
    details: ["enterprise@softclick.com", "support@softclick.com", "careers@softclick.com"],
    icon: Mail,
  },
  {
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM (GMT)", "Sat: 9:00 AM - 1:00 PM (GMT)", "24/7 Priority SLA Support"],
    icon: Clock,
  },
]

export function ContactDetailsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 h-full place-content-start">
      <div className="lg:col-span-2 mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Connect With Us
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          Whether you're looking to modernize your architecture or secure a new core banking platform, our engineers are ready to architect your success.
        </p>
      </div>

      {contactDetails.map((contact, index) => (
        <ContactCard
          key={index}
          title={contact.title}
          details={contact.details}
          icon={contact.icon}
        />
      ))}
    </div>
  )
}
