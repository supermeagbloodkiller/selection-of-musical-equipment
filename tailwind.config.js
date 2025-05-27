/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Красно-черная цветовая схема
        primary: "#dc2626", // Красный
        secondary: "#991b1b", // Темно-красный
        dark: "#000000", // Черный
        light: "#ffffff", // Белый
        'music-red': "#dc2626",
        'music-dark-red': "#991b1b",
        'music-white': "#ffffff",
        'music-black': "#000000",
        'music-gray': "#1a1a1a",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'times': ['Times New Roman', 'serif'],
        'arial': ['Arial', 'sans-serif'],
      },
      animation: {
        'title-shine': 'titleShine 3s ease-in-out infinite',
        'card-glow': 'cardGlow 2s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
