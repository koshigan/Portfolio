import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourprofile', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/yourprofile', label: 'Twitter' }
  ]

  return (
    <footer className="bg-ai-bg-secondary text-ai-text pt-16 pb-8 border-t border-ai-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Your<span className="text-ai-cyan">Dev</span>
            </h3>
            <p className="text-ai-text-secondary text-sm leading-relaxed">
              A passionate developer creating beautiful, functional web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-ai-cyan">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-ai-text-secondary hover:text-ai-cyan transition-colors">About</a></li>
              <li><a href="#skills" className="text-ai-text-secondary hover:text-ai-cyan transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-ai-text-secondary hover:text-ai-cyan transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-ai-text-secondary hover:text-ai-cyan transition-colors">Experience</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-ai-purple">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-ai-text-secondary hover:text-ai-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-ai-text-secondary hover:text-ai-purple transition-colors">Resume</a></li>
              <li><a href="#" className="text-ai-text-secondary hover:text-ai-purple transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-ai-text-secondary hover:text-ai-purple transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-ai-blue">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-ai-card border border-ai-border hover:bg-ai-blue hover:border-ai-blue transition-colors flex items-center justify-center text-ai-text"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ai-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-ai-text-secondary text-sm">
            © {currentYear} Your Name. All rights reserved. Built with <span className="text-ai-cyan">care</span> and React.
          </p>

          {/* Back to Top */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-3 rounded-full bg-ai-purple hover:bg-ai-blue text-ai-text transition-colors flex items-center gap-2"
              aria-label="Back to top"
            >
              <FaArrowUp size={18} />
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}
