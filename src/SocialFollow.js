import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDev,
  faLinkedin,
  faGithub,
  faStackoverflow,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://dev.to/chethanagopinath"
      className="dev social">
        <FontAwesomeIcon icon={faDev} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/chethana-gopinath/"
      className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://github.com/chethanagopinath/"
      className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://stackoverflow.com/users/4403096/chethana-gopinath"
      className="stackoverflow social">
        <FontAwesomeIcon icon={faStackoverflow} size="2x" />
      </a>

      <a href="https://apennyeveryweek.wordpress.com/"
      className="wordpress social">
        <FontAwesomeIcon icon={faWordpress} size="2x" />
      </a>


    </div>
  );
}