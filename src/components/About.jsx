import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Award, GraduationCap, MapPin, Sparkles } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Started building for the web',
      description: 'Turned programming fundamentals into responsive interfaces and practical, database-backed applications.',
    },
    {
      year: '2025',
      title: 'Full-stack developer internship',
      description: 'Worked with real product requirements, API integration, Git-based collaboration, and cloud deployment workflows.',
    },
    {
      year: 'Now',
      title: 'Engineering intelligent products',
      description: 'Combining full-stack development, IoT hardware, and machine learning to build cohesive systems with measurable value.',
    },
    {
      year: 'Next',
      title: 'Product engineering at scale',
      description: 'Growing toward high-impact engineering teams where craft, performance, and ambition matter.',
    },
  ]

  const facts = [
    { label: 'Academic Focus', value: 'ECE Student (Electronics & Communication)', icon: GraduationCap },
    { label: 'Current Base', value: 'India', icon: MapPin },
    { label: 'Core Philosophy', value: 'Solve the whole problem, not just one layer', icon: Sparkles },
    { label: 'Design Theme', value: 'Minimalist luxury, performance first', icon: Award },
  ]

  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-ai-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Head */}
        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mt-1">
              01 / Profile
            </span>
          </div>
          <div className="md:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ai-text"
            >
              Curiosity, translated<br />into working systems.
            </motion.h2>
          </div>
        </div>

        {/* About Body Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Columns - Bio Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-2xl sm:text-3xl font-medium tracking-tight text-ai-text leading-tight font-sora">
                I am an Electronics and Communication Engineering student who thinks like a product engineer.
              </p>
              <p className="text-base text-ai-text-secondary leading-relaxed">
                I enjoy moving between interface design, backend logic, embedded hardware, and AI/ML models to solve the whole problem, not only one isolated layer of it. I aim to create things that are reliable, highly optimized, and satisfying to use.
              </p>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-ai-text border-b border-ai-border pb-1 hover:border-ai-cyan hover:text-ai-cyan transition-colors"
              >
                More about how I work <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {facts.map((fact, idx) => {
                const Icon = fact.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="studio-card p-5 rounded-xl border border-ai-border/40 bg-ai-card/30 flex gap-4 items-start"
                  >
                    <div className="p-2 bg-ai-cyan/10 rounded-lg text-ai-cyan flex-shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary mb-1">
                        {fact.label}
                      </span>
                      <p className="text-sm font-medium text-ai-text leading-snug">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Columns - Story Timeline */}
          <div className="lg:col-span-7">
            <div className="relative border-l border-ai-border/80 ml-4 pl-8 space-y-12">
              {timeline.map((item, idx) => (
                <motion.article 
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: idx * 0.12 }}
                  className="relative"
                >
                  {/* Timeline bullet indicator */}
                  <span className="absolute left-[-41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ai-bg">
                    <span className="h-2 w-2 rounded-full bg-ai-cyan ring-4 ring-ai-cyan/25 animate-pulse" />
                  </span>

                  <span className="inline-block text-[10px] font-mono tracking-widest text-ai-cyan uppercase mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-ai-text mb-2 font-sora">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ai-text-secondary leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
