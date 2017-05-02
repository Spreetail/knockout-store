import babel from 'rollup-plugin-babel';

const cjsConfig = {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'lib/index.js'
};


export default cjsConfig;
