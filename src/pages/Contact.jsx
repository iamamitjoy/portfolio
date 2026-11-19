import { PageHeading } from '../components/PageSection'
import { MAILTO } from '../data/site'

export default function Contact() {
  return (
    <section className="contact-section page-panel">
      <div className="contact-content reveal">
        <PageHeading id="contact" />
        <a className="button primary" href={MAILTO}>Send me an email</a>
      </div>
    </section>
  )
}
