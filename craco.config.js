const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        purgecss({
          content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
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
