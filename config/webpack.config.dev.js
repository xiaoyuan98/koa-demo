const webpackMerge = require("webpack-merge");

const webpackBaseConfig = require("./webpack.config.base");

const webpackDevConfig = webpackMerge(webpackBaseConfig, {
  mode: "development",
  devtool: "#eval-source-map",
  stats: { children: false }
})

module.exports = webpackDevConfig;