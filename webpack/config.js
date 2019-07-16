require('dotenv').config();
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const alias = require('./alias');

const publicPath = process.env.PUBLIC_URL || '/';
const assetsFolder = path.join(__dirname, '..', 'src', 'assets');
const buildFolder = path.join(__dirname, '..', 'build');

module.exports = {
  entry: './src/index.js',
  output: {
    path: buildFolder,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      }
    ]
  },
  resolve: {
    alias
  },
  plugins: [
    new CopyWebpackPlugin([{ from: assetsFolder, to: buildFolder }]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      publicPath
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
