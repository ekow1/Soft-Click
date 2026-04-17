import * as React from "react"
import { Building2, Store, Landmark, ShoppingCart, Landmark as GovermentIcon, GraduationCap, ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const industriesData = [
  {
    name: "Banking & Finance",
    icon: Landmark,
    description: "Core banking platform modernization, secure payment gateways, and regulatory reporting systems built for strict compliance and scale.",
    features: ["Core Banking Systems", "Fintech Integrations", "Fraud Detection"],
  },
  {
    name: "Government & Public Sector",
    icon: GovermentIcon,
    description: "Nation-scale citizen identity portals, revenue collection systems, and integrated public service platforms.",
    features: ["Citizen Identity Portals", "Tax Collection Engines", "Secure Interoperability"],
  },
  {
    name: "Trade & Commerce",
    icon: ShoppingCart,
    description: "End-to-end local and cross-border ecommerce platforms, supply chain logistics, and B2B ordering systems.",
    features: ["B2B Portals", "Supply Chain Tracking", "Inventory Management"],
  },
  {
    name: "Agriculture",
    icon: Building2,
    description: "Agri-tech solutions connecting rural cooperatives with urban markets, tracking logistics, and managing yield data.",
    features: ["Farm-to-Market Tracking", "Yield Analytics", "Mobile Field Apps"],
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Campus management systems tailored to African institutions, handling admissions to alumni management.",
    features: ["E-Learning Portals", "Student Information Systems", "Result Processing"],
  },
  {
    name: "SMEs & Startups",
    icon: Store,
    description: "Agile, scalable infrastructure enabling growing businesses to automate their distinct operational workflows rapidly.",
    features: ["Custom Web Apps", "Cloud Migrations", "Process Automation"],
  },
]

export function IndustriesGrid() {
  return (
    <SectionWrapper background="background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto border-t pt-16 mt-8 border-slate-100">
        {industriesData.map((industry, index) => (
          <Card key={index} className="group border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-white">
            <CardHeader className="pb-4">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-primary transition-colors duration-300">
                <industry.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                {industry.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed mb-6">
                {industry.description}
              </p>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm font-semibold text-slate-800">
                    <ArrowRight className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
