/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primaryLight: 'hsla(212, 100%, 75%, 1)',
        primary: 'hsla(212, 100%, 65%, 1)',
        primaryDark: 'hsla(212, 100%, 35%, 1)',
      }

    },
  },
  plugins: [],
}
