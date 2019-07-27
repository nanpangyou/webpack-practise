const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: Path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "[name]-[hash:8].js",
    path: Path.resolve(__dirname, "../dist/dev")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        enforce: "pre"
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 80,
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "new demo",
      template: Path.resolve(__dirname, "../src/demo.html")
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: Path.resolve(__dirname, "../dist/dev"),
    hot: true,
    open: true,
    port: 9100
  }
};
