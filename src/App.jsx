import { useEffect, useState } from 'react'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaReddit,
  FaThreads,
  FaXTwitter,
} from 'react-icons/fa6'
import {
  FaCode,
  FaCss3Alt,
  FaFileWord,
  FaFilm,
  FaGamepad,
  FaHtml5,
  FaImage,
  FaJs,
  FaLock,
  FaSearch,
  FaShieldAlt,
  FaWordpress,
} from 'react-icons/fa'
import { MdEmail, MdSportsCricket } from 'react-icons/md'
import { SiCplusplus, SiPython } from 'react-icons/si'

import './App.css'

import profilePhoto from './assets/profile.jpg'
import bupLogo from './assets/institutions/bup.png'
import isttLogo from './assets/institutions/istt.png'
import bnmpcLogo from './assets/institutions/bnmpc.png'
import idealLogo from './assets/institutions/ideal.png'
import ddeskLogo from './assets/institutions/ddesk.png'

const SITE_URL = 'https://amitjoy.vercel.app'

const portfolio = {
  name: 'Amit Paul Joy',
  shortName: 'APJ',
  role: 'Information Systems Security Professional',
  location: 'Bangladesh',
  email: 'iamamitjoy@gmail.com',
  about:
    'I have an academic background in information systems security and electronics and communication engineering. I am interested in technology, IT operations, academic learning, and professional problem solving.',

  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/Its.Amit.Joy/', icon: FaFacebookF },
    { label: 'X', url: 'https://x.com/IamAmitJoy', icon: FaXTwitter },
    { label: 'GitHub', url: 'https://github.com/iamamitjoy', icon: FaGithub },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/iamamitjoy', icon: FaLinkedinIn },
    { label: 'Threads', url: 'https://www.threads.com/@iamamitjoy', icon: FaThreads },
    { label: 'Instagram', url: 'https://www.instagram.com/iamamitjoy', icon: FaInstagram },
    { label: 'Reddit', url: 'https://www.reddit.com/user/itsamitjoy/', icon: FaReddit },
  ],

  education: [
    {
      degree: 'M.Sc. in Information Systems Security',
      school: 'Bangladesh University of Professionals - BUP',
      period: '2025',
      details: 'Postgraduate education in information systems security.',
      logo: bupLogo,
      website: 'https://bup.edu.bd/',
    },
    {
      degree: 'B.Sc.(Hons.) in Electronics and Communication Engineering',
      school: 'ISTT - Institute of Science Trade & Technology',
      period: '2020',
      details: 'Bachelor of Science Honours degree.',
      logo: isttLogo,
      website: 'https://istt.edu.bd/',
    },
    {
      degree: 'Higher Secondary Certificate - HSC',
      school: 'Birshreshtha Noor Mohammad Public College',
      period: '2015',
      details: 'Higher Secondary Certificate - HSC completed in 2015.',
      logo: bnmpcLogo,
      website: 'https://www.noormohammadcollege.ac.bd/',
    },
    {
      degree: 'Secondary School Certificate - SSC',
      school: 'Ideal School & College',
      period: '2013',
      details: 'Secondary School Certificate - SSC completed in 2013.',
      logo: idealLogo,
      website: 'https://iscm.edu.bd/',
    },
  ],

  work: [
    {
      title: 'Ddesk IT Limited',
      period: 'August 2018 - April 2026',
      details:
        'Worked as a Senior Executive in the Web Development Department, specializing in web development and search engine optimization - SEO.',
      logo: ddeskLogo,
      website: 'https://ddeskitlimited.com/',
    },
  ],

  skills: [
    {
      number: '01',
      category: 'Web Development',
      description: 'Building structured, responsive, and interactive web experiences.',
      skills: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'WordPress', icon: 'wordpress' },
      ],
    },
    {
      number: '02',
      category: 'Programming & SEO',
      description: 'Writing programs and improving website visibility in search engines.',
      skills: [
        { name: 'Python', icon: 'python' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'Search Engine Optimization', icon: 'seo' },
      ],
    },
    {
      number: '03',
      category: 'Security',
      description:
        'Exploring methods for protecting information, systems, and digital communication.',
      skills: [
        { name: 'Cryptography', icon: 'cryptography' },
        { name: 'Steganography', icon: 'steganography' },
        { name: 'Cybersecurity', icon: 'cybersecurity' },
      ],
    },
    {
      number: '04',
      category: 'Creative & Productivity',
      description: 'Creating documents, visual assets, and polished video content.',
      skills: [
        { name: 'Microsoft Office', icon: 'office' },
        { name: 'Adobe Photoshop', icon: 'photoshop' },
        { name: 'Adobe Premiere Pro', icon: 'premiere' },
      ],
    },
  ],

  hobbies: [
    {
      number: '01',
      title: 'Playing Cricket',
      type: 'Outdoor Activity',
      description:
        'I enjoy playing cricket as a recreational activity. It helps me stay active while developing teamwork, concentration, and strategic thinking.',
      icon: 'cricket',
    },
    {
      number: '02',
      title: 'Playing Video Games',
      type: 'Gaming',
      description: 'I enjoy competitive, sports, strategy, and open-world video games.',
      icon: 'gaming',
      games: [
        'EA SPORTS FC 27',
        'EA SPORTS FC Online',
        'eFootball',
        'League of Legends',
        'Grand Theft Auto V',
      ],
    },
  ],
}

