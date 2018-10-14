import React from 'react';
import PropTypes from 'prop-types';
import IconTag from '../components/IconTag';
import styles from '../components/TagList.module.scss';

const TagList = ({ tags, className }) => (
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

TagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.node.isRequired,
};

TagList.defaultProps = {
  className: '',
};

export default TagList;
