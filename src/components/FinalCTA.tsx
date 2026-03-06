import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { DotCluster } from './DotCluster'

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(92,184,178,0.03) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Dot clusters */}
      <div className="absolute top-16 left-12 opacity-40 hidden lg:block">
        <DotCluster rows={3} cols={5} />
      </div>
      <div className="absolute bottom-16 right-12 opacity-40 hidden lg:block">
        <DotCluster rows={3} cols={5} />
      </div>

      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
        }}
      >
        <span className="whitespace-nowrap font-serif italic font-light text-[clamp(8rem,20vw,22rem)] leading-none tracking-tighter text-white/[0.015]">
          Quinty
        </span>
      </div>

      <div className="cta-content relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-white/90 mb-4">
          Work gets done when
        </h2>
        <h2 className="font-serif italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-accent text-glow mb-12">
          money&apos;s locked.
        </h2>

        <a
          href="https://app.quinty.io"
          className="group relative inline-flex items-center gap-2 px-10 py-4 text-[13px] font-medium bg-white/[0.93] hover:bg-white text-[#0e0e0e] transition-all duration-300 mb-10"
        >
          Launch App
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="flex items-center justify-center gap-6 text-[11px] text-white/20">
          <span>Built on Base</span>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <span>Chain ID 84532</span>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <span>Open Source</span>
        </div>
      </div>
    </section>
  )
}
