const sortSitesByDate = require('./sortSiteByDate');
const date = require('./date');

module.exports = conf => {
    sortSitesByDate(conf);
    date(conf);
}
