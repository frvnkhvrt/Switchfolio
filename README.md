# Switchfolio

**Switchfolio** is a two-in-one portfolio website that lets users switch between two distinct personas using a toggle button.

## Features

- **Dual Persona Switching**: Effortlessly toggle between profiles with a single click.
- **Info Card**: Displays key personal information and profile images.
- **About Me**: Personalized introductions for each persona.
- **Hire Me**: Dedicated sections for professional inquiries.
- **Skills**: Highlights technical and creative abilities.
- **Projects**: Showcases featured work with detailed descriptions.
- **Writings/Blogs**: Displays articles and blog posts.
- **Contact/Reach Out**: Interactive contact forms for collaboration.
- **Footer with Social Links**: Quick access to social media profiles.
- **Responsive Design**: Optimized for all devices with Tailwind CSS.
- **Animations**: Sleek transitions powered by Framer Motion.

## Tech Stack

- **Next.js 15**: Modern React framework for server-side rendering and performance.
- **React 19**: Latest React for building interactive UIs.
- **TypeScript**: Ensures type safety and better developer experience.
- **Tailwind CSS**: Utility-first styling for rapid, responsive design.
- **Framer Motion**: Library for smooth animations and transitions.
- **Vercel Analytics & Speed Insights**: Performance monitoring and analytics.
- **Cloudinary**: Image optimization and delivery.
- **Jest**: Testing framework for reliable code quality.
- **ESLint**: Code linting for consistency.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/switchfolio.git
   cd switchfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Usage

- **Switching Personas**: Click the toggle button in the top-right corner to alternate between Francisco and Frankhurt views.
- **Customization**: Edit data in `src/data/FranciscoData/data.ts` or `src/data/FrankhurtData/data.ts` to update personal info, links, and content.
- **Building for Production**: Run `npm run build` to create an optimized build, then `npm start` to serve it locally.
- **Testing**: Execute `npm test` to run the test suite.

## Deployment

Deploy effortlessly to Vercel for optimal performance:

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Vercel will auto-deploy with analytics enabled.

## Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Make changes and ensure tests pass: `npm test`.
4. Commit your updates: `git commit -m 'Add your feature'`.
5. Push to your branch: `git push origin feature/your-feature-name`.
6. Open a pull request with a clear description.

Please follow the existing code style and include tests for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Screenshots

*(Add screenshots here to visually showcase the dual personas and key sections. Place images in `public/assets/Images/` and reference them.)*

## Troubleshooting

- **Animations not working?** Ensure your browser supports modern CSS and JavaScript; try updating to the latest version.
- **Build failures?** Verify Node.js version (18+) and run `npm install` to resolve dependencies.
- **Data not loading?** Check JSON formatting in `src/data/` files and ensure paths are correct.
- **Performance issues?** Use Vercel Speed Insights to identify bottlenecks; optimize images with Cloudinary.

For more help, open an issue on GitHub.
