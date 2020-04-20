const merge = require('webpack-merge'); // this plugin allows meging config files
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer') // this is only for diagnosing, remove this before the app goes live
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  })]
});
