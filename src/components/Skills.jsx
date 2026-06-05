import React from 'react'
import { FaCode, FaDatabase, FaTools, FaBrain, FaFigma, FaGitAlt } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      colorClass: 'text-ai-cyan',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      title: 'Backend',
      icon: FaDatabase,
      colorClass: 'text-ai-blue',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      icon: FaTools,
      colorClass: 'text-ai-purple',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD']
    },
    {
      title: 'Design',
      icon: FaFigma,
      colorClass: 'text-ai-cyan',
      skills: ['UI/UX Design', 'Figma', 'Responsive Design', 'Accessibility', 'Animations']
    },
    {
      title: 'AI/ML',
      icon: FaBrain,
      colorClass: 'text-ai-purple',
      skills: ['TensorFlow', 'Python', 'Data Analysis', 'ML Basics', 'NLP']
    },
    {
      title: 'Soft Skills',
      icon: FaGitAlt,
      colorClass: 'text-ai-green',
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Mentoring', 'Agile']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-bg to-ai-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ai-text mb-16 text-center">
          Skills & <span className="text-ai-cyan">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div key={idx} className="glass-card hover-lift p-6 border-t-4 border-ai-cyan bg-ai-card border border-ai-border">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`text-3xl ${category.colorClass}`} />
                  <h3 className="text-2xl font-bold text-ai-text">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="px-4 py-2 bg-ai-cyan/10 border border-ai-cyan/30 rounded-lg text-ai-text font-medium hover:bg-ai-cyan/20 transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Proficiency indicator */}
                <div className="mt-6 pt-6 border-t border-ai-border">
                  <div className="text-sm text-ai-text-secondary mb-2">Proficiency</div>
                  <div className="w-full bg-ai-border rounded-full h-2">
                    <div className="bg-gradient-to-r from-ai-cyan to-ai-purple rounded-full h-2 w-5/6"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional skills */}
        <div className="mt-16 glass-card-dark p-8 rounded-xl bg-ai-card border border-ai-border">
          <h3 className="text-2xl font-bold text-ai-text mb-6">Technical Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-ai-cyan text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-ai-text">Full Stack Development</p>
                <p className="text-sm text-ai-text-secondary">End-to-end development from UI to database</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ai-cyan text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-ai-text">AI Integration</p>
                <p className="text-sm text-ai-text-secondary">Building intelligent systems with AI/ML</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ai-cyan text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-ai-text">Performance Optimization</p>
                <p className="text-sm text-ai-text-secondary">Building fast, scalable applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ai-cyan text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-ai-text">Clean Code</p>
                <p className="text-sm text-ai-text-secondary">Maintainable, well-documented code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
