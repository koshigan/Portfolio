import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MessageSquare } from 'lucide-react'

const ThreeHero = lazy(() => import('./ThreeHero'))

// Automated Count-Up helper component
function Counter({ target, duration = 1600, suffix = '' }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(easeOutCubic * target))
            if (progress < 1) {
              window.requestAnimationFrame(step)
            }
          };
          window.requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>
}

export default function Hero() {
  const heroRef = useRef(null)

  // Scroll to top when component mounts so site always starts at the very top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Create subtle scroll-based parallax for backgrounds
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 600], [0, 80])
  const yBgReverse = useTransform(scrollY, [0, 600], [0, -80])

  const stats = [
    { value: 8, label: 'GitHub Projects', suffix: '+' },
    { value: 18, label: 'Technologies', suffix: '+' },
    { value: 45, label: 'Internship Days', suffix: '' },
    { value: 1200, label: 'Coding Hours', suffix: '+' },
  ]

  // Magnetic CTA states
  const [ctaPos1, setCtaPos1] = useState({ x: 0, y: 0 })
  const [ctaPos2, setCtaPos2] = useState({ x: 0, y: 0 })

  const handleMagneticMove = (e, setCtaPos) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    setCtaPos({ x, y })
  }

  const handleMagneticLeave = (setCtaPos) => {
    setCtaPos({ x: 0, y: 0 })
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen pt-40 pb-12 px-6 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-ai-bg"
    >
      {/* Background Studio Grid */}
      <div className="absolute inset-0 grid-bg z-0" aria-hidden="true" />

      {/* 3D Animated Three.js background */}
      <Suspense fallback={null}>
        <ThreeHero />
      </Suspense>

      {/* Soft ambient colour blobs */}
      <motion.div
        style={{ y: yBg }}
        animate={{ x: [0, 15, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-ai-purple/6 rounded-full blur-[130px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: yBgReverse }}
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[-15%] left-[5%] w-[35vw] h-[35vw] bg-ai-cyan/5 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* Hero Header Status Info */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-ai-border/30 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-ai-text-secondary"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Available for opportunities
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs font-mono uppercase tracking-widest text-ai-cyan"
        >
          ECE · FULL-STACK · IoT
        </motion.div>
      </div>

      {/* Main Copy / Titles + Profile Photo */}
      <div className="relative z-10 my-auto pt-16 pb-12 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">

          {/* Left: Headline */}
          <div className="flex-1">
            <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6.5rem] font-bold tracking-tighter leading-[0.9] text-ai-text">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Building software
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                  className="block"
                >
                  that creates{' '}
                  <em className="not-italic bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
                    impact.
                  </em>
                </motion.span>
              </span>
            </h1>

            {/* Intro description & Actions */}
            <div className="mt-12 flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg sm:text-xl text-ai-text-secondary leading-relaxed max-w-xl"
              >
                I engineer thoughtful digital products at the intersection of modern web architectures, connected systems, and IoT hardware.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  onMouseMove={(e) => handleMagneticMove(e, setCtaPos1)}
                  onMouseLeave={() => handleMagneticLeave(setCtaPos1)}
                  animate={{ x: ctaPos1.x, y: ctaPos1.y }}
                  className="px-8 py-3.5 bg-ai-text hover:bg-ai-cyan text-ai-bg font-semibold rounded-full flex items-center gap-6 shadow-xl hover:shadow-ai-cyan/10 transition-colors duration-300"
                >
                  Explore my work <ArrowDown size={14} />
                </motion.a>
                <motion.a
                  href="#contact"
                  onMouseMove={(e) => handleMagneticMove(e, setCtaPos2)}
                  onMouseLeave={() => handleMagneticLeave(setCtaPos2)}
                  animate={{ x: ctaPos2.x, y: ctaPos2.y }}
                  className="px-8 py-3.5 border border-ai-border hover:border-ai-text-secondary/50 text-ai-text font-semibold rounded-full bg-ai-card/30 hover:bg-ai-card flex items-center gap-4 transition-colors duration-300"
                >
                  Start a conversation <MessageSquare size={14} className="text-ai-cyan" />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto"
          >
            <div className="relative">
              {/* Outer ambient glow */}
              <div
                className="absolute -inset-4 rounded-full opacity-40 blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(6,182,212,0.2) 60%, transparent 100%)',
                }}
              />
              {/* Rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full opacity-70"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 40%, #06b6d4 50%, transparent 60%)',
                }}
              />
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Photo container */}
                <div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden"
                  style={{
                    border: '2px solid rgba(6, 182, 212, 0.35)',
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(6, 182, 212, 0.12), inset 0 0 30px rgba(0,0,0,0.4)',
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Koshigan — Software Engineer"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                  />
                  {/* Bottom fade overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 65%, rgba(10,10,15,0.25) 100%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Decorative orbital dot */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full bg-ai-cyan"
                  style={{
                    top: '5%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 10px rgba(6,182,212,0.9)',
                  }}
                />
              </motion.div>

              {/* Second orbital dot — purple */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="absolute w-2 h-2 rounded-full bg-ai-purple"
                  style={{
                    bottom: '8%',
                    right: '5%',
                    boxShadow: '0 0 8px rgba(139,92,246,0.9)',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 border-t border-ai-border/40 pt-6 mt-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
            className="p-4 pl-0 border-r border-ai-border/30 last:border-0 odd:border-r md:even:border-r"
          >
            <strong className="block text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ai-text">
              <Counter target={stat.value} suffix={stat.suffix} />
            </strong>
            <span className="block mt-2 text-xs font-mono uppercase tracking-wider text-ai-text-secondary">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator Cue */}
      <a
        href="#about"
        className="absolute right-6 sm:right-12 bottom-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-ai-text-secondary hover:text-ai-cyan duration-300 transform origin-right rotate-90 translate-x-[45px] hover:translate-x-[40px]"
      >
        Scroll to explore <span className="w-12 h-[1px] bg-ai-text-secondary hover:bg-ai-cyan" />
      </a>
    </section>
  )
}
