import { PageHero } from "@/components/layout/page-hero"
import { CaseStudiesGrid } from "@/components/projects/case-studies-grid"
import { ProjectResults } from "@/components/projects/project-results"
import { ProjectsCtaSection } from "@/components/projects/projects-cta"

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Proven Engineering Pedigree"
        description="Explore how SoftClick Solutions has architected and delivered transformative technology for Africa's leading organizations."
        align="center"
      />
      <CaseStudiesGrid />
      <ProjectResults />
      <ProjectsCtaSection />
    </>
  )
}
