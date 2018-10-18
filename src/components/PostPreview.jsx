import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import TagList from './TagList';
import CategoryList from './CategoryList';
import styles from './PostPreview.module.scss';
import { getDate } from '../utils/tools';

const PostPreview = ({
  className,
  date,
  tags,
  categories,
  slug,
  type,
  title,
  excerpt,
  url,
  collection,
  ...props
}) => (
  <article
    className={`${styles.root} ${className} ${styles[collection]}`}
    {...props}
  >
    <div>
      <div className={styles.type}>{type}</div>
      <h3 className={styles.heading}>
        <Link to={url}>{title}</Link>
      </h3>
      <div>
        <time className={styles.date} dateTime={`${getDate(date)}`}>
          {date}
        </time>
        <hr className={styles.separator} />
        <TagList tags={tags} className={styles.tags} />
        <CategoryList categories={categories} className={styles.tags} />
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
  tags: PropTypes.string,
  categories: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

PostPreview.defaultProps = {
  className: '',
  tags: false,
  categories: false,
};

export default PostPreview;
