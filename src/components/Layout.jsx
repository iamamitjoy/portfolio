import { SocialLinks } from './Links'
import { useEffect, useState } from 'react'
import { NAV_ITEMS, SITE } from '../data/site'

export default function Layout({ pageId, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDarkMode(document.documentElement.dataset.theme !== 'light')
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

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
          onClick={() => {
            setDarkMode((value) => {
              const next = !value
              const theme = next ? 'dark' : 'light'
              document.documentElement.dataset.theme = theme
              try {
                localStorage.setItem('theme', theme)
              } catch {
                /* storage unavailable (private mode) */
              }
              return next
            })
          }}
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </header>

      <main className="page-content">{children}</main>

      <footer className="site-footer">
        <a href="/">Home</a>
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {"Amit Joy"}
        </p>
        <SocialLinks className="social-row footer-social" />
      </footer>

    </>
  )
}
