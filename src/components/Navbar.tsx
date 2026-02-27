import { ArrowUpRight } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/60 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/images/quinty-green.png"
            alt="Quinty"
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-base font-semibold tracking-tight text-white/90">
            Quinty
          </span>
        </a>

        {/* Links + CTA */}
        <div className="flex items-center gap-8">
          <a
            href="https://docs.quinty.io"
            className="hidden sm:block text-[13px] text-white/40 hover:text-white/70 transition-colors font-mono tracking-wide"
          >
            Docs
          </a>
          <a
            href="https://app.quinty.io"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-medium rounded-full bg-accent/90 hover:bg-accent text-white transition-all duration-300 shadow-[0_0_20px_rgba(14,168,133,0.2)] hover:shadow-[0_0_30px_rgba(14,168,133,0.35)]"
          >
            Launch App
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
