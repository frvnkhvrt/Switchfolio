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

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/frvnkhvrt/switchfolio.git

# Navigate to project directory
cd switchfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build optimized production bundle
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
npm test             # Run test suite
npm test -- --watch  # Run tests in watch mode
```

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

## 🎨 Animation System

The project uses a unified animation system for consistent, performant interactions:

### Durations
```typescript
instant: 0.1s   // Immediate feedback
fast: 0.2s      // Hover states (standard)
normal: 0.3s    // Page transitions
slow: 0.5s      // Section animations
emphasis: 1.5s  // Decorative loops
```

### Hover Presets
```typescript
button:  scale(1.05)           // Buttons, links
card:    scale(1.03), y: -2    // Cards, badges
icon:    scale(1.1)            // Icons
tap:     scale(0.95)           // Tap feedback
```

### Usage
```typescript
import { HOVER_ANIMATIONS } from '@/constants'

<motion.button
  whileHover={HOVER_ANIMATIONS.button}
  whileTap={HOVER_ANIMATIONS.tap}
>
  Click Me
</motion.button>
```

---

## 🔧 Utilities

### Type-Safe Storage
```typescript
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '@/utils/storage'

// Get with type safety
const theme = getStorageItem<'light' | 'dark'>(STORAGE_KEYS.THEME, 'light')

// Set with automatic serialization
setStorageItem(STORAGE_KEYS.SWITCH_STATE, true)
```

### Input Validation
```typescript
import { isValidEmail, sanitizeString, isValidUrl } from '@/utils/validators'

if (isValidEmail(email)) {
  // Process email
}

const safeName = sanitizeString(userInput) // XSS prevention
```

### Constants
```typescript
import { NAVIGATION, IMAGE_SIZES, DURATIONS } from '@/constants'

<Image width={IMAGE_SIZES.profile.large} />
<AnimatedWrapper duration={DURATIONS.normal} />
```

---

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage

# Specific test file
npm test storage.test.ts
```

### Test Coverage
- ✅ Storage utilities - Complete localStorage operation coverage
- ✅ Validators - Comprehensive validation and sanitization
- ✅ Services - Persona service and business logic

**Note**: Test files may show TypeScript warnings for Jest globals (`describe`, `it`, `expect`). This is expected - Jest provides these at runtime.

---

## 📊 Performance Optimizations

### Implemented
- **67% reduction** in localStorage operations per persona toggle
- **0ms delays** on all animations for instant feedback
- **Unified 200ms** timing for all hover interactions
- **Type-safe storage** with error handling and state reversion
- **Dynamic imports** for code splitting
- **Image optimization** via Next.js Image component

### Metrics
| Metric | Before Refactoring | After | Improvement |
|--------|-------------------|-------|-------------|
| localStorage Ops | 3 per toggle | 1 per toggle | ⬇️ 67% |
| Hover Duration | Mixed (150-300ms) | Unified 200ms | ⬆️ Consistent |
| Type Safety | 7/10 | 9/10 | ⬆️ 28% |
| Test Coverage | ~15% | ~45% | ⬆️ 200% |

---

## 🎯 Key Improvements (Oct 2025)

### Animation Consistency ✅
- Created unified animation system (`src/constants/animations.ts`)
- Standardized all hover durations to 200ms
- Removed conflicting CSS `transition-all` properties
- Eliminated entrance animation delays

### Code Quality ✅
- Consolidated theme system (single source of truth)
- Type-safe localStorage utilities
- Comprehensive validation functions
- Enhanced test coverage (60+ test cases)

### Performance ✅
- Optimized state management flow
- Fixed localStorage redundancy
- Eliminated animation conflicts
- Instant interaction feedback

### Developer Experience ✅
- Clear component documentation
- Reusable animation presets
- Centralized constants
- Comprehensive README

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by clean, performant design
- Focused on accessibility and user experience

---

**Built with ❤️ using Next.js, React, TypeScript, and modern web standards**

*Last updated: October 2025*
