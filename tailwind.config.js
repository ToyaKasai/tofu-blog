/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',

  theme: {
    fontFamily: {
      default: ['sans-serif', 'system-ui'],
      mPlus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif', 'system-ui'],
    },
    extend: {
      spacing: {
        header: '56px',
      },
      zIndex: {
        progress: 100,
        header: 50,
      },
    },
  },
  plugins: [],
};
