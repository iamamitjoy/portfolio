import { ExternalLink } from './Links'

// Loads every logo in the folder; data refers to them by file name.
const LOGOS = import.meta.glob('../assets/institutions/*.png', { eager: true, import: 'default' })
const logoSrc = (key) => LOGOS[`../assets/institutions/${key}.png`]
const LOGO_DIMENSIONS = {
  bup: [4939, 5570],
  bnmpc: [500, 500],
  ddesk: [900, 900],
  ideal: [400, 400],
  istt: [443, 451],
}

function TimelineItem({ item }) {
  const title = item.degree ?? item.role
  const visitLabel = `Visit ${item.name} website`
  const [logoWidth, logoHeight] = LOGO_DIMENSIONS[item.logo] ?? [400, 400]
  const nameLink = (
    <ExternalLink
      className="institution-name-link"
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
        <img
          className="institution-logo"
          src={logoSrc(item.logo)}
          alt=""
          width={logoWidth}
          height={logoHeight}
          loading="lazy"
        />
      </ExternalLink>
      <div className="institution-content">
        <p className="timeline-period">{item.period}</p>
        {title && <h3>{title}</h3>}
        <h4>{nameLink}</h4>
        <p>{item.details}</p>
      </div>
    </article>
  )
}

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <TimelineItem key={item.degree ?? item.role ?? item.name} item={item} />
      ))}
    </div>
  )
}
