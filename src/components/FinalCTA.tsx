import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

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
            background: 'radial-gradient(circle, rgba(14,168,133,0.06) 0%, transparent 60%)',
          }}
        />
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
        <span className="whitespace-nowrap font-serif italic font-bold text-[clamp(8rem,20vw,22rem)] leading-none tracking-tighter text-white/[0.02]">
          Quinty
        </span>
      </div>

      <div className="cta-content relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif italic font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-white/90 mb-4">
          Work gets done when
        </h2>
        <h2 className="font-serif italic font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-accent text-glow mb-12">
          money&apos;s locked.
        </h2>

        <a
          href="https://app.quinty.io"
          className="group relative inline-flex items-center gap-2 px-10 py-4 text-base font-medium rounded-full bg-accent hover:bg-accent-bright text-white transition-all duration-500 shadow-[0_0_40px_rgba(14,168,133,0.3)] hover:shadow-[0_0_60px_rgba(14,168,133,0.45)] mb-10"
        >
          Launch App
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="flex items-center justify-center gap-6 text-[11px] font-mono text-white/20">
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
