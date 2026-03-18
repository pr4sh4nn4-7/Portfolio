import { useState } from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_6sfp1km'
    const template_id = 'template_663b88l'
    const public_key = 'O8vSZOV9l0XP9NQ5R'

    const parameters = {
      fname: formData.name,
      femail: formData.email,
      message: formData.message,
      subject: formData.subject
    }

    emailjs.send(serviceId, template_id, parameters, {
      publicKey: public_key
    }).then(() => console.log('sent successfully')).catch((err) => console.log(err))

    // Here you would typically send the form data to a backend
    setStatus('success')
    setTimeout(() => setStatus(''), 3000)
  }

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/pr4sh4nn4-7' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/prashanna-ghimire-41078b2a2/' },
    { name: 'Email', icon: '📧', url: 'mailto:prashannaghimire29@gmail.com' },

  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, feel free to reach out!
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input
                type="text"
                id="name"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {status === 'success' && (
              <p className="form-status success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

