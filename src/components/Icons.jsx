import {
  FaChessKnight, FaCode, FaCss3Alt, FaFileWord, FaFilm, FaGamepad, FaHtml5,
  FaImage, FaJs, FaLock, FaPlaneDeparture, FaSearch, FaShieldAlt, FaWordpress,
} from 'react-icons/fa'
import {
  FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterestP,
  FaReddit, FaSnapchat, FaThreads, FaXTwitter,
} from 'react-icons/fa6'
import { MdEmail, MdSportsCricket } from 'react-icons/md'
import { SiCplusplus, SiPython } from 'react-icons/si'

const ICONS = {
  // social (key = lowercase label in site.js)
  facebook: FaFacebookF, x: FaXTwitter, github: FaGithub, linkedin: FaLinkedinIn,
  threads: FaThreads, instagram: FaInstagram, reddit: FaReddit,
  pinterest: FaPinterestP, snapchat: FaSnapchat, email: MdEmail,
  // skills
  html: FaHtml5, css: FaCss3Alt, javascript: FaJs, wordpress: FaWordpress,
  python: SiPython, cplusplus: SiCplusplus, seo: FaSearch,
  cryptography: FaLock, steganography: FaImage, cybersecurity: FaShieldAlt,
  office: FaFileWord, photoshop: FaImage, premiere: FaFilm,
  // hobbies
  cricket: MdSportsCricket,
  chess: FaChessKnight,
  gaming: FaGamepad,
  travel: FaPlaneDeparture,
}

export default function Icon({ name }) {
  const Svg = ICONS[name] ?? FaCode
  return <Svg aria-hidden="true" focusable="false" />
}
