'use strict';

const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'development'; // eslint-disable-line no-process-env

module.exports = {
  context: __dirname + '/src',
  entry: {
    index: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ],
  devtool: 'source-map'
};
