import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = ({ activeSite }) => {
  return (
    <footer>
      <div className="container">
        <strong className="footerTitle">Kamil Pszczółkowski @2018</strong>
        <span className="footerInfo">
          Aplikacja do zarządzania wydarzeniami{" "}
        </span>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
