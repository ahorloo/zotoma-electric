import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        paper: '#FFFFFF',
        accent: '#06B6D4',
        soft: '#F3F4F6'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
} satisfies Config
