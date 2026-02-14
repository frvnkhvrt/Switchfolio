/**
 * Site configuration — single source of truth for URL and metadata defaults.
 * Use NEXT_PUBLIC_SITE_URL in .env for different environments.
 */

export const SITE_URL =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
  process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://www.frankhurt.dev"

export { DEFAULT_PERSONA_ID } from "@/data/personas"
