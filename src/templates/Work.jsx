import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Content from '../components/Content';
import styles from './Work.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Container className={`${styles.root}`}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <Content content={post} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
