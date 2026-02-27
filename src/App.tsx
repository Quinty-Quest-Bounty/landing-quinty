import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeatureBento } from './components/FeatureBento'
import { HowItWorks } from './components/HowItWorks'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-gray-100 font-sans">
      <Navbar />
      <HeroSection />
      <FeatureBento />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  )
}
