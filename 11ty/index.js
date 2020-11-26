const filters = require('./filters/index');
const shortcodes = require('./shortcodes/index');
const plugins = require('./plugins/index');

module.exports = conf => {
    plugins(conf); 
    filters(conf);
    shortcodes(conf);
    require('./collections/index')(conf);
}