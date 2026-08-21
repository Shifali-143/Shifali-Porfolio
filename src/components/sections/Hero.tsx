import { useState, useEffect } from 'react'
import { SOCIAL } from '../../data/portfolio'
import { LinkedInIcon, GitHubIcon, EmailIcon, ChevronDown } from '../ui/Icons'

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  const fadeIn = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s ease ${delay}s`,
  })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-[0.12] bg-primary -top-[10%] -right-[10%] animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.12] bg-secondary -bottom-[5%] -left-[5%] animate-float-delayed" />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.12] bg-accent top-[40%] left-[30%] animate-float-slow" />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div style={fadeIn(0.2)}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/[0.08] text-primary text-sm font-body tracking-wide mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1
            className="font-display font-extrabold leading-[1.1] text-slate-100 tracking-tighter mb-2"
            style={{ ...fadeIn(0.35), fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text-full">Shifali Gupta</span>
          </h1>

          <div style={fadeIn(0.5)}>
            <h2
              className="font-body font-medium text-primary mb-4 tracking-tight"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
            >
              AI/ML Engineer | Full Stack Developer
            </h2>
            <p className="font-body text-slate-400 leading-relaxed max-w-[500px] mb-8 mx-auto md:mx-0">
              Building intelligent AI-powered applications and scalable web platforms with 2+ years of hands-on experience in Generative AI, LLMs, and full-stack development.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap mb-8 justify-center md:justify-start" style={fadeIn(0.65)}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-glow font-body text-[0.95rem] font-semibold px-8 py-3 rounded-xl border-none text-base cursor-pointer no-underline inline-block transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #818cf8)', color: '#020617' }}
            >
              Hire Me
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="btn-outline font-body text-[0.95rem] font-semibold px-8 py-3 rounded-xl border border-primary/40 text-primary cursor-pointer no-underline inline-block transition-all duration-300"
              style={{ background: 'rgba(6, 182, 212, 0.08)' }}
            >
              Let's Talk
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-center md:justify-start" style={fadeIn(0.8)}>
            {[
              { icon: <LinkedInIcon />, url: SOCIAL.linkedin, label: 'LinkedIn' },
              { icon: <GitHubIcon />, url: SOCIAL.github, label: 'GitHub' },
              { icon: <EmailIcon />, url: `mailto:${SOCIAL.email}`, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="social-link w-11 h-11 rounded-xl border border-slate-400/20 flex items-center justify-center text-slate-400 no-underline"
                style={{ background: 'rgba(15, 23, 42, 0.6)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Profile photo */}
        <div
          className="order-1 md:order-2 flex justify-center items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 1s ease 0.5s',
          }}
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-2 rounded-full animate-glow-spin opacity-70 blur-[2px]"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #818cf8, #c084fc, #06b6d4)',
                backgroundSize: '300% 300%',
              }}
            />
            <div
              className="relative rounded-full overflow-hidden border-[3px] border-base bg-slate-900 flex items-center justify-center"
              style={{
                width: 'clamp(240px, 22vw, 320px)',
                height: 'clamp(240px, 22vw, 320px)',
              }}
            >
              <img
                src="/shifali.png"
                alt="Shifali Gupta"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer"
        style={{
          opacity: loaded ? 0.6 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <div className="text-slate-400 flex flex-col items-center gap-1">
          <span className="font-body text-xs tracking-widest">SCROLL</span>
          <div className="animate-bounce-slow">
            <ChevronDown />
          </div>
        </div>
      </button>
    </section>
  )
}
