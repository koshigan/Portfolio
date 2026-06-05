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
      link: 'mailto:your.email@example.com',
      color: 'hr-teal'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
      color: 'hr-navy'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      link: 'https://github.com/yourprofile',
      color: 'hr-dark'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-hr-navy mb-4 text-center">
          Get In <span className="text-hr-teal">Touch</span>
        </h2>
        <p className="text-center text-hr-dark text-lg mb-16 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                className={`glass-card hover-lift p-6 text-center group border-t-4 border-hr-${method.color.split('-')[1]}`}
              >
                <div className={`text-5xl text-hr-${method.color.split('-')[1]} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-hr-navy mb-2">{method.label}</h3>
                <p className="text-hr-dark break-all">{method.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-hr-navy mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-hr-dark font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-hr-gray focus:border-hr-teal focus:outline-none transition-colors glass-card"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-hr-dark font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-hr-gray focus:border-hr-teal focus:outline-none transition-colors glass-card"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-hr-dark font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-hr-gray focus:border-hr-teal focus:outline-none transition-colors glass-card"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-hr-dark font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-hr-gray focus:border-hr-teal focus:outline-none transition-colors glass-card resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-hr-teal text-white rounded-lg hover:bg-hr-teal transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card-dark p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-hr-navy mb-6">Quick Info</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hr-teal/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-hr-teal text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-hr-navy">Phone</p>
                    <p className="text-hr-dark">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hr-green/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-hr-green text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-hr-navy">Email Response</p>
                    <p className="text-hr-dark">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hr-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-hr-gold text-lg font-bold">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-hr-navy">Location</p>
                    <p className="text-hr-dark">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 border-l-4 border-hr-teal">
              <p className="text-sm text-hr-dark mb-3">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="font-semibold text-hr-navy">Available for:</span>
              </p>
              <ul className="space-y-2 text-hr-dark">
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
