import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Design', 'Create', 'Inspire']
const DURATION_MS = 2700

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount]       = useState(0)
  const [wordIdx, setWordIdx]   = useState(0)
  const startRef                = useRef(performance.now())
  const rafRef                  = useRef<number>(0)

  // Counter via rAF
  useEffect(() => {
    const tick = (now: number) => {
      const elapsed = now - startRef.current
      const next    = Math.min(100, Math.floor((elapsed / DURATION_MS) * 100))
      setCount(next)
      if (next < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => onComplete(), 400)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [onComplete])

  // Word cycling
  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 900)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-8"
      style={{ background: 'hsl(var(--bg))' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top-left label */}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.span>

      {/* Center word */}
      <div className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="font-display italic text-6xl md:text-7xl lg:text-8xl"
            style={{ color: 'rgba(245,245,245,0.8)' }}
          >
            {WORDS[wordIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right: counter + bar */}
      <div className="flex flex-col items-end gap-4">
        <span className="font-display text-7xl md:text-8xl lg:text-9xl tabular-nums">
          {String(count).padStart(3, '0')}
        </span>
        <div className="w-full max-w-xs h-[3px] rounded-full overflow-hidden"
             style={{ background: 'rgba(31,31,31,0.5)' }}>
          <div
            className="h-full accent-gradient origin-left transition-transform duration-75"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 8px rgba(137,170,204,0.35)',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}