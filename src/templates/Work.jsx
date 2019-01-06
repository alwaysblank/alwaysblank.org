import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Content from '../components/Content';
import TagList from '../components/TagList';
import { getDate } from '../utils/tools';
import styles from './Work.module.scss';
import Technology from '../components/Technology';
import Client from '../components/Client';
import MetaTitle from '../components/MetaTitle';

const WorkTitle = ({ title, remote }) => {
  if (remote !== null) {
    return (
      <a href={remote} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    );
  }

  return title;
};

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <WorkTitle
              title={post.frontmatter.title}
              remote={post.frontmatter.remote}
            />
          </h1>
          <MetaTitle heading="Launch" />
          <time
            className={styles.date}
            dateTime={`${getDate(post.frontmatter.date)}`}
          >
            {post.frontmatter.date}
          </time>
          <Client clients={post.frontmatter.client} />
          <hr className={styles.separator} />
          <TagList tags={post.frontmatter.tags} className={styles.type} />
          <Technology technology={post.frontmatter.technology} />
        </header>
        <Content content={post} className={styles.content} />
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query WorkPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        description
        technology
        categories
        remote
        client {
          name
          url
        }
      }
      fields {
        slug
        collection
        compositeUrl
      }
    }
  }
`;
