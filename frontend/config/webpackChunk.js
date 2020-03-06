const TerserJSPlugin = require('terser-webpack-plugin');

 const chunkOption = {
  optimization: {
    splitChunks: {
      chunks: 'all', //async, all,initial //all이 제일 파워풀하다고 함 :      // include all types of chunks
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      automaticNameDelimiter: '_',
      name: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(s?css)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together
          chunks: 'all',
          priority: 30,
          enforce: true
        },
        vendors: { //split chunk
          test: /[\\/]node_modules[\\/].*\.js$/,
          name: 'vendors_',
          chunks: 'all',
        },
      }
    },
    minimizer: [
      new TerserJSPlugin({}),
    ]
  }
};

module.exports = chunkOption
