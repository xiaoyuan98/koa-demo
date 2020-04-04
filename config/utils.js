const path = require("path");

const resolve = function (dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  resolve,
  APP_PAHT: resolve("src"),
  DIST_PAHT: resolve("dist")
}