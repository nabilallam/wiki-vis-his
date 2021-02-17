const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    content: [
      './src/content.js'
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            drop_console: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ESLintPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
}
