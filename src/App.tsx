import { useState }                         from 'react'
import { BrowserRouter, Routes, Route }     from 'react-router-dom'
import { AnimatePresence, motion }          from 'framer-motion'
import LoadingScreen                        from './components/LoadingScreen'
import Navbar                               from './components/Navbar'
import Home                                 from './pages/Home'
import WorkDetail                           from './pages/WorkDetail'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
          </Routes>
        </motion.div>
      )}
    </BrowserRouter>
  )
}