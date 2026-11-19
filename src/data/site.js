// Single source of truth for the whole site.
// Used by React (the pages) AND by vite.config.js (HTML <head>, JSON-LD, sitemap).
// Keep this file free of imports so Node can read it at build time.

export const SITE = {
  url: 'https://amitjoy.vercel.app',
  name: 'Amit Paul Joy',
  shortName: 'Amit Joy',
  alternateNames: ['Amit Joy', 'APJ'],
  role: 'Information Systems Security Professional',
  location: 'Bangladesh',
  email: 'iamamitjoy@gmail.com',
  twitter: '@IamAmitJoy',
  themeColor: '#6552f3',
  summary:
    'Information Systems Security Professional and Web/SEO Specialist from Bangladesh with an M.Sc. in Information Systems Security from BUP.',
  about:
    'I have an academic background in information systems security and electronics and communication engineering. I am interested in technology, IT operations, academic learning, and professional problem solving.',
}

export const MAILTO = `mailto:${SITE.email}`
export const twoDigits = (n) => String(n).padStart(2, '0')

// ─── PAGES ──────────────────────────────────────────────────────────────
// Each page's <title>, meta description, og:title, og:description,
// heading, nav label and sitemap entry all come from here.
//   title       → browser tab + Google result headline (≈60 chars max)
//   description → Google result snippet + social share text (≈150 chars)
//   heading     → the visible <h1> on the page
const PAGE_LIST = [
  {
    id: 'home',
    label: 'Home',
    heading: SITE.name,
    title: 'Amit Paul Joy - Information Systems Security & Web SEO',
    description:
      'Portfolio of Amit Paul Joy, Information Systems Security Professional in Bangladesh with an M.Sc. from BUP and expertise in cybersecurity, web dev & SEO.',
  },
  {
    id: 'about',
    label: 'About',
    eyebrow: 'Introduction',
    heading: 'About Me',
    title: 'About Amit Paul Joy - Information Systems Security',
    description:
      'Learn about Amit Paul Joy, an information systems security professional from Bangladesh with a background in security and electronics engineering.',
  },
  {
    id: 'education',
    label: 'Education',
    eyebrow: 'My journey',
    heading: 'Education',
    title: 'Education - M.Sc. Information Systems Security | Amit Paul Joy',
    description:
      'Education of Amit Paul Joy: M.Sc. in Information Systems Security from BUP, B.Sc. in Electronics and Communication Engineering from ISTT, HSC and SSC.',
  },
  {
    id: 'experience',
    label: 'Work',
    eyebrow: 'Professional experience',
    heading: 'Work',
    title: 'Work Experience - Web Development & SEO | Amit Paul Joy',
    description:
      'Work experience of Amit Paul Joy as a Senior Executive in web development and SEO at Ddesk IT Limited from 2018 to 2026.',
  },
  {
    id: 'skills',
    label: 'Skills',
    eyebrow: 'What I know',
    heading: 'Skills',
    intro:
      'A combination of web development, information security, productivity, and digital media skills.',
    title: 'Skills - Cybersecurity, Web Development & SEO | Amit Paul Joy',
    description:
      'Skills of Amit Paul Joy in HTML, CSS, JavaScript, WordPress, Python, C++, SEO, cryptography, steganography and cybersecurity.',
  },
  {
    id: 'hobbies',
    label: 'Hobbies',
    eyebrow: 'Beyond work',
    heading: 'Hobbies',
    intro:
      'Activities I enjoy during my free time, from outdoor sports and chess to gaming and travelling across Bangladesh and beyond.',
    title: 'Hobbies - Travel, Cricket, Chess & Gaming | Amit Paul Joy',
    description:
      'Hobbies of Amit Paul Joy: travelling across Bangladesh and the Maldives, cricket, chess, and video games like EA SPORTS FC and League of Legends.',
  },
  {
    id: 'contact',
    label: 'Contact',
    eyebrow: 'Get in touch',
    heading: 'Have a project or opportunity?',
    intro: 'I am always happy to learn, collaborate, and discuss new ideas.',
    title: 'Contact Amit Paul Joy',
    description:
      'Get in touch with Amit Paul Joy by email or social media about projects, collaboration and professional opportunities.',
  },
]

export const PAGES = PAGE_LIST.map((page, index) => {
  const isHome = page.id === 'home'
  return {
    ...page,
    path: isHome ? '/' : `/${page.id}`,
    file: isHome ? 'index' : page.id,
    // Fallback only used if you add a page and forget to write a title.
    title: page.title ?? `${page.label} | ${SITE.name}`,
    eyebrow: page.eyebrow && `${twoDigits(index)} / ${page.eyebrow}`,
  }
})

