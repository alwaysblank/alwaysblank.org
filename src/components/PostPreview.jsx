import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import EmojiTag from './EmojiTag';
import styles from './PostPreview.module.scss';

const PostPreview = ({
  className,
  date,
  tags,
  slug,
  title,
  excerpt,
  url,
  collection,
  ...props
}) => (
  <article className={`${styles.root} ${className} ${styles.work}`} {...props}>
    <div>
      {date} <br/>
      {tags.map(tag => (
        <EmojiTag tag={tag} />
      ))}
    </div>
    <div>
      <h3 className={styles.heading}>
        <Link to={url} css={{ textDecoration: `none`, color: `inherit` }}>
          {title}
        </Link>
      </h3>
      {excerpt}
    </div>
  </article>
);

PostPreview.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  array: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

PostPreview.defaultProps = {
  className: '',
};

export default PostPreview;
