module.exports = conf => {
    conf.addCollection('case-studies', function (api) {
        return api.getAll()
            .map(study => {
                study.data.page.someValue = 'test';

                if (study.data?.blocks 
                    && study.data.blocks.find(block => 'block-code' === block.template)) {
                    // This has a code block
                    study.data.hasCodeBlock = true;
                }

                return study;
            });
    })
}