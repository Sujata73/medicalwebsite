/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hoverColor:"#FFC000",
        brightColor:"#dd8036",
        backgroundColor:"#36ae98",
      }
    },
  },
  plugins: [],
}

