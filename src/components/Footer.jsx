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
    <footer className="bg-hr-navy text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Your<span className="text-hr-teal">Dev</span>
            </h3>
            <p className="text-hr-gray text-sm leading-relaxed">
              A passionate developer creating beautiful, functional web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-hr-teal">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-hr-gray hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-hr-gray hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-hr-gray hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-hr-gray hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-hr-teal">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hr-gray hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-hr-gray hover:text-white transition-colors">Resume</a></li>
              <li><a href="#" className="text-hr-gray hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-hr-gray hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-hr-teal">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-hr-teal hover:bg-hr-green transition-colors flex items-center justify-center text-white"
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
        <div className="border-t border-hr-gray/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-hr-gray text-sm">
            © {currentYear} Your Name. All rights reserved. Built with <span className="text-hr-teal">❤</span> and React.
          </p>

          {/* Back to Top */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-3 rounded-full bg-hr-teal hover:bg-hr-green transition-colors flex items-center gap-2"
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
