import baseConfig from './rollup.base.config';
const { module } = require('../package.json');

const esPartialConfig = {
    format: 'es',
    dest: module,
};

const esConfig = Object.assign({}, baseConfig, esPartialConfig);

export default esConfig;
