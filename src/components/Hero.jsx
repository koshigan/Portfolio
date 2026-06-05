import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ai-bg via-ai-bg-secondary to-ai-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-ai-cyan/10 text-ai-cyan rounded-full text-sm font-semibold border border-ai-cyan/30">
                ✨ Developer with AI Powers
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-ai-text mb-4 leading-tight">
                Your Name
              </h1>
              <p className="text-2xl text-ai-cyan font-semibold">
                Full Stack Developer & AI Enthusiast
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-ai-text-secondary leading-relaxed max-w-xl">
              Passionate about building cutting-edge web applications with modern technologies.
              Specialized in React, AI integration, and developer tools that scale.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="text-3xl font-bold text-ai-cyan">10+</div>
                <div className="text-sm text-ai-text-secondary">Projects</div>
              </div>
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="text-3xl font-bold text-ai-green">100%</div>
                <div className="text-sm text-ai-text-secondary">Dedication</div>
              </div>
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="text-3xl font-bold text-ai-purple">5+</div>
                <div className="text-sm text-ai-text-secondary">Years Exp</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-ai-purple text-ai-text rounded-lg hover:bg-ai-purple hover:opacity-90 transition-all flex items-center gap-2 font-semibold border border-ai-purple"
              >
                View My Work <FaArrowRight />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-ai-cyan text-ai-cyan rounded-lg hover:bg-ai-cyan hover:text-ai-bg transition-colors font-semibold"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" className="p-3 bg-ai-purple text-ai-text rounded-full hover:bg-ai-blue transition-colors border border-ai-border">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" className="p-3 bg-ai-cyan text-ai-bg rounded-full hover:bg-ai-blue transition-colors border border-ai-border">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right - Illustration/Image Area */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan to-ai-purple rounded-3xl opacity-20 animate-float"></div>
              <div className="absolute inset-8 bg-gradient-to-tr from-ai-purple to-ai-cyan rounded-3xl opacity-30 animate-float" style={{animationDelay: '0.2s'}}></div>
              
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
