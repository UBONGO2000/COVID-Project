/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'violet-100':'#F5EFFF',
        'violet-200':'#6f42c1',
        'violet':'#C5BAFF'
      }
    },
  },
  plugins: [],
}

