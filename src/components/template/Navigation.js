import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ activeSite }) => {
  return (
    <nav>
      <ul>
        <li className={activeSite === "browseEvents" ? "active" : ""}>
          <Link to="/events">Przeglądaj zdarzenia</Link>
        </li>
        <li className={activeSite === "addEvents" ? "active" : ""}>
          <Link to="/addevents">Dodaj zdarzenie</Link>
        </li>
        <li className={activeSite === "map" ? "active" : ""}>
          <Link to="/map">Mapa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
