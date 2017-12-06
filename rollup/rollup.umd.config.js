import baseConfig from './rollup.base.config.js';

const { main } = require('../package.json');

const umdPartialConfig = {
  output: {
    format: 'umd',
    file: main,
    name: 'ko.store',
  },
};

const umdConfig = Object.assign({}, baseConfig, umdPartialConfig);

export default umdConfig;
