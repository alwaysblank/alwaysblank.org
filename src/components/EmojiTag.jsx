import PropTypes from 'prop-types';
import React from 'react';
import emoji from 'react-easy-emoji';
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
    {emoji(`${emojiMap[tag]}`, {
      props: {
        alt: `Emoji representing ${tag.charAt(0).toUpperCase() + tag.slice(1)}`,
        title: tag.charAt(0).toUpperCase() + tag.slice(1),
      },
    })}
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
