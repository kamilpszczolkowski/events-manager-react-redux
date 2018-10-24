import React, { Component } from "react";

export default class EventDataButttons extends Component {
  static dateExtract(date, place) {
    if (place === "begin") {
      return date.slice(0, 10);
    }
    return date.slice(11, 16);
  }

  handleDeleteBttn() {
    this.props.eventDeleteRequest(true);
  }

  handleEditBttn() {
    const { startEventEditing, event, eventId } = this.props;
    startEventEditing(event, eventId);
    window.location.replace("#/addevents");
  }

  render() {
    const { place, date, type } = this.props.event;
    return (
      <div className="singleEventcol2">
        <h2>Place</h2>
        <p id="editedPlace">{place}</p>
        <h2>Start date</h2>
        {EventDataButttons.dateExtract(date[0], "begin")},{" "}
        {EventDataButttons.dateExtract(date[0], "end")}
        <h2>End date</h2>
        <p id="editedDateEnd">
          {EventDataButttons.dateExtract(date[1], "begin")},{" "}
          {EventDataButttons.dateExtract(date[1], "end")}
        </p>
        <h2>Event type</h2>
        <p id="editedType">{type}</p>
        <button
          className="singleElBttn"
          onClick={this.handleEditBttn.bind(this)}
        >
          Edit event
        </button>
        <button
          className="singleElBttn"
          onClick={this.handleDeleteBttn.bind(this)}
        >
          delete event
        </button>
      </div>
    );
  }
}
