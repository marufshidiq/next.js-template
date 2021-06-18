const withSourceMaps = require('@zeit/next-source-maps')()

module.exports = withSourceMaps({
  reactStrictMode: true,
  webpack(config, options) {
    return config
  }
})
