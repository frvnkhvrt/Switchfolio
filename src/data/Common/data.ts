import { FaXTwitter, FaInstagram } from "react-icons/fa6"
import { SiGithub, SiLinkedin, SiPython } from "react-icons/si"
import { DiJavascript, DiJava, DiVisualstudio } from "react-icons/di"
import { FaDocker, FaWindows } from "react-icons/fa"
import { IconType } from "react-icons"

import {
  RiNextjsLine,
} from "react-icons/ri"
import {
  SiRocket,
  SiLightning,
  SiTypescript,
  SiSharp,
  SiCplusplus,
  SiPhp,
  SiR,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSqlite,
  SiElasticsearch,
  SiAmazon,
  SiGit,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiFigma,
  SiAdobephotoshop,
  SiLinux,
  SiApple,
  SiJira,
  SiSlack,
  SiTrello,
  SiNotion,
  SiMarkdown,
  SiThreedotjs,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiObsstudio,
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
  // Programming Languages
  { id: 1, icon: DiJavascript, text: "JavaScript" },
  { id: 2, icon: SiTypescript, text: "TypeScript" },
  { id: 3, icon: SiPython, text: "Python" },
  { id: 4, icon: DiJava, text: "Java" },
  { id: 5, icon: SiSharp, text: "C#" },
  { id: 6, icon: SiCplusplus, text: "C++" },
  { id: 7, icon: SiPhp, text: "PHP" },
  { id: 8, icon: SiR, text: "R" },
  // Frameworks & Libraries
  { id: 9, icon: SiReact, text: "React" },
  { id: 10, icon: RiNextjsLine, text: "Next.js" },
  { id: 11, icon: SiNodedotjs, text: "Node.js" },
  { id: 12, icon: SiThreedotjs, text: "Three.js" },
  // Databases
  { id: 13, icon: SiPostgresql, text: "PostgreSQL" },
  { id: 14, icon: SiMysql, text: "MySQL" },
  { id: 15, icon: SiFirebase, text: "Firebase" },
  { id: 16, icon: SiSqlite, text: "SQLite" },
  { id: 17, icon: SiElasticsearch, text: "Elasticsearch" },
  // DevOps & Cloud
  { id: 18, icon: FaDocker, text: "Docker" },
  { id: 19, icon: SiAmazon, text: "AWS" },
  // Version Control
  { id: 20, icon: SiGit, text: "Git" },
  // Styling
  { id: 21, icon: SiTailwindcss, text: "Tailwind CSS" },
  { id: 22, icon: SiSass, text: "Sass" },
  // Design
  { id: 23, icon: SiFigma, text: "Figma" },
  { id: 24, icon: SiAdobephotoshop, text: "Photoshop" },
  // IDEs
  { id: 25, icon: DiVisualstudio, text: "Visual Studio" },
  // Operating Systems
  { id: 26, icon: SiLinux, text: "Linux" },
  { id: 27, icon: FaWindows, text: "Windows" },
  { id: 28, icon: SiApple, text: "macOS" },
  // Project Management
  { id: 29, icon: SiJira, text: "Jira" },
  { id: 30, icon: SiTrello, text: "Trello" },
  // Communication & Productivity
  { id: 31, icon: SiSlack, text: "Slack" },
  { id: 32, icon: SiNotion, text: "Notion" },
  { id: 33, icon: SiMarkdown, text: "Markdown" },
  // Video & Streaming
  { id: 34, icon: SiAdobeaftereffects, text: "After Effects" },
  { id: 35, icon: SiAdobepremierepro, text: "Premiere Pro" },
  { id: 36, icon: SiObsstudio, text: "OBS Studio" },
  // Other
  { id: 37, icon: SiRocket, text: "Startup" },
  { id: 38, icon: SiLightning, text: "Marketing" },
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
