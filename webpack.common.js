const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            // path where the images will be saved
            name: "assets/[name].[ext]"
          }
        },

        {
          loader: "image-webpack-loader",
          options: {
            mozjpeg: {
              quality: 65
            },
            pngquant: {
              quality: "10-20",
              speed: 4
            },
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeEmptyAttrs: false
                }
              ]
            },
            gifsicle: {
              optimizationLevel: 7,
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7,
              interlaced: false
            }
          }
        }
      ]
    }
  ]
  },
  plugins: [

    new HtmlWebpackPlugin({template:
        './src/public/index.html',
         filename: './index.html',
        //  //favicon: '../src/public/favicon.ico',
        //  meta: [{ name: 'robots', content: 'noindex,nofollow' }],
        //  appMountIds: ['app'],
        //  inject: false,
        //  minify: {
        //      collapseWhitespace: true,
        //      conservativeCollapse: true,
        //      preserveLineBreaks: true,
        //      useShortDoctype: true,
        //      html5: true
        //  },
        //  mobile: true,
        //  scripts: "[name].bundle.min.js"
        })

  ]
};