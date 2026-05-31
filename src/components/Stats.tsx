import { motion } from 'framer-motion'

const STATS = [
  { value: '20+', label: 'Years Experience' },
  { value: '95+', label: 'Projects Done'    },
  { value: '200%', label: 'Satisfied Clients' },
]

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24"
             style={{ borderTop: '1px solid hsl(var(--stroke))' }}>
      <div className="max-w-[900px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="font-display text-5xl md:text-7xl" style={{ color: 'hsl(var(--text))' }}>
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] mt-2" style={{ color: 'hsl(var(--muted))' }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}