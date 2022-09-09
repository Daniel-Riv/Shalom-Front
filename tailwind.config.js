/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: {
          DEFAULT: '#7B5C86',
          light: '#9D5CAB',
          dark: '#7D397',
        }
      },
      backgroundColor: {
        primary:'#7D3970'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
