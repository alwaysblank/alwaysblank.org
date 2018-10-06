import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import styles from '../components/Container.module.scss';

export default ({ data }) => (
  <Layout>
    <Container>
      <h2 className={styles.offset}>Changelog</h2>
    </Container>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostPreview
        key={node.id}
        date={node.frontmatter.date}
        tags={node.frontmatter.tags}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        excerpt={node.frontmatter.description}
        url={node.fields.compositeUrl}
      />
    ))}
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
