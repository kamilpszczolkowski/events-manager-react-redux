import React, { Component } from "react";

export default class EventDataButttons extends Component {
  classNameEditMode() {
    if (this.props.editingMode) {
      return "editionMode";
    }
    return "";
  }

  static dateExtract(date, place) {
    if (place === "begin") {
      return date.slice(0, 10);
    }
    return date.slice(11, 16);
  }

  displayDateshelperFunc(date) {
    if (this.props.editingMode) {
      return <input id="dateStartEdit" type="datetime-local" />;
    }
    return (
      <p>
        {EventDataButttons.dateExtract(date, "begin")},{" "}
        {EventDataButttons.dateExtract(date, "end")}
      </p>
    );
  }

  render() {
    const classNames = this.classNameEditMode();
    const { place, date, type } = this.props.event;
    const { editingMode } = this.props;

    return (
      <div className="singleEventcol2">
        <h2>Miejsce</h2>
        <p id="editedPlace">{place}</p>
        <h2>Rozpoczęcie</h2>
        {this.displayDateshelperFunc(date[0])}
        <h2>Zakończenie</h2>
        <p
          id="editedDateEnd"
          className={classNames}
          contentEditable={editingMode}
        >
          {EventDataButttons.dateExtract(date[1], "begin")},{" "}
          {EventDataButttons.dateExtract(date[1], "end")}
        </p>
        <h2>Typ wydarzenia</h2>
        <p id="editedType" className={classNames} contentEditable={editingMode}>
          {type}
        </p>
      </div>
    );
  }
}
