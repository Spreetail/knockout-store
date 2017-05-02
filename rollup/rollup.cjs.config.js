import baseConfig from './rollup.base.config';

const cjsPartialConfig = {
    format: 'cjs',
    dest: 'lib/index.js'
};

const cjsConfig = Object.assign({}, baseConfig, cjsPartialConfig);

export default cjsConfig;
