import React, { useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Cpu, Brain, Terminal } from 'lucide-react'

// Inline micro 3D orb — rendered per skill card for a living preview
function SkillOrb({ color }) {
  // Pure CSS 3D orb — no canvas overhead for 6 cards
  return (
    <div
      className="w-10 h-10 rounded-full flex-shrink-0"
      style={{
        background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}22)`,
        boxShadow: `0 0 20px ${color}55, inset 0 0 12px ${color}22`,
        animation: 'float 4s ease-in-out infinite',
      }}
    />
  )
}

export default function Skills() {
  const categories = [
    {
      index: '01',
      title: 'Frontend',
      description: 'React, JavaScript, HTML5, CSS3, responsive architectures, premium animations.',
      level: 88,
      icon: Globe,
      color: '#06b6d4',
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      index: '02',
      title: 'Backend',
      description: 'Java, Python, Node.js, Express, REST API creation, secure routes.',
      level: 78,
      icon: Terminal,
      color: '#8b5cf6',
      tags: ['Java', 'Python', 'Node.js', 'REST API'],
    },
    {
      index: '03',
      title: 'Databases',
      description: 'MySQL, structured SQL schemas, query optimization, data persistence.',
      level: 74,
      icon: Database,
      color: '#f59e0b',
      tags: ['MySQL', 'SQL', 'Schema Design'],
    },
    {
      index: '04',
      title: 'Cloud & DevOps',
      description: 'Git, GitHub, Vercel, Docker containers, automated deploy runs.',
      level: 70,
      icon: Code,
      color: '#10b981',
      tags: ['Git', 'GitHub', 'Vercel', 'Docker'],
    },
    {
      index: '05',
      title: 'AI & Machine Learning',
      description: 'Speech recognition APIs, predictive regression models, statistical data audits.',
      level: 76,
      icon: Brain,
      color: '#ec4899',
      tags: ['Web Speech API', 'ML Models', 'NLP'],
    },
    {
      index: '06',
      title: 'Connected Systems',
      description: 'ESP32 boards, telemetry nodes, sensor logic calibration, MQTT protocols.',
      level: 82,
      icon: Cpu,
      color: '#3b82f6',
      tags: ['ESP32', 'IoT', 'MQTT', 'Embedded C'],
    },
  ]

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-ai-bg overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ai-purple/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Head */}
        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mt-1">
              03 / Capabilities
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
              A practical stack for<br />ambitious products.
            </motion.h2>
          </div>
        </div>

        {/* 3D Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  rotateY: 3,
                  rotateX: -2,
                }}
                style={{ perspective: 800, transformStyle: 'preserve-3d' }}
                className="relative rounded-2xl border border-ai-border/60 bg-ai-card/20 backdrop-blur-sm p-7 flex flex-col gap-5 group cursor-default overflow-hidden"
              >
                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${cat.color}15 0%, transparent 70%)`,
                    boxShadow: `inset 0 0 0 1px ${cat.color}30`,
                  }}
                />

                {/* Top row: orb + index + icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <SkillOrb color={cat.color} />
                    <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: cat.color }}>
                      {cat.index}
                    </span>
                  </div>
                  <div
                    className="p-2.5 rounded-xl border transition-colors duration-300"
                    style={{
                      borderColor: `${cat.color}30`,
                      background: `${cat.color}10`,
                      color: cat.color,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold tracking-tight font-sora text-ai-text group-hover:transition-colors duration-300"
                  style={{ '--hover-color': cat.color }}
                >
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ai-text-secondary leading-relaxed flex-1">
                  {cat.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                      style={{ borderColor: `${cat.color}35`, color: `${cat.color}cc`, background: `${cat.color}0d` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono mb-2">
                    <span className="text-ai-text-secondary uppercase tracking-wider">Proficiency</span>
                    <span className="font-semibold" style={{ color: cat.color }}>{cat.level}%</span>
                  </div>
                  <div className="w-full h-[2px] bg-ai-border/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.08 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})` }}
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom tech marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-ai-border/40 overflow-hidden"
        >
          <p className="text-[10px] font-mono uppercase tracking-widest text-ai-text-secondary mb-6 text-center">
            Technologies I work with
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              'React', 'JavaScript', 'Java', 'Python', 'PHP', 'HTML5', 'CSS3',
              'Node.js', 'MySQL', 'Git', 'Vercel', 'Docker', 'ESP32', 'MQTT',
              'Web Speech API', 'REST API', 'Three.js', 'Framer Motion',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-ai-border/60 text-ai-text-secondary hover:text-ai-cyan hover:border-ai-cyan/40 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
