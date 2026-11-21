import Icon from './Icons'
import { MAILTO, social } from '../data/site'

// Reusable external link component
export function ExternalLink({
  href,
  children,
  className = '',
  title,
  ...props
}) {
  if (!href) {
    return <span className={className}>{children}</span>
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
      {...props}
    >
      {children}
    </a>
  )
}
// Social icons (all networks + email), reused on Home and in the footer
export function SocialLinks({ className = 'social-row' }) {
  return (
    <div className={className}>
      {social.map(({ label, url }) => (
        <ExternalLink key={label} href={url} aria-label={label} title={label}>
          <Icon name={label.toLowerCase()} />
        </ExternalLink>
      ))}
      <a href={MAILTO} aria-label="Email" title="Email">
        <Icon name="email" />
      </a>
    </div>
  )
}

// Timeline item for education and work
export function InstitutionItem({ item, type }) {
  const isEducation = type === 'education'

  const name = isEducation
    ? item.school
    : item.title

  const dimensionsByLogo = {
    bup: [4939, 5570],
    bnmpc: [500, 500],
    ddesk: [900, 900],
    ideal: [400, 400],
    istt: [443, 451],
  }
  const logoKey = typeof item.logo === 'string'
    ? Object.keys(dimensionsByLogo).find((key) => item.logo.includes(key))
    : null
  const [logoWidth, logoHeight] = logoKey ? dimensionsByLogo[logoKey] : [400, 400]

  const visitLabel = `Visit ${name} website`

  return (
    <article className="timeline-item reveal institution-item">
      <span className="timeline-dot" />

      <ExternalLink
        className="institution-logo-link"
        href={item.website}
        aria-label={visitLabel}
        title={visitLabel}
      >
        <img
          className="institution-logo"
          src={item.logo}
          alt={`${name || 'Institution'} logo`}
          width={logoWidth}
          height={logoHeight}
          loading="lazy"
        />
      </ExternalLink>

      <div className="institution-content">
        <p className="timeline-period">{item.period}</p>

        {isEducation ? (
          <>
            <h3>{item.degree}</h3>

            <h4>
              <ExternalLink
                className="institution-name-link"
                href={item.website}
                title={visitLabel}
              >
                {item.school}
                <span aria-hidden="true"> ↗</span>
              </ExternalLink>
            </h4>
          </>
        ) : (
          <h3>
            <ExternalLink
              className="institution-name-link work-name-link"
              href={item.website}
              title={visitLabel}
            >
              {item.title}
              <span aria-hidden="true"> ↗</span>
            </ExternalLink>
          </h3>
        )}

        <p>{item.details}</p>
      </div>
    </article>
  )
}