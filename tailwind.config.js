module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./content/**/*.{html,js,md}",
    "./layouts/**/*.{html,js,md}",
    "./resources/**/*.{html,js,md}",
    "./static/**/*.{html,js,md}",
    "./themes/yesoperator/**/*.{html,js,md}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui'],
        serif: ['"Andada Pro"', 'ui-serif', 'Georgia'],
      },
      animation: {
        'spin-slow': 'spin 2400s linear infinite',
      },
      colors: {
        opie: {
          100: 'hsl(160,9%,95%)',
          200: 'hsl(160,9%,87%)',
          300: 'hsl(160,9%,77%)',
          400: 'hsl(160,19%,63%)',
          500: 'hsl(160,19%,57%)',
          600: 'hsl(160,25%,47%)',
          700: 'hsl(160,59%,37%)',
          800: 'hsl(160,49%,27%)',
          900: 'hsl(160,59%,7%)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss/nesting'),
  ],
}
