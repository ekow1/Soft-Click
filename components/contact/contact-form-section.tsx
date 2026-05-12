"use client"

import * as React from "react"
import { ArrowRight, MessageSquare } from "lucide-react"

export function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  const inputClass = "h-12 w-full bg-transparent border-2 border-border focus:border-accent outline-none px-4 swiss-body text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors duration-150"
  const labelClass = "swiss-label text-foreground"

  return (
    <div className="bg-background swiss-border-thick border-border">

      {/* Header bar */}
      <div className="flex items-center gap-4 border-b-2 border-border p-6 md:p-8">
        <div className="p-3 swiss-border-thick border-border">
          <MessageSquare className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1">
          <div className="swiss-label text-accent mb-1">02 — Inquiry</div>
          <h3 className="swiss-headline text-foreground text-xl md:text-2xl">
            Request a proposal.
          </h3>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">

        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className={labelClass}>First Name</label>
            <input id="firstName" placeholder="Kwame" className={inputClass} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className={labelClass}>Last Name</label>
            <input id="lastName" placeholder="Mensah" className={inputClass} required />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" placeholder="e.g. RuralBank Trust Ltd" className={inputClass} />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>Business Email</label>
          <input id="email" type="email" placeholder="kwame@ruralbank.com" className={inputClass} required />
        </div>

        <div className="space-y-2 pt-6 border-t-2 border-border">
          <label htmlFor="message" className={labelClass}>Project Details</label>
          <textarea
            id="message"
            placeholder="Tell us about the digital transformation you are planning..."
            className="w-full bg-transparent border-2 border-border focus:border-accent outline-none p-4 swiss-body text-foreground placeholder:text-muted-foreground/50 text-sm h-32 resize-none transition-colors duration-150"
            required
          />
        </div>

        <button
          type="submit"
          className="group w-full h-14 swiss-border-thick bg-foreground text-background border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150 ease-linear flex items-center justify-between px-6 swiss-label"
        >
          Send Message
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="swiss-label text-muted-foreground text-center text-[10px]">
          By submitting, you agree to our privacy policy and terms.
        </p>
      </form>
    </div>
  )
}
