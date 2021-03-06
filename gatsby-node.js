const get = require(`lodash/get`);
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    // Get the parent node
    const parent = getNode(get(node, 'parent'));

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: 'collection',
      value: get(parent, 'sourceInstanceName'),
    });

    createNodeField({
      node,
      name: 'compositeUrl',
      value: `/${get(parent, 'sourceInstanceName')}${slug}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                collection
                compositeUrl
              }
              frontmatter {
                draft
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        /** Don't generate drafts */
        if (node.frontmatter.draft !== true) {
          const components = {
            work: path.resolve(`./src/templates/Work.jsx`),
            code: path.resolve(`./src/templates/Code.jsx`),
          };
          createPage({
            path: node.fields.compositeUrl,
            component:
              components[node.fields.collection] ||
              path.resolve(`./src/templates/Default.jsx`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
              collection: node.fields.slug,
              compositeUrl: node.fields.compositeUrl,
            },
          });
        }
      });
      resolve();
    });
  });
};
