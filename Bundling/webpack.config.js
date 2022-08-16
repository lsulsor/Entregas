const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
    resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    aplicacion: "./index.tsx",
    estilosterceros: "../node_modules/bootstrap/dist/css/bootstrap.css",
  },
  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // Fichero en dist
      template: "./index.html", // Fichero de entrada ./src
      scriptLoading: "blocking",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devtool:"eval-source-map",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};
