import React, { Component } from "react";
import AddEventMapWrapper from "../googleMaps/AddEventMapWrapper";

export default class AddEventForm extends Component {
  handleSubmit(ev) {
    ev.preventDefault();
    const { editingEvent, sendEditedEvent, event, eventCreate } = this.props;
    if (editingEvent) {
      sendEditedEvent(event, editingEvent);
    } else {
      eventCreate(event);
    }
  }

  handleInputName(event) {
    this.props.updateData({
      prop: "name",
      value: event.target.value
    });
  }
  handleInputOrganisation(event) {
    this.props.updateData({
      prop: "organisation",
      value: event.target.value
    });
  }
  handleInputType(event) {
    this.props.updateData({
      prop: "type",
      value: event.target.value
    });
  }
  handleInputDateStart(event) {
    this.props.updateData({
      prop: "date",
      value: [event.target.value, this.props.event.date[1]]
    });
  }
  handleInputDateEnd(event) {
    this.props.updateData({
      prop: "date",
      value: [this.props.event.date[0], event.target.value]
    });
  }
  handleInputDescShort(event) {
    this.props.updateData({
      prop: "descShort",
      value: event.target.value
    });
  }

  handleInputDesc(event) {
    this.props.updateData({
      prop: "desc",
      value: event.target.value
    });
  }
  handleInputImg(event) {
    this.props.updateData({
      prop: "img",
      value: event.target.value
    });
  }

  validationErrHelperFunc() {
    const { validationErrors } = this.props;
    if (validationErrors.length > 0) {
      return (
        <div className="validationErrors">
          <h2>W formularzu występują następujące błędy:</h2>
          <ul>
            {validationErrors.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      name,
      organisation,
      type,
      date,
      descShort,
      desc,
      img,
      googlePosId,
      googleGeoLoc,
      place
    } = this.props.event;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {this.validationErrHelperFunc()}
        <div className="restrict">
          <label>
            Name of the event:
            <input
              type="text"
              placeholder="Event name"
              value={name}
              onChange={this.handleInputName.bind(this)}
            />
          </label>
          <label>
            Organisation:
            <input
              type="text"
              placeholder="Organisation"
              value={organisation}
              onChange={this.handleInputOrganisation.bind(this)}
            />
          </label>
          <label>
            Type of the event:
            <input
              type="text"
              placeholder="Event type"
              value={type}
              onChange={this.handleInputType.bind(this)}
            />
          </label>
          <label>
            Start date/hour:
            <input
              type="datetime-local"
              value={date[0]}
              onChange={this.handleInputDateStart.bind(this)}
            />
          </label>
          <label>
            End date/hour:
            <input
              type="datetime-local"
              value={date[1]}
              onChange={this.handleInputDateEnd.bind(this)}
            />
          </label>
          <label>
            Short description:
            <input
              type="text"
              id="shortInput"
              placeholder="Short description"
              value={descShort}
              onChange={this.handleInputDescShort.bind(this)}
            />
          </label>
          <label>
            Full description:
            <textarea
              placeholder="Full description"
              value={desc}
              onChange={this.handleInputDesc.bind(this)}
            />
          </label>
          <label>
            Image URL address:
            <input
              type="text"
              id="imgInput"
              placeholder="Image URL"
              value={img}
              onChange={this.handleInputImg.bind(this)}
            />
          </label>
        </div>
        Event location:
        <AddEventMapWrapper
          updateData={this.props.updateData}
          googlePosId={googlePosId}
          googleGeoLoc={googleGeoLoc}
          place={place}
        />
        <div className="restrict">
          <input
            type="submit"
            value={this.props.editingEvent ? "Chagne event data" : "Send"}
          />
        </div>
      </form>
    );
  }
}
