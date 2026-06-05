import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      link: 'https://github.com/yourprofile'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-ai-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ai-text mb-4 text-center">
          Get In <span className="text-ai-cyan">Touch</span>
        </h2>
        <p className="text-center text-ai-text-secondary text-lg mb-16 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                className={`glass-card hover-lift p-6 text-center group border-t-4 border-ai-cyan bg-ai-card border border-ai-border`}
              >
                <div className={`text-5xl text-ai-cyan mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-ai-text mb-2">{method.label}</h3>
                <p className="text-ai-text-secondary break-all">{method.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-ai-text mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-ai-text-secondary font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-ai-border bg-ai-card text-ai-text focus:border-ai-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-ai-text-secondary font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-ai-border bg-ai-card text-ai-text focus:border-ai-cyan focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-ai-text-secondary font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-ai-border bg-ai-card text-ai-text focus:border-ai-cyan focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-ai-text-secondary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-ai-border bg-ai-card text-ai-text focus:border-ai-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-ai-cyan text-ai-bg rounded-lg hover:bg-ai-blue transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card-dark p-8 rounded-xl bg-ai-card border border-ai-border">
              <h3 className="text-2xl font-bold text-ai-text mb-6">Quick Info</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ai-cyan/10 flex items-center justify-center flex-shrink-0 border border-ai-cyan/30">
                    <FaPhone className="text-ai-cyan text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-ai-text">Phone</p>
                    <p className="text-ai-text-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ai-green/10 flex items-center justify-center flex-shrink-0 border border-ai-green/30">
                    <FaEnvelope className="text-ai-green text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-ai-text">Email Response</p>
                    <p className="text-ai-text-secondary">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ai-purple/10 flex items-center justify-center flex-shrink-0 border border-ai-purple/30">
                    <span className="text-ai-purple text-lg font-bold">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-ai-text">Location</p>
                    <p className="text-ai-text-secondary">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 border-l-4 border-ai-cyan bg-ai-card border border-ai-border">
              <p className="text-sm text-ai-text-secondary mb-3">
                <span className="inline-block w-3 h-3 bg-ai-green rounded-full mr-2"></span>
                <span className="font-semibold text-ai-text">Available for:</span>
              </p>
              <ul className="space-y-2 text-ai-text-secondary">
                <li>✓ Full-time positions</li>
                <li>✓ Freelance projects</li>
                <li>✓ Consulting work</li>
                <li>✓ Open source contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
