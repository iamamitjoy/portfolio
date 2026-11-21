import profilePhoto from '../assets/profile.jpg'
import { SocialLinks } from '../components/Links'
import { MAILTO, SITE } from '../data/site'

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

      </div>

      <div className="hero-visual reveal">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <img
          className="avatar"
          src={profilePhoto}
          alt={SITE.name}
          width="894"
          height="894"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
