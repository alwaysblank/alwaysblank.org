const rimraf = require('rimraf');
const {join} = require('path');

module.exports = function (conf) {

    require('./11ty/index')(conf);

    /**
     * Add plugins.
     */
    conf.namespace('cl_', () => {
        conf.addPlugin(require('@11in/cloudinary'), {
            name: "djd6kxozp",
            transforms: [{
                quality: "auto",
            }],
            defaults: {
                width: 1024
            }
        })
    });
    conf.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
    conf.addPlugin(require('@11ty/eleventy-navigation'))

    /**
     * Copy assets into root, so that manifest records don't need modification.
     */
    conf.addPassthroughCopy({
        "content/assets": "/"
    });

        /**
     * Customize the markdown renderer.
     */
    const contain = require('markdown-it-container')
    const changeClass = t => {
        return {
            render: (tokens, idx) => {
                const type = tokens[idx].type;
                if (`container_${t}_open` === type) {
                    return `<div class="admonition-${t}">`
                }
                else return `</div>`
            }
        }
    }
    const md = require('markdown-it')({
            html: true, // For parity w/ 11ty default setting
            typographer: true, // Slightly nicer typography
        })
        .use(require('markdown-it-emoji'))
        .use(require('markdown-it-anchor'))
        .use(require('markdown-it-table-of-contents'), {
            includeLevel: [2, 3, 4]
        })
        .use(contain, 'note', changeClass('note'))
        .use(contain, 'tip', changeClass('tip'))
        .use(contain, 'warning', changeClass('warning'))
        .use(contain, 'important', changeClass('important'))

    conf.setLibrary("md", md)

    /**
     * This is necessary so that we rebuild when assets are rebuilt.
     */
    conf.setUseGitIgnore(false);

    conf.setQuietMode(true);

    /**
     * Run some cleanup after a build is made.
     */
    conf.on('afterBuild', () => {
        // Remove unneeded images.mjs files
        rimraf(join(process.cwd(), 'dist', 'images.*.mjs?(.map)'), {}, err => {
            if (err) {
                console.error(err)
            }
        });
    });

    return {
        dir: {
            input: "content",
            output: "dist",
            includes: "_includes",
            layouts: "_layouts",
        }
    }
};
