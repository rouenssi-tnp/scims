var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
    }, {
      test: /\.(eot|svg|ttf|woff2?).*$/,
      loader: 'url?limit=10000',
    }],
  },
  plugins: [
    new ExtractTextPlugin('bundle.[hash].css'),
    new HtmlWebpackPlugin({
      title: 'SciMS - Le CMS pour les scientifiques',
    }),
    new webpack.IgnorePlugin(/unicode|locale/),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('http://127.0.0.1:3000'),
    }),
  ],
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: './build',
    filename: 'bundle.[hash].js',
  },
  devServer: {
    inline: true,
    stats: {
      chunks: false,
    },
  },
}
