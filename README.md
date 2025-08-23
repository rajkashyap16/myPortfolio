# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, dark/light theme toggle, and interactive components.

🌐 **Live Demo**: [https://rajkashyap16.github.io/myPortfolio/](https://rajkashyap16.github.io/myPortfolio/)

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and animations
- **Dark/Light Theme**: Toggle between dark and light modes with persistent theme preference
- **Smooth Animations**: Powered by Framer Motion and GSAP for fluid transitions
- **Interactive Components**: Hover effects, button animations, and mouse smoke effects
- **Responsive Design**: Optimized for all screen sizes and devices
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: TailwindCSS, Styled Components
- **Animations**: Framer Motion, GSAP
- **Icons**: React Icons
- **Deployment**: GitHub Pages (gh-pages)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Buttons.jsx
│   ├── GradientBackground.jsx
│   ├── InteractiveButton.jsx
│   ├── MouseSmokeEffect.jsx
│   ├── ParallaxBackground.jsx
│   ├── Rect.jsx
│   ├── ScrollReveal.jsx
│   └── ThemeToggle.jsx
├── sections/           # Main page sections
│   ├── About.jsx
│   ├── ContactUs.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   └── Skills.jsx
├── data/              # Data files
│   ├── aboutData.json
│   ├── CardData.js
│   └── projects.json
├── assets/            # Static assets
│   ├── down.svg
│   ├── down2.svg
│   ├── profile.jpg
│   └── react.svg
├── styles/            # CSS files
│   ├── App.css
│   └── index.css
└── cssFiles/          # Additional CSS modules
    └── Skills.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajkashyap16/myPortfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.json` to add or modify projects:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "tech": ["React", "Tailwind CSS"],
  "github": "https://github.com/username/repo",
  "demo": "https://project-demo.netlify.app",
  "image": "project-image-url",
  "colSpan": "md:col-span-1",
  "rowSpan": "md:row-span-2"
}
```

### Styling

- Main styles are in `src/styles/App.css` and `src/styles/index.css`
- TailwindCSS configuration in `tailwind.config.js`
- Component-specific styles use TailwindCSS classes

### Theme Customization

The theme system uses React Context API. Modify `src/App.jsx` to customize theme colors and behavior.

## 📦 Dependencies

### Production Dependencies
- `react` & `react-dom` - React framework
- `framer-motion` - Animation library
- `gsap` - Animation library
- `react-icons` - Icon library
- `styled-components` - CSS-in-JS styling
- `gh-pages` - GitHub Pages deployment

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` & `postcss` - CSS processing
- `eslint` - Code linting

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations

---

⭐ Star this repo if you found it helpful!
