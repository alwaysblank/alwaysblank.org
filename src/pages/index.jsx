import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import List from '../components/List';

export default ({ data }) => (
  <Layout>
    <List
      items={data.allMarkdownRemark.edges.filter(
        item => !item.node.frontmatter.draft
      )}
    />
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            categories
            description
            type
            draft
          }
          fields {
            slug
            collection
            compositeUrl
          }
        }
      }
    }
  }
`;
