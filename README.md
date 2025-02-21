# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, TypeScript and Tailwind CSS.

## 🚀 Features

- Modern and responsive design with Framer Motion animations
- Blog section with MDX support
- Portfolio showcase with project filtering
- Contact form with email integration
- SEO optimized
- Dark mode support
- Static site generation with Next.js
- TypeScript for type safety
- Tailwind CSS for styling
- Professional animations and transitions

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 15.1.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Blog:** MDX with rehype plugins
- **Performance:**
  - Server-side rendering
  - Image optimization
  - Code splitting
  - Bundle optimization with Rspack

## 📦 Project Structure

```
app/
├── about/            # About page
├── api/             # API routes
├── blog/            # Blog pages
├── components/      # Reusable components
├── contact/         # Contact page
├── portfolio/       # Portfolio page
├── services/        # Services page
└── layout.tsx       # Root layout
```

## 🧩 Components

- `BlogPost` - Blog post component with MDX support
- `Contact` - Contact form with email integration
- `Hero` - Hero section with animations
- `Navbar` - Navigation bar with responsive design
- `Portfolio` - Portfolio section with project filtering
- `Projects` - Projects showcase component
- `Services` - Services section
- `Stats` - Statistics display component

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Build for production:
```bash
bun build
```

5. Start production server:
```bash
bun start
```

## 🧰 Development Tools

- **Linting:** Biome & ESLint
- **Formatting:** Biome
- **Build Tool:** Rspack
- **Package Manager:** Bun
- **Git Hooks:** Pre-commit hooks for linting and formatting

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run Biome linter
- `lint:eslint` - Run ESLint
- `lint:all` - Run all linters
- `format` - Format code with Biome
- `check` - Run Biome checks
- `check:all` - Run all checks

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `rspack.config.js` - Rspack bundler configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `biome.json` - Biome configuration

## 📬 Contact Form Integration

The contact form is integrated with multiple email service providers:
- SendGrid
- Mailchimp Transactional
- Nodemailer

## 🎨 Styling and Design

- Fully responsive design
- Custom animations with Framer Motion
- Tailwind CSS for utility-first styling
- Custom color schemes and typography
- Modern and clean UI/UX

## 📱 Performance Optimizations

- Static site generation for better SEO and performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle optimization with Rspack
- Efficient styling with Tailwind CSS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and all rights are reserved.
