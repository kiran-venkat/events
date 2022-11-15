import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./socialfollow.css"

export default function SocialFollow() {
  return (
    <div class="social-container">
      {/* <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://www.twitter.com/=" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a href="https://www.instagram.com/"
        className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </a>
    </div>
  );
}