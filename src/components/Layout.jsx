import { useEffect, useState } from 'react'

import { NAV_ITEMS, portfolio } from '../data/portfolio'

// The inline script in each HTML file sets data-theme before first paint.
// Read it back here so React starts in the same theme and nothing flashes.
const getInitialDarkMode = () => {
  const applied = document.documentElement.dataset.theme
  if (applied) return applied === 'dark'

  try {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  } catch {
    return true
  }
}

function Layout({ pageId, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
  }, [darkMode])

  // Fade-in on scroll for every .reveal element on this page.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="header">
        {/* Real links: every menu item loads its own HTML page. */}
        <a className="brand" href="/">
          <span>{portfolio.shortName}</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={pageId === item.id ? 'active' : ''}
              aria-current={pageId === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-button"
          type="button"
          aria-label="Change color theme"
          onClick={() => setDarkMode((value) => !value)}
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </header>

      <main className="page-content">{children}</main>

      <footer>
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>

        <a href="/">Home</a>
      </footer>
    </>
  )
}

export default Layout
