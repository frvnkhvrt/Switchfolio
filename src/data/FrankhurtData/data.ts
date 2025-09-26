import { IconType } from "react-icons"

interface FooterLink {
  id: number
  name: string
  link: string
  icon: string
}

const frankhurtImage = "/assets/Images/pfps/Frankhurt.png"
const frankhurtName = "Frankhurt"
const frankhurtAbout = `
  <p>
    Code conjurer, glitch reaper, axiom arsonist.
  </p>
  <p>
    My nights thrive on writing looping obsessions, hacking, and digital addiction. Driven by Coke sips and midnight dog walks. Lurking.
  </p>
`

const frankhurtBio = "Coder + Gamer + Cinephile"

const frankhurtLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/frvnkhvrt",
    icon: "simple-icons:x",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://instagram.com/frvnkhvrt",
    icon: "simple-icons:instagram",
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
    icon: "simple-icons:x",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://instagram.com/frvnkhvrt",
    icon: "simple-icons:instagram",
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
