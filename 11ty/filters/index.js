const sortSitesByDate = require('./sortSiteByDate');
const date = require('./date');
const markdown = require('./markdown');

module.exports = conf => {
    sortSitesByDate(conf);
    date(conf);
    markdown(conf);
}
