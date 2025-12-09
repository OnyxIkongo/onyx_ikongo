/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#E53E3E", // Rouge exact de ton HTML
        "background": "#FFFFFF",
        "text-primary": "#1A202C", // Gris foncé exact
        "text-secondary": "#4A5568", // Gris moyen exact
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem", 
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}