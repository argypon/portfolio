import { useRef } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Automotive Motion',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80',
    span: 7,
    slug: 'automotive-motion',
  },
  {
    title: 'Urban Architecture',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    span: 5,
    slug: 'urban-architecture',
  },
  {
    title: 'Human Perspective',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80',
    span: 5,
    slug: 'human-perspective',
  },
  {
    title: 'Brand Identity',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80',
    span: 7,
    slug: 'brand-identity',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Works() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-between items-end mb-10 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.3em] mb-3">
              <div className="w-8 h-px" style={{ background: 'hsl(var(--stroke))' }} />
              Selected Work
            </div>
            <h2 className="font-body font-light text-4xl md:text-5xl" style={{ color: 'hsl(var(--text))' }}>
              Featured <em className="font-display italic">projects</em>
            </h2>
            <p className="text-sm mt-3 max-w-sm leading-relaxed" style={{ color: 'hsl(var(--muted))' }}>
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm relative group"
                  style={{ color: 'hsl(var(--text))', border: '1px solid hsl(var(--stroke))' }}>
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View all work →
          </button>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1 }}
              className={`md:col-span-${p.span} rounded-3xl overflow-hidden border cursor-pointer group relative`}
              style={{ borderColor: 'hsl(var(--stroke))', background: 'hsl(var(--surface))' }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Halftone */}
                <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 backdrop-blur-lg flex items-center justify-center"
                     style={{ background: 'rgba(10,10,10,0.7)' }}>
                  <div className="relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
                       style={{ background: 'rgba(255,255,255,0.9)', color: '#111' }}>
                    <span className="absolute inset-[-2px] rounded-full accent-gradient -z-10" />
                    View — <em className="font-display italic">{p.title}</em>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}