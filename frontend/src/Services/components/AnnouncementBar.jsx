import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faLinkedin, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './css/AnnouncementBar.css';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-content">
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <div className="contact-info">
            <a href="tel:+123456789"><FontAwesomeIcon icon={faPhone} /> +1 234 567 89</a>
            <a href="mailto:info@example.com"><FontAwesomeIcon icon={faEnvelope} /> info@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
