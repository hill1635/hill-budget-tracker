const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  mode: 'development',
  entry: './public/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Budget Tracker App',
      short_name: 'Budget Tracker',
      description: 'An application that helps you track your budget.',
      background_color: '#dddddd',
      theme_color: '#dddddd',
      'theme-color': '#dddddd',
      start_url: '/',
      icons: [
        {
          src: path.resolve('./public/icons/icon-192x192.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('public', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;
