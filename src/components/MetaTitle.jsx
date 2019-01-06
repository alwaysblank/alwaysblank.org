import React from 'react';
import PropTypes from 'prop-types';
import styles from './MetaTitle.module.scss';

const MetaTitle = ({ heading }) => <h3 className={styles.root}>{heading}</h3>;

MetaTitle.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default MetaTitle;
