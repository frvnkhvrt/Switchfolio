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
  // [SECTOR] INTELLIGENCE & AUTO (6)
  { id: 1, icon: "/assets/Images/Google_Antigravity_icon.svg", text: "Antigravity", link: "https://antigravity.google/" },
  { id: 2, icon: "simple-icons:cursor", text: "Cursor", link: "https://cursor.com" },
  { id: 3, icon: "simple-icons:anthropic", text: "Claude Code", link: "https://www.anthropic.com" },
  { id: 4, icon: "simple-icons:openai", text: "Codex", link: "https://openai.com/blog/openai-codex" },
  { id: 5, icon: "simple-icons:huggingface", text: "HuggingFace", link: "https://huggingface.co" },
  { id: 6, icon: "simple-icons:python", text: "Python", link: "https://www.python.org" },

  // [SECTOR] PRODUCT COMMAND (6)
  { id: 7, icon: "simple-icons:linear", text: "Linear", link: "https://linear.app" },
  { id: 8, icon: "mdi:chess-knight", text: "Product Strategy" },
  { id: 9, icon: "mdi:trending-up", text: "Growth Engineering" },
  { id: 10, icon: "simple-icons:posthog", text: "PostHog", link: "https://posthog.com" },
  { id: 11, icon: "simple-icons:n8n", text: "n8n", link: "https://n8n.io" },
  { id: 12, icon: "simple-icons:figma", text: "Figma", link: "https://www.figma.com" },

  // [SECTOR] CORE ENGINEERING (6)
  { id: 13, icon: "simple-icons:nextdotjs", text: "Next.js", link: "https://nextjs.org" },
  { id: 14, icon: "simple-icons:typescript", text: "TypeScript", link: "https://www.typescriptlang.org" },
  { id: 15, icon: "simple-icons:linux", text: "Linux", link: "https://www.kernel.org" },
  { id: 16, icon: "simple-icons:docker", text: "Docker", link: "https://www.docker.com" },
  { id: 17, icon: "simple-icons:cplusplus", text: "C++", link: "https://isocpp.org/" },
  { id: 18, icon: "simple-icons:kicad", text: "KiCad", link: "https://www.kicad.org" },
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
    results: [
      "Streamlined operations, reducing overhead by 30%",
      "Developed a custom client portal improving retention",
      "Automated lead generation workflows",
      "Increased client retention by 50%"
    ],
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
    results: [
      "Supported 10k+ enterprise users in LATAM",
      "Integrated Salesforce & Marketo for real-time analytics",
      "Reduced report generation time from days to minutes",
      "Optimized API response time by 40%"
    ],
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
export const emailLink = "mailto:frankhurt@icloud.com?subject=Interested%20in%20Hiring%20You" as const

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
