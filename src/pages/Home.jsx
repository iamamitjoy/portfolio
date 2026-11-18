import { MdEmail } from 'react-icons/md'

import profilePhoto from '../assets/profile.jpg'
import { ExternalLink } from '../components/Links'
import { portfolio } from '../data/portfolio'

function Home() {
  return (
    <section className="hero page-panel" id="home">
      <div className="hero-content reveal">
        <p className="eyebrow">Hello, I'm</p>

        <h1>{portfolio.name}</h1>

        <h2>{portfolio.role}</h2>

        <p className="hero-about">{portfolio.about}</p>

        <div className="hero-actions">
          <a className="button primary" href="/hobbies">
            Explore my interests
          </a>

          <a className="button secondary" href={`mailto:${portfolio.email}`}>
            Let's connect
          </a>
        </div>

        <div className="social-row">
          {portfolio.social.map(({ label, url, icon: SocialIcon }) => (
            <ExternalLink key={label} href={url} aria-label={label}>
              <SocialIcon aria-hidden="true" focusable="false" />
            </ExternalLink>
          ))}

          <a href={`mailto:${portfolio.email}`} aria-label="Email">
            <MdEmail aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>

      <div className="hero-visual reveal" aria-label="Profile photo">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <img className="avatar" src={profilePhoto} alt={portfolio.name} />
      </div>
    </section>
  )
}

export default Home
