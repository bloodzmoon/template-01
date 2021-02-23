const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        purgecss({
          content: ['./src/**/*.html', './src/**/*.{ts,tsx}'],
        }),
      ],
    },
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
}
