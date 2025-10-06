# Switchfolio - Dual Persona Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-purple)](https://www.framer.com/motion/)

A modern, accessible, and performant dual-persona portfolio website built with cutting-edge web technologies. Switch seamlessly between Francisco (Engineer & Marketer) and Frankhurt (Gamer & Cinephile) personas with smooth animations.

## ✨ Features

### 🎭 Dual Persona System
- **Instant Switching**: Click the profile image in the bottom navigation to toggle between personas
- **Smooth Transitions**: Advanced Framer Motion animations with reduced motion support
- **Persistent State**: Your persona preference is remembered across sessions
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
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Context/      # React context providers
│   │   ├── ErrorBoundary/# Error boundary components
│   │   ├── Feedback/     # Toast and feedback components
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
- **React 19**: Latest React features with concurrent rendering
- **TypeScript**: Full type safety and better developer experience

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS with custom design system
- **Framer Motion**: Advanced animations with accessibility support
- **CSS Custom Properties**: Dynamic theming and consistent design tokens

### Performance & Optimization
- **Core Web Vitals**: Performance monitoring and optimization
- **Error Boundaries**: Graceful error handling throughout

## 🎨 Design System

### Color Palette
```typescript
const colors = {
  primary: '#3e43f0',      // Brand blue
  secondary: '#ecd4b4',    // Cream accent
  success: '#22c55e',      // Green
  error: '#ef4444',        // Red
  warning: '#f59e0b',      // Orange
}
```

### Typography Scale
- **Display**: clamp(2.25rem, 1.95rem + 1.5vw, 3rem)
- **Heading 1**: clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)
- **Heading 2**: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)
- **Heading 3**: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)
- **Body**: clamp(1rem, 0.95rem + 0.25vw, 1.125rem)

### Spacing Scale (4px base)
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 32px


## 🔍 SEO & Analytics

### SEO Features
- Dynamic meta tags based on persona
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Next.js, React, TypeScript, and modern web technologies.**

*Last updated: October 6, 2025*
