import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import { EventDescription, EventDataButtons } from "../components";
import { eventFetched } from "../store/singleEvent/actions";
import {
  getEventFetched,
  checkIfEventIsEdited
} from "../store/singleEvent/reducer";
import EventDataButttons from "../components/EventDataButttons";

class SingleEvent extends Component {
  componentDidMount() {
    this.props.eventFetched(this.props.match.params.id);
  }

  eventRenderHelperFunc() {
    const { event, eventEdited } = this.props;
    if (Object.keys(event).length === 0) {
      return <h2>Wczytywanie</h2>;
    }
    return (
      <div>
        <img className="singleEventImg" src={event.img} />
        <EventDescription editingMode={eventEdited} event={event} />
        <EventDataButttons editingMode={eventEdited} event={event} />
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
    event: getEventFetched(state),
    eventEdited: checkIfEventIsEdited(state)
  };
}

function mapDispatchToProps() {
  return { eventFetched };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SingleEvent);
