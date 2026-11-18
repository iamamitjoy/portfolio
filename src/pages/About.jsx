import { portfolio } from '../data/portfolio'

function About() {
  return (
    <section className="section page-panel" id="about">
      <div className="section-heading reveal">
        <p className="eyebrow">01 / Introduction</p>

        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <p className="about-lead reveal">{portfolio.about}</p>

        <div className="info-card reveal">
          <div>
            <span>Name</span>
            <strong>{portfolio.name}</strong>
          </div>

          <div>
            <span>AKA</span>
            <strong>{portfolio.shortName}</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>{portfolio.role}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{portfolio.location}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{portfolio.email}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
