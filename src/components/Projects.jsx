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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-ai-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ai-text mb-16 text-center">
          Featured <span className="text-ai-cyan">Projects</span>
        </h2>

        {/* Featured Projects */}
        {featuredProjects.map((project, idx) => (
          <div key={idx} className="mb-16">
            <div className={`glass-card-dark hover-lift overflow-hidden ${project.featured ? 'md:col-span-2' : ''}`}>
              <div className="grid md:grid-cols-2 gap-0 bg-ai-card border border-ai-border rounded-xl">
                {/* Image */}
                <div className="h-64 md:h-96 overflow-hidden bg-ai-purple relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-ai-purple to-ai-cyan flex items-center justify-center text-ai-text text-3xl font-bold">' + project.title.split(' ')[0] + '</div>'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-ai-text mb-3">{project.title}</h3>
                    <p className="text-lg text-ai-text-secondary mb-6 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-3 py-1 bg-ai-cyan/10 text-ai-cyan rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.live && (
                      <a href={project.live} className="px-6 py-2 bg-ai-cyan text-ai-bg rounded-lg hover:bg-ai-blue transition-colors flex items-center gap-2 font-semibold">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    <a href={project.github} className="px-6 py-2 border-2 border-ai-purple text-ai-text rounded-lg hover:bg-ai-purple transition-colors flex items-center gap-2 font-semibold">
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
          <h3 className="text-2xl font-bold text-ai-text mb-8">More From GitHub</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {githubProjects.length > 0 ? (
              githubProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover-lift p-6 border-l-4 border-ai-purple group bg-ai-card border border-ai-border"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-ai-text group-hover:text-ai-cyan transition-colors">
                      {project.name}
                    </h4>
                    <span className="px-3 py-1 bg-ai-green/10 text-ai-green text-xs font-semibold rounded-full">
                      {project.language || 'Code'}
                    </span>
                  </div>

                  <p className="text-ai-text-secondary mb-4 line-clamp-2">{project.description || 'No description'}</p>

                  {/* Stats */}
                  <div className="flex gap-4 text-sm text-ai-text-secondary">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-ai-cyan" />
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
              <div className="col-span-2 glass-card p-8 text-center bg-ai-card border border-ai-border">
                <p className="text-ai-text-secondary mb-2">Loading projects from GitHub...</p>
                <p className="text-sm text-ai-text-secondary">Make sure to update GITHUB_USERNAME in the app</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
