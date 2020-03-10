const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CustomProgressBar = require('./progress.config');
const chunkOption = require('./config/webpackChunk');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const envResult = require('dotenv').config({
  path: __dirname + '/.env'
});

try {
  if (envResult.error) {
    console.error('.env 파일을 불러들이지 못하였습니다.');
    throw envResult.error;
  }

  const isDevMode = process.env.NODE_ENV === 'development';

  module.exports = {
    stats    : isDevMode ? 'minimal' : 'verbose',
    entry    : {
      'app': ['@babel/polyfill', './global/theme.js', './index.js'],
    },
    output   : {
      path         : path.join(__dirname, '../dist'),
      filename     : isDevMode ? '[name].bundle.js' : '[name].bundle.[hash].js',
      chunkFilename: "[id].[chunkhash].js",
      publicPath   : 'dist'
    },
    cache    : true,
    mode     : process.env.NODE_ENV,
    devtool  : "source-map",
    resolve  : {
      extensions: [".ts", ".tsx", ".js", ".json", '.jsx'],
      alias     : {
        '@': path.resolve(__dirname, './'),
        '@global'    : path.resolve(__dirname, './global'),
        '@apis'      : path.resolve(__dirname, './apis'),
        '@pages'     : path.resolve(__dirname, './pages'),
        '@components': path.resolve(__dirname, './components'),
        '@images'    : path.resolve(__dirname, './images'),
        '@store'    : path.resolve(__dirname, './store'),
        '@atoms' :path.resolve(__dirname,'./components/atoms'),
        '@molecules' :path.resolve(__dirname,'./components/molecules'),
        '@organisms' :path.resolve(__dirname,'./components/organisms'),
      }
    },
    devServer: {
      contentBase       : path.resolve(__dirname, '../'), //index.html의 위치
      compress          : true,
      host              : process.env.HOST,
      port              : process.env.PORT,
      hot               : true,
      open              : false,
      historyApiFallback: true,
      inline            : true,
      before            : function (app, server) {
        let _info = server.log.info;
      },
      after             : function (app, server) {
      }
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
          test   : /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader : 'url-loader',
          options: {
            name      : '[hash:base64:8].[ext]',
            publicPath: './dist/images/',
            outputPath: '../dist/images/',
            limit     : isDevMode ? 500000 : 500000, //1000000b = 1mb
          }
        },
        // { //styled컴포넌트라 필요없지만 혹시 다른 라이브러리에서 필요할 수도 있으니깐 주석처리
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
          'MODE'                 : JSON.stringify(process.env.MODE),
          'NODE_ENV'             : JSON.stringify(process.env.NODE_ENV),
          'HOST'                 : JSON.stringify(process.env.HOST),
          'PORT'                 : JSON.stringify(process.env.PORT),
          'AUTHORIZATION'        : JSON.stringify(process.env.AUTHORIZATION),
          'SERVER'               : JSON.stringify(process.env.SERVER),
          'GOOGLE_CLIENT_ID'     : JSON.stringify(process.env.GOOGLE_CLIENT_ID),
          "KAKAO_REST_KEY"       : JSON.stringify(process.env.KAKAO_REST_KEY),
          'FULL_PAGE_LICENSE_KEY': JSON.stringify(process.env.FULL_PAGE_LICENSE_KEY)
        },
        APP_SECRET_CHECK: JSON.stringify(process.env.APP_SECRET_CHECK)
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../index.html'),
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
        title   : '트립비토즈',
      }),
      !isDevMode && new CleanWebpackPlugin({
        dry                                        : false,
        verbose                                    : true,
        cleanOnceBeforeBuildPatterns               : [path.resolve(__dirname, '../dist/**/*')],
        dangerouslyAllowCleanPatternsOutsideProject: true
      }),
    ].filter(Boolean),
    ...!isDevMode && chunkOption
  };
} catch (e) {
  console.warn('webpack error:', e)
}
