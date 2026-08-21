import { useState, useEffect } from 'react'

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        padding: scrolled ? '0.6rem 0' : '1rem 0',
        background: scrolled ? 'rgba(2, 6, 23, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.1)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-2xl font-bold tracking-tighter gradient-text-full"
        >
          SG.
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.toLowerCase()
            return (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="font-body text-sm transition-colors duration-300"
                style={{
                  color: isActive ? '#06b6d4' : '#94a3b8',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.02em',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#06b6d4' : '#94a3b8')}
              >
                {item}
              </button>
            )
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary text-2xl bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 p-6"
          style={{
            background: 'rgba(2, 6, 23, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(6, 182, 212, 0.15)',
          }}
        >
          {NAV_ITEMS.map((item, i) => {
            const isActive = activeSection === item.toLowerCase()
            return (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-3 px-4 font-body text-base bg-transparent border-none cursor-pointer"
                style={{
                  color: isActive ? '#06b6d4' : '#cbd5e1',
                  borderLeft: isActive ? '2px solid #06b6d4' : '2px solid transparent',
                  animation: `slideIn 0.3s ease ${i * 0.05}s both`,
                }}
              >
                {item}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
