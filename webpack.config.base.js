const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // preset-env allows use of the latest JavaScript; preset-react allows use of jsx
          plugins: [
            'react-hot-loader/babel',
            "@babel/plugin-proposal-class-properties", // transforms static class properties
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // style-loader handles syntax, css-loader loads the css into /dist
        exclude: /node-modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // translates my index.html into /dist
    }),
  ],
};