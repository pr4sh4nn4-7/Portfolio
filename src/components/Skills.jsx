import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 88 },
        { name: 'Redux', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 82 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'SQL', level: 85 },
        { name: 'Database Design', level: 75 }
      ]
    },
    {
      title: 'Security & Tools',
      skills: [
        { name: 'Web Security', level: 88 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Testing', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="certifications">
          <h3 className="cert-title">Certifications</h3>
          <div className="cert-badges">
            <div className="cert-badge">
              <span className="cert-icon">🔒</span>
              <span>Web Security Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

