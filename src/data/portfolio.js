import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaReddit,
  FaSnapchat,
  FaThreads,
  FaXTwitter,
} from 'react-icons/fa6'

import bupLogo from '../assets/institutions/bup.png'
import isttLogo from '../assets/institutions/istt.png'
import bnmpcLogo from '../assets/institutions/bnmpc.png'
import idealLogo from '../assets/institutions/ideal.png'
import ddeskLogo from '../assets/institutions/ddesk.png'

// Menu items. Each one is its own HTML file (about.html, education.html, ...).
// Page titles and meta descriptions live in those HTML files, not here.
export const NAV_ITEMS = [
  { id: 'about', label: 'About', path: '/about' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'experience', label: 'Work', path: '/experience' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'hobbies', label: 'Hobbies', path: '/hobbies' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

export const portfolio = {
  name: 'Amit Paul Joy',
  shortName: 'Amit Joy',
  role: 'Information Systems Security Professional',
  location: 'Bangladesh',
  email: 'iamamitjoy@gmail.com',
  about:
    'I have an academic background in information systems security and electronics and communication engineering. I am interested in technology, IT operations, academic learning, and professional problem solving.',

  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/Its.Amit.Joy', icon: FaFacebookF },
    { label: 'X', url: 'https://x.com/IamAmitJoy', icon: FaXTwitter },
    { label: 'GitHub', url: 'https://github.com/iamamitjoy', icon: FaGithub },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/iamamitjoy', icon: FaLinkedinIn },
    { label: 'Threads', url: 'https://www.threads.com/@iamamitjoy', icon: FaThreads },
    { label: 'Instagram', url: 'https://www.instagram.com/iamamitjoy', icon: FaInstagram },
    { label: 'Reddit', url: 'https://www.reddit.com/user/itsamitjoy', icon: FaReddit },
    { label: 'Pinterest', url: 'https://www.pinterest.com/iamamitjoy', icon: FaPinterestP },
    { label: 'Snapchat', url: 'https://www.snapchat.com/add/iamamitjoy', icon: FaSnapchat },
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
      title: 'Playing Chess',
      type: 'Mind Sport',
      description:
        'I enjoy chess as a mind sport. It builds patience and focus, and trains me to think several moves ahead before making a decision.',
      icon: 'chess',
    },
    {
      number: '03',
      title: 'Playing Video Games',
      type: 'Gaming',
      description: 'I enjoy competitive, sports, strategy, and open-world video games.',
      icon: 'gaming',
      wide: true,
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
