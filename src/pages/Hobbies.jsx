import { HobbyIcon } from '../components/Icons'
import { portfolio } from '../data/portfolio'

function Hobbies() {
  return (
    <section className="section hobbies-section page-panel" id="hobbies">
      <div className="section-heading reveal">
        <p className="eyebrow">05 / Beyond work</p>

        <h2>Hobbies</h2>

        <p className="hobbies-intro">
          Activities I enjoy during my free time, from outdoor sports and chess to competitive and
          open-world gaming.
        </p>
      </div>

      <div className="hobbies-grid">
        {portfolio.hobbies.map((hobby) => (
          <article
            className={`hobby-card hobby-card-${hobby.icon}${hobby.wide ? ' hobby-card-wide' : ''} reveal`}
            key={hobby.title}
          >
            <div className="hobby-card-top">
              <span className="hobby-number">{hobby.number}</span>

              <span className="hobby-type">{hobby.type}</span>
            </div>

            <div className="hobby-icon" aria-hidden="true">
              <HobbyIcon name={hobby.icon} />
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
    </section>
  )
}

export default Hobbies
