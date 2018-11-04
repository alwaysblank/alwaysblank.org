import PropTypes from 'prop-types';
import React from 'react';
import styles from './Article.module.scss';

const Article = ({ children }) => (
  <main className={styles.root}>{children}</main>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
