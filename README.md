# Talkvera - AI-Powered Customer Service Platform

A modern, responsive SaaS landing page built with React, TypeScript, and Tailwind CSS showcasing Talkvera's AI-powered customer service platform.

## 🚀 Live Demo

Visit the live site: [https://iridescent-bonbon-e9c3dd.netlify.app](https://iridescent-bonbon-e9c3dd.netlify.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern Design**: Clean, professional SaaS-style interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety and better developer experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### Landing Page Sections

- **Hero Section**: Compelling headline with dual CTAs and animated dashboard preview
- **Features Grid**: 7 key platform capabilities with icons and descriptions
- **How It Works**: 3-step process explanation with visual progression
- **AI Agents**: Showcase of specialized AI agents with feature highlights
- **Dashboard Preview**: Interactive mockup with live metrics and chat interface
- **Testimonials**: Customer feedback carousel with smooth transitions
- **Call-to-Action**: Strategic conversion sections throughout the page
- **Footer**: Complete navigation, contact info, and social media links

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd talkvera-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Start service**
   source venv/bin/activate

   pip install -r requirments.txt

   uvicorn backend.main:app --reload

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application



### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
talkvera-landing/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation with scroll effects
│   │   ├── Hero.tsx           # Hero section with CTAs and animation
│   │   ├── Features.tsx       # Features grid with hover effects
│   │   ├── HowItWorks.tsx     # Process steps with visual progression
│   │   ├── AIAgents.tsx       # AI agents showcase cards
│   │   ├── DashboardPreview.tsx # Interactive dashboard mockup
│   │   ├── Testimonials.tsx   # Customer testimonials carousel
│   │   ├── CTA.tsx           # Call-to-action sections
│   │   └── Footer.tsx        # Footer with links and social media
│   ├── App.tsx               # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and Tailwind imports
│   └── vite-env.d.ts        # Vite type definitions
├── index.html               # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # Project documentation
```

## 🎨 Customization

### Colors

The design uses a professional color palette defined in Tailwind CSS:

- **Primary**: Blue (#2563EB) - Main brand color
- **Accent**: Green (#22C55E) - Call-to-action and success states
- **Background**: Light gray (#F9FAFB) - Page background
- **Text**: Dark gray (#111827) - Primary text color

To customize colors, update the Tailwind classes throughout the components or extend the theme in `tailwind.config.js`.

### Content

Update the content by modifying the respective component files:

- **Hero text**: Edit `src/components/Hero.tsx`
- **Features**: Modify the features array in `src/components/Features.tsx`
- **Testimonials**: Update testimonials array in `src/components/Testimonials.tsx`
- **Contact info**: Edit footer content in `src/components/Footer.tsx`

### Styling

- **Global styles**: Modify `src/index.css`
- **Component styles**: Update Tailwind classes in individual components
- **Animations**: Customize transitions and hover effects in component files

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push to main branch

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:

- **Vercel**: Connect repository and deploy automatically
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload dist folder contents to S3 bucket
- **Firebase Hosting**: Use Firebase CLI to deploy

### Build Configuration

The project is configured for optimal production builds:

- **Code splitting**: Automatic chunk splitting for better caching
- **Asset optimization**: Images and assets are optimized during build
- **Tree shaking**: Unused code is removed from the final bundle
- **Minification**: CSS and JavaScript are minified for production

## 🔧 Development

### Code Quality

The project includes ESLint configuration for maintaining code quality:

```bash
npm run lint
```

### Type Checking

TypeScript provides compile-time type checking:

```bash
npx tsc --noEmit
```

### Performance

- **Lazy loading**: Components can be lazy-loaded for better performance
- **Image optimization**: Use appropriate image formats and sizes
- **Bundle analysis**: Use `npm run build -- --analyze` to analyze bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: hello@talkvera.com
- **Website**: [https://talkvera.com](https://talkvera.com)
- **Documentation**: Check the component files for inline documentation

## 🙏 Acknowledgments

- **Design inspiration**: Modern SaaS landing page best practices
- **Icons**: Lucide React icon library
- **Styling**: Tailwind CSS utility framework
- **Build tool**: Vite for fast development experience

---

Built with ❤️ for exceptional customer service experiences.
