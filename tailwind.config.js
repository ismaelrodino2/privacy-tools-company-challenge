/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors:{
      primary: "#1a0f5f",
      "variation-primary": "#352284",
      secondary: "#5830ca",
      white: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}

