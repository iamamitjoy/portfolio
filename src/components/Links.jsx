export function ExternalLink({ href, className, title, children, ...rest }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      {...rest}
    >
      {children}
    </a>
  )
}

// One timeline entry. Used by the Education page (type="education")
// and the Work page (type="work").
export function InstitutionItem({ item, type }) {
  const isEducation = type === 'education'
  const name = isEducation ? item.school : item.title
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
        <img className="institution-logo" src={item.logo} alt={`${name} logo`} loading="lazy" />
      </ExternalLink>

      <div className="institution-content">
        <p className="timeline-period">{item.period}</p>

        {isEducation ? (
          <>
            <h3>{item.degree}</h3>

            <h4>
              <ExternalLink className="institution-name-link" href={item.website} title={visitLabel}>
                {item.school}
                <span aria-hidden="true">↗</span>
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
              <span aria-hidden="true">↗</span>
            </ExternalLink>
          </h3>
        )}

        <p>{item.details}</p>
      </div>
    </article>
  )
}
