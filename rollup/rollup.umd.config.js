import baseConfig from './rollup.base.config.js';

const umdPartialConfig = {
    format: 'umd',
    moduleName: 'ko.store',
    dest: 'dist/knockout-store.js'
};

const umdConfig = Object.assign({}, baseConfig, umdPartialConfig);

export default umdConfig;
