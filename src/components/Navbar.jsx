import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Developer OS', href: '#os' },
    { name: 'Experience', href: '#experience' },
  ]

  // Magnetic hover effect values
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 })
  const handleMagneticMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    setMagneticPos({ x, y })
  }
  const handleMagneticLeave = () => {
    setMagneticPos({ x: 0, y: 0 })
  }

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-ai-bg/85 backdrop-blur-md border-b border-ai-border/80 py-4'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-ai-text flex items-center group">
          Koshigan<span className="text-ai-cyan group-hover:scale-125 transition-transform duration-300">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm font-medium text-ai-text-secondary hover:text-ai-text transition-colors duration-250 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gradient-to-r from-ai-purple to-ai-cyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 text-ai-text-secondary hover:text-ai-text bg-ai-card/50 hover:bg-ai-card border border-ai-border/60 rounded-full transition-all duration-300"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Magnetic CTA */}
          <motion.a
            href="#contact"
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            animate={{ x: magneticPos.x, y: magneticPos.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className="px-6 py-2.5 border border-ai-border hover:border-ai-cyan/50 text-xs font-semibold uppercase tracking-wider text-ai-text rounded-full hover:bg-ai-card flex items-center gap-4 transition-colors group"
          >
            Let's talk 
            <ArrowUpRight size={14} className="text-ai-cyan group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-ai-text-secondary hover:text-ai-text border border-ai-border/60 rounded-full bg-ai-card"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ai-text hover:text-ai-cyan border border-ai-border/60 rounded-full bg-ai-card"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-ai-bg/95 backdrop-blur-lg border-b border-ai-border py-8 px-6 md:hidden flex flex-col space-y-6 shadow-2xl"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-lg font-medium text-ai-text-secondary hover:text-ai-text transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="py-3 bg-ai-text text-ai-bg text-center text-sm font-bold rounded-lg flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
