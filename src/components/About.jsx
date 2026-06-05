import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-hr-navy mb-16 text-center">
          About <span className="text-hr-teal">Me</span>
        </h2>

        {/* Quote */}
        <div className="glass-card-dark p-8 mb-12 border-l-4 border-hr-teal max-w-3xl mx-auto">
          <div className="flex gap-4">
            <FaQuoteLeft className="text-hr-teal text-3xl flex-shrink-0 mt-1" />
            <blockquote className="text-lg text-hr-dark italic">
              "I believe in writing clean, maintainable code that not only solves problems today but anticipates challenges tomorrow. 
              Every project is an opportunity to learn, grow, and create something meaningful."
            </blockquote>
          </div>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg text-hr-dark leading-relaxed">
              I'm a passionate full-stack developer with a background in computer science and years of professional experience 
              building web applications. My journey in tech has been driven by a curiosity to understand how things work and a 
              commitment to continuous learning.
            </p>
            
            <p className="text-lg text-hr-dark leading-relaxed">
              My expertise spans across modern web technologies including React, Node.js, Python, and database design. 
              I excel at translating complex requirements into elegant solutions while maintaining code quality and performance.
            </p>

            <p className="text-lg text-hr-dark leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or mentoring 
              junior developers. I'm always excited about new challenges and opportunities to make a positive impact.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4">
                <div className="font-semibold text-hr-navy mb-1">Based In</div>
                <p className="text-hr-dark">Your City, Country</p>
              </div>
              <div className="glass-card p-4">
                <div className="font-semibold text-hr-navy mb-1">Experience</div>
                <p className="text-hr-dark">5+ Years</p>
              </div>
              <div className="glass-card p-4">
                <div className="font-semibold text-hr-navy mb-1">Available For</div>
                <p className="text-hr-dark">Freelance & Full-time</p>
              </div>
              <div className="glass-card p-4">
                <div className="font-semibold text-hr-navy mb-1">Favorite Stack</div>
                <p className="text-hr-dark">React & Node.js</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg glow-teal">
              <img 
                src="/assets/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/256x256?text=Profile&bg=6B8E6F&fg=ffffff'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
