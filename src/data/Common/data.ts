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
  // Management & Business
  { id: 1, icon: "simple-icons:jira", text: "Jira" },
  { id: 2, icon: "simple-icons:confluence", text: "Confluence" },
  { id: 3, icon: "simple-icons:notion", text: "Notion" },
  { id: 4, icon: "simple-icons:slack", text: "Slack" },
  { id: 5, icon: "simple-icons:microsoftexcel", text: "Excel" },
  { id: 6, icon: "simple-icons:salesforce", text: "Salesforce" },
  { id: 7, icon: "simple-icons:tableau", text: "Tableau" },
  { id: 8, icon: "simple-icons:n8n", text: "n8n" },

  // Engineering & Embedded
  { id: 9, icon: "simple-icons:c", text: "C" },
  { id: 10, icon: "simple-icons:cplusplus", text: "C++" },
  { id: 11, icon: "mdi:chip", text: "Assembly" },
  { id: 12, icon: "simple-icons:arduino", text: "Arduino" },
  { id: 13, icon: "simple-icons:raspberrypi", text: "Raspberry Pi" },
  { id: 14, icon: "simple-icons:kicad", text: "KiCad" },
  { id: 15, icon: "file-icons:matlab", text: "MATLAB" },
  { id: 16, icon: "file-icons:matlab", text: "Simulink" },

  // Software & Web
  { id: 17, icon: "simple-icons:python", text: "Python" },
  { id: 18, icon: "simple-icons:typescript", text: "TypeScript" },
  { id: 19, icon: "simple-icons:nextdotjs", text: "Next.js" },
  { id: 20, icon: "simple-icons:fastapi", text: "FastAPI" },
  { id: 21, icon: "simple-icons:mysql", text: "SQL" },
  { id: 22, icon: "simple-icons:google", text: "Antigravity" },

  // AI & Data
  { id: 23, icon: "simple-icons:pytorch", text: "PyTorch" },
  { id: 28, icon: "simple-icons:tensorflow", text: "TensorFlow" },

  // DevOps & Tools
  { id: 24, icon: "simple-icons:amazon", text: "AWS" },
  { id: 25, icon: "simple-icons:linux", text: "Linux" },
  { id: 26, icon: "simple-icons:docker", text: "Docker" },
  { id: 27, icon: "simple-icons:github", text: "GitHub" },
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
    title: "Bold Choice ",
    status: 'running' as ProjectStatus,
    content: "A strategic agency focused on business growth and operational efficiency.",
    url: "https://boldchoice.co/",
    github: "",
    skill: [
      "Strategic Consulting",
      "Digital Transformation",
      "Marketing Strategy",
      "Process Automation",
    ],
  },
  {
    id: 2,
    img: "/assets/Images/project/",
    title: "mySchneider",
    status: 'running' as ProjectStatus,
    content: "An enterprise partner platform for automated marketing, analytics, and real-time systems integration.",
    url: "https://www.se.com/myschneider/",
    github: "",
    skill: [
      "Salesforce Platform",
      "Lightning Web Components (LWC)",
      "Apex",
      "Tableau (BI & Reporting)",
      "Marketo (Marketing Automation)",
      "API & Systems Integration",
      "AppsFlyer (Mobile Analytics)"
    ],
  },
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
