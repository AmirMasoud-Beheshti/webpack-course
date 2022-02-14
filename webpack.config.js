const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
