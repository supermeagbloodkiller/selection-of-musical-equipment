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
        // Frankenstrat цветовая схема (черный, белый, красный)
        primary: "#dc2626", // Красный
        secondary: "#991b1b", // Темно-красный
        dark: "#000000", // Черный
        light: "#ffffff", // Белый
        'frankenstrat-red': "#dc2626",
        'frankenstrat-dark-red': "#991b1b",
        'frankenstrat-white': "#ffffff",
        'frankenstrat-black': "#000000",
        'frankenstrat-gray': "#1f1f1f",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        metal: ['Cinzel', 'serif'],
        'judas': ['Cinzel', 'serif'], // Брутальный шрифт как у Judas Priest
      },
      animation: {
        'metal-shine': 'metalShine 3s ease-in-out infinite',
        'metal-glow': 'metalGlow 2s ease-in-out infinite',
        'rock-pulse': 'rockPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
