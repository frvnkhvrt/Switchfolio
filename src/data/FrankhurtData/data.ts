import { FaXTwitter, FaInstagram } from "react-icons/fa6"
import { IconType } from "react-icons"

interface FooterLink {
  id: number
  name: string
  link: string
  icon: IconType
}

const frankhurtImage = "/assets/Images/pfps/Frankhurt.png"
const frankhurtName = "Frankhurt"
const frankhurtAbout = `
  <p>
    Code conjurer, glitch reaper, axiom arsonist.
  </p>
  <p>
    My nights thrive on writing looping obsessions, hacking, and digital addiction. Driven by Coke sips and midnight dog walks. Lurking from the abyss. 🇨🇴
  </p>
`

const frankhurtBio = "Coder + Gamer + Cinephile"

const frankhurtLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/frvnkhvrt",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://instagram.com/frvnkhvrt",
    icon: FaInstagram,
  },

]

const frankhurtFooterLink: FooterLink[] = [
  // Add your footer links here
]

const frankhurtContact =
  ""
const frankhurtContactLink = [
  {
    id: 2,
    name: "Twitter",
    link: "https://twitter.com/frvnkhvrt",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://instagram.com/frvnkhvrt",
    icon: FaInstagram,
  },
]

export {
  frankhurtName,
  frankhurtBio,
  frankhurtImage,
  frankhurtLink,
  frankhurtFooterLink,
  frankhurtAbout,
  frankhurtContact,
  frankhurtContactLink,
}
