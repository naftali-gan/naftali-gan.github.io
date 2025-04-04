/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'Open Sans Hebrew', 'sans-serif'],
      },
      colors: {
        'green': {
          DEFAULT: '#34D399',
          '50': '#F0FDF9',
          '100': '#DCFCE7',
          '200': '#BBF7D0',
          '300': '#86EFAC',
          '400': '#4ADE80',
          '500': '#22C55E',
          '600': '#16A34A',
          '700': '#15803D',
          '800': '#166534',
          '900': '#14532D',
        },
      },
      keyframes: {
        'modal-fade': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'modal-fade-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'backdrop-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'backdrop-fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'modal-fade': 'modal-fade 0.3s ease-out',
        'modal-fade-out': 'modal-fade-out 0.3s ease-in',
        'backdrop-fade': 'backdrop-fade 0.2s ease-out',
        'backdrop-fade-out': 'backdrop-fade-out 0.3s ease-in',
      },
    },
  },
  safelist: [
    'flex',
    'flex-col',
    'min-h-screen',
    'shadow-md',
    'bg-white',
    'py-2',
    'px-3',
    {
      pattern: /bg-(green|gray|white)-.*/,
    },
    {
      pattern: /text-(green|gray|white)-.*/,
    },
    {
      pattern: /m[lrt]?-[0-9]+/,
    },
    {
      pattern: /p[xy]?-[0-9]+/,
    },
  ],
  plugins: [],
} 