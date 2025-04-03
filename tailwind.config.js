/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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