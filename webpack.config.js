const path = require("path");
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    devServer: {
      host: '0.0.0.0',
      publicPath: '/assets/',
      contentBase: path.resolve(__dirname, "./frontend"),
      watchContentBase: true,
      compress: true,
      port: 9091
    },
    devtool: 'inline-source-map',
    entry: "./frontend/index.js",
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }]  
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle-front.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './frontend/index.html'
      })
    ],
    target: "web"
  },
  {
    entry: "./server.js",
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle-back.js",
    },
    target: "node"
  }
]