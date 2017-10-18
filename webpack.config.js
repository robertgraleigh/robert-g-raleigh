// webpack.config.js
(function () {
  "use strict";

  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var HtmlWebpackPlugin = require('html-webpack-plugin');

  var config = {
    entry: {
      app: './src/js/app.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    resolve: {
      alias: {
        'foundation.core': 'foundation-sites/js/foundation.core',
        'jquery': 'jquery/src/jquery'
      }
    }
  };

  module.exports = config;
}());
