const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /(\.css)$/, use: ['style-loader', 'css-loader']},
      {test: /\.eot$|\.svg$|\.woff$|\.woff2|.ttf$/, use: 'url-loader'}
    ]
  },
  serve: {
    content: './src',
    clipboard: true,
    logLevel: 'warn',
    hot: {
      hot: true,
      logLevel: 'warn',
      reload: true
    }
  }
}
