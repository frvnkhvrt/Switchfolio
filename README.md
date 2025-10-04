# Switchfolio - Dual Persona Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-purple)](https://www.framer.com/motion/)
[![Jest](https://img.shields.io/badge/Jest-30.1.3-C21325)](https://jestjs.io/)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG_2.1-AA-green)](https://www.w3.org/WAI/WCAG21/quickref/)
[![PWA](https://img.shields.io/badge/PWA-Ready-orange)](https://web.dev/progressive-web-apps/)

A modern, accessible, and performant dual-persona portfolio website built with cutting-edge web technologies. Switch seamlessly between Francisco (Engineer & Marketer) and Frankhurt (Gamer & Cinephile) personas with smooth animations and full WCAG 2.1 AA compliance.

![Switchfolio Preview](./public/preview.png)

## ✨ Features

### 🎭 Dual Persona System
- **Instant Switching**: Click the profile image in the bottom navigation to toggle between personas
- **Smooth Transitions**: Advanced Framer Motion animations with reduced motion support
- **Persistent State**: Your persona preference is remembered across sessions
- **Context-Aware Content**: All content adapts based on the selected persona

### ♿ Accessibility First
- **WCAG 2.1 AA Compliant**: Full accessibility audit passed
- **Keyboard Navigation**: Complete keyboard support with visible focus indicators
- **Screen Reader Support**: Comprehensive ARIA labels and live regions
- **High Contrast Support**: Respects system preferences for better visibility
- **Focus Management**: Proper focus trapping in modals and overlays

### 📱 Progressive Web App
- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Core functionality works without internet
- **Fast Loading**: Optimized with service workers and caching
- **Native Feel**: App-like experience with proper manifest

### 🎨 Modern Design System
- **Fluid Typography**: Responsive text scaling with clamp() functions
- **Consistent Spacing**: 4px base grid system
- **Semantic Colors**: Light and dark theme support
- **Advanced Animations**: Magnetic effects, blur transitions, and micro-interactions

### 📧 Contact & Engagement
- **Contact Form**: Validated form with real-time feedback
- **Resume Download**: Generate and download PDF resumes
- **Analytics**: Privacy-focused tracking with Plausible
- **Social Integration**: Direct links to professional profiles

### 🧪 Quality Assurance
- **Comprehensive Testing**: Unit tests, integration tests, and accessibility tests
- **TypeScript**: Full type safety with no `any` types
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Boundaries**: Graceful error handling throughout

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/switchfolio.git
   cd switchfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   # Contact form email service (optional)
   CONTACT_EMAIL=your-email@example.com
   RESEND_API_KEY=your-resend-api-key

   # Analytics (optional)
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
switchfolio/
├── public/
│   ├── assets/           # Static assets (images, icons)
│   └── manifest.json     # PWA manifest
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Accessibility/# A11y components
│   │   ├── Analytics/    # Analytics components
│   │   ├── Contact/      # Contact form
│   │   ├── Context/      # React context providers
│   │   ├── PageComponent/# Page sections
│   │   └── PWA/          # PWA components
│   ├── constants/        # App constants and design system
│   ├── data/             # Static data for personas
│   ├── hooks/            # Custom React hooks
│   ├── services/         # Business logic services
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── __tests__/            # Test files
├── next.config.ts        # Next.js configuration
├── next-pwa.config.js    # PWA configuration
├── jest.config.js        # Jest configuration
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

### Accessibility & UX
- **WCAG 2.1 AA**: Comprehensive accessibility compliance
- **React Hook Form + Zod**: Form validation with great UX
- **Focus Management**: Custom focus trapping and keyboard navigation
- **Screen Reader Support**: ARIA labels, live regions, and announcements

### Performance & PWA
- **next-pwa**: Service worker and caching strategies
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Bundle Analysis**: Optimized imports and tree shaking
- **Core Web Vitals**: Performance monitoring and optimization

### Testing & Quality
- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing utilities
- **jest-axe**: Accessibility testing
- **TypeScript**: Compile-time type checking

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

## 🔧 Configuration

### Environment Variables
```env
# Contact form (optional)
CONTACT_EMAIL=your-email@example.com
RESEND_API_KEY=your-resend-api-key

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Development
NODE_ENV=development
```

### PWA Configuration
The PWA is configured in `next-pwa.config.js` with:
- Service worker registration
- Runtime caching strategies
- Offline fallback pages
- Background sync for forms

### Testing Configuration
Jest is configured in `jest.config.js` with:
- jsdom environment for DOM testing
- Custom test matchers for accessibility
- Coverage thresholds (70% minimum)
- Module name mapping for clean imports

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage

# Run accessibility tests only
npm test -- accessibility.test.ts
```

### Test Structure
- **Unit Tests**: Pure function testing
- **Integration Tests**: Component interaction testing
- **Accessibility Tests**: WCAG compliance verification
- **API Tests**: Route handler testing

## 📱 PWA Features

### Installation
1. Visit the site on a supported browser
2. Click the install prompt or browser menu
3. Add to home screen

### Offline Capabilities
- Core content loads without internet
- Form submissions are queued for later sync
- Cached images and fonts
- Graceful degradation for dynamic content

### Service Worker
- Automatic updates
- Background sync for contact forms
- Cache-first strategy for static assets
- Network-first for dynamic content

## 🔍 SEO & Analytics

### SEO Features
- Dynamic meta tags based on persona
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration

### Analytics (Privacy-Focused)
- Plausible Analytics integration
- No cookies or tracking pixels
- GDPR compliant
- Persona-specific event tracking
- Performance metrics monitoring

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production build
vercel --prod
```

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- Self-hosted with Docker

### Environment Setup
```bash
# Production environment variables
VERCEL_ENV=production
CONTACT_EMAIL=your-email@example.com
RESEND_API_KEY=your-production-api-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure accessibility compliance
- Test across different browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and dual-persona concept
- **Accessibility**: WCAG guidelines and web accessibility best practices
- **Performance**: Web Vitals and Core Web Vitals recommendations
- **PWA**: Progressive Web Apps guidelines from Google

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/switchfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/switchfolio/discussions)
- **Email**: contact@yourdomain.com

---

**Built with ❤️ using Next.js, React, TypeScript, and modern web technologies.**

*Last updated: October 2025*
