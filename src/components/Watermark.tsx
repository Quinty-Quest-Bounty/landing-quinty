import { cn } from '../lib/utils'

interface WatermarkProps {
  text?: string
  className?: string
}

export function Watermark({ text = 'Quinty', className }: WatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden',
        className,
      )}
      style={{
        maskImage:
          'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }}
    >
      <span className="whitespace-nowrap font-serif italic font-bold text-[clamp(8rem,22vw,22rem)] leading-none tracking-tighter text-white/[0.03]">
        {text}
      </span>
    </div>
  )
}
