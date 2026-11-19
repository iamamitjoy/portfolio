import Icon from '../components/Icons'
import PageSection from '../components/PageSection'
import { skills, twoDigits } from '../data/site'   // or { hobbies, twoDigits }


export default function Skills() {
  return (
    <PageSection id="skills" className="skills-section">
      <div className="capability-grid">
        {skills.map((group, index) => (
          <article className="capability-card reveal" key={group.category}>
            <div className="capability-card-header">
              <span className="capability-number">{twoDigits(index + 1)}</span>
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
                    <Icon name={skill.icon} />
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
    </PageSection>
  )
}
