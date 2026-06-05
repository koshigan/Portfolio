import React from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// Live Waveform Visual for Voice Assistant Mockup
function VoiceWaveMockup() {
  const bars = Array.from({ length: 9 })
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-ai-bg-secondary/90 shadow-2xl p-6 backdrop-blur-md transform hover:scale-[1.03] transition-transform duration-500">
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] font-mono text-ai-text-secondary uppercase tracking-widest">voice.system / live</span>
      </div>
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <span className="text-[10px] font-mono text-ai-cyan uppercase tracking-widest flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
          Listening
        </span>
        <div className="flex items-end justify-center gap-1.5 h-14 mb-6">
          {bars.map((_, i) => (
            <motion.span
              key={i}
              className="w-1.5 bg-gradient-to-t from-ai-purple via-ai-blue to-ai-cyan rounded-full"
              animate={{ 
                height: [12, 48, 16, 32, 12][i % 5] ? [12, 48, 16, 32, 12] : [12, 48] 
              }}
              transition={{
                duration: 0.8 + (i * 0.1),
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        <strong className="text-lg font-semibold text-ai-text tracking-tight font-sora">How can I help?</strong>
        <p className="text-xs text-ai-text-secondary mt-1.5">Voice analysis active via Web Speech API</p>
      </div>
    </div>
  )
}

// Live Chart Grid Mockup for Cable Fault Detection
function CableChartMockup() {
  const data = [30, 48, 38, 70, 52, 85, 62, 95, 74]
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-ai-bg-secondary/90 shadow-2xl p-5 backdrop-blur-md transform hover:scale-[1.03] transition-transform duration-500">
      <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ai-cyan" />
          <span className="text-[10px] font-mono text-ai-text uppercase tracking-wider">Grid Monitor</span>
        </div>
        <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full uppercase">Live</span>
      </div>
      
      {/* Chart visualization */}
      <div className="flex items-end justify-between gap-1.5 h-36 border-b border-white/5 pb-2">
        {data.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-ai-cyan/20 to-ai-cyan rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2 mt-4 text-center">
        <div>
          <span className="block text-[9px] font-mono text-ai-text-secondary uppercase">Voltage</span>
          <strong className="text-sm font-semibold text-ai-text">228V</strong>
        </div>
        <div>
          <span className="block text-[9px] font-mono text-ai-text-secondary uppercase">Health</span>
          <strong className="text-sm font-semibold text-ai-text">96%</strong>
        </div>
        <div>
          <span className="block text-[9px] font-mono text-ai-text-secondary uppercase">Alerts</span>
          <strong className="text-sm font-semibold text-red-500">01</strong>
        </div>
      </div>
    </div>
  )
}

// Attendance Dashboard Mockup Panel
function DashboardMockup() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-ai-bg-secondary/90 shadow-2xl overflow-hidden backdrop-blur-md transform hover:scale-[1.03] transition-transform duration-500">
      <div className="grid grid-cols-12 h-56">
        {/* Sidebar */}
        <div className="col-span-3 border-r border-white/5 bg-black/20 p-3 flex flex-col gap-3">
          <span className="text-xs font-bold text-ai-blue font-sora">K.</span>
          <div className="w-full h-1.5 rounded-full bg-white/10" />
          <div className="w-full h-1.5 rounded-full bg-white/5" />
          <div className="w-full h-1.5 rounded-full bg-white/5" />
          <div className="w-full h-1.5 rounded-full bg-white/5" />
        </div>
        
        {/* Dashboard Content */}
        <div className="col-span-9 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[9px] font-mono text-ai-text-secondary">Overview</span>
              <span className="h-1.5 w-1.5 rounded-full bg-ai-cyan" />
            </div>
            <strong className="block text-sm font-medium text-ai-text leading-tight font-sora">Good morning.</strong>
            <p className="text-[10px] text-ai-text-secondary">Attendance records are synced.</p>
          </div>
          
          {/* Mock cards row */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="h-10 rounded bg-gradient-to-br from-ai-purple/20 to-white/5 border border-white/5" />
            <div className="h-10 rounded bg-gradient-to-br from-ai-blue/20 to-white/5 border border-white/5" />
            <div className="h-10 rounded bg-gradient-to-br from-ai-cyan/20 to-white/5 border border-white/5" />
          </div>

          {/* Table simulator lines */}
          <div className="space-y-1.5 pt-1.5 border-t border-white/5">
            <div className="w-full h-1.5 rounded bg-white/10" />
            <div className="w-3/4 h-1.5 rounded bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ githubProjects }) {
  const caseStudies = [
    {
      index: '01',
      category: 'AI Product · Web',
      title: 'Intelligent Voice Assistant',
      lead: 'A fast, accessible voice interface that makes browser-based assistance feel natural.',
      problem: 'Voice tools often feel slow, inaccessible, or technically intimidating to configure.',
      solution: 'A multilingual assistant with real-time speech recognition and synthesized responses.',
      result: 'Responsive, install-free conversations delivered through modern web browser Speech APIs.',
      technologies: 'Web Speech API · JavaScript · NLP',
      mockup: VoiceWaveMockup,
      github: 'https://github.com/koshigan',
      live: 'https://github.com/koshigan'
    },
    {
      index: '02',
      category: 'IoT · Predictive Systems',
      title: 'Predictive Cable Fault Detection',
      lead: 'An IoT monitoring system designed to identify underground cable faults before physical failure.',
      problem: 'Underground power/data cable issues are extremely expensive and slow to locate manually.',
      solution: 'ESP32 sensor-driven telemetry node monitoring with real-time voltage/resistance analysis.',
      result: 'Automated notification loops that isolate physical fault locations to prevent major cuts.',
      technologies: 'ESP32 · Sensors · Embedded C · ML',
      mockup: CableChartMockup,
      github: 'https://github.com/koshigan',
      live: null
    },
    {
      index: '03',
      category: 'Full Stack · Product Design',
      title: 'Attendance Platform',
      lead: 'A focused management panel designed to simplify logging and reporting workflows.',
      problem: 'Manual sheets create repetitive administrative tasks and high data inconsistency.',
      solution: 'A clean interface database integration for managers and employees with custom authorization.',
      result: 'Operational speed increases with consistent, searchable records accessible instantly.',
      technologies: 'JavaScript · REST API · MySQL',
      mockup: DashboardMockup,
      github: 'https://github.com/koshigan',
      live: null
    }
  ]

  return (
    <section 
      id="projects" 
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-ai-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Head */}
        <div className="grid md:grid-cols-12 gap-6 mb-24">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mt-1">
              02 / Case Studies
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ai-text">
              Projects built around<br />real problems.
            </h2>
          </div>
        </div>

        {/* Case Studies Lists */}
        <div className="space-y-32">
          {caseStudies.map((project, idx) => {
            const Mockup = project.mockup
            const isEven = idx % 2 === 0
            
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual side */}
                <div className={`lg:col-span-7 flex justify-center py-12 px-6 sm:px-12 rounded-3xl border border-ai-border/40 bg-gradient-to-br from-ai-card/30 to-ai-bg/10 relative overflow-hidden group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Visual design glow backgrounds */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-ai-purple/5 to-ai-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10 w-full flex justify-center">
                    <Mockup />
                  </div>
                </div>

                {/* Info details side */}
                <div className={`lg:col-span-5 flex flex-col ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ai-text-secondary border-b border-ai-border/40 pb-4 mb-8">
                    <span className="text-ai-cyan font-semibold">{project.index}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-ai-text mb-4 font-sora">
                    {project.title}
                  </h3>

                  <p className="text-base sm:text-lg text-ai-text-secondary leading-relaxed mb-8">
                    {project.lead}
                  </p>

                  <div className="space-y-4 border-t border-ai-border/40 pt-6 mb-8">
                    <div className="grid grid-cols-4 gap-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ai-cyan col-span-1 pt-0.5">Problem</span>
                      <p className="text-sm text-ai-text-secondary col-span-3">{project.problem}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-t border-ai-border/10 pt-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ai-cyan col-span-1 pt-0.5">Solution</span>
                      <p className="text-sm text-ai-text-secondary col-span-3">{project.solution}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-t border-ai-border/10 pt-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ai-cyan col-span-1 pt-0.5">Result</span>
                      <p className="text-sm text-ai-text-secondary col-span-3">{project.result}</p>
                    </div>
                  </div>

                  {/* Tech stack and Action links */}
                  <div className="flex flex-col gap-6 pt-6 border-t border-ai-border/40 mt-auto">
                    <span className="text-xs font-mono text-ai-text-secondary">
                      Built with: <span className="text-ai-text font-medium">{project.technologies}</span>
                    </span>
                    
                    <div className="flex gap-4">
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 bg-ai-text hover:bg-ai-cyan text-ai-bg text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 border border-ai-border hover:border-ai-text-secondary/50 text-ai-text text-xs font-semibold uppercase tracking-wider rounded-full bg-ai-card/30 hover:bg-ai-card flex items-center gap-2 transition-colors"
                      >
                        <FaGithub size={14} /> GitHub Link
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Dynamic GitHub Repos grid */}
        <div className="mt-36">
          <h3 className="text-2xl font-bold tracking-tight text-ai-text mb-8 font-sora">
            More From GitHub
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((repo, idx) => (
              <motion.a
                key={repo.id || idx}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="studio-card p-6 rounded-2xl border border-ai-border bg-ai-card/30 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-ai-cyan uppercase tracking-wider">
                      {repo.language || 'Software'}
                    </span>
                    <ArrowUpRight size={14} className="text-ai-text-secondary group-hover:text-ai-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="text-lg font-semibold tracking-tight text-ai-text mb-2 group-hover:text-ai-cyan transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-ai-text-secondary leading-relaxed mb-6 line-clamp-2">
                    {repo.description || 'Continuous engineering updates. Explore the repository directory for code reviews.'}
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex gap-4 items-center text-xs font-mono text-ai-text-secondary pt-4 border-t border-ai-border/20">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} className="text-ai-cyan" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
