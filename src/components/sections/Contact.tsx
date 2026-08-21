import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { SOCIAL } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'
import { LinkedInIcon, EmailIcon, PhoneIcon, ExternalLinkIcon } from '../ui/Icons'

interface FormState {
  name: string
  email: string
  mobile: string
  subject: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', mobile: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:${SOCIAL.email}?subject=${subject}&body=${body}`, '_self')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm(INITIAL)
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-slate-400/15 bg-slate-900/80 text-slate-100 font-body text-[0.95rem] outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]'

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <SectionTitle subtitle="Let's work together">Get In Touch</SectionTitle>
        </AnimatedSection>

        {/* Header text */}
        <AnimatedSection delay={0.05}>
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl font-bold text-slate-100 mb-2">
              Let's Talk
            </h3>
            <p className="font-body text-slate-400">
              Questions, thoughts, or just want to say Hello?
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form - takes 3 cols */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <GlassCard hover={false}>
                <h4 className="font-display text-lg font-semibold text-slate-100 mb-6">
                  Contact Me
                </h4>
                <div onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-body text-xs text-slate-400 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={update}
                        placeholder="Enter Your Name"
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-slate-400 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={update}
                        placeholder="Enter Your Email Address"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-body text-xs text-slate-400 block mb-1.5">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={update}
                        placeholder="Mobile Number"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-slate-400 block mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={update}
                        placeholder="Enter Your Subject"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="font-body text-xs text-slate-400 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={update}
                      placeholder="Enter Your Message"
                      required
                      rows={5}
                      className={`${inputClasses} resize-vertical min-h-[120px]`}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-glow font-body font-semibold w-full py-3.5 rounded-xl border-none cursor-pointer transition-all duration-300 text-base"
                    style={{
                      background: submitted
                        ? '#34d399'
                        : 'linear-gradient(135deg, #06b6d4, #818cf8)',
                      color: '#020617',
                    }}
                  >
                    {submitted ? '✓ Message Sent!' : 'Submit'}
                  </button>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* Right side - Photo + Social links */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.25}>
              <div className="flex flex-col gap-5">
                {/* Profile photo */}
                <div className="flex justify-center mb-2">
                  <div className="relative">
                    <div
                      className="absolute -inset-1.5 rounded-full animate-glow-spin opacity-60 blur-[2px]"
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4, #818cf8, #c084fc, #06b6d4)',
                        backgroundSize: '300% 300%',
                      }}
                    />
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-[3px] border-base bg-slate-900">
                      <img
                        src="/shifali.png"
                        alt="Shifali Gupta"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Email card */}
                <GlassCard>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <EmailIcon />
                    </div>
                    <div>
                      <p className="font-body text-xs text-slate-400">Email</p>
                      <a
                        href={`mailto:${SOCIAL.email}`}
                        className="font-body text-sm text-slate-100 no-underline hover:text-primary transition-colors"
                      >
                        {SOCIAL.email}
                      </a>
                    </div>
                  </div>
                </GlassCard>

                {/* Phone card */}
                <GlassCard>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="font-body text-xs text-slate-400">Phone</p>
                      <a
                        href={`tel:${SOCIAL.phone}`}
                        className="font-body text-sm text-slate-100 no-underline hover:text-primary transition-colors"
                      >
                        {SOCIAL.phone}
                      </a>
                    </div>
                  </div>
                </GlassCard>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/shifali-gupta-sg/" target="_blank" rel="noopener noreferrer" className="no-underline block cursor-pointer">
                  <GlassCard hover={false}>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                        <LinkedInIcon />
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-xs text-slate-400">LinkedIn</p>
                        <p className="font-body text-sm text-slate-100">Shifali Gupta</p>
                      </div>
                      <ExternalLinkIcon className="text-slate-400" />
                    </div>
                  </GlassCard>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
