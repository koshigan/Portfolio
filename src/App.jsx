import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  const [githubProjects, setGithubProjects] = useState([])

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)

    // Fetch GitHub projects
    fetchGitHubProjects()
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const fetchGitHubProjects = async () => {
    try {
      const username = 'koshigan' // Update this with your GitHub username
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
      const repos = await response.json()
      
      const filtered = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
      
      setGithubProjects(filtered)
      console.log('📦 GitHub Projects Fetched:', filtered.length)
    } catch (error) {
      console.error('Error fetching GitHub projects:', error)
    }
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects githubProjects={githubProjects} />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
