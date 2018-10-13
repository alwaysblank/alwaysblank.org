import React from 'react';
import PropTypes from 'prop-types';
import EmojiTag from '../components/EmojiTag';
import styles from '../components/EmojiTagList.module.scss';

const EmojiTagList = ({ tags, className }) => (
  <ul className={`${styles.root} ${className}`}>
    {tags.sort().map(tag => (
      <li>
        <span>
          <EmojiTag tag={tag} /> {tag}
        </span>
      </li>
    ))}
  </ul>
);

EmojiTagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.node.isRequired,
};

EmojiTagList.defaultProps = {
  className: '',
};

export default EmojiTagList;
