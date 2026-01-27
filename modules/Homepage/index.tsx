import CTASection from './Section/CTASection'
import FAQSection from './Section/FAQSection'
import FeatureSection from './Section/FeatureSection'
import FinalCTASection from './Section/FinalCTASection'
import HeroSection from './Section/HeroSection'
import PricingSection from './Section/PricingSection'
import ProblemSection from './Section/ProblemSection'
import SolutionSection from './Section/SolutionSection'

export const Homepage = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      {/* <FinalCTASection /> */}
    </>
  )
}
