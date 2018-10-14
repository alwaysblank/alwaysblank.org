import PropTypes from 'prop-types';
import React from 'react';
import {
  IoIosAlbums,
  IoLogoWordpress,
  IoIosColorPalette,
  IoMdCode,
} from 'react-icons/io';
import {
  FaJs,
  FaMapMarkedAlt,
  FaAmbulance,
  FaAward,
  FaSuitcase,
  FaDog,
  FaChalkboard,
} from 'react-icons/fa';
import { TiPen } from 'react-icons/ti';
import styles from './IconTag.module.scss';

const tagMap = {
  WordPress: <IoLogoWordpress />,
  JavaScript: <FaJs />,
  CMB2: <IoIosAlbums />,
  'Google Maps': <FaMapMarkedAlt />,
  design: <IoIosColorPalette />,
  development: <IoMdCode />,
  essay: <TiPen />,
  tutorial: <FaChalkboard />,
  life: <FaDog />,
  job: <FaSuitcase />,
  accolades: <FaAward />,
  troubleshooting: <FaAmbulance />,
};

const IconTag = ({ tag, className, ...props }) => (
  <span
    role="img"
    aria-label={tag}
    className={`${styles.root} ${className}`}
    alt={`Icon representing ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
    title={tag.charAt(0).toUpperCase() + tag.slice(1)}
    {...props}
  >
    {tagMap[tag]}
  </span>
);

IconTag.propTypes = {
  tag: PropTypes.node.isRequired,
  className: PropTypes.string,
};

IconTag.defaultProps = {
  className: '',
};

export default IconTag;
