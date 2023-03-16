import React from "react";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

const Footer = () => (
  <footer className="footer">
    <p>
      View project on{" "}
      <a href="https://github.com/jamie-l-robertson/recoil-todo">
        <GithubIcon aria-label="Github" />
      </a>
    </p>
  </footer>
);

export default Footer;
