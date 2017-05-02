import mergeBaseConfig from './rollup.merge-base-config.js';

const esConfig = {
    format: 'es',
    dest: 'es/index.js'
};

const finalConfig = mergeBaseConfig(esConfig);

export default finalConfig;
