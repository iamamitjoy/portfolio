import { InstitutionItem } from '../components/Links'
import { portfolio } from '../data/portfolio'

function Experience() {
  return (
    <section className="section page-panel" id="experience">
      <div className="section-heading reveal">
        <p className="eyebrow">03 / Professional experience</p>

        <h2>Work</h2>
      </div>

      <div className="timeline">
        {portfolio.work.map((item) => (
          <InstitutionItem key={item.title} item={item} type="work" />
        ))}
      </div>
    </section>
  )
}

export default Experience
