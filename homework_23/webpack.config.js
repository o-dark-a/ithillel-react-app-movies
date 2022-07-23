const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
               {
                 loader: "css-loader",
               },
               {
                 loader: "postcss-loader"
               },
               {
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass"),
                 }
               }
             ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [
               {
                 loader: "file-loader",
                 options: {
                   outputPath: 'images'
                 }
               }
             ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
               {
                 loader: "file-loader",
                 options: {
                   outputPath: 'fonts'
                 }
               }
             ]
      }
    ]
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },

  mode: 'development'
};
