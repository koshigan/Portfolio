import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Star, GitFork, ArrowUpRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// Real GitHub projects from koshigan
const REAL_PROJECTS = [
  {
    id: 1,
    name: 'Voice_Assistant',
    display: 'Voice Assistant',
    description: 'Multilingual browser-based voice assistant using Web Speech API with real-time synthesis.',
    html_url: 'https://github.com/koshigan/Voice_Assistant',
    live: 'https://mobile-voice-ai.vercel.app',
    language: 'JavaScript',
    color: '#8b5cf6',
    category: 'AI · Web',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 2,
    name: 'Cable-Fault-Prediction-System',
    display: 'Cable Fault Predictor',
    description: 'IoT monitoring system for underground cable fault prediction using ESP32 sensor telemetry.',
    html_url: 'https://github.com/koshigan/Cable-Fault-Prediction-System',
    live: null,
    language: 'PHP',
    color: '#06b6d4',
    category: 'IoT · Embedded',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 3,
    name: 'ryux-esports',
    display: 'Ryux Esports',
    description: 'Full-featured esports platform with tournament management and live match tracking.',
    html_url: 'https://github.com/koshigan/ryux-esports',
    live: null,
    language: 'JavaScript',
    color: '#f59e0b',
    category: 'Full Stack · Platform',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 4,
    name: 'SkyDeploy',
    display: 'SkyDeploy',
    description: 'Cloud deployment automation tool for rapid CI/CD pipeline setup and hosting configuration.',
    html_url: 'https://github.com/koshigan/SkyDeploy',
    live: null,
    language: 'HTML',
    color: '#10b981',
    category: 'DevOps · Cloud',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 5,
    name: 'Neon-Snake-Game',
    display: 'Neon Snake Game',
    description: 'Visually stunning neon-themed Snake game built with JavaScript canvas animations.',
    html_url: 'https://github.com/koshigan/Neon-Snake-Game',
    live: 'https://neon-snake-game-two.vercel.app',
    language: 'JavaScript',
    color: '#ec4899',
    category: 'Game · Canvas',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 6,
    name: 'Mom-s-Site',
    display: "Mom's Site",
    description: 'A beautiful personal website built with love — full responsive design and modern UI.',
    html_url: "https://github.com/koshigan/Mom-s-Site",
    live: 'https://mom-s-site-seven.vercel.app',
    language: 'JavaScript',
    color: '#f97316',
    category: 'Web · Design',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 7,
    name: 'Projects',
    display: 'Bank Account System',
    description: 'Java-based banking application: create accounts, deposit, withdraw, and access anytime.',
    html_url: 'https://github.com/koshigan/Projects',
    live: null,
    language: 'Java',
    color: '#3b82f6',
    category: 'Backend · Java',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 8,
    name: 'Portfolio',
    display: 'This Portfolio',
    description: 'Personal developer portfolio — 3D animations, live GitHub integration, glassmorphism UI.',
    html_url: 'https://github.com/koshigan/Portfolio',
    live: 'https://portfolio-swart-delta-74.vercel.app',
    language: 'JavaScript',
    color: '#a78bfa',
    category: 'React · Three.js',
    stargazers_count: 0,
    forks_count: 0,
  },
]

// Color map for language badges
const LANG_COLORS = {
  JavaScript: '#f7df1e',
  PHP: '#777bb4',
  HTML: '#e34f26',
  Java: '#f89820',
  CSS: '#264de4',
  Python: '#3572A5',
  TypeScript: '#3178c6',
}

// Floating 3D background orb for the scene
function SceneOrb({ position, color, size }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2
      ref.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })
  return (
    <Float speed={1.5} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.12}
          distort={0.5}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

// Mini 3D canvas for each project card
function ProjectCardCanvas({ color }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={1.5} color={color} />
      <SceneOrb position={[0, 0, 0]} color={color} size={1.2} />
    </Canvas>
  )
}

// Individual Project Card
function ProjectCard({ project, idx }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateY: hovered ? 4 : 0,
          rotateX: hovered ? -4 : 0,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative rounded-3xl overflow-hidden border border-white/8 bg-[#0d0d15]/90 backdrop-blur-xl h-full flex flex-col"
        style={{
          boxShadow: hovered
            ? `0 30px 80px -20px ${project.color}40, 0 0 0 1px ${project.color}30`
            : '0 10px 40px -15px rgba(0,0,0,0.6)',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        {/* 3D Canvas Preview area */}
        <div
          className="relative h-36 w-full overflow-hidden"
          style={{ background: `radial-gradient(ellipse at center, ${project.color}18 0%, #0a0a0f 70%)` }}
        >
          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <ProjectCardCanvas color={project.color} />
          </div>

          {/* Glow center dot */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-xl"
            style={{ background: `${project.color}40` }}
          />

          {/* Category badge top-left */}
          <span
            className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-sm"
            style={{ borderColor: `${project.color}50`, color: project.color, background: `${project.color}15` }}
          >
            {project.category}
          </span>

          {/* Live badge top-right */}
          {project.live && (
            <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border border-green-500/40 text-green-400 bg-green-500/10 backdrop-blur-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* Card content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Lang dot */}
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: LANG_COLORS[project.language] || '#888' }}
            />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{project.language}</span>
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold tracking-tight text-white leading-tight font-sora transition-colors duration-300"
            style={{ color: hovered ? project.color : '#f8f8f8' }}
          >
            {project.display}
          </h3>

          {/* Description */}
          <p className="text-xs text-white/50 leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Footer */}
          <div className="pt-3 border-t border-white/6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[10px] font-mono text-white/30">
              <span className="flex items-center gap-1">
                <Star size={10} className="text-yellow-500/60" /> {project.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={10} className="text-cyan-500/60" /> {project.forks_count}
              </span>
            </div>

            <div className="flex gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg border border-white/10 hover:border-green-500/50 text-white/40 hover:text-green-400 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={11} />
                </a>
              )}
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg border border-white/10 hover:border-white/40 text-white/40 hover:text-white transition-colors"
                title="GitHub"
              >
                <FaGithub size={11} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main section
export default function ThreeProjects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-ai-bg overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section head */}
        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mt-1">
              02 / Projects
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
              Built with purpose,<br />shipped to GitHub.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base text-ai-text-secondary max-w-2xl leading-relaxed"
            >
              Every project below is a real repository from{' '}
              <a
                href="https://github.com/koshigan"
                target="_blank"
                rel="noreferrer"
                className="text-ai-cyan hover:underline"
              >
                github.com/koshigan
              </a>{' '}
              — spanning AI, IoT, full-stack web, and embedded systems.
            </motion.p>
          </div>
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {REAL_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-ai-border/40"
        >
          <p className="text-sm text-ai-text-secondary font-mono text-center">
            More repositories available on GitHub ·{' '}
            <span className="text-ai-cyan">@koshigan</span>
          </p>
          <a
            href="https://github.com/koshigan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-ai-border hover:border-ai-cyan/60 rounded-full text-xs font-semibold uppercase tracking-wider text-ai-text hover:text-ai-cyan bg-ai-card/30 hover:bg-ai-card transition-all duration-300"
          >
            <FaGithub size={16} />
            View All on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
