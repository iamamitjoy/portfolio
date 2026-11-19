import './App.css'
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

// Each generated HTML file sets <body data-page="...">
const requested = document.body.dataset.page
const pageId = Object.hasOwn(PAGE_COMPONENTS, requested) ? requested : 'home'

// Old one-page links like /#about → /about
if (pageId === 'home') {
  const legacy = NAV_ITEMS.find((item) => `#${item.id}` === window.location.hash)
  if (legacy) window.location.replace(legacy.path)
}

export default function App() {
  const Page = PAGE_COMPONENTS[pageId]
  return (
    <Layout pageId={pageId}>
      <Page />
    </Layout>
  )
}
