import { useRef, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const Scene3D = lazy(() => import('../three/Scene3D'))

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        delay: 0.3,
      })

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      )
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 80, rotateX: 40 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.12 },
          '-=0.4',
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5',
        )
        .fromTo(
          '.hero-cta-group > *',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4',
        )
        .fromTo(
          '.hero-scroll-hint',
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.2',
        )
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[30%] -right-[20%] w-[800px] h-[800px] rounded-full animate-drift"
          style={{
            background: 'radial-gradient(circle, rgba(14,168,133,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-[20%] -left-[15%] w-[600px] h-[600px] rounded-full animate-drift"
          style={{
            background: 'radial-gradient(circle, rgba(14,168,133,0.05) 0%, transparent 70%)',
            animationDelay: '-10s',
          }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* Three.js particles */}
      {!reducedMotion ? (
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      ) : null}

      {/* Giant watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-end justify-center overflow-hidden pb-[5vh]"
        style={{
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
        }}
      >
        <span className="whitespace-nowrap font-serif italic font-bold text-[clamp(10rem,25vw,28rem)] leading-none tracking-tighter text-white/[0.025]">
          Quinty
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16" style={{ perspective: '600px' }}>
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-mono text-accent/80 tracking-wider uppercase">
            Live on Base Sepolia
          </span>
        </div>

        {/* Headline — each line as a separate element for stagger animation */}
        <h1 className="mb-8">
          <span className="hero-line block font-serif italic font-bold text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-tight text-white">
            Lock it or
          </span>
          <span className="hero-line block font-serif italic font-bold text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-tight text-accent text-glow">
            lose it.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-white/40 max-w-xl mx-auto mb-14 leading-relaxed">
          Smart-contract escrow for the trustless era.
          <br className="hidden sm:block" />
          Post bounties. Complete quests. Build reputation.
        </p>

        {/* CTA Group */}
        <div className="hero-cta-group flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.quinty.io"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-[15px] font-medium rounded-full bg-accent hover:bg-accent-bright text-white transition-all duration-500 shadow-[0_0_30px_rgba(14,168,133,0.25)] hover:shadow-[0_0_50px_rgba(14,168,133,0.4)]"
          >
            Launch App
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://docs.quinty.io"
            className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-medium rounded-full border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-300"
          >
            Read the Docs
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
