const merge = require('webpack-merge') // this plugin allows meging config files
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map", // this allows smart debugging in the developer tools, to be able to see my actual source instead of transpiled minified code
});