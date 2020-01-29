const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'PRODUCTION': JSON.stringify(true),
        'API_URL': JSON.stringify('http://localhost:8080/v1/')
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
