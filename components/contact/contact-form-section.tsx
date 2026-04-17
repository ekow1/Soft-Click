"use client"

import * as React from "react"
import { ArrowRight, MessageSquare } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission logic
    console.log("Form submitted")
  }

  return (
    <Card className="border-none shadow-2xl bg-white rounded-3xl overflow-hidden h-full flex flex-col justify-center border-t-4 border-t-primary">
      <CardContent className="p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Request a Proposal</h3>
            <p className="text-slate-500 font-medium">Or simply get in touch.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</Label>
              <Input id="firstName" placeholder="Kwame" className="h-12 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm rounded-xl px-4" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</Label>
              <Input id="lastName" placeholder="Mensah" className="h-12 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm rounded-xl px-4" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold text-slate-700">Corporate Entity</Label>
            <Input id="company" placeholder="e.g. RuralBank Trust Ltd" className="h-12 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm rounded-xl px-4" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Business Email</Label>
            <Input id="email" type="email" placeholder="kwame@ruralbank.com" className="h-12 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm rounded-xl px-4" required />
          </div>

          <div className="space-y-2 border-t border-slate-100 pt-6">
            <Label htmlFor="message" className="text-sm font-semibold text-slate-700">Project Details</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about the digital transformation you are planning..." 
              className="resize-none border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm rounded-xl p-4 h-32" 
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base shadow-lg shadow-primary/20 mt-4 group">
            Send Message
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-xs text-center text-slate-500 font-medium">
             By submitting this form, you agree to our privacy policy and terms.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
