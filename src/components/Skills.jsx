import React from 'react'
import { FaCode, FaDatabase, FaTools, FaBrain, FaFigma, FaGitAlt } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      color: 'hr-teal',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      title: 'Backend',
      icon: FaDatabase,
      color: 'hr-navy',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      icon: FaTools,
      color: 'hr-green',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD']
    },
    {
      title: 'Design',
      icon: FaFigma,
      color: 'hr-gold',
      skills: ['UI/UX Design', 'Figma', 'Responsive Design', 'Accessibility', 'Animations']
    },
    {
      title: 'AI/ML',
      icon: FaBrain,
      color: 'hr-teal',
      skills: ['TensorFlow', 'Python', 'Data Analysis', 'ML Basics', 'NLP']
    },
    {
      title: 'Soft Skills',
      icon: FaGitAlt,
      color: 'hr-green',
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Mentoring', 'Agile']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-hr-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-hr-navy mb-16 text-center">
          Skills & <span className="text-hr-teal">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            const colorClass = `text-hr-${category.color.split('-')[1]}`
            
            return (
              <div key={idx} className="glass-card hover-lift p-6 border-t-4 border-hr-teal">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`text-3xl ${colorClass}`} />
                  <h3 className="text-2xl font-bold text-hr-navy">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="px-4 py-2 bg-hr-teal/10 border border-hr-teal/30 rounded-lg text-hr-navy font-medium hover:bg-hr-teal/20 transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Proficiency indicator */}
                <div className="mt-6 pt-6 border-t border-hr-gray">
                  <div className="text-sm text-hr-dark mb-2">Proficiency</div>
                  <div className="w-full bg-hr-gray rounded-full h-2">
                    <div className="bg-gradient-to-r from-hr-teal to-hr-green rounded-full h-2 w-5/6"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional skills */}
        <div className="mt-16 glass-card-dark p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-hr-navy mb-6">Technical Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-hr-teal text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-hr-navy">Full Stack Development</p>
                <p className="text-sm text-hr-dark">End-to-end development from UI to database</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-hr-teal text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-hr-navy">Performance Optimization</p>
                <p className="text-sm text-hr-dark">Building fast, scalable applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-hr-teal text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-hr-navy">Responsive Design</p>
                <p className="text-sm text-hr-dark">Works flawlessly on all devices</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-hr-teal text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-hr-navy">Clean Code</p>
                <p className="text-sm text-hr-dark">Maintainable, well-documented code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
