const md = require('markdown-it');

module.exports = conf => {
    conf.addFilter('md', (string) => {
        return (new md).render(string);
    })
}