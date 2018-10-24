import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = ({ activeSite }) => {
  const footerStyles = activeSite => {
    if (activeSite === "main") {
      return {
        position: "fixed",
        bottom: "0",
        width: "100%"
      };
    }
    return {};
  };

  return (
    <footer style={footerStyles(activeSite)}>
      <div className="container">
        <strong className="footerTitle">Kamil Pszczółkowski @2018</strong>
        <span className="footerInfo">
          Event's manager application
        </span>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
