/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: '#faf8f5',
        secondary: '#ffffff',
        accent: '#b4846c',
        'accent-light': '#d7c4b8',
        text: '#4a4a4a',
        'text-secondary': '#8a8a8a',
        border: '#e8e4df',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'STKaiti', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0,0,0,0.06)',
        'soft-lg': '0 4px 20px rgba(0,0,0,0.08)',
      },
      maxWidth: {
        container: '1200px',
        content: '800px',
        sidebar: '300px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
