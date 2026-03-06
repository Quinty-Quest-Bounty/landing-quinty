import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Shield, Award, Target, Layers, Lock, CheckCircle2 } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { DotCluster } from './DotCluster'

export function FeatureBento() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return

      const cards = sectionRef.current?.querySelectorAll('.bento-card')
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute top-16 right-10 opacity-40 hidden lg:block">
        <DotCluster rows={3} cols={4} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <p className="text-xs text-accent/60 tracking-widest uppercase mb-4">
          Core features
        </p>
        <h2 className="font-serif italic font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-white/90">
          Trustless by design.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {/* Card 1 — Smart Escrow */}
          <div className="bento-card md:col-span-7 group">
            <div className="relative h-full rounded-2xl border border-white/[0.06] bg-bg-card p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-white/[0.12]">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs text-white/30 tracking-wider uppercase">Escrow</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif italic font-light text-white/90 mb-3 tracking-tight">
                  Smart Escrow
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed mb-8 max-w-md tracking-wide">
                  Funds locked in smart contract before work begins.
                  Released only upon verified delivery. Zero trust required.
                </p>

                <div className="rounded-xl border border-white/[0.06] bg-bg-primary/60 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/30">Escrow Status</span>
                    <span className="text-xs text-accent">Locked</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-accent/60 to-accent" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-white/25">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3 h-3" /> 2.5 ETH deposited
                    </span>
                    <span>100% escrowed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Soulbound Reputation */}
          <div className="bento-card md:col-span-5 group">
            <div className="relative h-full rounded-2xl border border-white/[0.06] bg-bg-card p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-white/[0.12]">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs text-white/30 tracking-wider uppercase">Reputation</span>
                </div>

                <h3 className="text-2xl font-serif italic font-light text-white/90 mb-3 tracking-tight">
                  Soulbound NFTs
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed mb-8 tracking-wide">
                  Your work history, immutable on-chain. Non-transferable badges that prove your track record.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['Verified Solver', 'Top Contributor', '10x Builder'].map(
                    (badge) => (
                      <div
                        key={badge}
                        className="px-3 py-1.5 rounded-lg border border-accent/15 bg-accent/[0.06] text-[11px] text-accent/70"
                      >
                        {badge}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Quests & Bounties */}
          <div className="bento-card md:col-span-5 group">
            <div className="relative h-full rounded-2xl border border-white/[0.06] bg-bg-card p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-white/[0.12]">
              <div className="absolute top-4 right-4 opacity-30">
                <DotCluster rows={2} cols={3} size={5} gap={6} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs text-white/30 tracking-wider uppercase">Tasks</span>
                </div>

                <h3 className="text-2xl font-serif italic font-light text-white/90 mb-3 tracking-tight">
                  Quests & Bounties
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed mb-8 tracking-wide">
                  Post tasks. Find solvers. Multi-winner bounties with ranked prizes up to 10 winners.
                </p>

                <div className="space-y-2">
                  {[
                    { label: 'Build UI Component', amount: '$500', status: 'open' },
                    { label: 'Smart Contract Audit', amount: '$2,500', status: 'open' },
                    { label: 'Write Documentation', amount: '$200', status: 'done' },
                  ].map((task) => (
                    <div
                      key={task.label}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-bg-primary/60 border border-white/[0.04]"
                    >
                      <div className="flex items-center gap-2">
                        {task.status === 'done' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent/60" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-white/20" />
                        )}
                        <span className={`text-xs ${task.status === 'done' ? 'text-white/25 line-through' : 'text-white/50'}`}>
                          {task.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-accent/50">{task.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — Built on Base */}
          <div className="bento-card md:col-span-7 group">
            <div className="relative h-full rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/[0.03] to-bg-card p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-accent/20">
              <div className="absolute bottom-4 right-4 opacity-30">
                <DotCluster rows={2} cols={3} size={5} gap={6} />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs text-white/30 tracking-wider uppercase">Network</span>
                  </div>

                  <h3 className="text-2xl font-serif italic font-light text-white/90 mb-3 tracking-tight">
                    Built on Base
                  </h3>
                  <p className="text-[13px] text-white/35 leading-relaxed tracking-wide">
                    L2 by Coinbase. Fast, cheap, secure.
                    ETH and USDC supported natively.
                  </p>
                </div>

                <div className="flex gap-6 md:gap-8">
                  {[
                    { value: '<$0.01', label: 'per tx' },
                    { value: '<1s', label: 'finality' },
                    { value: '100%', label: 'uptime' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-accent tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/25 tracking-wider uppercase mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
