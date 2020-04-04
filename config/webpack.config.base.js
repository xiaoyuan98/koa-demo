const path = require("path");
const webpack = require("webpack");
const nodeExcternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const utils = require("./utils");

const webpackconfig = {
  target: "node",
  entry: {server: path.join(utils.APP_PAHT, "index.js")},
  output: {
    path: utils.DIST_PAHT,
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: [path.join(__dirname, "/node-modules")]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: (process.env.NODE_ENV === "production" || 
        process.env.NODE_ENV === "prod") ? "'production'" : "'development'"
      }
    })
  ],
  node: {
    console: true, // boolean | "mock"
    global: true, // boolean | "mock"
    process: true, // boolean
    __filename: true, // boolean | "mock"
    __dirname: true, // boolean | "mock"
    Buffer: true, // boolean | "mock"
    setImmediate: true 
  }
};

module.exports = webpackconfig;