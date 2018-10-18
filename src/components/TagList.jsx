import React from 'react';
import PropTypes from 'prop-types';
import IconTag from '../components/IconTag';
import styles from '../components/TagList.module.scss';

const TagList = ({ tags, className }) => {
  if (tags) {
    return (
      <ul className={`${styles.root} ${className}`}>
        {tags.sort().map(tag => (
          <li>
            <span>
              <IconTag tag={tag} /> {tag}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return null; // Handle null tag lists
};

TagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.node,
};

TagList.defaultProps = {
  className: '',
  tags: null,
};

export default TagList;
