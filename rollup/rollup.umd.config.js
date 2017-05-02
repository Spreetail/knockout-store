import babel from 'rollup-plugin-babel';
import mergeBaseConfig from './rollup.merge-base-config.js';

const cjsConfig = {
    format: 'umd',
    moduleName: 'ko.store',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'dist/knockout-store.js'
};

const finalConfig = mergeBaseConfig(cjsConfig);

export default finalConfig;
