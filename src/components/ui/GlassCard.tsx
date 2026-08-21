import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl border border-white/10 p-6
        backdrop-blur-xl
        ${hover ? 'glass-hover' : ''}
        ${className}
      `}
      style={{ background: 'rgba(15, 23, 42, 0.6)' }}
    >
      {children}
    </div>
  )
}
