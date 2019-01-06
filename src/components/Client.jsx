import React from 'react';
import PropTypes from 'prop-types';
import { MdLink } from 'react-icons/md';
import styles from './Client.module.scss';
import MetaTitle from './MetaTitle';

const MaybeLink = ({ client }) => {
  if (client.url !== null) {
    return (
      <a href={client.url} target="_blank" rel="noopener noreferrer">
        {client.name}
        <MdLink />
      </a>
    );
  }

  return client.name; // Just the name if there's no link
};

const Client = ({ clients, className }) => {
  if (clients) {
    let heading = 'Client';
    if (clients.length > 1) {
      heading = 'Clients';
    }
    return (
      <div className={`${styles.root} ${className}`}>
        <MetaTitle heading={heading} />
        <ul>
          {clients.map(client => (
            <li>
              <MaybeLink client={client} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null; // Handle empty client lists
};

Client.propTypes = {
  className: PropTypes.string,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};

Client.defaultProps = {
  clients: false,
  className: null,
};

export default Client;
