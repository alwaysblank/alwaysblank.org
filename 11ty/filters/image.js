module.exports = conf => {
    conf.addFilter('cl_url', (asset, transforms) => {
        let path = asset;
        if (transforms) {
            path = `${transforms}/${asset}`
        }
        const cl = `https://res.cloudinary.com/djd6kxozp/image/upload/v1606345452/`;
        return `${cl}${path}`;
    })
}