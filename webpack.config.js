const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackProgressBar = require('webpack-progress-bar')

module.exports = {
    entry: {
        'app': ['@babel/polyfill', './client/index.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "[id].[chunkhash].js",
        publicPath: path.join(__dirname, 'dist')
    },
    cache: true,
    mode: process.env.NODE_ENV,
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        open: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {compact: false},
                exclude: /node_modules/,

            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '_[hash:base64:11]',
                            namedexport: true,
                            sourceMap: true,
                            minimize: true,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            },
        ]
    },
    plugins: [
        new WebpackProgressBar(),
        new webpack.DefinePlugin({
            'process.env': {
                'MODE': JSON.stringify(process.env.NODE_ENV),
                'SERVER': JSON.stringify(process.env.AWS_EC2_IP),
                'GOOGLE_CLIENT_ID': JSON.stringify(process.env.GOOGLE_CLIENT_ID),
                "KAKAO_REST_KEY": JSON.stringify(process.env.KAKAO_REST_KEY),
                'FULL_PAGE_LICENSE_KEY': JSON.stringify(process.env.FULL_PAGE_LICENSE_KEY)
            },
            APP_SECRET_CHECK: JSON.stringify(process.env.APP_SECRET_CHECK)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'index.html'),
            inject: true,
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                useShortDoctype: true
            },
            template: './template.html',
            title: '트립비토즈 테스트',
        }),
    ]
};
