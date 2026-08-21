import { EDUCATION } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-[700px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="Academic background">Education</SectionTitle>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <GlassCard>
            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(129,140,248,0.15))',
                }}
              >
                🎓
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-100 mb-1">
                  {EDUCATION.degree}
                </h3>
                <p className="font-body text-primary font-medium mb-1">
                  {EDUCATION.field}
                </p>
                <p className="font-body text-sm text-slate-400 mb-3">
                  {EDUCATION.school}
                </p>
                <span className="font-body text-xs px-3 py-1 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary">
                  {EDUCATION.period}
                </span>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
