require('dotenv').config();
const config = require('./config');
const webpack = require('webpack');

const publicPath = process.env.PUBLIC_URL || '/';
const port = process.env.PORT || 3000;

module.exports = Object.assign(
  {
    mode: 'development',
    devServer: {
      stats: 'minimal',
      hot: true,
      port,
      proxy: {
        '/api': {
          target: process.env.API_URL || '/api/',
          secure: false,
          changeOrigin: true
        },
        '/wp': {
          target: process.env.WP_URL || '/wp/',
          secure: false,
          changeOrigin: true,
          pathRewrite: { '^/wp': '' }
        }
      },
      writeToDisk: true,
      overlay: true,
      publicPath: `http://localhost:${port}${publicPath}`,
      historyApiFallback: true
    }
  },
  config,
  {
    plugins: [
      new webpack.DefinePlugin({
        'window.process.env': JSON.stringify(process.env)
      }),
      ...config.plugins
    ]
  }
);