// One source of truth for routes, nav labels, page titles and meta descriptions.
const SECTIONS = [
  {
    id: 'home',
    title: 'Home',
    description:
      'Portfolio of Amit Paul Joy, Information Systems Security Professional in Bangladesh with an M.Sc. from BUP and expertise in cybersecurity, web dev & SEO.',
  },
  {
    id: 'about',
    title: 'About',
    description: 'About Amit Paul Joy, an information systems security professional from Bangladesh.',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Education of Amit Paul Joy, from SSC to an M.Sc. in Information Systems Security at BUP.',
  },
  {
    id: 'experience',
    title: 'Work',
    description: 'Work experience of Amit Paul Joy in web development and SEO at Ddesk IT Limited.',
  },
  {
    id: 'skills',
    title: 'Skills',
    description: 'Skills of Amit Paul Joy in web development, SEO, cryptography, steganography and cybersecurity.',
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    description: 'Hobbies of Amit Paul Joy, including cricket and competitive video games.',
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with Amit Paul Joy about projects and opportunities.',
  },
]

const sectionIds = SECTIONS.map((section) => section.id)
const navigationItems = SECTIONS.filter((section) => section.id !== 'home')

const pathFor = (sectionId) => (sectionId === 'home' ? '/' : `/${sectionId}`)

const getSectionFromPath = () => {
  const path = window.location.pathname.replace(/^\/|\/$/g, '')
  return sectionIds.includes(path) ? path : 'home'
}

// Old links like /#about map to the new path-based URLs.
const getSectionFromHash = () => {
  const hash = window.location.hash.replace('#', '')
  return sectionIds.includes(hash) ? hash : null
}

const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  wordpress: FaWordpress,
  python: SiPython,
  cplusplus: SiCplusplus,
  seo: FaSearch,
  cryptography: FaLock,
  steganography: FaImage,
  cybersecurity: FaShieldAlt,
  office: FaFileWord,
  photoshop: FaImage,
  premiere: FaFilm,
}

const hobbyIcons = {
  cricket: MdSportsCricket,
  gaming: FaGamepad,
}

function SkillIcon({ name }) {
  const SelectedIcon = skillIcons[name] || FaCode
  return <SelectedIcon aria-hidden="true" focusable="false" />
}

function HobbyIcon({ name }) {
  const SelectedIcon = hobbyIcons[name]
  return SelectedIcon ? <SelectedIcon aria-hidden="true" focusable="false" /> : null
}

