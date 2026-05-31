import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useHlsVideo } from '../hooks/useHlsVideo'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
const REPEAT  = 20

export default function Footer() {
  const videoRef  = useHlsVideo(HLS_SRC)
  const trackRef  = useRef<HTMLDivElement>(null)

  // GSAP marquee
  useEffect(() => {
    if (!trackRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <footer id="footer" className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative"
            style={{ borderTop: '1px solid hsl(var(--stroke))' }}>

      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video ref={videoRef} autoPlay muted loop playsInline
               className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
               style={{ transform: 'translate(-50%, -50%) scaleY(-1)' }} />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10">

        {/* Marquee */}
        <div className="overflow-hidden border-y py-4 mb-12"
             style={{ borderColor: 'hsl(var(--stroke))' }}>
          <div ref={trackRef} className="flex whitespace-nowrap">
            {Array.from({ length: REPEAT }).map((_, i) => (
              <span key={i} className="font-display italic text-3xl md:text-5xl pr-12 flex-shrink-0"
                    style={{ color: 'hsl(var(--text))' }}>
                BUILDING THE FUTURE •{' '}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-6 pb-12">
          <h2 className="font-display italic text-4xl md:text-6xl mb-8 leading-tight"
              style={{ color: 'hsl(var(--text))' }}>
            Let's create something<br />remarkable together.
          </h2>
          <a
            href="mailto:hello@michaelsmith.com"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base relative group"
            style={{ color: 'hsl(var(--text))', border: '1px solid hsl(var(--stroke))' }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            hello@michaelsmith.com ↗
          </a>
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 px-6 md:px-16 pt-8"
             style={{ borderTop: '1px solid hsl(var(--stroke))' }}>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(s => (
              <a key={s} href="#" className="text-xs transition-colors duration-200"
                 style={{ color: 'hsl(var(--muted))' }}
                 onMouseEnter={e => { (e.target as HTMLElement).style.color = 'hsl(var(--text))' }}
                 onMouseLeave={e => { (e.target as HTMLElement).style.color = 'hsl(var(--muted))' }}>
                {s}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'hsl(var(--muted))' }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
            Available for projects
          </div>
        </div>

      </div>
    </footer>
  )
}