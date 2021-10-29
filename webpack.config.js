const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 8443,
    historyApiFallback: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:8080/",
      },
      "/auth": {
        target: "http://localhost:8080/",
      },
    },
  },
  resolve: {
    alias: {
      assets: path.resolve("./assets"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./src/html/index.html"),
    }),
    new webpack.EnvironmentPlugin({
      API_URL: "http://localhost:8443/graphql",
    }),
  ],
};
