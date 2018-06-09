import PropTypes from 'prop-types';
import React from 'react';
import styles from './EmojiTag.module.scss';

const emojiMap = {
  website: `🕸`,
  design: `🎨`,
  development: `⚒`,
  launch: `🚀`,
  essay: `✍`,
  tutorial: `👨‍🏫`,
  life: `🐕`,
  job: `👷‍♂`,
  accolades: `🏅`,
};

const EmojiTag = ({ tag, className, ...props }) => (
  <span
    role="img"
    aria-label={tag}
    className={`${styles.root} ${className}`}
    {...props}
  >
    {emojiMap[tag]}
  </span>
);

EmojiTag.propTypes = {
  tag: PropTypes.node.isRequired,
  className: PropTypes.string,
};

EmojiTag.defaultProps = {
  className: '',
};

export default EmojiTag;
