import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'

export default function Projects({ githubProjects }) {
  const featuredProjects = [
    {
      title: '🚀 Voice Assistant',
      description: 'Web-based voice assistant with speech recognition, natural language processing, and voice synthesis.',
      image: '/assets/project-1.jpg',
      tags: ['React', 'Web Audio API', 'Node.js', 'AI'],
      featured: true,
      live: '#',
      github: '#'
    },
    {
      title: '📊 Cable Fault Detection',
      description: 'Machine learning system for detecting and predicting faults in telecommunications cables.',
      image: '/assets/project-2.jpg',
      tags: ['Python', 'TensorFlow', 'Data Analysis'],
      github: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-hr-navy mb-16 text-center">
          Featured <span className="text-hr-teal">Projects</span>
        </h2>

        {/* Featured Projects */}
        {featuredProjects.map((project, idx) => (
          <div key={idx} className="mb-16">
            <div className={`glass-card-dark hover-lift overflow-hidden ${project.featured ? 'md:col-span-2' : ''}`}>
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-64 md:h-96 overflow-hidden bg-hr-navy relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-hr-navy to-hr-teal flex items-center justify-center text-white text-3xl font-bold">' + project.title.split(' ')[0] + '</div>'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-hr-navy mb-3">{project.title}</h3>
                    <p className="text-lg text-hr-dark mb-6 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-3 py-1 bg-hr-teal/10 text-hr-teal rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.live && (
                      <a href={project.live} className="px-6 py-2 bg-hr-teal text-white rounded-lg hover:bg-hr-teal/90 transition-colors flex items-center gap-2">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    <a href={project.github} className="px-6 py-2 border-2 border-hr-navy text-hr-navy rounded-lg hover:bg-hr-navy hover:text-white transition-colors flex items-center gap-2">
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* GitHub Projects */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-hr-navy mb-8">More From GitHub</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {githubProjects.length > 0 ? (
              githubProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover-lift p-6 border-l-4 border-hr-green group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-hr-navy group-hover:text-hr-teal transition-colors">
                      {project.name}
                    </h4>
                    <span className="px-3 py-1 bg-hr-green/10 text-hr-green text-xs font-semibold rounded-full">
                      {project.language || 'Code'}
                    </span>
                  </div>

                  <p className="text-hr-dark mb-4 line-clamp-2">{project.description || 'No description'}</p>

                  {/* Stats */}
                  <div className="flex gap-4 text-sm text-hr-dark">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-hr-gold" />
                      {project.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch />
                      {project.forks_count}
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-2 glass-card p-8 text-center">
                <p className="text-hr-dark mb-2">Loading projects from GitHub...</p>
                <p className="text-sm text-hr-dark">Make sure to update GITHUB_USERNAME in the app</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
