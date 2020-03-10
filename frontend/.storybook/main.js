const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    //와 스트레스
    config.resolve.alias = Object.assign(config.resolve.alias,{
      '@': path.resolve(__dirname, '../'),
      '@components': path.resolve(__dirname, '../components'),
      '@global'    : path.resolve(__dirname, '../global'),
      '@apis'      : path.resolve(__dirname, '../apis'),
      '@pages'     : path.resolve(__dirname, '../pages'),
      '@images'    : path.resolve(__dirname, '../images'),
      '@atoms'    : path.resolve(__dirname, '../components/atoms'),
      '@molecules'    : path.resolve(__dirname, '../components/molecules'),
    })
    return config;
  },
  stories: ['../**/*.stories.(js|mdx)'],
  addons : ['@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    "@storybook/addon-google-analytics/register",
    "@storybook/addon-links/register"
  ],
};
