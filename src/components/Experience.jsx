import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      year: '2025',
      role: 'Full Stack Developer Intern',
      company: 'RevinTech',
      description: 'Built responsive interfaces, integrated backend rest services, collaborated closely across cross-functional requirements, and learned professional CI/CD deployment routines.',
      tag: 'Internship'
    },
    {
      year: 'Ongoing',
      role: 'Independent Product Builder',
      company: 'Personal Laboratory',
      description: 'Architecting and launching complete projects linking user interfaces, network databases, IoT hardware, and custom NLP models to refine full-system building skills.',
      tag: 'Projects'
    },
    {
      year: 'Current',
      role: 'Electronics & Communication Engineering',
      company: 'University Program',
      description: 'Acquiring deep foundations in circuit logic, signal communications, system processing protocols, microcontrollers, and low-level firmware engineering.',
      tag: 'Education'
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      desc: 'Foundational cloud architectural principles, security practices, and infrastructure billing configurations.'
    },
    {
      title: 'React Developer Certification',
      issuer: 'freeCodeCamp Developer Path',
      date: '2024',
      desc: 'Complete React components structure, conditional rendering state loops, hooks integration, and ES6 specs.'
    },
    {
      title: 'IoT & Telemetry Node Configurations',
      issuer: 'Technical Academy Partner',
      date: '2024',
      desc: 'Embedded system setups linking ESP32 boards, microcontrollers, sensor nodes, and MQTT message routing.'
    }
  ]

  return (
    <section 
      id="experience" 
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-ai-border bg-ai-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Head */}
        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ai-cyan block mt-1">
              04 / Experience
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ai-text">
              Learning through<br />ownership and action.
            </h2>
          </div>
        </div>

        {/* Experience Timeline Rows */}
        <div className="border-t border-ai-border/80">
          {experiences.map((exp, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="grid md:grid-cols-12 gap-6 py-10 border-b border-ai-border/80 items-start group relative hover:bg-ai-card/5 transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >
              <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-ai-cyan pt-1">
                {exp.year}
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ai-text font-sora leading-tight mb-2">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono text-ai-text-secondary uppercase tracking-widest mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-ai-text-secondary leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end pt-1">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-ai-text-secondary border border-ai-border/80 px-3 py-1 rounded-full bg-ai-card/30">
                  {exp.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certifications block */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold tracking-tight text-ai-text mb-8 font-sora">
            Certifications & Credentials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="studio-card p-6 rounded-2xl border border-ai-border bg-ai-card/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-ai-purple/10 rounded-lg text-ai-purple">
                      <Award size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-ai-text-secondary uppercase">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold tracking-tight text-ai-text mb-1 font-sora">
                    {cert.title}
                  </h4>
                  <span className="block text-xs font-mono text-ai-cyan mb-3">
                    {cert.issuer}
                  </span>
                  <p className="text-xs text-ai-text-secondary leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
