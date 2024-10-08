//shop-app webpackconfig.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
//const isProduction = process.env.NODE_ENV === "production";
const isProduction = true;
module.exports = {
  entry: "./src/index.js",
  mode: isProduction ? "production" : "development",
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3001,
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:3]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shop",
      filename: "remoteEntry.js",
      exposes: {
        "./ShopApp": "./src/App",
      },
      shared: {
        react: {
          singleton: true,

          requiredVersion: require("./package.json").dependencies.react,
        },
        "react-dom": {
          singleton: true,

          requiredVersion: require("./package.json").dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  stats: "verbose",
};
