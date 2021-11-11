const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/*
 entry: ["babel-polyfill", "./src/index.js"],//irá empacotar em um único arquivo
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
*/

module.exports = {
  entry: {
    babelpolyfill: 'babel-polyfill',
    index: './src/index.js',
    indexController: './src/controllers/IndexController.js',
    portfolioController: './src/controllers/PortfolioController.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/bundle'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 9000
  }
};