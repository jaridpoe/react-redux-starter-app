import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  devtool: 'source-map', // production source map
  entry: './src/index',
  mode: 'production',
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'), //extracts our css to a separate file
    new webpack.optimize.UglifyJsPlugin, // minifies our javascript
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.template.ejs'

    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: [/node_modules/], use: 'babel-loader'},
      {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
      {test: /\.eot$|\.svg$|\.woff$|\.woff2|.ttf$/, use: 'url-loader'}
    ]
  }
}
