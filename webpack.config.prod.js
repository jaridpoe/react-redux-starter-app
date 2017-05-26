import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
}

module.exports = {
  devtool: 'source-map', // production source map
  entry: './src/index',
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
    new webpack.DefinePlugin(GLOBALS), //sets react for production for performance reasons
    new ExtractTextPlugin('styles.css'), //extracts our css to a separate file
    new webpack.optimize.UglifyJsPlugin, // minifies our javascript
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/tools/index.template.ejs'

    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: [/node_modules/], use: 'babel-loader'},
      {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
      {test: /\.eot$|\.svg$|\.woff$|\.woff2|.ttf$/, use: 'url-loader'}
    ]
  }
};
