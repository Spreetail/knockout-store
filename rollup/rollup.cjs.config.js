import babel from 'rollup-plugin-babel';
import mergeBaseConfig from './rollup.merge-base-config.js';

const cjsConfig = {
    format: 'cjs',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'lib/index.js'
};

const finalConfig = mergeBaseConfig(cjsConfig);

export default finalConfig;
