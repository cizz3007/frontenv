const ProgressBar = require('progress');
const chalk = require('chalk');
const webpack = require('webpack');
const log = console.log;
const ASC_ART = () => {
  log(chalk`{rgb(225,18,130) ${'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@..........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@ ..........@@@@@@@@@@@@@@@@@@@@..... @@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@......-....@@@@@@@@@@@@@@@@@@-.......@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@......@@....@@@@@@@@@@@@@@@@@ ........@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@ .... @@.... @@@@@@@@@@@@@@@ ......... @@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@.... @@.....@@@@@@@@@@@@@@@@...... ...@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@....@@@.... @@@@@@@@@@@@@@ ..... @....@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@.....@@.....@@@@@@@@@@@@@@......@@@....@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@....@@@....@@@@@@@@@@@@@@@..... @@@....@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@....@@.....@@@@@@@@@@@@@@.....@@@@@...@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@ ....@.....@@@@@@@@@@@@@@.....@@@@@@...@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@,...  .... @@@@@@@@@@@@@.....~@@@@@....@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@.........@@@@@@@@@@@@@@@....@@@@@@@....@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@...........@....@@@@@@@@@@@@@@ ... @@@@@@.....@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@.......... @... @@@@@@@@@@@@@@....@@@@@@@.... @@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@......... @@....@@@@@@@@@@@@@ ....@@@@@@ ....@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@........@@@@.....@@@@@@@@@@@@....,@@@@@@.... @@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@-....@@@@@@@@.....@@@@@@@@@@@....@@@@@@@....@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@...... @@@@@...... @@@@@@@@ ....@@@@@ ....@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@........ @@@@....... @@@@@@....@@@@@,.....@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@........@@@@@........@@@@@....@@@@@..... @@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@.......@@@@@@.......... ....@@.......@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@......@@@@@@ .....................@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@,....@@@@@@@@...................;@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@....@@@@@@@@ ,@@.............@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@.... @@@@........@@........@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@.... @@ ...........@...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@ ...  .................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@ ... ..................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@.......... @@@@ ....... @@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@........@@@@@@@@@-......@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@.......@@@@@@@@@@@,.....@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@..... @@@@@@@@@@@@@ ....@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@.....@@@@@@@@@@@@@@@....@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@....@@@@@@@@@@@@@@@@ ...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@ .-@@@@@@@@@@@@@@@@@@;. @@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '........... @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ..@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '............@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@... @@@@@@@@@@@@@@@@@@@@@@@\n' +
  '............@@@@@@....@@@@@@@@@@@@@....@@@@@@@@@....@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '-..........@@@@@@@....@@@@@@@@@@@@@....@@@@@@@.......,@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@...@@.. @@@@@@ .. @@@@@@@@@@@@@....@@@@@@@........@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@...@@......... ...@@@....... @@.........@@........@@.......@@ .........\n' +
  '@@@@...@@.............@@,........@@...........@......@@......... ..........\n' +
  '@@@@...@@.............@ ......... @........... @....@@.....................\n' +
  '@@@@...@@.....@@@@....@....@@@....@......@.....@....@@.....................\n' +
  '@@@@...@@....@@@@@....@...~@@@ ...@....@@@@.........@@.... @@ ....@@@.....~\n' +
  '@@@@...@@...@@@@@@....@...@@@@@... ....@@@@@........@@...@@@@@ ...@@,....@@\n' +
  '@@@@...@@...@@@@@@....@... @@@ ...@....@@@@.........@@... @@@@,...@..... @@\n' +
  '@@@@...@@...@@@@@@....@....@@@....@....@@@@....~....@@....@@@@.... .... @@@\n' +
  '@@@@...@@...@@@@@@....@...........@@...........@..... .....@@............. \n' +
  '@@@@...@@...@@@@@@....@..........@@@.......... @ .....,....................\n' +
  '@@@@...@@...@@@@@@ .. @......... @@@;........ @@ .....@......... ..........\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@...@@@@@@@@@@@@@....,@@@@@@ ...@@@..... @@@.........\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'}}
`);
}

ASC_ART()

module.exports = function CustomProgressBar(options) {
  options = options || {};

  const stream = options.stream || process.stderr;
  const enabled = stream && stream.isTTY;

  if (!enabled) {
    return function () {};
  }

  const barLeft = chalk.red.bold('[');
  const barRight = chalk.red.bold(']');
  const preamble = chalk.cyan.bold('웹팩 빌드 중 : ') + barLeft;
  const barFormat = options.format || preamble + ':bar' + barRight + chalk.green.bold(' :percent');
  const summary = options.summary !== false;
  const summaryContent = options.summaryContent;
  const customSummary = options.customSummary;

  delete options.format;
  delete options.total;
  delete options.summary;
  delete options.summaryContent;
  delete options.customSummary;

  const barOptions = Object.assign({
    complete: chalk.cyan.bold('▥'),
    incomplete: '/',
    width: 50,
    total: 100,
    clear: false
  }, options);

  const bar = new ProgressBar(barFormat, barOptions);

  let running = false;
  let startTime = 0;
  let lastPercent = 0;

  return new webpack.ProgressPlugin(function (percent, msg) {
    // console.log(`현재 단계 :${msg}, ${Math.floor(percent * 100)}%`)
    if (!running && lastPercent !== 0 && !customSummary) {
      stream.write('\n');
    }

    const newPercent = Math.floor(percent * barOptions.width);

    if (lastPercent < percent || newPercent === 0) {
      lastPercent = percent;
    }

    bar.update(percent, {
      msg: msg
    });

    if (!running) {
      running = true;
      startTime = new Date;
      lastPercent = 0;
    } else if (percent === 1) {
      const now = new Date;
      const buildTime = (now - startTime) / 1000 + 's';

      bar.terminate();

      if (summary) {
        stream.write(chalk.green.bold('웹팩 빌드에 걸린 시간 : ' + buildTime + '\n\n'));
      } else if (summaryContent) {
        stream.write(summaryContent + '(' + buildTime + ')\n\n');
      }

      if (customSummary) {
        customSummary(buildTime);
      }

      running = false;
    }
  });
};