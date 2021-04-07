const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    hash: true,
    chunksSortMode: 'none',
  }),
];

module.exports = {
  // change to .tsx if necessary
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins,
  devServer: {
    contentBase: './dist',
    open: true,
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
      },

      // newline - add source-map support
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
    ],
  },
  // newline - add source-map support
  devtool: 'source-map',
};
