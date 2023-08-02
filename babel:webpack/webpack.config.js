const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // mode:"development",
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugin: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  target: "web",
  devServer: {
    port: "1234",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".css", ".scss", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            preset: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
