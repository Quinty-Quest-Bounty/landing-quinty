export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/images/quinty-green.png" alt="" className="w-5 h-5 opacity-40" />
          <p className="text-[13px] text-white/20">
            &copy; {new Date().getFullYear()} Quinty Labs
          </p>
        </div>

        <div className="flex items-center gap-8">
          {[
            { label: 'X', href: 'https://x.com/quinty_io' },
            { label: 'GitHub', href: 'https://github.com/quinty-io' },
            { label: 'Docs', href: 'https://docs.quinty.io' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-white/20 hover:text-accent transition-colors duration-300 font-mono"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
