import './App.css'
import { useEffect } from 'react'
import Layout from './components/Layout'
import { NAV_ITEMS } from './data/site'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Hobbies from './pages/Hobbies'
import Home from './pages/Home'
import Skills from './pages/Skills'

const PAGE_COMPONENTS = { home: Home, about: About, education: Education, experience: Experience, skills: Skills, hobbies: Hobbies, contact: Contact }

export default function App({ pageId }) {
  const resolvedPageId = Object.hasOwn(PAGE_COMPONENTS, pageId) ? pageId : 'home'
  const Page = PAGE_COMPONENTS[resolvedPageId]

  useEffect(() => {
    // Old one-page links like /#about -> /about
    if (resolvedPageId === 'home') {
      const legacy = NAV_ITEMS.find((item) => `#${item.id}` === window.location.hash)
      if (legacy) window.location.replace(legacy.path)
    }
  }, [resolvedPageId])

  return (
    <Layout pageId={resolvedPageId}>
      <Page />
    </Layout>
  )
}
