/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['"./**/*.{html,js}"'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      spacing: {
        13: '3,25rem',
      },fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        prim: '#14b8a6',
        abu: '#6b7280',
        haikal: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

