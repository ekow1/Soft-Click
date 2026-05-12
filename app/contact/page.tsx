import { PageHero } from "@/components/layout/page-hero"
import { ContactDetailsSection } from "@/components/contact/contact-details-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { MapSection } from "@/components/contact/map-section"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start your transformation."
        description="Whether you're modernizing legacy infrastructure or building scalable new digital engines, we're ready to partner with you."
        align="left"
        sectionNumber="00"
        sectionLabel="Contact"
      />

      <section className="w-full bg-background border-b-2 border-border">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <ContactDetailsSection />
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  )
}
