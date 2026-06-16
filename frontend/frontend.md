# Frontend Documentation

## Overview
TemanHR Frontend - Platform berbasis AI untuk membantu rekruter menyaring CV kandidat secara otomatis.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **Language**: TypeScript

## Project Structure
```
src/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   └── ...
├── pages/              # Page components
├── App.tsx             # Main app component
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Server runs on `http://localhost:5173`

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Key Components

### Header
Navigation bar with logo and login button.
- Fixed positioning at top
- Responsive design
- Smooth animations

### HeroSection
Landing page hero with mascot animation.
- Large headline and description
- Floating mascot animation
- Call-to-action buttons

### Pages
- Dashboard - Main user dashboard
- Simulasi - Simulation/testing page
- Pricing - Pricing information
- Analysis - Analysis results page
- Documents - Document management

## Styling Guidelines

### Colors
- Primary: Indigo-600
- Text Primary: Gray-900
- Text Secondary: Gray-600
- Background: White

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Tablet: md (640px+)
- Desktop: lg (1024px+)

## API Integration
See `API.md` for endpoint documentation and integration details.

## Architecture
See `ARCHITECTURE.md` for detailed architecture decisions and patterns.

## Development Notes
- Use Framer Motion for animations
- Tailwind CSS for styling
- React Router for navigation
- TypeScript for type safety

## Common Issues

### PostCSS Error
If you see PostCSS plugin errors:
```bash
npm install
```

### Hot Module Replacement (HMR)
Ensure dev server is running and files are being watched properly.
