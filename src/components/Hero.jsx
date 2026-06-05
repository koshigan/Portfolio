import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-hr-cream via-white to-hr-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-hr-teal/10 text-hr-teal rounded-full text-sm font-semibold border border-hr-teal/30">
                ✨ Professional Developer
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-hr-navy mb-4 leading-tight">
                Your Name
              </h1>
              <p className="text-2xl text-hr-green font-semibold">
                Full Stack Developer & Problem Solver
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-hr-dark leading-relaxed max-w-xl">
              Passionate about building beautiful, responsive web applications that solve real-world problems. 
              With expertise in modern technologies and a commitment to excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-4">
                <div className="text-3xl font-bold text-hr-teal">10+</div>
                <div className="text-sm text-hr-dark">Projects</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-3xl font-bold text-hr-green">100%</div>
                <div className="text-sm text-hr-dark">Dedication</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-3xl font-bold text-hr-gold">5+</div>
                <div className="text-sm text-hr-dark">Years Exp</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-hr-navy text-white rounded-lg hover:bg-hr-navy-light transition-colors flex items-center gap-2 font-semibold"
              >
                View My Work <FaArrowRight />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-hr-teal text-hr-teal rounded-lg hover:bg-hr-teal hover:text-white transition-colors font-semibold"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" className="p-3 bg-hr-navy text-white rounded-full hover:bg-hr-navy-light transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" className="p-3 bg-hr-teal text-white rounded-full hover:bg-hr-teal transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right - Illustration/Image Area */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-hr-teal to-hr-green rounded-3xl opacity-10 animate-float"></div>
              <div className="absolute inset-8 bg-gradient-to-tr from-hr-navy to-hr-teal rounded-3xl opacity-20 animate-float" style={{animationDelay: '0.2s'}}></div>
              
              {/* Profile Image Placeholder */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden glow-teal">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/320x320?text=Profile+Photo&bg=1a3a52&fg=ffffff'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
