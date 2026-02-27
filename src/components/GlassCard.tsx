import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Glass background with fallback
        'bg-bg-secondary supports-[backdrop-filter]:bg-white/[0.04]',
        'supports-[backdrop-filter]:backdrop-blur-md',
        // Border
        'border border-white/[0.07]',
        // Shape
        'rounded-2xl p-8',
        // Hover
        'transition-colors duration-300 hover:border-accent/20',
        // Hardware acceleration
        'transform-gpu',
        className,
      )}
    >
      {children}
    </div>
  )
}
