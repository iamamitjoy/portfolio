import { SkillIcon } from '../components/Icons'
import { portfolio } from '../data/portfolio'

function Skills() {
  return (
    <section className="section skills-section page-panel" id="skills">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / What I know</p>

        <h2>Skills</h2>

        <p className="skills-intro">
          A combination of web development, information security, productivity, and digital media
          skills.
        </p>
      </div>

      <div className="capability-grid">
        {portfolio.skills.map((group) => (
          <article className="capability-card reveal" key={group.category}>
            <div className="capability-card-header">
              <span className="capability-number">{group.number}</span>

              <span className="capability-status" aria-hidden="true">
                <span />
                Skill set
              </span>
            </div>

            <div className="capability-content">
              <h3>{group.category}</h3>

              <p>{group.description}</p>
            </div>

            <ul className="capability-list">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <span className={`skill-icon skill-icon-${skill.icon}`}>
                    <SkillIcon name={skill.icon} />
                  </span>

                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>

            <div className="capability-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
