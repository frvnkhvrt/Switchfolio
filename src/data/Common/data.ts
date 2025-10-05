

interface CaseStudy {
  problem: string
  solution: string
  challenges: string
  results: string
  learnings: string
}

interface Project {
  id: number
  img: string
  title: string
  status: 'building' | 'running' | 'complete'
  content: string
  url: string
  github: string
  skill: string[]
  caseStudy?: CaseStudy
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
  { id: 14, icon: "simple-icons:openai", text: "OpenAI" },
  { id: 15, icon: "simple-icons:anthropic", text: "Anthropic" },
  { id: 16, icon: "simple-icons:n8n", text: "n8n" },
  { id: 17, icon: "simple-icons:docker", text: "Docker" },
  { id: 18, icon: "simple-icons:linux", text: "Linux" },
  { id: 19, icon: "simple-icons:salesforce", text: "Salesforce" },
  { id: 20, icon: "simple-icons:tableau", text: "Tableau" },
]

const projects: Project[] = [
  {
    id: 1,
    img: "/assets/Images/project/",
    title: "Bold Choice",
    status: 'building',
    content: "Startup creating autonomous robotics for industrial automation.",
    url: "",
    github: "",
    skill: ["Electronics", "Automation", "AI", "Robotics", "IoT"],
    caseStudy: {
      problem: "Traditional manufacturing faces inefficiencies in quality control, predictive maintenance, and process optimization. Manual inspection methods are time-consuming and error-prone.",
      solution: "Developed an AI-powered autonomous inspection system using computer vision, machine learning, and IoT sensors to provide real-time quality assurance and predictive maintenance.",
      challenges: "Integrating multiple sensor types, ensuring real-time processing, and maintaining accuracy in varying lighting conditions.",
      results: "Achieved 95% defect detection accuracy, reduced inspection time by 80%, and enabled predictive maintenance preventing 70% of potential equipment failures.",
      learnings: "The importance of robust data pipelines, the value of cross-disciplinary collaboration, and the need for scalable ML model deployment."
    }
  },
  {
    id: 2,
    img: "/assets/Images/project/",
    title: "Switchfolio",
    status: 'running',
    content: "A dual-persona portfolio website that switches between professional and creative identities.",
    url: "https://frankhurt.dev",
    github: "https://github.com/frvnkhvrt/Portfolio",
    skill: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "PWA", "Accessibility", "Vercel"],
    caseStudy: {
      problem: "Traditional portfolios are static and don't capture the multifaceted nature of creative professionals who work across different domains and audiences.",
      solution: "Created a dynamic portfolio that switches between two distinct personas (Francisco - Engineer/Marketer, Frankhurt - Gamer/Creator) with smooth animations, shared content architecture, and responsive design.",
      challenges: "Managing state across persona switches, optimizing animations for performance, ensuring accessibility across both themes, and maintaining SEO for dynamic content.",
      results: "Achieved 95+ Lighthouse scores, WCAG 2.1 AA compliance, and created a unique user experience that effectively showcases dual professional identities.",
      learnings: "The power of context-aware UI, the importance of performance optimization in animations, and the value of comprehensive accessibility testing."
    }
  },
  {
    id: 3,
    img: "/assets/Images/project/",
    title: "AI Content Generator",
    status: 'running',
    content: "Intelligent content creation platform built with n8n automation, integrating Nano Banana, Veo 3, and Sora 2 LLMs. Features automated blog post generation, social media content creation, and SEO-optimized article writing.",
    url: "",
    github: "",
    skill: ["n8n", "LLMs", "Nano Banana", "Veo 3", "Sora 2", "Automation", "APIs", "JavaScript", "Redis"],
    caseStudy: {
      problem: "Content creators struggle with consistent output and SEO optimization. Manual content creation is time-intensive and often lacks strategic keyword integration.",
      solution: "Developed an n8n-based automation workflow integrating Nano Banana, Veo 3, and Sora 2 LLMs for comprehensive content generation, including templates, SEO analysis, and automated publishing.",
      challenges: "Managing API rate limits, ensuring content quality, implementing proper caching, and creating intuitive content editing interfaces.",
      results: "Generated 500+ pieces of content, improved client SEO rankings by 40%, and reduced content creation time by 75%.",
      learnings: "The importance of content quality gates, the value of hybrid AI-human workflows, and the need for robust error handling in API integrations."
    }
  },
  {
    id: 4,
    img: "/assets/Images/project/",
    title: "Salesforce Integration Hub",
    status: 'complete',
    content: "Enterprise-grade integration platform connecting Salesforce CRM with multiple business systems. Features real-time data synchronization, automated workflows, and comprehensive reporting.",
    url: "",
    github: "",
    skill: ["Salesforce", "Apex", "Lightning Web Components", "APIs", "Data Synchronization", "Tableau"],
    caseStudy: {
      problem: "Large enterprises struggle with data silos between CRM systems and other business applications, leading to inconsistent reporting and manual data entry errors.",
      solution: "Developed a centralized integration hub using Salesforce APIs, custom Apex classes, and real-time data synchronization to connect CRM with ERP, marketing automation, and analytics platforms.",
      challenges: "Managing complex data mappings, ensuring data integrity during synchronization, handling API rate limits, and creating user-friendly configuration interfaces.",
      results: "Integrated 12+ business systems, reduced manual data entry by 90%, improved reporting accuracy by 95%, and enabled real-time business intelligence.",
      learnings: "The criticality of data validation, the importance of comprehensive error logging, and the value of modular architecture for complex integrations."
    }
  }
]

const writings: Writing[] = [
  {
    id: 1,
    img: "/assets/Images/writing/",
    head: "My days as a engineer",
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
  "Support my work and future projects."

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
