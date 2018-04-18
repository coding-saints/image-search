const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
    mode: 'development',
    // target: 'node',
    output: {
    path: path.join(__dirname +"/build"),
    filename: "[name].bundle.js",
    // publicPath: '/'
  },
//   optimization: {
//     runtimeChunk: 'single',
//     splitChunks: {
//         cacheGroups: {
//             vendors: {
//                 test: /[\\/]node_modules[\\/]/,
//                 name: 'vendors',
//                 enforce: true,
//                 chunks: 'all'
//             }
//         }
//     }
// },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [ {
        test: /\.scss|css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader?sourceMap",
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ]
},

  ]
  },

  devServer: {
    port: 3333,
    hot: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
      },
      overlay: {
        warnings: true,
        errors: true
      },
    inline: true,
    open: true,
    compress: true,
    historyApiFallback: true
    // It might be necessary to set a contentBase.
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});