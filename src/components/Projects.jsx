import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Rajorpay'],
      category: 'fullstack',
      image: '🛒',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'collaborative AI chat application',
      description:
        'Collaborative AI tool with real-time updates, team collaboration, and project tracking.',
      technologies: ['React', 'Express', 'mongoose', 'Socket.io', 'gemini '],
      category: 'fullstack',
      image: '📋',
      github: 'https://github.com/Bramha7/CollaborativeChatApp',
      demo: '#'
    },
    {
      id: 3,
      title: 'School Management system',
      description:
        'School Management system with diffent role setup and privilege access.',
      technologies: ['Node.js', 'JWT', 'bcrypt', 'mysql', 'express', 'sequelize'],
      category: 'backend',
      image: '🔐',
      github: 'https://github.com/Bramha7/schoolManagementSystem',
      demo: '#'
    },
    {
      id: 4,
      title: 'Single Vendor Food Delivery system',
      description:
        'Food delivery system with frontend and backend comlex logic',
      technologies: ['React', 'express', 'REST API', 'MongoDB', 'jwt'],
      category: 'frontend',
      image: '📊',
      github: 'https://github.com/Bramha7/FoodDeliverySystem',
      demo: '#'
    },
  ]

  const categories = ['all', 'fullstack', 'frontend', 'backend']

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my skills and experience
        </p>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

