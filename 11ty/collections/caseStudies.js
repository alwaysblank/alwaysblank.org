module.exports = conf => {
    conf.addCollection('caseStudies', function (api) {
        return api.getFilteredByGlob('content/case-study/*.md')
            .map(study => {
                if (study.data?.blocks 
                    && study.data.blocks.find(block => 'block-code' === block.template)) {
                    // This has a code block
                    study.data.hasCodeBlock = true;
                }

                return study;
            });
    })
}