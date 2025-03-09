import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black UI Elements
        secondary: '#ffffff', // White Backgrounds
        accent: '#ff4b4b', // Red Highlights (Errors, Warnings)
        success: '#22c55e', // Green Highlights (Success, Progress)
        warning: '#facc15', // Yellow Highlights (Alerts, Notices)
        info: '#3b82f6', // Blue Highlights (Information)
        lightGray: '#f3f4f6', // Light Gray Backgrounds
        darkGray: '#374151', // Dark Gray Text
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        button: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
