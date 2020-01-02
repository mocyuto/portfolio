const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, "../src"),
  entry: "./js/index.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
        'eslint-loader',
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    }]
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: "index.min.js"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyPlugin([
      { from: 'img/**/*', to: '' },
      { from: 'index.html', to: '' },
    ]),
  ]
};
