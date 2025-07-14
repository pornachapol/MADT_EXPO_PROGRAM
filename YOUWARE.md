# YOUWARE.md - MADT Course Website

## Project Overview
This is a modern, responsive website showcasing the MADT (Master of Management in Analytics and Data Technologies) program from NIDA (National Institute of Development Administration). Built with vanilla HTML, CSS, and JavaScript following modern web standards.

## Project Structure
```
/
├── index.html          # Main entry point - single-page application
├── styles.css          # All styling with CSS custom properties
├── script.js           # Interactive functionality and animations
├── orqrvvm87y.jpg      # MADT logo and branding image
├── 0xl1xrudqx.png      # NIDA logo
├── gqlmynuedi.png      # Facebook QR Code for MADT page
└── YOUWARE.md          # This documentation
```

## Design System
Based on MADT logo colors:
- Primary Blue: #3b4db8
- Primary Orange: #f37020
- Supporting colors defined in CSS custom properties in :root

## Key Features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: CSS animations and JavaScript-driven interactions
- **Interactive Elements**: Expandable subject cards, smooth scrolling, form validation
- **Modern UX**: Progress bar, back-to-top button, animated charts
- **Accessibility**: Semantic HTML, proper contrast ratios, focus states

## Architecture Notes
- **Single Entry Point**: All content served from index.html
- **CSS Organization**: Modular CSS with logical section grouping
- **JavaScript**: Event-driven with DOM manipulation and intersection observers
- **No Framework Dependencies**: Vanilla web technologies only
- **CDN Resources**: Font Awesome icons, Google Fonts (Kanit)

## Interactive Components
1. **Navigation**: Fixed navbar with dual logos (NIDA + MADT) and mobile hamburger menu
2. **Hero Section**: Animated data visualization charts with institutional branding
3. **Venn Diagram**: Interactive 3-circle overlapping design explaining course components
4. **Expandable Benefits**: Click-to-expand benefit items with detailed information
5. **Subject Cards**: Click-to-expand detailed course information
6. **Timeline**: Updated 5-term program structure with visual markers
7. **Facebook Integration**: QR code for social media engagement
8. **Contact Form**: Client-side validation and submission handling
9. **Scroll Animations**: Intersection Observer API for performance
10. **Mobile Optimizations**: Touch-friendly interactions and responsive design

## Content Structure
- Hero section with NIDA institutional branding and program introduction
- Interactive Venn diagram showing Management + Analytics + Data Technologies overlap
- Expandable benefits section with detailed 4-point breakdown
- Updated timeline showing 5-term program structure (2 years + summer)
- Detailed subject breakdown for first semester courses
- Facebook engagement section with QR code integration
- Contact form with institutional messaging
- Footer with dual branding (NIDA + MADT)

## Development Notes
- Uses modern JavaScript features (ES6+)
- CSS Grid and Flexbox for layout
- CSS custom properties for maintainable theming
- Intersection Observer for performance-optimized animations
- Progressive enhancement approach for accessibility

## Styling Approach
- Mobile-first responsive design
- Component-based CSS organization
- Consistent spacing using CSS custom properties
- Smooth transitions and hover effects
- Brand-consistent color usage throughout