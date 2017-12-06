import uglify from 'rollup-plugin-uglify';
import umdConfig from './rollup.umd.config';

umdConfig.plugins = umdConfig.plugins || [];
umdConfig.plugins.push(uglify());
umdConfig.output.file = umdConfig.output.file.replace(/\.js$/, '.min.js');

export default umdConfig;
