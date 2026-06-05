import React, { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import DeveloperOS from './components/DeveloperOS'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const ThreeProjects = lazy(() => import('./components/ThreeProjects'))

function App() {
  const [theme, setTheme] = useState('dark')
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    // Hide the pre-render HTML loader with a fade
    const loader = document.querySelector('.loader')
    if (loader) {
      setTimeout(() => {
        loader.classList.add('done')
      }, 550)
    }

    // Load theme from localStorage (defaulting to dark)
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)

    // Mouse movement tracker for ambient glow spot
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className={`min-h-screen text-ai-text font-inter antialiased ${theme === 'dark' ? 'dark bg-ai-bg' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background visual glow spot */}
      <div 
        className="cursor-glow hidden md:block" 
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} 
        aria-hidden="true" 
      />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Suspense fallback={
          <div className="py-32 text-center text-ai-text-secondary text-sm font-mono">Loading projects…</div>
        }>
          <ThreeProjects />
        </Suspense>
        <Skills />
        <DeveloperOS />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
