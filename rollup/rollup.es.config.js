import baseConfig from './rollup.base.config';
const { module } = require('../package.json');

const esPartialConfig = {
  output: {
    format: 'es',
    file: module,
  },
};

const esConfig = Object.assign({}, baseConfig, esPartialConfig);

export default esConfig;
