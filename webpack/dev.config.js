require('dotenv').config();
const config = require('./config');

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
        }
      },
      writeToDisk: true,
      overlay: true,
      publicPath: `http://localhost:${port}/`,
      historyApiFallback: true
    }
  },
  config
);
