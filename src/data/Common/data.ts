

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
  { id: 1, icon: "simple-icons:c", text: "C" },
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
  { id: 13, icon: "simple-icons:visualstudiocode", text: "VS Code" },
  { id: 14, icon: "simple-icons:openai", text: "OpenAI API" },
  { id: 15, icon: "simple-icons:n8n", text: "n8n" },
  { id: 16, icon: "simple-icons:docker", text: "Docker" },
  { id: 17, icon: "simple-icons:linux", text: "Linux" },
  { id: 18, icon: "simple-icons:salesforce", text: "Salesforce" },
  { id: 19, icon: "simple-icons:tableau", text: "Tableau" },
]

const projects: Project[] = [
  {
    id: 1,
    img: "/assets/Images/project/placeholder-1.png",
    title: "Project Title 1",
    status: true,
    content: "This is a placeholder description for project 1. Replace with your actual project details.",
    url: "https://example.com/project1",
    github: "https://github.com/username/project1",
    skill: ["React", "TypeScript"],
    preview: "/assets/Videos/demo/project1.mp4",
  },
  {
    id: 2,
    img: "/assets/Images/project/placeholder-2.png",
    title: "Project Title 2",
    status: false,
    content: "This is a placeholder description for project 2. Replace with your actual project details.",
    url: "https://example.com/project2",
    github: "https://github.com/username/project2",
    skill: ["Next.js", "Tailwind"],
    preview: "/assets/Videos/demo/project2.mp4",
  },
  {
    id: 3,
    img: "/assets/Images/project/placeholder-3.png",
    title: "Project Title 3",
    status: true,
    content: "This is a placeholder description for project 3. Replace with your actual project details.",
    url: "https://example.com/project3",
    github: "https://github.com/username/project3",
    skill: ["Python", "Django"],
    preview: "/assets/Videos/demo/project3.mp4",
  },
]

const writings: Writing[] = [
  {
    id: 1,
    img: "/assets/Images/writing/placeholder-1.png",
    head: "Article Title 1",
    des: "This is a placeholder description for article 1. Replace with your actual article summary.",
    link: "https://medium.com/@username/article-1",
  },
  {
    id: 2,
    img: "/assets/Images/writing/placeholder-2.png",
    head: "Article Title 2",
    des: "This is a placeholder description for article 2. Replace with your actual article summary.",
    link: "https://medium.com/@username/article-2",
  },
  {
    id: 3,
    img: "/assets/Images/writing/placeholder-3.png",
    head: "Article Title 3",
    des: "This is a placeholder description for article 3. Replace with your actual article summary.",
    link: "https://medium.com/@username/article-3",
  },
]

const hireText =
  "Open to full-time and freelance jobs."
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
  "Stay wired on the chaos I'm unleashing."

  const supportText =
  "Dig my vibe? Fuel my grind."

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
