/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ bật dark mode theo class
  content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './styles/**/*.{css}',
],
  theme: { extend: {} },
  plugins: [],
};
