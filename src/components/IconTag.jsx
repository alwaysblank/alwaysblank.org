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
  FaPhp,
  FaLaravel,
} from 'react-icons/fa';
import { TiPen } from 'react-icons/ti';
import Statamic from '../images/Statamic.svg';
import Nginx from '../images/nginx.svg';
import styles from './IconTag.module.scss';

// Uses https://react-icons.netlify.com/
const tagMap = {
  wordpress: <IoLogoWordpress />,
  javascript: <FaJs />,
  cmb2: <IoIosAlbums />,
  'google maps': <FaMapMarkedAlt />,
  design: <IoIosColorPalette />,
  development: <IoMdCode />,
  essay: <TiPen />,
  tutorial: <FaChalkboard />,
  life: <FaDog />,
  job: <FaSuitcase />,
  accolades: <FaAward />,
  troubleshooting: <FaAmbulance />,
  php: <FaPhp />,
  laravel: <FaLaravel />,
  statamic: <Statamic />,
  nginx: <Nginx />,
};

const IconTag = ({ tag, className, ...props }) => (
  <span
    role="img"
    aria-label={tag}
    className={`${styles.root} ${className}`}
    alt={`Icon representing ${tag}`}
    title={tag}
    {...props}
  >
    {tagMap[tag.toLowerCase()]}
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
