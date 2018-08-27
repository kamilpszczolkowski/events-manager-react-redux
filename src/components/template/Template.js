import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Template = ({ activeSite, children }) => {
  return (
    <div>
      <Header activeSite={activeSite} />
      <main>
        <div className="clearFix container">{children}</div>
      </main>
      <Footer mainSite={activeSite} />
    </div>
  );
};

export default Template;
