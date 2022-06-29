const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /stylesheets|node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        include: /stylesheets/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
    rules: [
      { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i, type: "asset/resource" },
    ],
  },
  mode: "development",
};
