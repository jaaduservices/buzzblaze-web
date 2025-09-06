/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Netflix-inspired color palette
                primary: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#F97316',
                    600: '#EA580C',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                    950: '#431407',
                    DEFAULT: '#FF6B35',
                },
                // Netflix signature orange (changed from red)
                netflix: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#F97316',
                    600: '#EA580C',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                    950: '#431407',
                    DEFAULT: '#FF6B35',
                },
                // Netflix dark theme (more accurate grays)
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#141414', // Netflix's exact dark background
                    950: '#0f0f0f', // Even darker for contrast
                },
                // Netflix-style grays
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#0c0c0c',
                },
                // Accent colors for highlights
                accent: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#F97316',
                    600: '#EA580C',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                    950: '#431407',
                    DEFAULT: '#FF6B35',
                },
                // Netflix background colors (exact matches)
                background: '#000000', // Pure black like Netflix
                foreground: '#ffffff',
                border: '#333333',
                'card-bg': '#141414', // Netflix's card background
                'card-hover': '#1a1a1a', // Slightly lighter for hover
                'muted': '#737373',
                'surface': '#0f0f0f', // Darker surface
                'surface-light': '#1a1a1a',
                'text-secondary': '#b3b3b3', // Netflix's secondary text color
                'text-muted': '#8c8c8c', // Netflix's muted text color
            },
            fontFamily: {
                sans: ['Netflix Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                heading: ['Netflix Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                mono: ['Netflix Sans Mono', 'SF Mono', 'Monaco', 'Roboto Mono', 'monospace'],
            },
            fontSize: {
                'netflix-xs': ['0.75rem', { lineHeight: '1rem' }],
                'netflix-sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'netflix-base': ['1rem', { lineHeight: '1.5rem' }],
                'netflix-lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'netflix-xl': ['1.25rem', { lineHeight: '1.75rem' }],
                'netflix-2xl': ['1.5rem', { lineHeight: '2rem' }],
                'netflix-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                'netflix-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                'netflix-5xl': ['3rem', { lineHeight: '1' }],
                'netflix-6xl': ['3.75rem', { lineHeight: '1' }],
                'netflix-7xl': ['4.5rem', { lineHeight: '1' }],
                'netflix-8xl': ['6rem', { lineHeight: '1' }],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'orange-gradient': 'linear-gradient(135deg, #FF6B35 0%, #C2410C 100%)',
                'orange-glow': 'radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%)',
                'gradient-dark': 'linear-gradient(135deg, #000000 0%, #141414 100%)',
                'gradient-netflix-dark': 'linear-gradient(135deg, #000000 0%, #0f0f0f 50%, #141414 100%)',
                'gradient-surface': 'linear-gradient(135deg, #141414 0%, #1a1a1a 100%)',
                'gradient-hero': 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,15,15,0.9) 50%, rgba(20,20,20,0.85) 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(26,26,26,0.6) 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'bounce-slow': 'bounce 2s infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'scale-in': 'scaleIn 0.5s ease-out',
                'netflix-pulse': 'netflixPulse 3s ease-in-out infinite',
                'netflix-fade': 'netflixFade 0.3s ease-in-out',
                'netflix-scale': 'netflixScale 0.2s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 107, 53, 0.3), 0 0 60px rgba(255, 107, 53, 0.1)',
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 107, 53, 0.5), 0 0 90px rgba(255, 107, 53, 0.2)',
                    },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                netflixPulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.8' },
                },
                netflixFade: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                netflixScale: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.05)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'orange-glow': '0 0 20px rgba(255, 107, 53, 0.5)',
                'orange-glow-lg': '0 0 40px rgba(255, 107, 53, 0.6)',
                'inner-glow': 'inset 0 2px 4px rgba(255, 107, 53, 0.1)',
                'netflix': '0 4px 20px rgba(255, 107, 53, 0.3)',
                'netflix-lg': '0 8px 40px rgba(255, 107, 53, 0.4)',
                'netflix-xl': '0 16px 60px rgba(255, 107, 53, 0.5)',
                'netflix-card': '0 4px 16px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(255, 107, 53, 0.1)',
                'netflix-hover': '0 8px 32px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(255, 107, 53, 0.2)',
            },
            borderRadius: {
                'netflix': '0.375rem', // Netflix's standard border radius
                'netflix-lg': '0.75rem',
                'netflix-xl': '1rem',
            },
            spacing: {
                'netflix-1': '0.25rem',
                'netflix-2': '0.5rem',
                'netflix-3': '0.75rem',
                'netflix-4': '1rem',
                'netflix-5': '1.25rem',
                'netflix-6': '1.5rem',
                'netflix-8': '2rem',
                'netflix-10': '2.5rem',
                'netflix-12': '3rem',
                'netflix-16': '4rem',
                'netflix-20': '5rem',
                'netflix-24': '6rem',
            }
        },
    },
    plugins: [],
}