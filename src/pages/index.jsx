// import { Link } from 'gatsby';
import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';
import Layout from '../components/Layout';
import stylesContainer from '../components/Container.module.scss';
import EmojiTag from '../components/EmojiTag';

export default ({ data }) => (
  <Layout>
    <Container>
      <h2 className={stylesContainer.offset}>Changelog</h2>
    </Container>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Container key={node.id}>
        <div>{node.frontmatter.date}</div>
        <div>
          <h3>
            {node.frontmatter.tags.map(tag => <EmojiTag tag={tag} />)}
            <Link
              to={node.fields.slug}
              css={{ textDecoration: `none`, color: `inherit` }}
            >
              {node.frontmatter.title}
            </Link>
          </h3>
          {node.excerpt}
        </div>
      </Container>
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
