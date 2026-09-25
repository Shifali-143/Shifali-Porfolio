import { PROJECTS } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="Featured work">Key Projects</SectionTitle>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.12}>
              <GlassCard className="h-full">
                {/* Colored accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-sm"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  }}
                />

                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="font-body text-[0.7rem] font-semibold px-2 py-0.5 rounded-md bg-emerald-400/15 text-emerald-400 border border-emerald-400/30 uppercase tracking-wide">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="font-body text-sm text-slate-400 mb-4">{project.subtitle}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.72rem] px-2 py-0.5 rounded border border-primary/15 text-cyan-300"
                      style={{ background: 'rgba(6, 182, 212, 0.08)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="list-none p-0 m-0">
                  {project.features.map((f, j) => (
                    <li
                      key={j}
                      className="font-body text-[0.85rem] text-slate-400 leading-relaxed pl-4 relative mb-1.5"
                    >
                      <span className="absolute left-0" style={{ color: project.color }}>
                        ◆
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}