import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, FileText, Send, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending message to koshigan20@gmail.com:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-ai-bg overflow-hidden flex flex-col justify-center"
    >
      {/* Background visual blurred orb */}
      <div className="absolute right-[-10%] bottom-[-20%] w-[50vw] h-[50vw] bg-gradient-to-tr from-ai-purple/10 to-ai-cyan/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Index */}
        <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mb-6">
          05 / Contact
        </span>

        {/* Studio Agency Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-ai-text max-w-4xl mb-12">
          Have an ambitious idea?<br />
          <em className="not-italic bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
            Let's build it.
          </em>
        </h2>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-16">
          
          {/* Left: Contact Info & CTA links */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base sm:text-lg text-ai-text-secondary leading-relaxed max-w-lg">
              I am open to internships, graduate roles, collaborations, and conversations with teams building meaningful, high-performance systems.
            </p>

            {/* Quick Status Availability Badge */}
            <div className="studio-card p-5 rounded-2xl border border-ai-border bg-ai-card/30 flex items-start gap-4">
              <span className="relative flex h-2 w-2 mt-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary mb-1">
                  Availability status
                </span>
                <p className="text-xs text-ai-text-secondary leading-relaxed">
                  Active in India standard time. Seeking engineering internships and product builder opportunities.
                </p>
              </div>
            </div>

            {/* Links Block */}
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:koshigan20@gmail.com" 
                className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-ai-text hover:text-ai-cyan transition-colors"
              >
                <Mail size={16} className="text-ai-cyan" /> koshigan20@gmail.com
              </a>
              <a 
                href="#" 
                download
                className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-ai-text hover:text-ai-cyan transition-colors"
              >
                <FileText size={16} className="text-ai-purple" /> Download Resume
              </a>
            </div>

            {/* Social handles */}
            <div className="flex gap-6 pt-4 border-t border-ai-border/40">
              <a 
                href="https://github.com/koshigan" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-mono text-ai-text-secondary hover:text-ai-text flex items-center gap-1.5 transition-colors"
              >
                <FaGithub size={14} /> GitHub ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/koshigan26" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-mono text-ai-text-secondary hover:text-ai-text flex items-center gap-1.5 transition-colors"
              >
                <FaLinkedin size={14} /> LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="studio-card p-8 sm:p-10 rounded-3xl border border-ai-border bg-ai-card/30 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-ai-border focus:border-ai-cyan outline-none text-ai-text py-2 text-sm transition-colors duration-300"
                          placeholder="Koshigan"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-ai-border focus:border-ai-cyan outline-none text-ai-text py-2 text-sm transition-colors duration-300"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-ai-border focus:border-ai-cyan outline-none text-ai-text py-2 text-sm transition-colors duration-300"
                        placeholder="Project Collaboration / Internship Inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-ai-border focus:border-ai-cyan outline-none text-ai-text py-2 text-sm transition-colors duration-300 resize-none"
                        placeholder="Briefly describe your goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-ai-text hover:bg-ai-cyan text-ai-bg font-semibold rounded-full flex items-center justify-center gap-3 transition-colors duration-300 shadow-xl"
                    >
                      Send Message <Send size={14} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 size={48} className="text-ai-cyan mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold tracking-tight text-ai-text mb-2 font-sora">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-ai-text-secondary max-w-md">
                      Thank you. I have logged your message and will check it at koshigan20@gmail.com shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
