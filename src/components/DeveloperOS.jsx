import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Flame, Activity, TrendingUp, Compass, Box, ArrowRight } from 'lucide-react'

export default function DeveloperOS() {
  // Terminal emulator state
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { cmd: 'system_info', output: 'Koshigan OS v2.6 initialized. Type `/help` to see available commands.' }
  ])
  const terminalEndRef = useRef(null)

  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const cleanCmd = terminalInput.trim().toLowerCase()
    if (!cleanCmd) return

    let output = ''
    switch (cleanCmd) {
      case '/help':
        output = 'Available commands: `/about`, `/stack`, `/streak`, `/roadmap`, `/clear`, `/help`'
        break
      case '/about':
        output = 'Koshigan is an Electronics & Communication Engineering student & Product Engineer building interfaces, backends, IoT, and ML systems.'
        break
      case '/stack':
        output = 'Languages: React, JS/TS, Python, C++ | IoT: ESP32, MQTT | DBs: MySQL, REST APIs'
        break
      case '/streak':
        output = 'Current Coding Streak: 28 Days. Logged average 4.5 hours of focus daily.'
        break
      case '/roadmap':
        output = 'Path: [Done] Foundation -> [Done] Full Stack Intern -> [Active] Product Engineer -> [Next] Lead Developer'
        break
      case '/clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        output = `Command "${cleanCmd}" not found. Type \`/help\` for list of terminal features.`
    }

    setTerminalHistory(prev => [...prev, { cmd: terminalInput, output }])
    setTerminalInput('')
  }

  // Scroll to bottom of terminal when logs print
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalHistory])

  // Custom visual states
  const stack = ['React', 'JavaScript', 'Python', 'ESP32', 'MySQL', 'Git', 'Embedded C', 'REST API']
  
  const activityData = [
    { label: 'W1', value: 30, commits: 14 },
    { label: 'W2', value: 55, commits: 22 },
    { label: 'W3', value: 42, commits: 18 },
    { label: 'W4', value: 80, commits: 35 },
    { label: 'W5', value: 64, commits: 28 },
    { label: 'W6', value: 92, commits: 40 },
    { label: 'W7', value: 72, commits: 31 },
    { label: 'W8', value: 100, commits: 45 },
    { label: 'W9', value: 85, commits: 38 },
    { label: 'W10', value: 60, commits: 25 },
    { label: 'W11', value: 76, commits: 33 },
    { label: 'W12', value: 95, commits: 42 }
  ]

  const learning = [
    { subject: 'System Design', progress: '68%' },
    { subject: 'Machine Learning', progress: '74%' },
    { subject: 'Cloud Architecture', progress: '52%' }
  ]

  return (
    <section 
      id="os" 
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-gradient-to-b from-ai-bg via-ai-bg/60 to-ai-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Head */}
        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mt-1">
              03 / Developer OS
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ai-text">
              A live view of my<br />engineering journey.
            </h2>
          </div>
        </div>

        {/* Dashboard Shell Box */}
        <div className="rounded-2xl border border-ai-border bg-[#0C0C12] shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden relative">
          
          {/* OS Window header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-ai-border/80 bg-black/30">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" />
            </div>
            <span className="text-[10px] font-mono text-ai-text-secondary uppercase tracking-widest">
              developer-os / koshigan
            </span>
            <span className="text-[10px] font-mono text-ai-cyan uppercase tracking-widest">
              v2.6
            </span>
          </div>

          {/* OS Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-ai-border/80">
            
            {/* Card 1: Stack */}
            <article className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-ai-border/70 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center text-xs font-mono uppercase text-ai-text-secondary mb-6">
                <span>Current Stack</span>
                <Box size={14} className="text-ai-cyan" />
              </div>
              <div className="flex flex-wrap gap-2 my-auto">
                {stack.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-xs rounded-lg border border-ai-border bg-ai-card/40 text-ai-text hover:border-ai-cyan/40 hover:bg-ai-card/90 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Card 2: Coding Streak */}
            <article className="p-6 sm:p-8 border-b md:border-b-0 lg:border-r border-ai-border/70 flex flex-col justify-between min-h-[220px] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-center text-xs font-mono uppercase text-ai-text-secondary mb-4 relative z-10">
                <span>Coding Streak</span>
                <Flame size={14} className="text-orange-500 animate-pulse" />
              </div>
              <div className="my-auto relative z-10">
                <strong className="block text-6xl font-bold tracking-tighter text-ai-text">
                  28 <span className="text-lg font-normal text-ai-text-secondary">days</span>
                </strong>
                {/* Visual mini coding blocks streak mock */}
                <div className="flex gap-1.5 h-6 mt-4">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                      className="flex-1 bg-green-500/60 rounded-[1px] origin-bottom shadow-[0_0_8px_rgba(34,197,94,0.3)]" 
                    />
                  ))}
                </div>
              </div>
            </article>

            {/* Card 3: GitHub Activity */}
            <article className="p-6 sm:p-8 border-b lg:border-b-0 border-ai-border/70 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center text-xs font-mono uppercase text-ai-text-secondary mb-4">
                <span>GitHub activity</span>
                <Activity size={14} className="text-ai-purple" />
              </div>
              <div className="flex items-end justify-between gap-1 h-24 mt-2">
                {activityData.map((week, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center group/bar cursor-pointer">
                    {/* Tooltip on hover */}
                    <div className="absolute transform -translate-y-8 bg-ai-card border border-ai-border text-[9px] font-mono text-ai-text px-1.5 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none">
                      {week.commits} commits
                    </div>
                    <motion.div
                      className="w-full bg-gradient-to-t from-ai-purple to-ai-cyan rounded-t-sm origin-bottom"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${week.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.04 }}
                    />
                  </div>
                ))}
              </div>
              <span className="block text-[10px] font-mono text-ai-text-secondary mt-4">
                Consistent building · Last 12 weeks
              </span>
            </article>

            {/* Card 4: Learning Progress */}
            <article className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-ai-border/70 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center text-xs font-mono uppercase text-ai-text-secondary mb-4">
                <span>Learning progress</span>
                <TrendingUp size={14} className="text-ai-cyan" />
              </div>
              <div className="space-y-4 my-auto">
                {learning.map((track, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-ai-text">
                      <span>{track.subject}</span>
                      <span className="text-ai-text-secondary">{track.progress}</span>
                    </div>
                    <div className="w-full h-1 bg-ai-border rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: track.progress }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-ai-purple to-ai-cyan rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Card 5: Career Roadmap */}
            <article className="p-6 sm:p-8 border-b md:border-b-0 lg:border-r border-ai-border/70 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center text-xs font-mono uppercase text-ai-text-secondary mb-4">
                <span>Career roadmap</span>
                <Compass size={14} className="text-ai-purple" />
              </div>
              <div className="flex flex-col gap-3 my-auto ml-1.5">
                {[
                  { stage: 'Foundation', status: 'done' },
                  { stage: 'Full Stack Intern', status: 'done' },
                  { stage: 'Product Engineer', status: 'active' },
                  { stage: 'Scale & Lead', status: 'future' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <div className={`h-2.5 w-2.5 rounded-full z-10 ${
                        item.status === 'done' ? 'bg-ai-cyan' :
                        item.status === 'active' ? 'bg-ai-purple shadow-[0_0_8px_#8b5cf6]' :
                        'bg-ai-border'
                      }`} />
                      {i < 3 && <div className="absolute top-2 w-[1px] h-6 bg-ai-border" />}
                    </div>
                    <span className={`text-xs font-medium ${
                      item.status === 'active' ? 'text-ai-text font-semibold' : 'text-ai-text-secondary'
                    }`}>
                      {item.stage}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            {/* Card 6: Latest Project */}
            <article className="p-6 sm:p-8 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center text-xs font-mono uppercase text-ai-text-secondary mb-4">
                <span>Latest Project</span>
                <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest">In Dev</span>
              </div>
              <div className="my-auto">
                <span className="text-[10px] font-mono text-ai-cyan uppercase tracking-widest block mb-1">
                  Intelligent System
                </span>
                <h4 className="text-xl font-bold tracking-tight text-ai-text font-sora leading-tight mb-2">
                  Systems Dashboard Control
                </h4>
                <p className="text-xs text-ai-text-secondary leading-relaxed">
                  Active monitoring dashboard aggregating remote ESP32 telemetry signals over MQTT hooks.
                </p>
              </div>
              <a 
                href="#projects" 
                className="text-xs font-semibold uppercase tracking-wider text-ai-text-secondary hover:text-ai-cyan flex items-center gap-2 mt-4"
              >
                Open case study <ArrowRight size={12} />
              </a>
            </article>

          </div>

          {/* Interactive Shell / Terminal widget at bottom */}
          <div className="p-6 bg-[#09090D] border-t border-ai-border/80">
            <div className="flex items-center gap-2 text-ai-text-secondary mb-4 text-xs font-mono">
              <Terminal size={14} className="text-ai-cyan" />
              <span>Interactive Command Shell (OS Command Line)</span>
            </div>

            {/* Terminal History Logs */}
            <div className="max-h-[160px] overflow-y-auto font-mono text-xs text-green-400 space-y-2 mb-4 scrollbar-thin">
              {terminalHistory.map((log, idx) => (
                <div key={idx} className="space-y-1">
                  {log.cmd !== 'system_info' && (
                    <div className="text-ai-text-secondary">koshigan-os % {log.cmd}</div>
                  )}
                  <div className="whitespace-pre-line text-green-400/90 leading-relaxed">{log.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 font-mono text-xs">
              <span className="text-ai-cyan flex-shrink-0">koshigan-os %</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command... (e.g. /help, /about, /stack, /roadmap)"
                className="flex-1 bg-transparent border-0 outline-none focus:ring-0 p-0 text-ai-text placeholder-ai-text-secondary/40"
              />
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
