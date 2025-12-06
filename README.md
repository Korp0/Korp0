# Personal Portfolio Website

A clean, modern personal portfolio website built with React + Tailwind CSS using Vite. Perfect for showcasing your web development skills to small business clients.

## Features

- ✨ Clean, minimalistic design
- 📱 Fully responsive (mobile-first)
- ⚡ Lightning-fast with Vite
- 🎨 Styled with Tailwind CSS
- 🚀 Ready to deploy on Vercel

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with name and CTA
│   ├── About.jsx         # About me section
│   ├── Projects.jsx      # Projects grid
│   ├── ProjectCard.jsx   # Individual project card component
│   └── Contact.jsx       # Contact section
├── App.jsx               # Main app component
├── App.css               # App styles
├── index.css             # Global Tailwind styles
└── main.jsx              # Entry point
```

## Sections

### 1. Hero
- Full-width hero with name, subtitle, and experience info
- CTA button that scrolls to projects section

### 2. About
- Short biography with experience highlights
- Styled card component

### 3. Projects
- Responsive grid (1 col on mobile, 2 on tablet, 3 on desktop)
- 3 project cards with description and action buttons
- Hover effects for interactivity

### 4. Contact
- Email and Instagram contact info
- Call-to-action button

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Customization

Edit the following files to personalize the portfolio:

- **Hero.jsx**: Change name, subtitle, and experience info
- **About.jsx**: Update your bio and experience
- **Projects.jsx**: Add or modify your projects
- **Contact.jsx**: Update your email and social links

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PostCSS** - CSS preprocessing

## Colors & Design System

The portfolio uses a neutral slate/gray palette:
- Primary: `slate-900` (dark)
- Secondary: `slate-700` (medium-dark)
- Tertiary: `slate-600` (medium)
- Background: `slate-50` / `white`

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## License

MIT

---

**Created for personal portfolio showcase** 🚀
