import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import {
  eventUpdate,
  eventCreate,
    clearForm
} from "../store/eventForm/actions";
import { AddEventForm, SendEventConfirm } from "../components";
import * as eventFormSelectors from "../store/eventForm/reducer";

class AddEvent extends Component {
  render() {
    return (
      <Template activeSite="addEvents">
        <h2 className="addEventTitle">Kreator nowego wydarzenia</h2>
        <AddEventForm
          event={this.props.event}
          updateData={this.props.eventUpdate}
          validationErrors={this.props.validationErrors}
          eventCreate={this.props.eventCreate}
        />
        <SendEventConfirm
            eventSendSuccess={this.props.eventSendSuccess}
            createNewEvent={this.props.clearForm}
        />
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: eventFormSelectors.getEditedEventData(state),
    validationErrors: eventFormSelectors.getValidationErrors(state),
    eventSendSuccess: eventFormSelectors.getEventSendConfirm(state)
  };
}

function mapDispatchToProps() {
  return { eventUpdate, eventCreate, clearForm };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(AddEvent);
