const sortSitesByDate = require('./sortSiteByDate');
const date = require('./date');
const image = require('./image');
const markdown = require('./markdown');

module.exports = conf => {
    sortSitesByDate(conf);
    date(conf);
    image(conf);
    markdown(conf);
}
