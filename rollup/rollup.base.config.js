import babel from 'rollup-plugin-babel';

const baseConfig = {
    entry: 'src/index.js',
    external: ['knockout'],
    globals: {
        knockout: 'ko'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};

export default baseConfig;
