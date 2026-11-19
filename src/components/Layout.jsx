import { useEffect, useState } from 'react'
import { NAV_ITEMS, SITE } from '../data/site'

export default function Layout({ pageId, children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // The inline script in <head> already applied the saved theme before first paint,
  // so we just read it back. No need to touch localStorage here.
  const [darkMode, setDarkMode] = useState(
    () => document.documentElement.dataset.theme !== 'light',
  )

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable (private mode) */
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
        <a className="brand" href="/">
          <span>{SITE.shortName}</span>
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
              className={pageId === item.id ? 'active' : undefined}
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
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <a href="/">Home</a>
      </footer>
    </>
  )
}
