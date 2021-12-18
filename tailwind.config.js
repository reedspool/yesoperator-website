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
    },
  },
  plugins: [
    require('tailwindcss/nesting'),
  ],
}
