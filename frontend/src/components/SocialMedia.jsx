import React from "react";
import { BsTwitter, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://x.com/rgndunes"
          target="_blank"
          rel="noreferrer"
          className="p-text"
        >
          <BsTwitter style={{ color: "dodgerblue" }} />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/rgndunes/"
          target="_blank"
          rel="noreferrer"
          className="p-text"
        >
          <BsInstagram style={{ color: "rgb(226, 56, 124)" }} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/RgnDunes"
          target="_blank"
          rel="noreferrer"
          className="p-text"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/rgndunes/"
          target="_blank"
          rel="noreferrer"
          className="p-text"
        >
          <BsLinkedin style={{ color: "rgb(50, 100, 189)" }} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
