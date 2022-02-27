const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const pagesArray = ["Home", "About", "Contact"];
const pages = pagesArray.reduce((config, page) => {
  config[page] = `./src/pages/${page}.js`;
  return config;
}, {});

const config = {
  entry: pages,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = config;
