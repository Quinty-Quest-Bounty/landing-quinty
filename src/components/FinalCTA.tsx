import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { Watermark } from './Watermark'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      gsap.from('.cta-content', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <Watermark />

      <div className="cta-content relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif italic font-bold text-[clamp(2rem,5vw+0.5rem,4.5rem)] leading-[1.05] tracking-tight text-white mb-8">
          Work gets done when{' '}
          <span className="text-accent">money&apos;s locked.</span>
        </h2>

        <a
          href="https://app.quinty.io"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-full bg-accent hover:bg-accent-bright text-white transition-all shadow-xl shadow-accent/20 hover:shadow-accent/30 mb-8"
        >
          Launch App
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <p className="text-sm font-mono text-gray-600">
          Built on Base &middot; Chain ID 84532
        </p>
      </div>
    </section>
  )
}
