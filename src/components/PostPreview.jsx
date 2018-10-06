import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import EmojiTag from './EmojiTag';
import styles from './PostPreview.module.scss';

function getDate(input) {
  const newDate = new Date(input);
  return `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
}

const PostPreview = ({
  className,
  date,
  tags,
  slug,
  title,
  excerpt,
  ...props
}) => (
  <article className={`${styles.root} ${className}`} {...props}>
    <div>
      {tags.sort().map(tag => (
        <EmojiTag tag={tag} />
      ))}
      <time className={styles.date} dateTime={`${getDate(date)}`}>{date}</time>
    </div>
    <div>
      <h3 className={styles.heading}>
        <Link to={slug} css={{ textDecoration: `none`, color: `inherit` }}>
          {title}
        </Link>
      </h3>
      {excerpt}
    </div>
  </article>
);

PostPreview.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

PostPreview.defaultProps = {
  className: '',
};

export default PostPreview;
