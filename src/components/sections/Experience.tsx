import { EXPERIENCES } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-[900px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="My professional journey">Experience</SectionTitle>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute top-0 bottom-0 left-[20px] md:left-[20px] w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, #06b6d4, rgba(6,182,212,0.1))',
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.15}>
              <div className="relative pl-14 mb-10">
                {/* Timeline dot */}
                <div
                  className="absolute left-[12px] top-2 w-[18px] h-[18px] rounded-full border-[3px] border-primary"
                  style={{
                    background: exp.current ? '#06b6d4' : '#020617',
                    boxShadow: exp.current ? '0 0 16px rgba(6, 182, 212, 0.5)' : 'none',
                  }}
                />

                <GlassCard>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="font-body text-primary font-medium">{exp.company}</p>
                    </div>
                    <span
                      className="font-body text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        border: exp.current
                          ? '1px solid rgba(52, 211, 153, 0.3)'
                          : '1px solid rgba(148, 163, 184, 0.2)',
                        background: exp.current
                          ? 'rgba(52, 211, 153, 0.1)'
                          : 'rgba(148, 163, 184, 0.05)',
                        color: exp.current ? '#34d399' : '#94a3b8',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-none p-0 m-0">
                    {exp.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="font-body text-sm text-slate-400 leading-relaxed pl-5 relative mb-2"
                      >
                        <span className="absolute left-0 text-primary">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
