import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-icons">
        <FontAwesomeIcon icon={faEnvelope} className="Footer-icon" />
        <FontAwesomeIcon icon={faFacebook} className="Footer-icon" />
        <FontAwesomeIcon icon={faTwitter} className="Footer-icon" />
        <FontAwesomeIcon icon={faGoogle} className="Footer-icon" />
      </div>
    </div>
  );
};

export default Footer;

