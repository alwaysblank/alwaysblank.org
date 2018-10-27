import React from 'react';
import PropTypes from 'prop-types';
import IconTag from '../components/IconTag';
import styles from './Technology.module.scss';

const Technology = ({ technology, className }) => {
  if (technology) {
    return (
      <ul className={`${styles.root} ${className}`}>
        {technology.sort().map(tag => (
          <li>
            <span>
              <IconTag tag={tag} title={tag} />
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return null; // Handle null tag lists
};

Technology.propTypes = {
  className: PropTypes.string,
  technology: PropTypes.node,
};

Technology.defaultProps = {
  className: '',
  technology: null,
};

export default Technology;
