import { HeroSection } from './components/HeroSection'
import { FeatureBento } from './components/FeatureBento'
import { HowItWorks } from './components/HowItWorks'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-gray-200 font-sans noise-overlay">
      <HeroSection />
      <FeatureBento />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  )
}
