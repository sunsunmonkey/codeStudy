const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  devServer: {
    hot: true,
    open: true
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.ts$/, use: ["ts-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Webpack App</title>
          </head>
          <body>
            <div id="app" />
          </body>
        </html>
    `
    })
  ]
}
