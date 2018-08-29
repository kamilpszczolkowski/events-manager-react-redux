import React, { Component } from "react";

export default class EventDescription extends Component {
  classNameEditMode() {
    if (this.props.editingMode) {
      return "editionMode";
    }
    return "";
  }

  shortDescriptionEdit() {
    if (this.props.editingMode) {
      return (
        <div>
          <p>Opis skrócony</p>
          <p
            id="editedDescShort"
            className="editionMode"
            contentEditable="true"
          >
            {this.props.event.descShort}
          </p>
        </div>
      );
    }
    return null;
  }

  render() {
    const classNames = this.classNameEditMode();
    const { editingMode } = this.props;
    const { name, organisation, desc } = this.props.event;
    return (
      <div className="singleEventcol1">
        <section className="signleElTitle">
          <h2
            id="editedName"
            className={classNames}
            contentEditable={editingMode}
          >
            {name}
          </h2>
          <h3
            id="editedOrg"
            className={classNames}
            contentEditable={editingMode}
          >
            <i>{organisation}</i>
          </h3>
        </section>
        <p
          id="editedDesc"
          className={editingMode ? "editionMode" : "singleElDesc"}
          contentEditable={editingMode}
        >
          {desc}
        </p>
        {this.shortDescriptionEdit()}
      </div>
    );
  }
}
