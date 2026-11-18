import { useEffect, useState } from 'react'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
} from 'react-icons/fa6'
import { 
  MdEmail,
  MdSportsCricket,
} from 'react-icons/md'

import {
  FaCss3Alt,
  FaFileWord,
  FaFilm,
  FaGamepad,
  FaHtml5,
  FaImage,
  FaJs,
  FaLock,
  FaShieldAlt,
} from 'react-icons/fa'






import './App.css'

import profilePhoto from './assets/profile.jpg'
import bupLogo from './assets/institutions/bup.png'
import isttLogo from './assets/institutions/istt.png'
import bnmpcLogo from './assets/institutions/bnmpc.png'
import idealLogo from './assets/institutions/ideal.png'
import ddeskLogo from './assets/institutions/ddesk.png'

const portfolio = {
  name: 'Amit Paul Joy',
  shortName: 'APJ',
  role: 'Information Systems Security Professional',
  location: 'Bangladesh',
  email: 'iamamitjoy@gmail.com',

  about:
    'I have an academic background in information systems security and electronics and communication engineering. I am interested in technology, IT operations, academic learning, and professional problem solving.',

  facebook:
    'https://www.facebook.com/Its.Amit.Joy/',

  x:
    'https://x.com/IamAmitJoy',

  github:
    'https://github.com/iamamitjoy',

  linkedin:
    'https://www.linkedin.com/in/iamamitjoy',

  threads:
    'https://www.threads.com/@iamamitjoy',

  instagram:
    'https://www.instagram.com/iamamitjoy',

  education: [
    {
      degree:
        'M.Sc. in Information Systems Security',

      school:
        'Bangladesh University of Professionals - BUP',

      period: '2025',

      details:
        'Postgraduate education in information systems security.',

      logo: bupLogo,

      website:
        'https://bup.edu.bd/',
    },

    {
      degree:
        'B.Sc.(Hons.) in Electronics and Communication Engineering',

      school:
        'ISTT - Institute of Science Trade & Technology',

      period: '2020',

      details:
        'Bachelor of Science Honours degree.',

      logo: isttLogo,

      website:
        'https://istt.edu.bd/',
    },

    {
      degree: 'Higher Secondary Certificate - HSC',

      school:
        'Birshreshtha Noor Mohammad Public College',

      period: '2015',

      details:
        'Higher Secondary Certificate - HSC completed in 2015.',

      logo: bnmpcLogo,

      website:
        'https://www.noormohammadcollege.ac.bd/',
    },

    {
      degree: 'Secondary School Certificate - SSC',

      school:
        'Ideal School & College',

      period: '2013',

      details:
        'Secondary School Certificate - SSC completed in 2013.',

      logo: idealLogo,

      website:
        'https://iscm.edu.bd/',
    },
  ],

  work: [
    {
      title:
        'Ddesk IT Limited',

      period:
        '2018 - 2026',

      details:
        'Professional work experience at Ddesk IT Limited.',

      logo:
        ddeskLogo,

      website:
        'https://ddeskitlimited.com/',
    },
  ],

skills: [
  {
    number: '01',
    category: 'Web Development',
    description:
      'Building structured, responsive, and interactive web experiences.',
    skills: [
      {
        name: 'HTML',
        icon: 'html',
      },
      {
        name: 'CSS',
        icon: 'css',
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
      },
    ],
  },
  {
    number: '02',
    category: 'Security',
    description:
      'Exploring methods for protecting information, systems, and digital communication.',
    skills: [
      {
        name: 'Cryptography',
        icon: 'cryptography',
      },
      {
        name: 'Steganography',
        icon: 'steganography',
      },
      {
        name: 'Cybersecurity',
        icon: 'cybersecurity',
      },
    ],
  },
  {
    number: '03',
    category: 'Creative & Productivity',
    description:
      'Creating documents, visual assets, and polished video content.',
    skills: [
      {
        name: 'Microsoft Office',
        icon: 'office',
      },
      {
        name: 'Adobe Photoshop',
        icon: 'photoshop',
      },
      {
        name: 'Adobe Premiere Pro',
        icon: 'premiere',
      },
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
      description:
        'I enjoy competitive, sports, strategy, and open-world video games.',
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


function Icon({ name }) {
  const icons = {
    facebook: FaFacebookF,
    x: FaXTwitter,
    github: FaGithub,
    linkedin: FaLinkedinIn,
    threads: FaThreads,
    instagram: FaInstagram,
    mail: MdEmail,
  }

  const SelectedIcon = icons[name]

  if (!SelectedIcon) {
    return null
  }

  return (
    <SelectedIcon
      aria-hidden="true"
      focusable="false"
    />
  )
}

function SkillIcon({ name }) {
  const icons = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: FaJs,
    cryptography: FaLock,
    steganography: FaImage,
    cybersecurity: FaShieldAlt,
    office: FaFileWord,
    photoshop: FaImage,
    premiere: FaFilm,
  }

  const SelectedIcon = icons[name]

  if (!SelectedIcon) {
    return null
  }

  return (
    <SelectedIcon
      aria-hidden="true"
      focusable="false"
    />
  )
}

function HobbyIcon({ name }) {
  const icons = {
    cricket: MdSportsCricket,
    gaming: FaGamepad,
  }

  const SelectedIcon = icons[name]

  if (!SelectedIcon) {
    return null
  }

  return (
    <SelectedIcon
      aria-hidden="true"
      focusable="false"
    />
  )
}


function InstitutionLink({
  item,
  type,
}) {
  const name =
    type === 'education'
      ? item.school
      : item.title

  return (
    <article
      className="timeline-item reveal institution-item"
    >
      <span className="timeline-dot" />

      <a
        className="institution-logo-link"
        href={item.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} website`}
        title={`Visit ${name} website`}
      >
        <img
          className="institution-logo"
          src={item.logo}
          alt={`${name} logo`}
          loading="lazy"
        />
      </a>

      <div className="institution-content">
        <p className="timeline-period">
          {item.period}
        </p>

        {type === 'education' ? (
          <>
            <h3>{item.degree}</h3>

            <h4>
              <a
                className="institution-name-link"
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${name} website`}
              >
                {item.school}

                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </h4>
          </>
        ) : (
          <h3>
            <a
              className="institution-name-link work-name-link"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${name} website`}
            >
              {item.title}

              <span aria-hidden="true">
                ↗
              </span>
            </a>
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
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme === 'dark'
  }

  return true
})

  const validSections = [
    'home',
    'about',
    'education',
    'experience',
    'skills',
    'hobbies',
    'contact',
  ]

  const getSectionFromHash = () => {
    const hash = window.location.hash.replace('#', '')
    return validSections.includes(hash) ? hash : 'home'
  }

  const [activeSection, setActiveSection] = useState(getSectionFromHash)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
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

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [activeSection])

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getSectionFromHash())
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const showSection = (sectionId) => {
    const nextSection = validSections.includes(sectionId) ? sectionId : 'home'
    setActiveSection(nextSection)
    closeMenu()

    const nextHash = `#${nextSection}`
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    showSection(sectionId)
  }

  const handleHomeClick = (event) => {
    event.preventDefault()
    showSection('home')
  }

  const navigationItems = [
    {
      id: 'about',
      label: 'About',
    },

    {
      id: 'education',
      label: 'Education',
    },

    {
      id: 'experience',
      label: 'Work',
    },

    {
      id: 'skills',
      label: 'Skills',
    },

    {
      id: 'hobbies',
      label: 'Hobbies',
    },

    {
      id: 'contact',
      label: 'Contact',
    },
  ]

  return (
    <>
      <header className="header">
        <a
          className="brand"
          href="#home"
          onClick={
            handleHomeClick
          }
        >
          <span>
            {portfolio.shortName}
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (open) => !open,
            )
          }
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={
            menuOpen
              ? 'nav open'
              : 'nav'
          }
          aria-label="Main navigation"
        >
          {navigationItems.map(
            (item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeSection ===
                  item.id
                    ? 'active'
                    : ''
                }
                aria-current={
                  activeSection ===
                  item.id
                    ? 'page'
                    : undefined
                }
                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.id,
                  )
                }
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <button
          className="theme-button"
          type="button"
          aria-label="Change color theme"
          onClick={() =>
            setDarkMode(
              (value) => !value,
            )
          }
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </header>

      <main className="page-content">
        {activeSection === 'home' && (
<section
          className="hero page-panel"
          id="home"
        >
          <div className="hero-content reveal">
            <p className="eyebrow">
              Hello, I'm
            </p>

            <h1>
              {portfolio.name}
            </h1>

            <h2>
              {portfolio.role}
            </h2>

            <p className="hero-about">
              {portfolio.about}
            </p>

            <div className="hero-actions">
            <a
              className="button primary"
              href="#hobbies"
              onClick={() =>
                handleNavClick('hobbies')
              }
            >
              Explore my interests
            </a>

              <a
                className="button secondary"
                href={`mailto:${portfolio.email}`}
              >
                Let's connect
              </a>
            </div>

            <div className="social-row">
              <a
                href={
                  portfolio.facebook
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>

              <a
                href={portfolio.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Icon name="x" />
              </a>

              <a
                href={
                  portfolio.github
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>

              <a
                href={
                  portfolio.linkedin
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>

              <a
                href={
                  portfolio.threads
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <Icon name="threads" />
              </a>

              <a
                href={
                  portfolio.instagram
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" />
              </a>

              <a
                href={`mailto:${portfolio.email}`}
                aria-label="Email"
              >
                <Icon name="mail" />
              </a>
            </div>
          </div>

          <div
            className="hero-visual reveal"
            aria-label="Profile photo"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <img
              className="avatar"
              src={profilePhoto}
              alt="Amit Paul Joy"
            />
          </div>
        </section>
          )}

        {activeSection === 'about' && (
<section
          className="section page-panel"
          id="about"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              01 / Introduction
            </p>

            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <p className="about-lead reveal">
              {portfolio.about}
            </p>

            <div className="info-card reveal">
              <div>
                <span>Name</span>

                <strong>
                  {portfolio.name}
                </strong>
              </div>

              <div>
                <span>Role</span>

                <strong>
                  {portfolio.role}
                </strong>
              </div>

              <div>
                <span>
                  Location
                </span>

                <strong>
                  {portfolio.location}
                </strong>
              </div>

              <div>
                <span>Email</span>

                <strong>
                  {portfolio.email}
                </strong>
              </div>
            </div>
          </div>
        </section>
          )}

        {activeSection === 'education' && (
<section
          className="section page-panel"
          id="education"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              02 / My journey
            </p>

            <h2>Education</h2>
          </div>

          <div className="timeline">
            {portfolio.education.map(
              (item) => (
                <InstitutionLink
                  key={item.degree}
                  item={item}
                  type="education"
                />
              ),
            )}
          </div>
        </section>
          )}

        {activeSection === 'experience' && (
<section
          className="section page-panel"
          id="experience"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              03 / Professional
              experience
            </p>

            <h2>Work</h2>
          </div>

          <div className="timeline">
            {portfolio.work.map(
              (item) => (
                <InstitutionLink
                  key={item.title}
                  item={item}
                  type="work"
                />
              ),
            )}
          </div>
        </section>
          )}

        {activeSection === 'skills' && (
<section
          className="section skills-section page-panel"
          id="skills"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              04 / What I know
            </p>

            <h2>Skills</h2>

            <p className="skills-intro">
              A combination of web development, information
              security, productivity, and digital media skills.
            </p>
          </div>

          <div className="capability-grid">
            {portfolio.skills.map((group) => (
              <article
                className="capability-card reveal"
                key={group.category}
              >
                <div className="capability-card-header">
                  <span className="capability-number">
                    {group.number}
                  </span>

                  <span
                    className="capability-status"
                    aria-hidden="true"
                  >
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
                      <span
                        className={`skill-icon skill-icon-${skill.icon}`}
                      >
                        <SkillIcon name={skill.icon} />
                      </span>

                      <span className="skill-name">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="capability-decoration"
                  aria-hidden="true"
                >
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
<section
          className="section hobbies-section page-panel"
          id="hobbies"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              05 / Beyond work
            </p>

            <h2>Hobbies</h2>

            <p className="hobbies-intro">
              Activities I enjoy during my free time, from
              outdoor sports to competitive and open-world gaming.
            </p>
          </div>

          <div className="hobbies-grid">
            {portfolio.hobbies.map((hobby) => (
              <article
                className={`hobby-card hobby-card-${hobby.icon} reveal`}
                key={hobby.title}
              >
                <div className="hobby-card-top">
                  <span className="hobby-number">
                    {hobby.number}
                  </span>

                  <span className="hobby-type">
                    {hobby.type}
                  </span>
                </div>

                <div
                  className="hobby-icon"
                  aria-hidden="true"
                >
                  <HobbyIcon name={hobby.icon} />
                </div>

                <div className="hobby-content">
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </div>

                {hobby.games && (
                  <div className="game-list">
                    <p className="game-list-title">
                      Games I play
                    </p>

                    <ul>
                      {hobby.games.map((game) => (
                        <li key={game}>
                          <span
                            className="game-indicator"
                            aria-hidden="true"
                          />

                          <span>{game}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div
                  className="hobby-card-decoration"
                  aria-hidden="true"
                >
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
<section
          className="contact-section page-panel"
          id="contact"
        >
          <div className="contact-content reveal">
            <p className="eyebrow">
              06 / Get in touch
            </p>

            <h2>
              Have a project or
              opportunity?
            </h2>

            <p>
              I am always happy to
              learn, collaborate, and
              discuss new ideas.
            </p>

            <a
              className="button primary"
              href={`mailto:${portfolio.email}`}
            >
              Send me an email
            </a>
          </div>
        </section>
          )}
      </main>

      <footer>
        <p>
          ©{' '}
          {new Date().getFullYear()}{' '}
          {portfolio.name}
        </p>

        <a
          href="#home"
          onClick={
            handleHomeClick
          }
        >
          Home
        </a>
      </footer>
    </>
  )
}

export default App
