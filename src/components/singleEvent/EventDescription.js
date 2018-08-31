import React from "react";

const EventDescription = ({ event }) => {
  const { name, organisation, desc } = event;
  return (
    <div className="singleEventcol1">
      <section className="signleElTitle">
        <h2 id="editedName">{name}</h2>
        <h3 id="editedOrg">
          <i>{organisation}</i>
        </h3>
      </section>
      <p id="editedDesc" className="singleElDesc">{desc}</p>
    </div>
  );
};

export default EventDescription;
