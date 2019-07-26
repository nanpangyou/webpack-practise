const merge = require("webpack-merge");
const base = require("./webpack.config.base.js");

const Path = require("path");

module.exports = merge(base, {
  mode: "production",
  output: {
    path: Path.resolve(__dirname, "../dist/client")
  }
});
