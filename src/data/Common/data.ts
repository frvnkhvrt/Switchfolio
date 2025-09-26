import { IconType } from "react-icons"

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
  icon: string
}

interface Skill {
  id: number
  icon: string
  text: string
}

const skills: Skill[] = [
  // Programming Languages
  { id: 1, icon: "simple-icons:cplusplus", text: "C++" },
  { id: 2, icon: "simple-icons:javascript", text: "JavaScript" },
  { id: 3, icon: "simple-icons:typescript", text: "TypeScript" },
  { id: 4, icon: "simple-icons:python", text: "Python" },
  { id: 5, icon: "simple-icons:r", text: "R" },
  // Databases
  { id: 6, icon: "simple-icons:mysql", text: "SQL" },
  // Frameworks & Libraries
  { id: 7, icon: "simple-icons:nextdotjs", text: "Next.js" },
  // DevOps & Cloud
  { id: 8, icon: "simple-icons:docker", text: "Docker" },
  { id: 9, icon: "simple-icons:n8n", text: "n8n" },
  { id: 10, icon: "simple-icons:vercel", text: "Vercel" },
  // Version Control
  { id: 11, icon: "simple-icons:github", text: "GitHub" },
  // Styling
  { id: 12, icon: "simple-icons:tailwindcss", text: "Tailwind" },
  // IDEs
  { id: 13, icon: "simple-icons:visualstudiocode", text: "VS Code" },
  // Operating Systems
  { id: 14, icon: "simple-icons:linux", text: "Linux" },
  // Project Management
  { id: 15, icon: "simple-icons:asana", text: "Asana" },
  { id: 16, icon: "simple-icons:trello", text: "Trello" },
  // Communication & Productivity
  { id: 17, icon: "simple-icons:notion", text: "Notion" },
  { id: 18, icon: "simple-icons:slack", text: "Slack" },
  // Marketing & Analytics
  { id: 19, icon: "simple-icons:salesforce", text: "Salesforce" },
  { id: 20, icon: "simple-icons:amazon", text: "Amazon Ads" },
  { id: 21, icon: "simple-icons:googleads", text: "Google Ads" },
  { id: 22, icon: "simple-icons:linkedin", text: "LinkedIn Ads" },
  { id: 23, icon: "simple-icons:meta", text: "Meta Ads" },
  // Design & Media
  { id: 24, icon: "simple-icons:figma", text: "Figma" },
  { id: 25, icon: "simple-icons:adobepremierepro", text: "Premiere Pro" },
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
  "Open to full-time jobs and freelance work."
const emailLink =
  "mailto:franciscohm@icloud.com?subject=Interested%20in%20Hiring%20You"

const navLinks: NavLink[] = [
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
