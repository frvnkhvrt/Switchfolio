import { IconType } from "react-icons"

interface FooterLink {
  id: number
  name: string
  link: string
  icon: string
}

const franciscoImage = "/assets/Images/pfps/Francisco.jpg"
const franciscoName = "Francisco"
const franciscoShortName = "Francisco"
const franciscoBio = "Engineer + Marketer + Manager"
const franciscoAbout = `
  <p>
    Tech wizard, pixel assassin, status quo saboteur.
  </p>
  <p>
    My days ignite with reading fantasy stories, coding, and late movie binges. Fueled by cappuccinos and sunny doggo walks. Bogotá-based. 🇨🇴
  </p>`

const franciscoLink = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franciscoahm",
    icon: "simple-icons:linkedin",
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/frvnkhvrt",
    icon: "simple-icons:github",
  },
]

const franciscoContact =
  ""
const franciscoContactLink = [
  {
    id: 1,
    name: "Email",
    link: "mailto:franciscohm@icloud.com",
    icon: "simple-icons:maildotru",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franciscoahm",
    icon: "simple-icons:linkedin",
  },
]

const franciscoFooterLink: FooterLink[] = [
  // Add your footer links here
]

export {
  franciscoImage,
  franciscoBio,
  franciscoContact,
  franciscoContactLink,
  franciscoName,
  franciscoShortName,
  franciscoAbout,
  franciscoLink,
  franciscoFooterLink,
}
