import { ExternalLink } from './Links'

// Loads every logo in the folder; data refers to them by file name.
const LOGOS = import.meta.glob('../assets/institutions/*.png', { eager: true, import: 'default' })
const logoSrc = (key) => LOGOS[`../assets/institutions/${key}.png`]

function TimelineItem({ item }) {
  const visitLabel = `Visit ${item.name} website`
  const nameLink = (
    <ExternalLink
      className={item.degree ? 'institution-name-link' : 'institution-name-link work-name-link'}
      href={item.website}
      title={visitLabel}
    >
      {item.name}
      <span aria-hidden="true">↗</span>
    </ExternalLink>
  )

  return (
    <article className="timeline-item reveal institution-item">
      <span className="timeline-dot" />
      {/* Same URL as the name link, so hide this duplicate from keyboard and screen readers */}
      <ExternalLink className="institution-logo-link" href={item.website} tabIndex={-1} aria-hidden="true">
        <img className="institution-logo" src={logoSrc(item.logo)} alt="" loading="lazy" />
      </ExternalLink>
      <div className="institution-content">
        <p className="timeline-period">{item.period}</p>
        {item.degree ? (
          <>
            <h3>{item.degree}</h3>
            <h4>{nameLink}</h4>
          </>
        ) : (
          <h3>{nameLink}</h3>
        )}
        <p>{item.details}</p>
      </div>
    </article>
  )
}

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <TimelineItem key={item.degree ?? item.name} item={item} />
      ))}
    </div>
  )
}
