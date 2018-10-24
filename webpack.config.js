var path = require("path");
var Html = require("html-webpack-plugin");
var MiniCSS = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./js/out.js",
    path: path.resolve(__dirname, "docs")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "stage-2", "react"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCSS.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|gif|png|csv)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "images",
            outputPath: "images"
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "fonts",
            outputPath: "fonts"
          }
        }
      }
    ]
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: "./index.html"
    }),
    new MiniCSS({
      filename: "app.css"
    })
  ]
};
