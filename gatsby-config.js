module.exports = {
  siteMetadata: {
    title: 'Always Blank',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:700`, `zilla slab\:400,400i,700`],
      },
    },
  ],
};
