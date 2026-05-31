import { motion, type Variants } from 'framer-motion'

const ENTRIES = [
  {
    title:   'The Art of Motion: How Animation Shapes User Experience',
    img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80',
    time:    '5 min',
    date:    'Jan 2026',
    slug:    'art-of-motion',
  },
  {
    title:   'Designing for Depth: Lessons from Physical Interfaces',
    img:     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    time:    '7 min',
    date:    'Dec 2025',
    slug:    'designing-for-depth',
  },
  {
    title:   'Typography as Identity: Building Visual Voices',
    img:     'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=120&q=80',
    time:    '4 min',
    date:    'Nov 2025',
    slug:    'typography-identity',
  },
  {
    title:   'Systems Thinking in Design: Beyond the Component',
    img:     'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&q=80',
    time:    '6 min',
    date:    'Oct 2025',
    slug:    'systems-thinking',
  },
]

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
              Journal
            </div>
            <h2 className="font-body font-light text-4xl md:text-5xl" style={{ color: 'hsl(var(--text))' }}>
              Recent <em className="font-display italic">thoughts</em>
            </h2>
            <p className="text-sm mt-3 max-w-sm leading-relaxed" style={{ color: 'hsl(var(--muted))' }}>
              Reflections on design, technology, and the creative process.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm relative group"
                  style={{ color: 'hsl(var(--text))', border: '1px solid hsl(var(--stroke))' }}>
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View all →
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-3">
          {ENTRIES.map((e, i) => (
            <motion.div
              key={e.slug}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full border cursor-pointer transition-colors duration-300"
              style={{
                background: 'rgba(20,20,20,0.3)',
                borderColor: 'hsl(var(--stroke))',
              }}
              whileHover={{ backgroundColor: 'hsl(var(--surface))' }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src={e.img} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="flex-1 text-sm" style={{ color: 'hsl(var(--text))' }}>
                {e.title}
              </span>
              <span className="text-xs whitespace-nowrap" style={{ color: 'hsl(var(--muted))' }}>
                {e.time} · {e.date}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}