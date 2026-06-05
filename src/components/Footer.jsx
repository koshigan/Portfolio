import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-ai-bg py-12 px-6 sm:px-8 lg:px-12 border-t border-ai-border/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono text-ai-text-secondary">
        
        {/* Brand */}
        <a href="#home" className="text-sm font-bold tracking-tight text-ai-text flex items-center">
          Koshigan<span className="text-ai-cyan">.</span>
        </a>

        {/* Location & Title */}
        <span className="text-center sm:text-left">
          Software Engineer · India
        </span>

        {/* Copyright */}
        <span>
          © 2026 · Built with React & Tailwind
        </span>
      </div>

      {/* Back to top dynamic button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            key="scroll-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed right-6 bottom-6 sm:right-10 sm:bottom-10 z-40 p-3 bg-ai-card border border-ai-border hover:border-ai-cyan text-ai-text rounded-full shadow-2xl transition-colors duration-300"
          >
            <ArrowUp size={16} className="text-ai-cyan" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
