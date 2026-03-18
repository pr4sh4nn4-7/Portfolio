import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Prashanna Ghimire</span>
            </h1>
            <p className="hero-subtitle">
              Developer specializing in modern web technologies,
              database management, and web security
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-snippet">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-content">
                <pre>
                  {`const developer = {
  stack: 'MERN',
  level: 'Professional',
  skills: [
    'React', 'Node.js',
    'MongoDB', 'PostgreSQL',
    'Web Security'
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

