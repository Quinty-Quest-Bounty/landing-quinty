import { ArrowUpRight } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/[0.03] backdrop-blur-lg border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <img
            src="/images/quinty-green.png"
            alt="Quinty"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            Quinty
          </span>
        </a>

        {/* CTA */}
        <a
          href="https://app.quinty.io"
          className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full bg-accent hover:bg-accent-bright text-white transition-colors shadow-lg shadow-accent/20"
        >
          Launch App
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  )
}
