export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Quinty Labs
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://x.com/quinty_io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-accent transition-colors"
          >
            X
          </a>
          <a
            href="https://github.com/quinty-io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://docs.quinty.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-accent transition-colors"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  )
}
