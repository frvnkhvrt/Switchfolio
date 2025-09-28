

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
