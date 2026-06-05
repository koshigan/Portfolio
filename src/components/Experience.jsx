import React from 'react'

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Led development of core platform features, mentored junior developers, and improved system performance by 40%.',
      achievements: [
        'Architected microservices reducing API response time by 40%',
        'Mentored 3 junior developers on best practices',
        'Led migration of legacy codebase to React'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'StartUp XYZ',
      period: '2021 - 2023',
      description: 'Built and maintained web applications for SaaS platform serving 10,000+ users.',
      achievements: [
        'Developed real-time dashboard with React and WebSockets',
        'Implemented automated testing improving code coverage to 85%',
        'Optimized database queries reducing load times by 50%'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'Web Solutions Ltd.',
      period: '2020 - 2021',
      description: 'Started career building responsive websites and fixing bugs in production systems.',
      achievements: [
        'Built 15+ responsive websites for clients',
        'Fixed critical bugs in customer-facing applications',
        'Learned Git, React, and Node.js best practices'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-hr-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-hr-navy mb-16 text-center">
          Professional <span className="text-hr-teal">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-hr-teal to-hr-green"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-stretch`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card hover-lift p-6 h-full">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-hr-navy">{exp.role}</h3>
                        <p className="text-hr-teal font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-hr-teal/10 text-hr-teal text-sm font-semibold rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-hr-dark mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex gap-3">
                          <span className="text-hr-green font-bold flex-shrink-0">✓</span>
                          <span className="text-hr-dark">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 bg-hr-teal rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                  <div className="w-1 h-16 bg-gradient-to-b from-hr-teal to-transparent"></div>
                </div>

                {/* Mobile timeline indicator */}
                <div className="md:hidden flex-1">
                  <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-hr-teal to-hr-green"></div>
                  <div className="w-4 h-4 bg-hr-teal rounded-full border-4 border-white absolute left-2 top-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-hr-navy mb-8">Education</h3>
          <div className="glass-card-dark p-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-hr-navy">Bachelor of Science in Computer Science</h4>
                <p className="text-hr-teal font-semibold">University Name</p>
              </div>
              <span className="px-3 py-1 bg-hr-green/10 text-hr-green text-sm font-semibold rounded-full">
                2016 - 2020
              </span>
            </div>
            <p className="text-hr-dark">CGPA: 3.8/4.0 • President of Coding Club</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-hr-navy mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-6 border-l-4 border-hr-teal">
              <h4 className="font-bold text-hr-navy mb-1">AWS Solutions Architect</h4>
              <p className="text-sm text-hr-dark">AWS • 2023</p>
            </div>
            <div className="glass-card p-6 border-l-4 border-hr-green">
              <h4 className="font-bold text-hr-navy mb-1">React Developer Certification</h4>
              <p className="text-sm text-hr-dark">freeCodeCamp • 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
