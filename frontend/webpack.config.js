const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CustomProgressBar = require('./progress.config');

module.exports = {
  stats: 'minimal',
  entry    : {
    'app': ['@babel/polyfill', './frontend/index.js'],
  },
  output   : {
    path         : path.join(__dirname, 'dist'),
    filename     : '[name].bundle.js',
    chunkFilename: "[id].[chunkhash].js",
    publicPath   : path.join(__dirname, 'dist')
  },
  cache    : true,
  mode     : process.env.NODE_ENV,
  devtool  : "source-map",
  resolve  : {
    extensions: [".ts", ".tsx", ".js", ".json", '.jsx'],
    alias     : {
      '@global'    : path.resolve(__dirname, 'frontend/global'),
      '@apis'      : path.resolve(__dirname, 'frontend/apis'),
      '@pages'     : path.resolve(__dirname, 'frontend/pages'),
      '@components': path.resolve(__dirname, 'frontend/components')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname), //index.html의 위치
    compress   : true,
    port       : 9000,
    hot        : true,
    open       : false
  },
  module   : {
    rules: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        options: {
          rootMode: 'upward' //upward:root의 babel.config.js를 참조,없으면 에러 //default = root
        }
      },
      {
        enforce: "pre",
        test   : /\.js$/,
        loader : "source-map-loader"
      },
      {
        test   : /\.(jpe?g|png)$/i,
        loader : 'file-loader',
        options: {
          hash  : 'sha512',
          digest: 'hex',
          name  : '[hash].[ext]',
        },
      },
      // { //styled컴포넌트라 필요없음
      //   test: /\.(sa|sc|c)ss$/,
      //   use : [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader : 'css-loader',
      //       options: {
      //         modules       : true,
      //         localIdentName: '[hash:base64:11]',
      //         namedexport   : true,
      //         sourceMap     : true,
      //         minimize      : true,
      //       }
      //     },
      //   ]
      // },
    ]
  },
  plugins  : [
    new CustomProgressBar(),
    new webpack.DefinePlugin({
      'process.env'   : {
        'MODE'                 : JSON.stringify(process.env.NODE_ENV),
        'SERVER'               : JSON.stringify(process.env.AWS_EC2_IP),
        'GOOGLE_CLIENT_ID'     : JSON.stringify(process.env.GOOGLE_CLIENT_ID),
        "KAKAO_REST_KEY"       : JSON.stringify(process.env.KAKAO_REST_KEY),
        'FULL_PAGE_LICENSE_KEY': JSON.stringify(process.env.FULL_PAGE_LICENSE_KEY)
      },
      APP_SECRET_CHECK: JSON.stringify(process.env.APP_SECRET_CHECK)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'index.html'),
      inject  : true,
      hash    : true,
      minify  : {
        collapseWhitespace           : true,
        removeComments               : true,
        removeRedundantAttributes    : false,
        removeScriptTypeAttributes   : false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype              : true
      },
      template: './template.html',
      title   : '트립비토즈 테스트',
    }),
  ]
};
