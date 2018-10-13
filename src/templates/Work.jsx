import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import EmojiTag from '../components/EmojiTag';
import Content from '../components/Content';
import EmojiTagList from '../components/EmojiTagList';
import { getDate } from '../utils/tools';
import styles from './Work.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <time
            className={styles.date}
            dateTime={`${getDate(post.frontmatter.date)}`}
          >
            {post.frontmatter.date}
          </time>
          <hr className={styles.separator} />
          <EmojiTagList tags={post.frontmatter.tags} className={styles.type} />
        </header>
        <Content content={post} className={styles.content} />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        description
      }
    }
  }
`;
