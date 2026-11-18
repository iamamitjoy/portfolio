import { InstitutionItem } from '../components/Links'
import { portfolio } from '../data/portfolio'

function Education() {
  return (
    <section className="section page-panel" id="education">
      <div className="section-heading reveal">
        <p className="eyebrow">02 / My journey</p>

        <h2>Education</h2>
      </div>

      <div className="timeline">
        {portfolio.education.map((item) => (
          <InstitutionItem key={item.degree} item={item} type="education" />
        ))}
      </div>
    </section>
  )
}

export default Education
