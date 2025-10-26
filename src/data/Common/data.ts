/**
 * Common Portfolio Data
 * Centralized data for skills, projects, writings, and navigation
 * All data is typed and immutable for consistency
 * @module data/Common/data
 */

import type { PortfolioProject, Writing, NavLink, PortfolioSkill, ProjectStatus } from '@/types'

// ============================================================================
// SKILLS & TECHNOLOGIES
// ============================================================================

/**
 * Skills and technologies portfolio
 * Displayed as icons with labels in the skills section
 */
const skills: readonly PortfolioSkill[] = [
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
  { id: 13, icon: "simple-icons:windsurf", text: "Windsurf" },
  { id: 14, icon: "simple-icons:openai", text: "Codex" },
  { id: 15, icon: "simple-icons:anthropic", text: "Claude" },
  { id: 16, icon: "simple-icons:n8n", text: "n8n" },
  { id: 17, icon: "simple-icons:docker", text: "Docker" },
  { id: 18, icon: "simple-icons:linux", text: "Linux" },
  { id: 19, icon: "simple-icons:salesforce", text: "Salesforce" },
  { id: 20, icon: "simple-icons:tableau", text: "Tableau" },
] as const

/**
 * Get all skills
 */
export const getSkills = (): readonly PortfolioSkill[] => skills

// ============================================================================
// PORTFOLIO PROJECTS
// ============================================================================

/**
 * Portfolio projects with status, descriptions, and tech stack
 * Projects are displayed in the Projects section with expandable details
 */
const projects: readonly PortfolioProject[] = [
  {
    id: 1,
    img: "/assets/Images/project/",
    title: "Bold Choice",
    status: 'building' as ProjectStatus,
    content: "Consulting agency",
    url: "",
    github: "",
    skill: ["Business", "Automation", "Marketing", "Sales", "Engineering", "Development", "AI"],
  },
  {
    id: 2,
    img: "/assets/Images/project/",
    title: "Switchfolio",
    status: 'running' as ProjectStatus,
    content: "A dual-persona portfolio that switches between professional and creative identities",
    url: "",
    github: "https://github.com/frvnkhvrt/Portfolio",
    skill: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
  },
  {
    id: 3,
    img: "/assets/Images/project/",
    title: "AI-powered UGC Automation",
    status: 'running' as ProjectStatus,
    content: "AI-powered UGC n8n automation, integrating Nano Banana and Veo 3",
    url: "",
    github: "",
    skill: ["n8n", "Nano Banana", "Veo 3", "JavaScript"],
  },
  {
    id: 4,
    img: "/assets/Images/project/",
    title: "mySchneider Partner Program",
    status: 'running' as ProjectStatus,
    content: "Enterprise-grade Salesforce integration with portal, app, social, leads, and rewards systems — enabling real-time sync, automated marketing workflows, and reporting",
    url: "https://www.se.com/myschneider/",
    github: "",
    skill: ["Salesforce", "Lightning Web Components", "Apex", "Tableau", "Marketo", "AppsFlyer", "HTML", "CSS", "JavaScript"],
  }
] as const

/**
 * Get all projects
 */
export const getProjects = (): readonly PortfolioProject[] => projects

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status: ProjectStatus): readonly PortfolioProject[] => {
  return projects.filter(project => project.status === status)
}

// ============================================================================
// WRITINGS & BLOG POSTS
// ============================================================================

/**
 * Blog posts and writings
 * External links to published content
 */
const writings: readonly Writing[] = [
  {
    id: 1,
    img: "/assets/Images/writing/medium.png",
    head: "Read my blog",
    des: "Follow me on Medium",
    link: "https://frankhurt.medium.com",
  },
] as const

/**
 * Get all writings
 */
export const getWritings = (): readonly Writing[] => writings

// ============================================================================
// CONTACT & HIRE INFORMATION
// ============================================================================

/**
 * Hire me section content
 */
export const hireText = "Open to full-time and freelance jobs" as const

/**
 * Contact email link with pre-filled subject
 */
export const emailLink = "mailto:info@frankhurt.dev?subject=Interested%20in%20Hiring%20You" as const

// ============================================================================
// NAVIGATION LINKS
// ============================================================================

/**
 * Social navigation links displayed in the navigation bar
 * These appear as icons in the footer navigation
 */
const navLinks: readonly NavLink[] = [
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
] as const

/**
 * Get all navigation links
 */
export const getNavLinks = (): readonly NavLink[] => navLinks

// ============================================================================
// SUPPORT SECTION
// ============================================================================

/**
 * Support section content
 */
export const supportText = "Support my work and future projects" as const

// ============================================================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================================================

/**
 * Direct exports for backward compatibility
 * Prefer using getter functions (getProjects, getSkills, etc.) for better encapsulation
 */
export {
  projects,
  writings,
  skills,
  navLinks,
}
