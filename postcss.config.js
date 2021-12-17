module.exports = {
  plugins: [
    require('postcss-minify'),
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
