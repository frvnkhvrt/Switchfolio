import { Persona, PersonaId } from '@/types'

const PERSONA_DATA = {
  francisco: {
    id: 'francisco',
    name: 'Francisco',
    shortName: 'Francisco',
    bio: 'Engineer & Marketer',
    about: [
      'Tech wizard and status quo saboteur.',
      'My days: reading, coding, and movies.',
      'Fueled by cappuccinos and dog walks.',
      '🇨🇴 Bogotá-based.',
    ],
    image: '/assets/Images/profile-pictures/Francisco.jpg',
    links: [
      {
        id: 1,
        name: 'Email',
        link: 'mailto:info@frankhurt.dev',
        icon: 'simple-icons:maildotru',
      },
      {
        id: 2,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/franciscoahm',
        icon: 'simple-icons:linkedin',
      },
    ],
  },
  frankhurt: {
    id: 'frankhurt',
    name: 'Frankhurt',
    shortName: 'Frankhurt',
    bio: 'Gamer & Cinephile',
    about: [
      'Words conjurer and axiom arsonist.',
      'My nights: writing, hacks, and games.',
      'Driven by Coke and digital addiction.',
      'ロムっている。',
    ],
    image: '/assets/Images/profile-pictures/Frankhurt.jpg',
    links: [
      {
        id: 1,
        name: 'Twitter',
        link: 'https://twitter.com/frvnkhvrt',
        icon: 'simple-icons:x',
      },
      {
        id: 2,
        name: 'Instagram',
        link: 'https://instagram.com/frvnkhvrt',
        icon: 'simple-icons:instagram',
      },
    ],
  },
} satisfies Record<PersonaId, Persona>

const personaIds = Object.keys(PERSONA_DATA) as PersonaId[]

if (personaIds.length === 0) {
  throw new Error('Persona registry is empty. Define at least one persona in data/personas.ts.')
}

export const PERSONA_IDS = Object.freeze(personaIds) as readonly PersonaId[]

const [primaryPersonaId] = PERSONA_IDS

export const DEFAULT_PERSONA_ID: PersonaId = primaryPersonaId

const personas: Record<PersonaId, Persona> = PERSONA_DATA

export default personas
