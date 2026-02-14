import dynamic from "next/dynamic";
import type { AnimationVariant, Persona } from "@/types";
import React from "react";

// ============================================================================
// DYNAMIC COMPONENT REGISTRY
// ============================================================================

export const SectionComponents = {
  InfoCard: dynamic(() => import("../components/PageComponent/InfoCard")),
  TrustBar: dynamic(() => import("../components/PageComponent/TrustBar")),
  Projects: dynamic(() => import("../components/PageComponent/Projects")),
  HireMe: dynamic(() => import("../components/PageComponent/HireMe")),
  Skills: dynamic(() => import("../components/PageComponent/Skills")),
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
    id: "trust-bar",
    Component: SectionComponents.TrustBar as React.ComponentType<unknown>,
    variant: "blur",
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
    id: "footer",
    Component: SectionComponents.Footer as React.ComponentType<unknown>,
    variant: "fade",
    getProps: ({ persona }) => ({ persona }),
  },
];
