import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import List from '../components/List';
import PostPreview from '../components/PostPreview';
import styles from '../components/Container.module.scss';

export default ({ data }) => (
  <Layout>
    <Container>
      <h2 className={styles.offset}>Changelog</h2>
    </Container>
    <List items={data.allMarkdownRemark.edges} />
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
            description
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
