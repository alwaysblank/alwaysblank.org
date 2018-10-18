import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import TagList from '../components/TagList';
import IconTag from '../components/IconTag';
import { getDate } from '../utils/tools';
import styles from './Work.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  let technology = '';
  if (
    post.frontmatter.technology &&
    Array.isArray(post.frontmatter.technology)
  ) {
    technology = (
      <ul className={styles.technology}>
        {post.frontmatter.technology.sort().map(tech => (
          <li>
            <IconTag tag={tech} />
          </li>
        ))}
      </ul>
    );
  }
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
          <TagList tags={post.frontmatter.tags} className={styles.type} />
          {technology}
        </header>
        <Content content={post} className={styles.content} />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query DefaultPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        description
        technology
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
