import { PAGE_BY_ID } from '../data/site'

// Change this once and every page's main heading changes with it.
const HeadingTag = 'h1'

export function PageHeading({ id }) {
  const { eyebrow, heading, intro } = PAGE_BY_ID[id]
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <HeadingTag className="page-title">{heading}</HeadingTag>
      {intro && <p className={`${id}-intro`}>{intro}</p>}
    </>
  )
}

export default function PageSection({ id, className = '', children }) {
  return (
    <section className={`section page-panel ${className}`}>
      <div className="section-heading reveal">
        <PageHeading id={id} />
      </div>
      {children}
    </section>
  )
}
