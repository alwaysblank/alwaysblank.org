import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import emoji from 'react-easy-emoji';
import styles from './Footer.module.scss';

const Footer = ({ className, ...props }) => (
  <footer className={`${styles.root} ${className}`} {...props}>
    <div className={styles.inner}>
      <nav>
        <Link>menu</Link> | <Link>goes</Link> | <Link>goes</Link>
      </nav>
      <div className={styles.thumbsup}>
        <span role="img" aria-label="Thanks pal">
          {emoji(`👍`)}
        </span>
      </div>
      <div className={styles.legal}>
        © {new Date().getFullYear()} Ben Martinez-Bateman
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
