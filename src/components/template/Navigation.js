import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ activeSite }) => {
  return (
    <nav>
      <ul>
        <li className={activeSite === "browseEvents" ? "active" : ""}>
          <Link to="/events">Browse</Link>
        </li>
        <li className={activeSite === "addEvents" ? "active" : ""}>
          <Link to="/addevents">Add event</Link>
        </li>
        <li className={activeSite === "map" ? "active" : ""}>
          <Link to="/map">Map of events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
