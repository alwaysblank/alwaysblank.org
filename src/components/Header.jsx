import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Header.module.scss';
import icon from '../images/ben-icon.svg';

const Header = ({ brand, className, tagline, ...props }) => (
  <header className={`${styles.root} ${className}`} {...props}>
    <Container>
      <div className={styles.brand}>
        <Link className={styles.link} to="/">
          <img src={icon} className={styles.image} alt="Ben Martinez-Bateman" />
        </Link>
      </div>
      <div>
        <h1 className={styles.headerBrandTitle}>
          Ben <br />
          Martinez <br />
          -Bateman
        </h1>
        <div className={styles.headerTagline}>{tagline()}</div>
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
