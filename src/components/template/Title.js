import React from "react";
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="mainTitles">
      <div className="logo" />
      <h1>
        <Link to="/">
          BEST EVENTS
          <span>FIND YOUR REALITY</span>
        </Link>
      </h1>
    </div>
  );
};

export default Title;
