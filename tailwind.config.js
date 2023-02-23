/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',

  theme: {
    fontFamily: {
      default: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif'],
    },
    extend: {
      spacing: {
        header: '56px',
      },
      zIndex: {
        header: 50,
      },
    },
  },
  plugins: [],
};
