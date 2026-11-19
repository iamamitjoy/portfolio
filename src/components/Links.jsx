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

// Timeline item for education and work
export function InstitutionItem({ item, type }) {
  const isEducation = type === 'education'

  const name = isEducation
    ? item.school
    : item.title

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