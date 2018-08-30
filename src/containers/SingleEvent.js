import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import {
  EventDescription,
  EventDataButttons,
  DeleteEventPopup,
  DeletedEventConfirm
} from "../components";
import {
  eventFetched,
  eventDeleteRequestChange,
  eventDeleted
} from "../store/singleEvent/actions";
import * as singleEventSelectors from "../store/singleEvent/reducer";

class SingleEvent extends Component {
  componentDidMount() {
    this.props.eventFetched(this.props.match.params.id);
  }

  eventRenderHelperFunc() {
    const {
      event,
      eventDeleteRequestChange,
      eventDeleteRequest,
      eventDeleted,
      eventDeletedConfrim,
      match
    } = this.props;
    if (Object.keys(event).length === 0) {
      return <h2>Wczytywanie</h2>;
    }
    return (
      <div>
        <img className="singleEventImg" src={event.img} />
        <EventDescription event={event} />
        <EventDataButttons
          event={event}
          eventDeleteRequest={eventDeleteRequestChange}
        />
        <DeleteEventPopup
          deletePopup={eventDeleteRequest}
          eventDeleteRequestChange={eventDeleteRequestChange}
          eventDeleted={eventDeleted}
          eventId={match.params.id}
        />
        <DeletedEventConfirm eventDeletedConfrim={eventDeletedConfrim} />
      </div>
    );
  }

  render() {
    return (
      <Template activeSite="singleEvent">
        {this.eventRenderHelperFunc()}
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: singleEventSelectors.getEventFetched(state),
    eventDeleteRequest: singleEventSelectors.checkIfEventDeleteRequested(state),
    eventDeletedConfrim: singleEventSelectors.checkIfEventDeleted(state)
  };
}

function mapDispatchToProps() {
  return { eventFetched, eventDeleteRequestChange, eventDeleted };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SingleEvent);
