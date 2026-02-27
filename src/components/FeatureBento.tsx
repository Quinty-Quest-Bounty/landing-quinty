import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Shield, Award, Target, Layers } from 'lucide-react'
import { GlassCard } from './GlassCard'
import { Watermark } from './Watermark'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const features = [
  {
    icon: Shield,
    title: 'Smart Escrow',
    description:
      'Funds locked in smart contract before work begins. Released only upon verified delivery. 100% escrowed, zero trust required.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: Award,
    title: 'Soulbound Reputation',
    description:
      'Your work history, immutable on-chain. Earn NFT badges that prove your track record.',
    span: 'md:col-span-1',
  },
  {
    icon: Target,
    title: 'Quests & Bounties',
    description:
      'Post tasks. Find solvers. Pay on completion. Multi-winner support with ranked prizes.',
    span: 'md:col-span-1',
  },
  {
    icon: Layers,
    title: 'Built on Base',
    description: 'Fast, cheap, secure. L2 by Coinbase. ETH and USDC supported.',
    span: 'md:col-span-3',
  },
] as const

export function FeatureBento() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      // Batch reveal cards on scroll
      ScrollTrigger.batch('.feature-card', {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: 'power2.out',
            },
          ),
        start: 'top 88%',
      })

      // Watermark parallax
      gsap.to('.features-watermark', {
        xPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Watermark */}
      <div className="features-watermark">
        <Watermark />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`feature-card ${feature.span}`}
                style={{ opacity: reducedMotion ? 1 : 0 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </GlassCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