export const PAGE_BY_ID = Object.fromEntries(PAGES.map((page) => [page.id, page]))
export const NAV_ITEMS = PAGES.filter((page) => page.id !== 'home')

// Icon is looked up by the lowercase label (see components/Icons.jsx).
export const social = [
  { label: 'Facebook', url: 'https://www.facebook.com/Its.Amit.Joy' },
  { label: 'X', url: 'https://x.com/IamAmitJoy' },
  { label: 'GitHub', url: 'https://github.com/iamamitjoy' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/iamamitjoy' },
  { label: 'Threads', url: 'https://www.threads.com/@iamamitjoy' },
  { label: 'Instagram', url: 'https://www.instagram.com/iamamitjoy' },
  { label: 'Reddit', url: 'https://www.reddit.com/user/itsamitjoy' },
  { label: 'Pinterest', url: 'https://www.pinterest.com/iamamitjoy' },
  { label: 'Snapchat', url: 'https://www.snapchat.com/add/iamamitjoy' },
]

// `logo` = file name in src/assets/institutions/ (without .png)
export const education = [
  {
    degree: 'M.Sc. in Information Systems Security',
    name: 'Bangladesh University of Professionals - BUP',
    period: '2025',
    details: 'Postgraduate education in information systems security.',
    logo: 'bup',
    website: 'https://bup.edu.bd/',
    schemaType: 'CollegeOrUniversity',
  },
  {
    degree: 'B.Sc.(Hons.) in Electronics and Communication Engineering',
    name: 'ISTT - Institute of Science Trade & Technology',
    period: '2020',
    details: 'Bachelor of Science Honours degree.',
    logo: 'istt',
    website: 'https://istt.edu.bd/',
    schemaType: 'CollegeOrUniversity',
  },
  {
    degree: 'Higher Secondary Certificate - HSC',
    name: 'Birshreshtha Noor Mohammad Public College',
    period: '2015',
    details: 'Higher Secondary Certificate - HSC completed in 2015.',
    logo: 'bnmpc',
    website: 'https://www.noormohammadcollege.ac.bd/',
    schemaType: 'EducationalOrganization',
  },
  {
    degree: 'Secondary School Certificate - SSC',
    name: 'Ideal School & College',
    period: '2013',
    details: 'Secondary School Certificate - SSC completed in 2013.',
    logo: 'ideal',
    website: 'https://iscm.edu.bd/',
    schemaType: 'EducationalOrganization',
  },
]

// Set `current: true` on a job to publish it as `worksFor` in search data.
export const work = [
  {
    name: 'Ddesk IT Limited',
    period: 'August 2018 - April 2026',
    details:
      'Worked as a Senior Executive in the Web Development Department, specializing in web development and search engine optimization - SEO.',
    logo: 'ddesk',
    website: 'https://ddeskitlimited.com/',
  },
]

export const skills = [
  {
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
    category: 'Programming & SEO',
    description: 'Writing programs and improving website visibility in search engines.',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'Search Engine Optimization', icon: 'seo' },
    ],
  },
  {
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
    category: 'Creative & Productivity',
    description: 'Creating documents, visual assets, and polished video content.',
    skills: [
      { name: 'Microsoft Office', icon: 'office' },
      { name: 'Adobe Photoshop', icon: 'photoshop' },
      { name: 'Adobe Premiere Pro', icon: 'premiere' },
    ],
  },
]

export const hobbies = [
    {
    title: 'Travelling',
    type: 'Exploration',
    description:
      'I enjoy exploring new places, from hills and tea gardens to beaches and islands, and experiencing different cultures and landscapes.',
    icon: 'travel',
    places: [
      {
        region: 'Bangladesh',
        cities: ['Chattagram', "Cox's Bazar", 'Cumilla', 'Mymensingh', 'Sylhet', 'Rangamati', 'Khagrachhari', 'Bandarban', 'Jaflong', 'Sreemangal'],
      },
      {
        region: 'Overseas',
        cities: ['Maldives'],
      },
    ],
  },

  {
    title: 'Playing Cricket',
    type: 'Outdoor Activity',
    description:
      'I enjoy playing cricket as a recreational activity. It helps me stay active while developing teamwork, concentration, and strategic thinking.',
    icon: 'cricket',
  },
  {
    title: 'Playing Chess',
    type: 'Mind Sport',
    description:
      'I enjoy chess as a mind sport. It builds patience and focus, and trains me to think several moves ahead before making a decision.',
    icon: 'chess',
  },
  {
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
]
