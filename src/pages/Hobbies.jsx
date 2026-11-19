import Icon from '../components/Icons'
import PageSection from '../components/PageSection'
import { hobbies, twoDigits } from '../data/site'   // or { hobbies, twoDigits }


export default function Hobbies() {
  return (
    <PageSection id="hobbies" className="hobbies-section">
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <article
            className={`hobby-card hobby-card-${hobby.icon}${hobby.wide ? ' hobby-card-wide' : ''} reveal`}
            key={hobby.title}
          >
            <div className="hobby-card-top">
              <span className="hobby-number">{twoDigits(index + 1)}</span>
              <span className="hobby-type">{hobby.type}</span>
            </div>

            <div className="hobby-icon" aria-hidden="true">
              <Icon name={hobby.icon} />
            </div>

            <div className="hobby-content">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>

            {hobby.games && (
              <div className="game-list">
                <p className="game-list-title">Games I play</p>
                <ul>
                  {hobby.games.map((game) => (
                    <li key={game}>
                      <span className="game-indicator" aria-hidden="true" />
                      <span>{game}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="hobby-card-decoration" aria-hidden="true">
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
