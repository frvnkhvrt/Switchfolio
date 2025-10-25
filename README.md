# Switchfolio

> A modern, high-performance dual-persona portfolio built with Next.js 15, React 18, and TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-purple)](https://www.framer.com/motion/)

## ✨ Features

### 🎭 Dual Persona System
- **Instant Switching**: Toggle between two distinct professional personas with one click
- **Persistent State**: Selections saved to localStorage for seamless experience
- **Smooth Transitions**: Elegant Framer Motion animations with accessibility support
- **Context-Aware**: All content adapts dynamically based on selected persona

### 🎨 Design & UX
- **Modern Design System**: Comprehensive design tokens with consistent spacing, colors, and typography
- **Fluid Animations**: Unified 200ms timing across all interactions for snappy responsiveness
- **Dark Mode Support**: Beautiful light and dark themes
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop

### ⚡ Performance
- **Optimized State Management**: 67% reduction in localStorage operations
- **Type-Safe Architecture**: Full TypeScript coverage with no `any` types
- **Code Splitting**: Dynamic imports for optimal bundle size
- **Zero Animation Delays**: Instant feedback on all interactions

### ♿ Accessibility
- **WCAG Compliant**: Semantic HTML, ARIA labels, keyboard navigation
- **Reduced Motion**: Respects user preferences for reduced motion
- **Focus Management**: Clear focus indicators and skip links
- **Screen Reader Friendly**: Proper labeling and announcements

### 🧪 Quality
- **Comprehensive Testing**: 60+ test cases covering utilities and services
- **Input Validation**: Runtime type checking and XSS prevention
- **Error Boundaries**: Graceful error handling throughout
- **Consistent Animations**: Unified animation system across entire site

---

## 📁 Project Structure

```
switchfolio/
├── public/
│   └── assets/              # Static assets (images, icons)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Context/         # React Context providers
│   │   ├── ErrorBoundary/   # Error boundary components
│   │   ├── PageComponent/   # Page sections (Skills, Projects, etc.)
│   │   ├── Transitions/     # Animation transition wrappers
│   │   └── homeScreen/      # Home page components
│   ├── constants/
│   │   ├── animations.ts    # Unified animation system
│   │   ├── designSystem.ts  # Design tokens and theme
│   │   ├── theme.ts         # Tailwind theme configuration
│   │   └── index.ts         # Shared constants
│   ├── data/                # Static data for personas
│   │   └── Common/data.ts   # Projects, skills, social links
│   ├── layout/              # Layout components
│   ├── services/            # Business logic (persona service)
│   ├── styles/              # Global styles and CSS
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions and helpers
│       ├── storage.ts       # Type-safe localStorage utilities
│       ├── validators.ts    # Input validation functions
│       └── AnimatedWrapper.tsx
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

---

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router, Server Components, and Image optimization
- **[React 18](https://react.dev/)** - UI library with concurrent rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS with custom design system
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **CSS Custom Properties** - Dynamic theming

### Testing & Quality
- **[Jest](https://jestjs.io/)** - Unit testing framework
- **[React Testing Library](https://testing-library.com/react)** - Component testing
- **[ESLint](https://eslint.org/)** - Code linting

---

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js, React, TypeScript, and modern web standards**

*Last updated: October 2025*
