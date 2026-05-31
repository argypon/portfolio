import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IMAGES = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80',
  'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=700&q=80',
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=700&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80',
  'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=700&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
]

const COL_A = IMAGES.slice(0, 3)
const COL_B = IMAGES.slice(3, 6)

export default function Explorations() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const colARef     = useRef<HTMLDivElement>(null)
  const colBRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !colARef.current || !colBRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(colARef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      })
      gsap.to(colBRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="explorations" ref={sectionRef} className="bg-bg py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-between items-end mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.3em] mb-3">
              <div className="w-8 h-px" style={{ background: 'hsl(var(--stroke))' }} />
              Explorations
            </div>
            <h2 className="font-body font-light text-4xl md:text-5xl" style={{ color: 'hsl(var(--text))' }}>
              Visual <em className="font-display italic">playground</em>
            </h2>
            <p className="text-sm mt-3 max-w-sm leading-relaxed" style={{ color: 'hsl(var(--muted))' }}>
              Experimental work, studies, and sketches from my creative process.
            </p>
          </div>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer"
             className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm relative group"
             style={{ color: 'hsl(var(--text))', border: '1px solid hsl(var(--stroke))' }}>
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Dribbble ↗
          </a>
        </motion.div>

        {/* Two-column parallax grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          <div ref={colARef} className="flex flex-col gap-6">
            {COL_A.map((src, i) => (
              <div key={i}
                   className="aspect-square rounded-2xl overflow-hidden border cursor-pointer group relative"
                   style={{ borderColor: 'hsl(var(--stroke))' }}>
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest">View</span>
                </div>
              </div>
            ))}
          </div>
          <div ref={colBRef} className="flex flex-col gap-6 mt-16">
            {COL_B.map((src, i) => (
              <div key={i}
                   className="aspect-square rounded-2xl overflow-hidden border cursor-pointer group relative"
                   style={{ borderColor: 'hsl(var(--stroke))' }}>
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}