/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          red: '#ff1e1e',
          'red-glow': '#b30000',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 30, 30, 0.35)',
        'glow-red': '0 0 24px rgba(255, 30, 30, 0.4)',
        'glow-gold': '0 0 24px rgba(234, 179, 8, 0.5)',
        'glow-silver': '0 0 20px rgba(192, 192, 192, 0.4)',
        'glow-bronze': '0 0 20px rgba(205, 127, 50, 0.4)',
      },
    },
  },
  plugins: [],
}
