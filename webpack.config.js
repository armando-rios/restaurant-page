import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
const __dirname = import.meta.dirname

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|git)$/i,
        type: "asset/resource"
      }
    ],
  }
}
