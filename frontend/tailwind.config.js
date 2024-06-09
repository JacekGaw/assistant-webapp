/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#242424",
        "gr-first": "rgb(251 113 133);",
        "gr-second": "rgb(217 70 239);",
        "gr-third": "rgb(99 102 241);",
      }
    },
  },
  plugins: [],
}