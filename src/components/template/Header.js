import React from "react";
import Title from "./Title";
import Navigation from "./Navigation";

const Header = ({ activeSite }) => {
  return (
    <header>
      <div className="container">
        <Title />
        <Navigation activeSite={activeSite} />
      </div>
    </header>
  );
};

export default Header;
