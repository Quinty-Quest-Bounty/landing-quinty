import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ExternalLink } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { DotCluster } from './DotCluster'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        delay: 0.2,
      })

      tl.fromTo(
        '.hero-headline',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
      )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6',
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4',
        )
        .fromTo(
          '.hero-meta',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.3',
        )
        .fromTo(
          '.hero-card-right',
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8 },
          '-=0.8',
        )
        .fromTo(
          '.hero-mockup',
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          '-=0.5',
        )
        .fromTo(
          '.hero-watermark',
          { opacity: 0 },
          { opacity: 1, duration: 1.5 },
          '-=0.8',
        )
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Dot clusters */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <DotCluster rows={5} cols={6} />
      </div>
      <div className="absolute top-8 right-[440px] hidden lg:block">
        <DotCluster rows={3} cols={4} />
      </div>
      <div className="absolute bottom-52 left-8 hidden lg:block">
        <DotCluster rows={3} cols={4} />
      </div>
      <div className="absolute bottom-52 right-8 hidden lg:block">
        <DotCluster rows={4} cols={5} />
      </div>

      {/* Top content area */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 lg:px-16 pt-16 lg:pt-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          {/* LEFT — headline, subtitle, cta — Monologue-style thin serif */}
          <div className="max-w-2xl">
            {/* Headline: Cormorant Garamond light italic — thin elegant serif like Monologue */}
            <h1 className="hero-headline font-serif italic font-light text-[clamp(3rem,6vw,5.2rem)] leading-[1.1] tracking-tight text-white/90 mb-8">
              Effortless escrow that
              <br />
              speaks your chain
            </h1>

            {/* Subtitle: monospace, like Monologue body text */}
            <p className="hero-subtitle text-[13px] text-white/40 leading-relaxed max-w-md mb-8 tracking-wide">
              Work 3x <em className="text-white/70 not-italic font-medium">faster</em> using smart-contract escrow that
              <br />
              knows what you mean in every situation.
            </p>

            {/* Button: white bg, dark text, thin border — exact Monologue style */}
            <a
              href="https://app.quinty.io"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium border border-white/20 bg-white/[0.93] hover:bg-white text-[#0e0e0e] transition-all duration-300"
            >
              Launch App
            </a>

            {/* Meta text below button */}
            <p className="hero-meta text-[12px] text-white/25 mt-5 tracking-wide">
              Live on{' '}
              <a href="https://base.org" className="text-accent hover:text-accent-bright transition-colors">
                Base Sepolia
              </a>
              {' '}testnet
            </p>
          </div>

          {/* RIGHT — info card (Monologue iOS download card style) */}
          <div className="hero-card-right flex-shrink-0 mt-2">
            <div className="flex items-stretch rounded-xl border border-white/[0.06] bg-white/[0.03] overflow-hidden">
              {/* Icon area — teal tinted */}
              <div className="flex items-center justify-center px-5 bg-accent/[0.08] border-r border-white/[0.04]">
                <img
                  src="/images/quinty-green.png"
                  alt="Quinty"
                  className="w-10 h-10"
                />
              </div>
              {/* Text — serif italic like Monologue card text */}
              <div className="py-4 px-5">
                <p className="font-serif italic font-light text-white/80 text-lg leading-tight">
                  Try Quinty on
                  <br />
                  Base Network
                </p>
              </div>
              {/* Action button */}
              <a
                href="https://docs.quinty.io"
                className="flex items-center px-5 border-l border-white/[0.04] hover:bg-white/[0.03] transition-all"
              >
                <span className="text-[11px] text-white/40 tracking-wider border border-white/[0.12] rounded-full px-4 py-2 flex items-center gap-1.5 hover:text-white/60 hover:border-white/20 transition-all">
                  Read docs <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom: mockup + giant watermark — matching Monologue's bottom section */}
      <div className="relative flex-1 flex flex-col items-center justify-end mt-auto">

        {/* Mockup device */}
        <div className="hero-mockup relative z-10 mb-[-60px]">
          {/* Stamp badge */}
          <div className="flex justify-center mb-5">
            <div className="px-5 py-2.5 border border-white/[0.08] bg-bg-card text-[10px] text-white/30 tracking-[0.2em] uppercase">
              Built on Base
            </div>
          </div>

          {/* Device card — like Monologue's radio mockup */}
          <div className="w-[340px] rounded-2xl border border-white/[0.08] bg-bg-elevated shadow-2xl shadow-black/40 overflow-hidden">
            {/* Top: dot grill + screen */}
            <div className="flex items-stretch border-b border-white/[0.05]">
              <div className="flex items-center justify-center px-5 py-5 border-r border-white/[0.05]">
                <DotCluster rows={4} cols={5} size={5} gap={5} />
              </div>
              <div className="flex-1 p-4 flex items-center justify-center">
                <div className="w-full h-16 rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center">
                  <div className="w-20 h-2 rounded-full bg-accent/30" />
                </div>
              </div>
            </div>
            {/* Bottom: CTA */}
            <div className="flex items-center justify-center py-4">
              <a
                href="https://app.quinty.io"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] border border-white/[0.1] bg-white/[0.93] text-[#0e0e0e]"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>

        {/* Giant watermark — Monologue has HUGE silver text here */}
        <div
          aria-hidden="true"
          className="hero-watermark pointer-events-none select-none w-full overflow-hidden leading-none"
        >
          <span className="block font-serif italic font-light text-[clamp(12rem,22vw,24rem)] tracking-tight text-white/[0.04] text-center whitespace-nowrap">
            Quinty
          </span>
        </div>
      </div>
    </section>
  )
}
