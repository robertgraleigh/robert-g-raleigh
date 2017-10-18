// webpack.config.js
(function () {
  "use strict";

  var path = require('path');
  var webpack = require('webpack');

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
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'es2015']
            }
          }
        }
      ]
    },
    plugins: [
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
