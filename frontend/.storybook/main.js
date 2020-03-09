const path = require('path');
module.exports = {
  stories: ['../**/*.stories.js'],
  addons : ['@storybook/addon-actions', '@storybook/addon-links'],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../components'),
      '@global'    : path.resolve(__dirname, '../global'),
      '@apis'      : path.resolve(__dirname, '../apis'),
      '@pages'     : path.resolve(__dirname, '../pages'),
      '@images'    : path.resolve(__dirname, '../images'),
    }
  }
};
