const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: Path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "[name]-[hash:8].js",
    path: Path.resolve(__dirname, "../dist/dev")
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "new demo",
      template: Path.resolve(__dirname, "../src/demo.html")
    })
  ]
};
