import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./socialfollow.css";

export default function SocialFollow() {
  return (
    <div class="social-container">
      {/* <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}
      <a
        target="_blank"
        href="https://www.linkedin.com/company/evnt-org/?viewAsMember=true"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a target="_blank" href="https://twitter.com/evntorg" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a target="_blank" href="https://www.instagram.com/evnt_org/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a target="_blank" href="mailto:evntorg@gmail.com" className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </a>
      <a target="_blank" href="https://t.me/+_RInStne5Vo0ZjQ1" className="tele social">
        <FontAwesomeIcon icon={faTelegram} size="3x" />
      </a>
    </div>
  );
}
