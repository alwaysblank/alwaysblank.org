import PropTypes from 'prop-types';
import React from 'react';
import PostPreview from './PostPreview';
import styles from './List.module.scss';

const List = ({ className, items, sidebar, ...props }) => (
  <div className={`${styles.root} ${className}`} {...props}>
    <div className={styles.sidebar}>{sidebar}</div>
    <div className={styles.list}>
      {items.map(item => (
        <PostPreview
          key={item.node.id}
          date={item.node.frontmatter.date}
          tags={item.node.frontmatter.tags}
          type={item.node.frontmatter.type}
          slug={item.node.fields.slug}
          title={item.node.frontmatter.title}
          excerpt={item.node.frontmatter.description}
          collection={item.node.fields.collection}
          url={item.node.fields.compositeUrl}
          className="preview"
        />
      ))}
    </div>
  </div>
);

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.node.isRequired,
  sidebar: PropTypes.node,
};

List.defaultProps = {
  className: '',
  sidebar: '',
};

export default List;
