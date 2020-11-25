const {DateTime} = require('luxon');

module.exports = conf => {
    conf.addFilter('sort_sites_by_date', function(sites) {
        return sites.sort((a, b) => {
            return DateTime.fromISO(b.date) - DateTime.fromISO(a.date);
        });
    })
}