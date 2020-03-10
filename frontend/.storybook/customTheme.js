import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#333',
  colorSecondary: 'red',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook!!',
  brandUrl: 'https://www.tripbtoz.com/',
  brandImage: 'https://qeuxmtqauiit1072966.cdn.ntruss.com/pc-web/main/logo_icon/001_title_logow_tripbtoz.png',
});
