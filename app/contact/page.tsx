import { PageHero } from "@/components/layout/page-hero"
import { ContactDetailsSection } from "@/components/contact/contact-details-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { MapSection } from "@/components/contact/map-section"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start Your Transformation"
        description="Whether you're looking to modernize legacy infrastructure or build scalable new digital engines, we're ready to partner with you."
        align="center"
      />
      
      <SectionWrapper background="background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto border-t pt-16 mt-8 border-slate-100">
          <ContactDetailsSection />
          <div className="lg:-mt-24 relative z-10 sticky top-24">
            <ContactFormSection />
          </div>
        </div>
      </SectionWrapper>
      
      <MapSection />
    </>
  )
}
