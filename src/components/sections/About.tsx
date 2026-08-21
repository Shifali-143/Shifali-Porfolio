import { STATS } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-[900px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="Get to know me">About Me</SectionTitle>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <GlassCard>
            <div className="flex gap-8 items-start flex-wrap">
              <div className="flex-1 min-w-[280px]">
                <p className="font-body text-slate-300 leading-[1.85] mb-6">
                  Results-driven{' '}
                  <span className="text-primary font-semibold">AI/ML Engineer</span> with 2+ years of
                  experience specializing in{' '}
                  <span className="text-secondary font-semibold">Generative AI</span>, LLM-based
                  applications, and Agentic AI. Experienced in building scalable web applications
                  using Django, Flask, React, and TypeScript, with a strong focus on integrating
                  cutting-edge AI technologies into production systems.
                </p>
                <p className="font-body text-slate-300 leading-[1.85]">
                  Demonstrated ability to architect enterprise platforms, optimize databases,
                  automate workflows, and deliver production-ready solutions. Passionate about
                  building intelligent systems that create real-world impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 min-w-[220px]">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl border border-primary/10"
                    style={{ background: 'rgba(6, 182, 212, 0.04)' }}
                  >
                    <div className="font-display text-[1.6rem] font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
