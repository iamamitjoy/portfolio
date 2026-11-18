import {
  FaChessKnight,
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
import { MdSportsCricket } from 'react-icons/md'
import { SiCplusplus, SiPython } from 'react-icons/si'

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
  chess: FaChessKnight,
  gaming: FaGamepad,
}

export function SkillIcon({ name }) {
  const SelectedIcon = skillIcons[name] || FaCode
  return <SelectedIcon aria-hidden="true" focusable="false" />
}

export function HobbyIcon({ name }) {
  const SelectedIcon = hobbyIcons[name]
  return SelectedIcon ? <SelectedIcon aria-hidden="true" focusable="false" /> : null
}
