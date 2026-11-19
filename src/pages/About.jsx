import PageSection from '../components/PageSection'
import { SITE } from '../data/site'

const FACTS = [
  ['Name', SITE.name],
  ['AKA', SITE.shortName],
  ['Role', SITE.role],
  ['Location', SITE.location],
  ['Email', SITE.email],
]

export default function About() {
  return (
    <PageSection id="about">
      <div className="about-grid">
        <p className="about-lead reveal">{SITE.about}</p>
        <div className="info-card reveal">
          {FACTS.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}
