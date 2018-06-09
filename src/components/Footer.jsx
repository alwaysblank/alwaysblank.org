import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Footer.module.scss';
import Container from './Container';
import stylesContainer from '../components/Container.module.scss';

const Footer = ({ className, ...props }) => (
  <footer className={`${styles.root} ${className}`} {...props}>
    <Container>
      <div className={`${styles.inner} ${stylesContainer.offset}`}>
        <nav>
          <Link>menu</Link> | <Link>goes</Link> | <Link>goes</Link>
        </nav>
        <div className={styles.thumbsup}>
          <span role="img" aria-label="Thanks pal">
            👍
          </span>
        </div>
        <div className={styles.legal}>
          © {new Date().getFullYear()} Ben Martinez-Bateman
        </div>
      </div>
    </Container>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
