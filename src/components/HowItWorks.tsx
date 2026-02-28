import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { DotCluster } from './DotCluster'

const steps = [
  {
    num: '01',
    title: 'Post a bounty or quest',
    desc: 'Describe the work. Set the reward. Lock funds in escrow — they\'re held by the smart contract, not you.',
  },
  {
    num: '02',
    title: 'Solvers submit work',
    desc: 'Builders find your task, do the work, and submit proof on-chain. Track submissions in real time.',
  },
  {
    num: '03',
    title: 'Verify & release',
    desc: 'Approve the work. Funds release automatically. Both parties earn soulbound reputation NFTs.',
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      const items = sectionRef.current?.querySelectorAll('.step-item')
      items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent line */}
      <div className="absolute left-[60px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

      {/* Dot cluster decoration */}
      <div className="absolute top-20 left-10 opacity-30 hidden lg:block">
        <DotCluster rows={3} cols={4} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 md:mb-20">
          <p className="text-xs text-accent/60 tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="font-serif italic font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-white/90">
            Three steps. Zero trust.
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step) => (
            <div key={step.num} className="step-item flex gap-6 md:gap-10 items-start">
              {/* Step number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-accent/15 bg-accent/[0.05] flex items-center justify-center">
                <span className="text-sm font-bold text-accent">{step.num}</span>
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <h3 className="text-xl md:text-2xl font-serif italic font-light text-white/85 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed max-w-lg tracking-wide">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
