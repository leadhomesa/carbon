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
        '/api': process.env.API_URL || '/api'
      },
      writeToDisk: true,
      overlay: true,
      publicPath: `http://localhost:${port}/`,
      historyApiFallback: true
    }
  },
  config
);
