import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

const Content = ({ content }) => (
  <div
    className={styles.root}
    dangerouslySetInnerHTML={{ __html: content.html }}
  />
);

Content.propTypes = {
  content: PropTypes.string,
};

Content.defaultProps = {
  content: '',
};

export default Content;
