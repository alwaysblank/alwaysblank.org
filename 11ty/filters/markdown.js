const md = require('markdown-it');

module.exports = conf => {
    conf.addFilter('md', (string, opts) => {
        const {
            p
        } = Object.assign({
            p: true
        }, opts)
        const engine = new md();
        if (false === p) {
            /**
             * The primary purpose here is to disable <p> tags, i.e.
             * text inside of other tags. You should only use this option
             * if you're relatively certain that the text will never
             * actually *need* paragraphs.
             */
            return engine.renderInline(string)
        }
        return engine.render(string);
    })
}