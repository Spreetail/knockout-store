import babel from 'rollup-plugin-babel';

const umdConfig = {
    entry: 'src/index.js',
    external: ['knockout'],
    globals: {
        knockout: 'ko'
    },
    format: 'umd',
    moduleName: 'ko.store',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'dist/knockout-store.js'
};

export default umdConfig;
