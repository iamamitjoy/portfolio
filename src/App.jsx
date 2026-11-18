import { useEffect } from 'react'

import './App.css'

import Layout from './components/Layout'
import { NAV_ITEMS } from './data/portfolio'

import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'
import Skills from './pages/Skills'

// Page id -> component. The id comes from <body data-page="..."> in each HTML file
// (index.html, about.html, education.html, ...), so every page is its own document
// with its own <title>, meta description, canonical URL and Open Graph tags.
const PAGES = {
  home: Home,
  about: About,
  education: Education,
  experience: Experience,
  skills: Skills,
  hobbies: Hobbies,
  contact: Contact,
}

const getPageId = (page) => {
  const id = page || document.body.dataset.page
  return Object.hasOwn(PAGES, id) ? id : 'home'
}

function App({ page }) {
  const pageId = getPageId(page)
  const Page = PAGES[pageId]

  // Old links like /#about now redirect to the new /about page.
  useEffect(() => {
    if (pageId !== 'home') return

    const target = NAV_ITEMS.find((item) => item.id === window.location.hash.slice(1))
    if (target) window.location.replace(target.path)
  }, [pageId])

  return (
    <Layout pageId={pageId}>
      <Page />
    </Layout>
  )
}

export default App
