import React from "react";

const Footer = ({ activeSite }) => {
  return <footer>
      <div className="container">
        <strong className="footerTitle">Kamil Pszczółkowski @2018</strong>
        <span className="footerInfo">
          Aplikacja do zarządzania wydarzeniami{" "}
        </span>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/kamil-pszcz%C3%B3%C5%82kowski-9b9894166/">
            <div className="btn2" />
          </a>
          <a href="mailto:pszczolkowski.kamil@gmail.com">
            <div className="btn3" />
          </a>
          <a href="https://github.com/kamilpszczolkowski">
            <div className="btn4" />
          </a>
        </div>
      </div>
    </footer>;
};

export default Footer;
