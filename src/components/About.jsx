import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-ai-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ai-text mb-16 text-center">
          About <span className="text-ai-cyan">Me</span>
        </h2>

        {/* Quote */}
        <div className="glass-card-dark p-8 mb-12 border-l-4 border-ai-cyan max-w-3xl mx-auto bg-ai-card border border-ai-border">
          <div className="flex gap-4">
            <FaQuoteLeft className="text-ai-cyan text-3xl flex-shrink-0 mt-1" />
            <blockquote className="text-lg text-ai-text-secondary italic">
              "Code is poetry, and every project is a masterpiece waiting to happen.
              I build products that inspire, solve real problems, and push the boundaries of what's possible."
            </blockquote>
          </div>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg text-ai-text-secondary leading-relaxed">
              I'm a full-stack developer and AI enthusiast passionate about building next-generation web applications.
              With expertise in modern technologies and a deep understanding of developer experience, I create tools that matter.
            </p>
            
            <p className="text-lg text-ai-text-secondary leading-relaxed">
              My tech stack includes React, Node.js, TypeScript, and AI/ML integration.
              I specialize in building scalable systems, designing elegant APIs, and crafting beautiful user interfaces.
            </p>

            <p className="text-lg text-ai-text-secondary leading-relaxed">
              When I'm not coding, I explore emerging technologies, contribute to open-source, and share knowledge with the community.
              Always excited about new challenges and innovations.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="font-semibold text-ai-cyan mb-1">Based In</div>
                <p className="text-ai-text-secondary">Your City, Country</p>
              </div>
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="font-semibold text-ai-cyan mb-1">Experience</div>
                <p className="text-ai-text-secondary">5+ Years</p>
              </div>
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="font-semibold text-ai-cyan mb-1">Available For</div>
                <p className="text-ai-text-secondary">Freelance & Full-time</p>
              </div>
              <div className="glass-card p-4 bg-ai-card border border-ai-border">
                <div className="font-semibold text-ai-cyan mb-1">Favorite Stack</div>
                <p className="text-ai-text-secondary">React & Node.js</p>
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
