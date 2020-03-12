const chalk = require('chalk');
const isDev = process.env.NODE_ENV === 'development' ? 'Development' : 'Production';
console.log(`\n${chalk.yellow('바벨')} ${chalk.blue('트랜스 컴파일 시작')}`)
console.log(`${chalk.yellow('모드')} : ${chalk.red(isDev)}\n`)

module.exports = (api) => {
  api.cache(true)
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    [
      'babel-plugin-styled-components',
      {
        'ssr'                      : false,
        'displayName'              : false,
        'fileName'                 : false,
        'pure'                     : true,
        'minify'                   : false,
        'transpileTemplateLiterals': false
      }
    ],
  ];

  if(!isDev) plugins.push('babel-plugin-transform-remove-console')

  return {
    presets,
    plugins,
  }
};
