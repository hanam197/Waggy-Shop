/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        chilanka: ['Chilanka', 'cursive']
      },
      colors: {
        custom: '#DEAD6F',
      }
    },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}

