const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/app.jsx"],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/dist/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx"]
  }
};
