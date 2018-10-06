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
  url,
  collection,
  ...props
}) => (
  <article className={`${styles.root} ${className} ${collection == `work` ? styles.work : null}`} {...props}>
    <aside>
      <time className={styles.date} dateTime={`${getDate(date)}`}>{date}</time>
      <hr className={styles.separator}/>
      <ul className={styles.type}>
        {tags.sort().map(tag => (
          <li>
            <span>
              <EmojiTag tag={tag} /> {tag}
            </span>
          </li>
        ))}
      </ul>
    </aside>
    <div>
      <h3 className={styles.heading}>
        <Link to={url}>{title}</Link>
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
  tags: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

PostPreview.defaultProps = {
  className: '',
};

export default PostPreview;
