import dynamic from "next/dynamic";
import type { AnimationVariant, Persona } from "@/types";
import React from "react";

// ============================================================================
// DYNAMIC COMPONENT REGISTRY
// ============================================================================

export const SectionComponents = {
  InfoCard: dynamic(() => import("../components/PageComponent/InfoCard")),
  AboutMe: dynamic(() => import("../components/PageComponent/AboutMe")),
  Projects: dynamic(() => import("../components/PageComponent/Projects")), // Add Projects
  HireMe: dynamic(() => import("../components/PageComponent/HireMe")),
  Skills: dynamic(() => import("../components/PageComponent/Skills")),
  SupportMe: dynamic(() => import("../components/PageComponent/SupportMe")),
  Footer: dynamic(() => import("../components/PageComponent/Footer")),
};

// ============================================================================
// SECTION DEFINITIONS
// ============================================================================

export type SectionContext = {
  persona: Persona;
  isSwitchOn: boolean;
};

export interface SectionDefinition {
  id: string;
  // Using unknown for props to allow flexibility while avoiding 'any'
  // Specific components will validate their own props
  Component: React.ComponentType<unknown>;
  variant: AnimationVariant;
  delay?: number;
  getProps?: (context: SectionContext) => Record<string, unknown>;
  shouldRender?: (context: SectionContext) => boolean;
}

export const SECTION_DEFINITIONS: SectionDefinition[] = [
  {
    id: "info-card",
    Component: SectionComponents.InfoCard as React.ComponentType<unknown>,
    variant: "blur",
    getProps: ({ persona }) => ({ persona }),
  },
  {
    id: "about-me",
    Component: SectionComponents.AboutMe as React.ComponentType<unknown>,
    variant: "slideUp",
    getProps: ({ persona }) => ({ persona }),
    shouldRender: () => false, // Disable AboutMe to focus on Manifesto
  },
  {
    id: "skills",
    Component: SectionComponents.Skills as React.ComponentType<unknown>,
    variant: "fade",
  },
  {
    id: "projects",
    Component: SectionComponents.Projects as React.ComponentType<unknown>,
    variant: "fade",
  },
  {
    id: "hire-me",
    Component: SectionComponents.HireMe as React.ComponentType<unknown>,
    variant: "slideUp",
  },
  {
    id: "support-me",
    Component: SectionComponents.SupportMe as React.ComponentType<unknown>,
    variant: "slideUp",
    shouldRender: () => false,
  },
];
