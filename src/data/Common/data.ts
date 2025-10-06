

import { PortfolioProject, Writing, NavLink, PortfolioSkill } from '@/types'

const skills: PortfolioSkill[] = [
  { id: 1, icon: "mdi:chip", text: "Assembly" },
  { id: 2, icon: "simple-icons:cplusplus", text: "C++" },
  { id: 3, icon: "simple-icons:oracle", text: "Java" },
  { id: 4, icon: "simple-icons:python", text: "Python" },
  { id: 5, icon: "simple-icons:mysql", text: "SQL" },
  { id: 6, icon: "simple-icons:pytorch", text: "PyTorch" },
  { id: 7, icon: "simple-icons:tensorflow", text: "TensorFlow" },
  { id: 8, icon: "simple-icons:keras", text: "Keras" },
  { id: 9, icon: "simple-icons:javascript", text: "JavaScript" },
  { id: 10, icon: "simple-icons:nextdotjs", text: "Next.js" },
  { id: 11, icon: "simple-icons:vercel", text: "Vercel" },
  { id: 12, icon: "simple-icons:github", text: "GitHub" },
  { id: 13, icon: "simple-icons:visualstudiocode", text: "VSCode" },
  { id: 14, icon: "simple-icons:openai", text: "OpenAI" },
  { id: 15, icon: "simple-icons:anthropic", text: "Anthropic" },
  { id: 16, icon: "simple-icons:n8n", text: "n8n" },
  { id: 17, icon: "simple-icons:docker", text: "Docker" },
  { id: 18, icon: "simple-icons:linux", text: "Linux" },
  { id: 19, icon: "simple-icons:salesforce", text: "Salesforce" },
  { id: 20, icon: "simple-icons:tableau", text: "Tableau" },
]

const projects: PortfolioProject[] = [
  {
    id: 1,
    img: "/assets/Images/project/",
    title: "Bold Choice",
    status: 'building',
    content: "Consulting agency.",
    url: "",
    github: "",
    skill: ["Business", "Process Automation", "Marketing", "Sales", "Engineering", "AI"],
  },
  {
    id: 2,
    img: "/assets/Images/project/",
    title: "Switchfolio",
    status: 'running',
    content: "A dual-persona portfolio that switches between professional and creative identities.",
    url: "",
    github: "https://github.com/frvnkhvrt/Portfolio",
    skill: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
  },
  {
    id: 3,
    img: "/assets/Images/project/",
    title: "AI-powered UGC Automation",
    status: 'running',
    content: "AI-powered UGC n8n automation, integrating Nano Banana and Veo 3.",
    url: "",
    github: "",
    skill: ["n8n", "Nano Banana", "Veo 3", "JavaScript"],
  },
  {
    id: 4,
    img: "/assets/Images/project/",
    title: "mySchneider Partner Program",
    status: 'complete',
    content: "Enterprise-grade Salesforce integration with portal, app, social, leads, and rewards systems — enabling real-time sync, automated marketing workflows, and reporting.",
    url: "https://www.se.com/myschneider/",
    github: "",
    skill: ["Salesforce", "Apex", "Lightning Web Components", "Tableau", "Data Synchronization"],
  }
]

const writings: Writing[] = [
  {
    id: 1,
    img: "/assets/Images/writing/medium.png",
    head: "Read my blog",
    des: "Follow me on Medium.",
    link: "https://frankhurt.medium.com",
  },
]

const hireText =
  "Open to full-time and freelance jobs."
const emailLink =
  "mailto:franciscoahurtado@icloud.com?subject=Interested%20in%20Hiring%20You"

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franciscoahm",
    icon: "simple-icons:linkedin",
  },
  {
    id: 2,
    name: "Medium",
    link: "https://frankhurt.medium.com",
    icon: "simple-icons:medium",
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://twitter.com/frvnkhvrt",
    icon: "simple-icons:x",
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://instagram.com/frvnkhvrt",
    icon: "simple-icons:instagram",
  },
]

  const supportText =
  "Support my work and future projects."

export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
}
