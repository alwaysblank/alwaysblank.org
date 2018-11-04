import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import format from 'date-fns/format';
import TagList from './TagList';
import styles from './PostPreview.module.scss';

const PostPreview = ({
  className,
  date,
  tags,
  slug,
  type,
  title,
  excerpt,
  url,
  collection,
  ...props
}) => (
  <article
    className={`${styles.root} ${className} ${
      collection === `work` ? styles.work : null
    }`}
    {...props}
  >
    <div>
      <div className={styles.type}>{type}</div>
      <h3 className={styles.heading}>
        <Link to={url}>{title}</Link>
      </h3>
      <div>
        <time
          className={styles.date}
          dateTime={format(new Date(date), `YYYY-MM-DD`)}
        >
          {format(new Date(date), `MMMM YYYY`)}
        </time>
        <hr className={styles.separator} />
        <TagList tags={tags} className={styles.tags} />
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
