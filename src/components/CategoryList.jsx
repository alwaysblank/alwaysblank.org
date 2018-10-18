import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryList.module.scss';

const CategoryList = ({ categories, className }) => {
  if (categories) {
    return (
      <ul className={`${className} ${styles.root}`}>
        {categories.sort().map(category => (
          <li>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null; // Handle null category lists
};

CategoryList.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.node,
};

CategoryList.defaultProps = {
  className: '',
  categories: null,
};

export default CategoryList;
