const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpackDevMiddleware: config => {
    config.watch = true;
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 200
    }
    return config
  }
})


