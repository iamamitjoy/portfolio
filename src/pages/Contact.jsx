import { portfolio } from '../data/portfolio'

function Contact() {
  return (
    <section className="contact-section page-panel" id="contact">
      <div className="contact-content reveal">
        <p className="eyebrow">06 / Get in touch</p>

        <h2>Have a project or opportunity?</h2>

        <p>I am always happy to learn, collaborate, and discuss new ideas.</p>

        <a className="button primary" href={`mailto:${portfolio.email}`}>
          Send me an email
        </a>
      </div>
    </section>
  )
}

export default Contact
