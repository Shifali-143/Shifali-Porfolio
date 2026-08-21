interface SectionTitleProps {
  children: string
  subtitle?: string
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-display font-bold tracking-tight gradient-text text-[clamp(1.8rem,4vw,2.8rem)]">
        {children}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-2 text-base font-body">{subtitle}</p>
      )}
      <div
        className="w-[60px] h-[3px] rounded-sm mx-auto mt-4"
        style={{ background: 'linear-gradient(90deg, #06b6d4, #818cf8)' }}
      />
    </div>
  )
}
