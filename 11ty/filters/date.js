const {DateTime} = require('luxon');

module.exports = conf => {
    conf.addFilter('date_human', function(date) {
        return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
    });

    conf.addFilter('date_year', function(date) {
        return DateTime.fromISO(date).toLocaleString({year: 'numeric'});
    });

    conf.addFilter('group_by_date', function(items) {
        let collection = {}
        let final = [];
        items.map(row => {
            const year = DateTime.fromISO(row.date).toLocaleString({year: 'numeric'});
            if (!collection[year]) {
                collection[year] = [];
            }
            collection[year].push(row)
        })
        Object.keys(collection)
            .sort()
            .map(year => {
                final.push({
                    year: year,
                    sites: collection[year],
                });
            });
        return final;
    });
}