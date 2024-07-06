import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-content flex">
          <div className="social-icons">
            <a href="https://whatsapp.com/channel/0029Vad8BxA1dAwCpJZtys2V">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a href="https://x.com/amxsol">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/amxsol">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/@amxsol">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.facebook.com/amxsol">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="contact-info">
            <a href="tel:+123456789">
              <FontAwesomeIcon icon={faPhone} /> +1 (215) 268-6168
            </a>
            <a href="mailto:info@amxsol.com">
              <FontAwesomeIcon icon={faEnvelope} /> info@amxsol.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
