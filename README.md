# Buzzblaze Media - Digital Marketing Agency Website

A modern, responsive website for Buzzblaze Media digital marketing agency, built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Fully typed for better development experience and code reliability
- **Reusable Components**: Modular architecture with reusable UI components
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Contact Form**: Functional contact form with form validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Fonts**: Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   └── sections/           # Page sections
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       ├── Blog.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── index.ts
├── data/                   # Website content and data
│   └── website-data.tsx
├── types/                  # TypeScript type definitions
│   └── index.ts
├── utils/                  # Utility functions
├── hooks/                  # Custom React hooks
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design System

### Colors
- **Primary**: Orange tones (#f97316, #ea580c, #c2410c)
- **Accent**: Yellow tones (#eab308, #ca8a04, #a16207)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Reusable card component with hover effects
- **Section**: Consistent section wrapper with padding

## 📱 Sections

1. **Header**: Navigation with responsive mobile menu
2. **Hero**: Main landing section with call-to-action
3. **About**: Company values and differentiators
4. **Services**: Three main service categories with individual services
5. **Portfolio**: Filterable portfolio with project showcase
6. **Testimonials**: Client reviews and ratings
7. **Blog**: Latest blog posts and insights
8. **Contact**: Contact form and company information
9. **Footer**: Links, contact info, and social media

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd buzzblaze-media
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Cloudflare Pages

```bash
npm run deploy
```

Or manually with Wrangler:
```bash
npx wrangler deploy --assets=./dist
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Vite and tree-shaking
- **Loading Speed**: Fast initial load with code splitting

## 🎯 Key Features Implementation

### Reusable Components
All components are built with reusability in mind:
- **Button**: Supports multiple variants and sizes
- **Card**: Flexible card component for various content types
- **Section**: Consistent section wrapper with proper spacing

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation with mobile hamburger menu
- Flexible grid layouts that adapt to screen sizes

### Type Safety
- Comprehensive TypeScript interfaces for all data structures
- Proper typing for props and component interfaces
- Type-safe data management

### Smooth User Experience
- Smooth scroll navigation between sections
- Hover effects and transitions
- Loading states and form validation

## 🔧 Customization

### Adding New Services
1. Update the `serviceCategories` array in `src/data/website-data.tsx`
2. Add appropriate icons and descriptions

### Modifying Color Scheme
1. Update the color palette in `tailwind.config.js`
2. Modify CSS custom properties in `src/index.css`

### Adding New Sections
1. Create new component in `src/components/sections/`
2. Add to the sections index file
3. Include in `App.tsx`

## 📞 Contact

For questions about this project:
- **Email**: connect@buzzblaze.media
- **Phone**: 90345 17463
- **Location**: Chandigarh | Bangalore

## 📄 License

This project is proprietary and confidential to Buzzblaze Media.

---

Built with ❤️ by the Buzzblaze Media team
