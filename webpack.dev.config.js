'use strict';
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },,

      //load styles
      {
        test: /\.(sass|less)$/,
        loader: ExtractTextPlugin.extract('style-loader',  "css-loader!autoprefixer-loader!less-loader")
      },

      // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },
      
      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },   
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    ]
  },
   plugins: [
    new ExtractTextPlugin('style.css', {allChunks: false}),
    new CopyWebpackPlugin([
      { from: './src/index.php', to: 'index.php' },
       { from: './lib/geoPosition.js', to: 'geoPosition.js' },
     //  { from: './lib/geo-min.js', to: 'geo-min.js' },
      // { from: './lib/geolocator.min.js', to: 'geolocator.min.js' },
       { from: './server' }
    ]),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.optimize.DedupePlugin(),
     new webpack.optimize.UglifyJsPlugin({
        compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
        mangle: {screw_ie8: true, keep_fnames: true}
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css'],
    root: [
      path.resolve('./src')
    ]
  }
}