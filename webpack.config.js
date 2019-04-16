const path = require("path");
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tsRule =   {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: ['ts-loader']
}

const commonRules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: 'babel-preset-env'
      }
    }
  },
  tsRule
]

const commonResolver = {
  extensions: [".tsx", ".ts", ".js", ".json"]
}

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
    entry: "./frontend/index.ts",
    module: {
      rules: [
          {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        ...commonRules
      ]  
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
    resolve: commonResolver,
    target: "web"
  },
  {
    entry: "./server/server.ts",
    externals: [nodeExternals()],
    module: {
      rules: [
        tsRule
      ]
    },
    context: __dirname,
    node: {
      __filename: false,
      __dirname: false
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle-back.js",
      publicPath: path.resolve(__dirname, 'dist')
    },
    resolve: commonResolver,
    target: "node"
  }
]