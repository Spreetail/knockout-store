import baseConfig from './rollup.base.config.js';

const { main } = require('../package.json');

const umdPartialConfig = {
    format: 'umd',
    moduleName: 'ko.store',
    dest: main,
};

const umdConfig = Object.assign({}, baseConfig, umdPartialConfig);

export default umdConfig;
