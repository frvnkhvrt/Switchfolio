# Switchfolio - Dual Persona Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-purple)](https://www.framer.com/motion/)

A modern, accessible, and performant dual-persona portfolio website built with cutting-edge web technologies.

## ✨ Features

### 🎭 Dual Persona System
- **Instant Switching**: Click the profile image in the bottom navigation to toggle between personas
- **Smooth Transitions**: Advanced Framer Motion animations with reduced motion support
- **Context-Aware Content**: All content adapts based on the selected persona

### 🎨 Modern Design System
- **Fluid Typography**: Responsive text scaling with clamp() functions
- **Semantic Colors**: Light and dark theme support
- **Advanced Animations**: Magnetic effects, blur transitions, and micro-interactions

### 🧪 Quality Assurance
- **TypeScript**: Full type safety with no `any` types
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Boundaries**: Graceful error handling throughout


## 🏗️ Project Structure

```
switchfolio/
├── public/
│   └── assets/           # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Context/      # React context providers
│   │   ├── ErrorBoundary/# Error boundary components
│   │   ├── PageComponent/# Page sections
│   │   ├── Transitions/  # Animation transition components
│   │   └── homeScreen/   # Home page components
│   ├── constants/        # App constants and design system
│   ├── data/             # Static data for personas
│   ├── layout/           # Layout components
│   ├── services/         # Business logic services
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── README.md
```

## 🎯 Core Technologies

### Frontend Framework
- **Next.js 15**: App Router, Server Components, Image optimization
- **React 18**: Latest React features with concurrent rendering
- **TypeScript**: Full type safety and better developer experience

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS with custom design system
- **Framer Motion**: Advanced animations with accessibility support
- **CSS Custom Properties**: Dynamic theming and consistent design tokens

### Performance & Optimization
- **Core Web Vitals**: Performance monitoring and optimization
- **Error Boundaries**: Graceful error handling throughout

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Next.js, React, TypeScript, and modern web technologies.**

*Last updated: October 6, 2025*
