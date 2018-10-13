import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import EmojiTagList from './EmojiTagList';
import styles from './PostPreview.module.scss';
import { getDate } from '../utils/tools';

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
  <article className={`${styles.root} ${className} ${collection == `work` ? styles.work : null}`} {...props}>
    <div>
      <h3 className={styles.heading}>
        <Link to={url}>{title}</Link>
      </h3>
      <div>
        <time className={styles.date} dateTime={`${getDate(date)}`}>{date}</time>
        <hr className={styles.separator} />
        <EmojiTagList tags={tags} className={styles.type} />
      </div>
      {excerpt}
    </div>
  </article>
);

PostPreview.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
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