function ExternalLink({ href, className, title, children, ...rest }) {
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

function InstitutionLink({ item, type }) {
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme === 'dark' : true
    } catch {
      return true
    }
  })
  const [activeSection, setActiveSection] = useState(
    () => getSectionFromHash() || getSectionFromPath(),
  )

  // Replace an old /#about URL with /about.
  useEffect(() => {
    const hashSection = getSectionFromHash()
    if (hashSection) {
      window.history.replaceState(null, '', pathFor(hashSection))
    }
  }, [])

  // Keep title, description and canonical in sync with the current route.
  useEffect(() => {
    const section = SECTIONS.find((item) => item.id === activeSection)
    document.title = `${section.title} | ${portfolio.name}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', section.description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', `${SITE_URL}${pathFor(activeSection)}`)
  }, [activeSection])

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
  }, [darkMode])

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
  }, [activeSection])

  useEffect(() => {
    const handlePopState = () => {
      setActiveSection(getSectionFromPath())
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const showSection = (sectionId) => {
    const nextSection = sectionIds.includes(sectionId) ? sectionId : 'home'
    const nextPath = pathFor(nextSection)

    setActiveSection(nextSection)
    setMenuOpen(false)

    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    showSection(sectionId)
  }

  return (
    <>
      <header className="header">
        <a className="brand" href="/" onClick={(event) => handleNavClick(event, 'home')}>
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
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={pathFor(item.id)}
              className={activeSection === item.id ? 'active' : ''}
              aria-current={activeSection === item.id ? 'page' : undefined}
              onClick={(event) => handleNavClick(event, item.id)}
            >
              {item.title}
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

      <main className="page-content">
        {activeSection === 'home' && (
          <section className="hero page-panel" id="home">
            <div className="hero-content reveal">
              <p className="eyebrow">Hello, I'm</p>

              <h1>{portfolio.name}</h1>

              <h2>{portfolio.role}</h2>

              <p className="hero-about">{portfolio.about}</p>

              <div className="hero-actions">
                <a
                  className="button primary"
                  href="/hobbies"
                  onClick={(event) => handleNavClick(event, 'hobbies')}
                >
                  Explore my interests
                </a>

                <a className="button secondary" href={`mailto:${portfolio.email}`}>
                  Let's connect
                </a>
              </div>

              <div className="social-row">
                {portfolio.social.map(({ label, url, icon: SocialIcon }) => (
                  <ExternalLink key={label} href={url} aria-label={label}>
                    <SocialIcon aria-hidden="true" focusable="false" />
                  </ExternalLink>
                ))}

                <a href={`mailto:${portfolio.email}`} aria-label="Email">
                  <MdEmail aria-hidden="true" focusable="false" />
                </a>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="Profile photo">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <img className="avatar" src={profilePhoto} alt={portfolio.name} />
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="section page-panel" id="about">
            <div className="section-heading reveal">
              <p className="eyebrow">01 / Introduction</p>

              <h2>About Me</h2>
            </div>

            <div className="about-grid">
              <p className="about-lead reveal">{portfolio.about}</p>

              <div className="info-card reveal">
                <div>
                  <span>Name</span>
                  <strong>{portfolio.name}</strong>
                </div>

                <div>
                  <span>Role</span>
                  <strong>{portfolio.role}</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>{portfolio.location}</strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>{portfolio.email}</strong>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="section page-panel" id="education">
            <div className="section-heading reveal">
              <p className="eyebrow">02 / My journey</p>

              <h2>Education</h2>
            </div>

            <div className="timeline">
              {portfolio.education.map((item) => (
                <InstitutionLink key={item.degree} item={item} type="education" />
              ))}
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="section page-panel" id="experience">
            <div className="section-heading reveal">
              <p className="eyebrow">03 / Professional experience</p>

              <h2>Work</h2>
            </div>

            <div className="timeline">
              {portfolio.work.map((item) => (
                <InstitutionLink key={item.title} item={item} type="work" />
              ))}
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="section skills-section page-panel" id="skills">
            <div className="section-heading reveal">
              <p className="eyebrow">04 / What I know</p>

              <h2>Skills</h2>

              <p className="skills-intro">
                A combination of web development, information security, productivity, and digital
                media skills.
              </p>
            </div>

            <div className="capability-grid">
              {portfolio.skills.map((group) => (
                <article className="capability-card reveal" key={group.category}>
                  <div className="capability-card-header">
                    <span className="capability-number">{group.number}</span>

                    <span className="capability-status" aria-hidden="true">
                      <span />
                      Skill set
                    </span>
                  </div>

                  <div className="capability-content">
                    <h3>{group.category}</h3>

                    <p>{group.description}</p>
                  </div>

                  <ul className="capability-list">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <span className={`skill-icon skill-icon-${skill.icon}`}>
                          <SkillIcon name={skill.icon} />
                        </span>

                        <span className="skill-name">{skill.name}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="capability-decoration" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'hobbies' && (
          <section className="section hobbies-section page-panel" id="hobbies">
            <div className="section-heading reveal">
              <p className="eyebrow">05 / Beyond work</p>

              <h2>Hobbies</h2>

              <p className="hobbies-intro">
                Activities I enjoy during my free time, from outdoor sports to competitive and
                open-world gaming.
              </p>
            </div>

            <div className="hobbies-grid">
              {portfolio.hobbies.map((hobby) => (
                <article className={`hobby-card hobby-card-${hobby.icon} reveal`} key={hobby.title}>
                  <div className="hobby-card-top">
                    <span className="hobby-number">{hobby.number}</span>

                    <span className="hobby-type">{hobby.type}</span>
                  </div>

                  <div className="hobby-icon" aria-hidden="true">
                    <HobbyIcon name={hobby.icon} />
                  </div>

                  <div className="hobby-content">
                    <h3>{hobby.title}</h3>
                    <p>{hobby.description}</p>
                  </div>

                  {hobby.games && (
                    <div className="game-list">
                      <p className="game-list-title">Games I play</p>

                      <ul>
                        {hobby.games.map((game) => (
                          <li key={game}>
                            <span className="game-indicator" aria-hidden="true" />

                            <span>{game}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="hobby-card-decoration" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="contact-section page-panel" id="contact">
            <div className="contact-content reveal">
              <p className="eyebrow">06 / Get in touch</p>

              <h2>Have a project or opportunity?</h2>

              <p>I am always happy to learn, collaborate, and discuss new ideas.</p>

              <a className="button primary" href={`mailto:${portfolio.email}`}>
                Send me an email
              </a>
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>

        <a href="/" onClick={(event) => handleNavClick(event, 'home')}>
          Home
        </a>
      </footer>
    </>
  )
}

export default App