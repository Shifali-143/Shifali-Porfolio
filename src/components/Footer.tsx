import { SOCIAL } from '../data/portfolio'
import { LinkedInIcon, GitHubIcon, EmailIcon } from './ui/Icons'

export function Footer() {
  const socials = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/shifali-gupta-sg/', label: 'LinkedIn' },
    { icon: <GitHubIcon />, url: SOCIAL.github, label: 'GitHub' },
    { icon: <EmailIcon />, url: `mailto:${SOCIAL.email}`, label: 'Email' },
  ]
  return (
    <footer className="py-10 px-6 border-t border-slate-400/[0.08] text-center">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-center gap-4 mb-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              className="social-link w-10 h-10 rounded-[10px] border border-slate-400/15 flex items-center justify-center text-slate-400 no-underline"
              style={{ background: 'rgba(15, 23, 42, 0.6)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="font-body text-sm text-slate-600">
          © {new Date().getFullYear()} Shifali Gupta. Crafted with passion & code.
        </p>
      </div>
    </footer>
  )
}
