import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an intermediate MERN stack developer passionate about building
              scalable web applications and secure digital experiences. With a
              strong foundation in modern JavaScript frameworks and database
              technologies, I create efficient and maintainable solutions.
            </p>
            <p>
              My expertise extends beyond the MERN stack to include PostgreSQL
              and SQL, allowing me to work with both NoSQL and relational
              databases. I have a particular interest in web security and hold
              certifications that demonstrate my commitment to building secure
              applications.
            </p>
            <p>
              I'm continuously learning and staying updated with the latest
              industry trends and best practices. My goal is to contribute to
              meaningful projects while growing as a developer.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h3>MERN Stack</h3>
                  <p>Building full-stack applications</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <div>
                  <h3>Web Security</h3>
                  <p>Certified security expertise</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💾</span>
                <div>
                  <h3>Databases</h3>
                  <p>PostgreSQL & SQL proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

