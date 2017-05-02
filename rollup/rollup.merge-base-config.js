const baseConfig = {
    entry: './src/index.js'
};

function mergeBaseConfig(config) {
    return Object.assign({}, baseConfig, config);
}

export default mergeBaseConfig;
