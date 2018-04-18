const commonConfig = require("./webpack.common");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require("webpack-merge");

let pathsToClean = [
  'dist',
  'build'
]


const extractSass = new ExtractTextPlugin({
  filename: "[id].[contenthash].css"
 // disable: process.env.NODE_ENV === "development"
});

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: "[name].bundle.min.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [

    new CleanWebpackPlugin(pathsToClean),
    extractSass,
    new UglifyJsWebpackPlugin(),

    new CopyWebpackPlugin([
      //  {from:'src/public/assets',to:'/'}
     // {from:'src/public/_redirects',to:'_redirects',toType: 'file'}

  ]),
   // new CopyWebpackPlugin([
     // { from: "src/public/_redirects", to: "_redirects" }// , // Copy everything from src/public/static to dist folder
      //{ from: require.resolve("workbox-sw"), to: "workbox-sw.prod.js" }
    //])
  ]
});