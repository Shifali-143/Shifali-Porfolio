import { SKILLS } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="Technologies I work with">Skills & Expertise</SectionTitle>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <GlassCard>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display text-lg font-semibold" style={{ color: cat.color }}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-chip font-body text-[0.82rem] px-3 py-1.5 rounded-lg text-slate-300 font-medium"
                      style={{
                        border: `1px solid ${cat.color}22`,
                        background: `${cat.color}10`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
