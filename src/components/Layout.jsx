import 'modern-normalize/modern-normalize.css';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

const taglines = ['Moyen vivant', 'Taco creator'];

const Layout = ({ children }) => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={staticData => (
        <Helmet
          titleTemplate={`%s | ${staticData.site.siteMetadata.title}`}
          defaultTitle={staticData.site.siteMetadata.title}
        >
          <html lang={staticData.site.siteMetadata.language} />
        </Helmet>
      )}
    />
    <Header
      tagline={() => taglines[Math.floor(Math.random() * taglines.length)]}
    />
    <main className={styles.main}>{children}</main>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
