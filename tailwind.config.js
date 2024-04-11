/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/hero.png')",
      }
    },
  },
  plugins: [],
}

