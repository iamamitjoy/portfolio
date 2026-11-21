import { PAGES, SITE, education, skills, social, work } from '../src/data/site.js'

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Syne:wght@600;700;800&display=swap'
const PERSON_ID = `${SITE.url}/#person`
const WEBSITE_ID = `${SITE.url}/#website`
const OG_IMAGE = `${SITE.url}/og-image.jpg`

const absolute = (path) => SITE.url + path
const escape = (text) => String(text).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`)
const toJson = (data) => JSON.stringify(data, null, 2).replace(/</g, '\\u003c')

const nameParts = SITE.name.split(' ')
const currentJob = work.find((job) => job.current)

const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.name,
  alternateName: SITE.alternateNames,
  jobTitle: SITE.role,
  description: SITE.summary,
  url: absolute('/'),
  email: `mailto:${SITE.email}`,
  address: { '@type': 'PostalAddress', addressCountry: SITE.location },
  alumniOf: education.map(({ name, website, schemaType }) => ({
    '@type': schemaType,
    name,
    sameAs: website,
  })),
  ...(currentJob && {
    worksFor: { '@type': 'Organization', name: currentJob.name, sameAs: currentJob.website },
  }),
  knowsAbout: [
    'Information Systems Security',
    ...skills.flatMap((group) => group.skills.map((skill) => skill.name)),
  ],
  sameAs: social.map((link) => link.url),
}

const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  alternateName: SITE.alternateNames,
  url: absolute('/'),
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
}

function structuredData(page) {
  const url = absolute(page.path)
  const graph = [
    WEBSITE,
    PERSON,
    {
      '@type': page.id === 'about' ? 'ProfilePage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': PERSON_ID },
      ...(page.id === 'about' && { mainEntity: { '@id': PERSON_ID } }),
    },
  ]

  if (page.id !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') },
        { '@type': 'ListItem', position: 2, name: page.label, item: url },
      ],
    })
  }

  return toJson({ '@context': 'https://schema.org', '@graph': graph })
}

export function renderPage(page) {
  const url = absolute(page.path)
  const title = escape(page.title)
  const description = escape(page.description)
  const name = escape(SITE.name)

  const ogType =
    page.id === 'home'
      ? `<meta property="og:type" content="profile" />
    <meta property="profile:first_name" content="${escape(nameParts[0])}" />
    <meta property="profile:last_name" content="${escape(nameParts.at(-1))}" />`
      : `<meta property="og:type" content="website" />`

  return `<!doctype html>
<!-- Generated from src/data/site.js by vite.config.js. Edit that file, not this one. -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="${SITE.themeColor}" />
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="author" content="${name}" />
    <meta name="application-name" content="${name}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
    <link rel="canonical" href="${url}" />

    ${ogType}
    <meta property="og:site_name" content="${name}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="${SITE.twitter}" />
    <meta name="twitter:creator" content="${SITE.twitter}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="${escape(FONTS_URL)}" />

    <script>
      try { document.documentElement.dataset.theme = localStorage.getItem('theme') || 'dark' }
      catch { document.documentElement.dataset.theme = 'dark' }
    </script>
    <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
    <script type="application/ld+json">
${structuredData(page)}
    </script>
  </head>
  <body data-page="${page.id}">
    <div id="root"><!--app-html--></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
}

export function renderSitemap() {
  const urls = PAGES.map((page) => `  <url><loc>${SITE.url}${page.path}</loc></url>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}
