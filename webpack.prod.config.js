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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'PRODUCTION': JSON.stringify(false),
        // todo: switch to prod
        'API_URL': JSON.stringify('http://34.73.149.14:8080/v1')
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
