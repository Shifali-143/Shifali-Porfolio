import { SKILLS, SKILL_LEVELS } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="A practical view of the technologies I use to build AI systems and enterprise platforms">
            Skills & Expertise
          </SectionTitle>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <GlassCard className="h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}40, ${cat.color}15)`,
                      border: `1px solid ${cat.color}40`,
                      boxShadow: `0 4px 14px ${cat.color}25`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold" style={{ color: cat.color }}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skills with level */}
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {cat.skills.map((skill) => {
                    const level = SKILL_LEVELS[skill.level]
                    return (
                      <li key={skill.name} className="flex items-center justify-between gap-3">
                        <span className="font-body text-[0.85rem] text-slate-300">{skill.name}</span>
                        <span className="flex items-center gap-1.5 shrink-0">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: level.color, boxShadow: `0 0 6px ${level.color}` }}
                          />
                          <span className="font-body text-[0.75rem] text-slate-500">{level.label}</span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Legend */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            {Object.entries(SKILL_LEVELS).map(([key, level]) => (
              <div key={key} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: level.color, boxShadow: `0 0 6px ${level.color}` }}
                />
                <span className="font-body text-xs text-slate-400">{level.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}