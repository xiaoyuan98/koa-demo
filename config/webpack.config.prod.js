const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const webpackProdConfig = webpackMerge(webpackBaseConfig, {
  mode: "production",
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
          commons: {
              name: "commons",
              chunks: "initial",
              minChunks: 3,
              enforce: true
          }
      }
  }
  },
});

module.exports = webpackProdConfig;
