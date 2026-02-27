import { useRef, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { Watermark } from './Watermark'

const Scene3D = lazy(() => import('../three/Scene3D'))

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          '.hero-headline .word',
          {
            opacity: 0,
            y: 40,
            stagger: 0.08,
            duration: 0.7,
          },
          '-=0.3',
        )
        .from(
          '.hero-subtitle',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.3',
        )
        .from(
          '.hero-cta',
          {
            opacity: 0,
            y: 15,
            scale: 0.95,
            duration: 0.5,
          },
          '-=0.2',
        )
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Three.js particle background */}
      {!reducedMotion ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
          }
        >
          <Scene3D />
        </Suspense>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      )}

      {/* Watermark */}
      <Watermark />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-gray-400 tracking-wide">
            Live on Base Sepolia
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline font-serif italic font-bold text-[clamp(3rem,8vw+0.5rem,7.5rem)] leading-[0.95] tracking-tight text-white mb-8">
          <span className="word inline-block">Lock&nbsp;</span>
          <span className="word inline-block">it&nbsp;</span>
          <span className="word inline-block">or&nbsp;</span>
          <span className="word inline-block text-accent">lose&nbsp;</span>
          <span className="word inline-block">it.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Smart-contract escrow for the trustless era. Post bounties. Complete
          quests. Build on-chain reputation.
        </p>

        {/* CTA */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.quinty.io"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-full bg-accent hover:bg-accent-bright text-white transition-all shadow-xl shadow-accent/20 hover:shadow-accent/30"
          >
            Launch App
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://docs.quinty.io"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-full border border-white/[0.1] text-gray-300 hover:text-white hover:border-white/[0.2] transition-all"
          >
            Read the Docs
          </a>
        </div>
      </div>
    </section>
  )
}
