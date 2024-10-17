/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'accent-light': 'var(--color-accent-light)',
        'accent-dark': 'var(--color-accent-dark)',
        black: 'var(--color-black)',
        hover: 'var(--color-hover)',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};