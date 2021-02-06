module.exports = {
  style: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
}
