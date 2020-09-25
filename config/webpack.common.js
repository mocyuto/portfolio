const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  cache: true,
  context: path.join(__dirname, "../src"),
  entry: {
    index: "./js/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        {
          loader: 'eslint-loader',
          options: { fix: true },
        }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
            }
          },
          {
            loader: 'eslint-loader',
            options: { fix: true },
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: "[name].min.js"
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'img/**/*', to: '' },
        { from: 'index.html', to: '' },
      ]
    }),
  ]
};
