require('dotenv').config();
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const alias = require('./alias');

const assetsFolder = path.join(__dirname, '..', 'src', 'assets');
const buildFolder = path.join(__dirname, '..', 'build');

const isProduction = process.env.NODE_ENV === 'production';

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
        loader: 'linaria/loader',
        options: {
          sourceMap: isProduction
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isProduction
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isProduction
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  resolve: {
    alias
  },
  plugins: [
    new CopyWebpackPlugin([{ from: assetsFolder, to: buildFolder }]),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    }),
    new MiniCssExtractPlugin({
      filename: (isProduction && 'styles-[contenthash].css') || 'styles.css'
    })
  ]
};
