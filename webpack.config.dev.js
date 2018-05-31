const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.js'],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './src',
    hot: true
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /(\.css)$/, use: ['style-loader', 'css-loader']},
      {test: /\.eot$|\.svg$|\.woff$|\.woff2|.ttf$/, use: 'url-loader'}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}
