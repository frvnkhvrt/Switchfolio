import { FaXTwitter, FaInstagram } from "react-icons/fa6"
import { SiGithub, SiLinkedin, SiPython } from "react-icons/si"
import { DiJavascript } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import { IconType } from "react-icons"

import {
  RiNextjsLine,
} from "react-icons/ri"
import {
  SiVercel,
  SiIrobot,
  SiLightning,
  SiRocket,
} from "react-icons/si"

interface Project {
  id: number
  img: string
  title: string
  status: boolean
  content: string
  url: string
  github: string
  skill: string[]
  preview: string
}

interface Writing {
  id: number
  img: string
  head: string
  des: string
  link: string
}

interface NavLink {
  id: number
  name: string
  link: string
  icon: IconType
}

interface Skill {
  id: number
  icon: IconType
  text: string
}

const skills: Skill[] = [
  { id: 1, icon: RiNextjsLine, text: "Next.js" },
  { id: 2, icon: SiPython, text: "Python" },
  { id: 3, icon: FaDocker, text: "Docker" },
  { id: 4, icon: DiJavascript, text: "JavaScript" },
  { id: 5, icon: SiIrobot, text: "Automation Engineering" },
  { id: 6, icon: SiLightning, text: "Marketing" },
  { id: 7, icon: SiRocket, text: "Startup" },
  { id: 8, icon: SiVercel, text: "Product Development" },
]

const projects: Project[] = [
  // Add your projects here
  // Example:
  // {
  //   id: 1,
  //   img: "/assets/Images/project/your-project.png",
  //   title: "Your Project",
  //   status: true,
  //   content: "Description of your project.",
  //   url: "https://yourproject.com",
  //   github: "https://github.com/yourusername/yourproject",
  //   skill: ["React", "Next.js"],
  //   preview: "/assets/Videos/demo/yourproject.mp4",
  // },
]

const writings: Writing[] = [
  // Add your writings here
  // Example:
  // {
  //   id: 1,
  //   img: "/assets/Images/writing/your-article.png",
  //   head: "Your Article Title",
  //   des: "Description of your article.",
  //   link: "https://medium.com/@yourusername/your-article",
  // },
]

const hireText =
  "I'm an engineer obsessed with fusing big ideas with tech. Open to full-time, freelance, or collabs."
const emailLink =
  "mailto:franciscohm@icloud.com?subject=Interested%20in%20Hiring%20You"

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franciscoahm",
    icon: SiLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/frvnkhvrt",
    icon: SiGithub,
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://twitter.com/frvnkhvrt",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://instagram.com/frvnkhvrt",
    icon: FaInstagram,
  },
]

const newsText =
  "Lock in, stay wired, and claim first dibs on the chaos I'm unleashing next."

  const supportText =
  "Dig my vibe? Fuel the fire: Your support powers my work."

export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
}
