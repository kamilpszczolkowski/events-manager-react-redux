import React, { Component } from "react";

export default class EventDataButttons extends Component {
  static dateExtract(date, place) {
    if (place === "begin") {
      return date.slice(0, 10);
    }
    return date.slice(11, 16);
  }

  render() {
    const { place, date, type } = this.props.event;
    return (
      <div className="singleEventcol2">
        <h2>Miejsce</h2>
        <p id="editedPlace">{place}</p>
        <h2>Rozpoczęcie</h2>
          {EventDataButttons.dateExtract(date[0], "begin")},{" "}
          {EventDataButttons.dateExtract(date[0], "end")}
        <h2>Zakończenie</h2>
        <p id="editedDateEnd">
          {EventDataButttons.dateExtract(date[1], "begin")},{" "}
          {EventDataButttons.dateExtract(date[1], "end")}
        </p>
        <h2>Typ wydarzenia</h2>
        <p id="editedType">{type}</p>
      </div>
    );
  }
}
