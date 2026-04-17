import { PageHero } from "@/components/layout/page-hero"
import { CompanyStory } from "@/components/about/company-story"
import { MissionVision } from "@/components/about/mission-vision"
import { ValuesSection } from "@/components/about/values-section"
import { LeadershipSection } from "@/components/about/leadership-section"
import { AboutCtaSection } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About SoftClick Solutions"
        description="Learn about our journey, our mission to empower African businesses, and the core values that drive our engineering excellence."
        align="center"
      />
      <CompanyStory />
      <MissionVision />
      <ValuesSection />
      <LeadershipSection />
      <AboutCtaSection />
    </>
  )
}
