import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Content from '../components/Content';
import CategoryList from '../components/CategoryList';
import { getDate } from '../utils/tools';
import styles from './Code.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <time
            className={styles.date}
            dateTime={`${getDate(post.frontmatter.date)}`}
          >
            {post.frontmatter.date}
          </time>
          <hr className={styles.separator} />
          <CategoryList
            categories={post.frontmatter.categories}
            className={styles.categories}
          />
        </header>
        <Content content={post} className={styles.content} />
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query CodePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        description
        categories
      }
      fields {
        slug
        collection
        compositeUrl
      }
    }
  }
`;
