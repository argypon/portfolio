import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useHlsVideo } from '../hooks/useHlsVideo'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
const ROLES   = ['Creative', 'Fullstack', 'Founder', 'Scholar']

export default function Hero() {
  const videoRef            = useHlsVideo(HLS_SRC)
  const [roleIdx, setRoleIdx] = useState(0)
  const contentRef          = useRef<HTMLDivElement>(null)

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 })
      tl.fromTo('.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.8')
    }, contentRef)
    return () => ctx.revert()
  }, [])

  // Role cycling
  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48"
           style={{ background: 'linear-gradient(to top, hsl(var(--bg)), transparent)' }} />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8 opacity-0">
          COLLECTION '26
        </p>

        <h1 className="name-reveal font-display italic text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6 opacity-0">
          Michael Smith
        </h1>

        <p className="blur-in text-sm md:text-base mb-4 opacity-0" style={{ color: 'hsl(var(--muted))' }}>
          A{' '}
          <span
            key={roleIdx}
            className="font-display italic animate-role-fade-in inline-block"
            style={{ color: 'hsl(var(--text))' }}
          >
            {ROLES[roleIdx]}
          </span>
          {' '}lives in Chicago.
        </p>

        <p className="blur-in text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed opacity-0"
           style={{ color: 'hsl(var(--muted))' }}>
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        <div className="blur-in inline-flex gap-4 flex-wrap justify-center opacity-0">
          {/* See Works */}
          <button
            onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 group"
            style={{ background: 'hsl(var(--text))', color: 'hsl(var(--bg))' }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span className="relative z-10 rounded-full px-7 py-3.5 -m-7"
                  style={{ background: 'hsl(var(--bg))', color: 'hsl(var(--text))', display: 'none' }} />
            See Works
          </button>

          {/* Reach out */}
          <button
            className="relative rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 group border-2"
            style={{
              borderColor: 'hsl(var(--stroke))',
              background: 'hsl(var(--bg))',
              color: 'hsl(var(--text))',
            }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Reach out...
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'hsl(var(--muted))' }}>
          SCROLL
        </span>
        <div className="w-px h-10 overflow-hidden" style={{ background: 'hsl(var(--stroke))' }}>
          <div className="animate-scroll-down w-full h-2/5"
               style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--muted)))' }} />
        </div>
      </div>
    </section>
  )
}