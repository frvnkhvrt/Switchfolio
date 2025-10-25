import { Persona } from '@/types'

export const franciscoData = {
  name: "Francisco",
  shortName: "Francisco",
  bio: "Engineer & Marketer",
  about: [
    "Tech wizard and status quo saboteur.",
    "My days: reading, coding, and movies.",
    "Fueled by cappuccinos and dog walks.",
    "🇨🇴 Bogotá-based.",
  ],
  image: "/assets/Images/profile-pictures/Francisco.jpg",
  links: [
    {
      id: 1,
      name: "Email",
      link: "mailto:info@frankhurt.dev",
      icon: "simple-icons:maildotru",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/franciscoahm",
      icon: "simple-icons:linkedin",
    },
  ],
}

export const frankhurtData = {
  name: "Frankhurt",
  shortName: "Frankhurt",
  bio: "Gamer & Cinephile",
  about: [
    "Words conjurer and axiom arsonist.",
    "My nights: writing, hacks, and games.",
    "Driven by Coke and digital addiction.",
    "ロムっている。",
  ],
  image: "/assets/Images/profile-pictures/Frankhurt.jpg",
  links: [
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
  ],
}

const personas: Record<string, Persona> = {
  francisco: {
    id: 'francisco',
    ...franciscoData,
  },
  frankhurt: {
    id: 'frankhurt',
    ...frankhurtData,
  },
}

export default personas
