module.exports = {
  plugins: [
    require('postcss-custom-media'),
    require('postcss-minify'),
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
