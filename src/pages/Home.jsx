import profilePhoto from '../assets/profile.jpg'
import Icon from '../components/Icons'
import { ExternalLink } from '../components/Links'
import { MAILTO, SITE, social } from '../data/site'

export default function Home() {
  return (
    <section className="hero page-panel">
      <div className="hero-content reveal">
        <p className="eyebrow">Hello, I'm</p>
        <h1>{SITE.name}</h1>
        <h2>{SITE.role}</h2>
        <p className="hero-about">{SITE.about}</p>
        <div className="hero-actions">
          <a className="button primary" href="/hobbies">Explore my interests</a>
          <a className="button secondary" href={MAILTO}>Let's connect</a>
        </div>
        <div className="social-row">
          {social.map(({ label, url }) => (
            <ExternalLink key={label} href={url} aria-label={label}>
              <Icon name={label.toLowerCase()} />
            </ExternalLink>
          ))}
          <a href={MAILTO} aria-label="Email">
            <Icon name="email" />
          </a>
        </div>
      </div>
      <div className="hero-visual reveal">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <img className="avatar" src={profilePhoto} alt={SITE.name} />
      </div>
    </section>
  )
}
