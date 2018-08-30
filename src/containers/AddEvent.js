import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import {
  eventUpdate,
  eventCreate,
  clearForm,
  sendEditedEvent
} from "../store/eventForm/actions";
import {
  AddEventForm,
  SendEventConfirm,
  EditedEventConfirm
} from "../components";
import * as eventFormSelectors from "../store/eventForm/reducer";

class AddEvent extends Component {
  headerHelperFunction() {
    if (this.props.editingEvent) {
      return <h2 className="addEventTitle">Edycja wydarzenia</h2>;
    }
    return <h2 className="addEventTitle">Kreator nowego wydarzenia</h2>;
  }

  render() {
    const {
      editingEvent,
      event,
      eventUpdate,
      validationErrors,
      eventCreate,
      sendEditedEvent,
      eventSendSuccess,
      clearForm,
      editingFinished
    } = this.props;
    return (
      <Template activeSite={editingEvent ? "editingEvent" : "addEvents"}>
        {this.headerHelperFunction()}
        <AddEventForm
          event={event}
          updateData={eventUpdate}
          validationErrors={validationErrors}
          eventCreate={eventCreate}
          editingEvent={editingEvent}
          sendEditedEvent={sendEditedEvent}
        />
        <SendEventConfirm
          eventSendSuccess={eventSendSuccess}
          createNewEvent={clearForm}
        />
        <EditedEventConfirm
          editingEvent={editingEvent}
          editingFinished={editingFinished}
        />
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: eventFormSelectors.getEditedEventData(state),
    validationErrors: eventFormSelectors.getValidationErrors(state),
    eventSendSuccess: eventFormSelectors.getEventSendConfirm(state),
    editingEvent: eventFormSelectors.chechIfEventEdited(state),
    editingFinished: eventFormSelectors.checkIfEditingFinished(state)
  };
}

function mapDispatchToProps() {
  return { eventUpdate, eventCreate, clearForm, sendEditedEvent };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(AddEvent);
