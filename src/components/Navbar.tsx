import { useEffect, useState } from 'react'

const NAV_LINKS = ['Home', 'Work', 'Resume']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/40' : ''
        }`}
        style={{ background: 'hsl(var(--surface))' }}
      >
        {/* Logo */}
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center relative group transition-transform duration-300 hover:scale-110"
          aria-label="Home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="absolute inset-0 rounded-full p-[2px] accent-gradient group-hover:[background:linear-gradient(315deg,#89aacc,#4e85bf)]" />
          <span className="relative z-10 w-full h-full rounded-full flex items-center justify-center font-display italic text-[13px]"
                style={{ background: 'hsl(var(--bg))' }}>
            JA
          </span>
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 mx-1" style={{ background: 'hsl(var(--stroke))' }} />

        {/* Links */}
        {NAV_LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(['hero', 'works', 'stats'][i])}
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200"
            style={{
              color: i === 0 ? 'hsl(var(--text))' : 'hsl(var(--muted))',
              background: i === 0 ? 'rgba(31,31,31,0.8)' : 'transparent',
            }}
            onMouseEnter={e => {
              ;(e.target as HTMLElement).style.color = 'hsl(var(--text))'
              ;(e.target as HTMLElement).style.background = 'rgba(31,31,31,0.8)'
            }}
            onMouseLeave={(e) => {
              if (i !== 0) {
                ;(e.target as HTMLElement).style.color = 'hsl(var(--muted))'
                ;(e.target as HTMLElement).style.background = 'transparent'
              }
            }}
          >
            {link}
          </button>
        ))}

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 mx-1" style={{ background: 'hsl(var(--stroke))' }} />

        {/* Say hi */}
        <button className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 group"
                style={{ background: 'hsl(var(--surface))', color: 'hsl(var(--text))' }}>
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <span className="relative z-10"
                style={{ background: 'hsl(var(--surface))', borderRadius: 9999, padding: '6px 16px', display: 'block' }}>
            Say hi ↗
          </span>
        </button>
      </div>
    </nav>
  )
}