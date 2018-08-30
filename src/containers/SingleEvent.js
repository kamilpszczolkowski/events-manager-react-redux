import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import {
  EventImageSection,
  EventDescription,
  EventDataButtons
} from "../components";
import { eventFetched } from "../store/eventForm/actions";
import {
  getEventFetched,
  checkIfEventIsEdited
} from "../store/eventForm/reducer";
import EventDataButttons from "../components/EventDataButttons";

class SingleEvent extends Component {
  componentDidMount() {
    this.props.eventFetched(this.props.match.params.id);
  }

  eventRenderHelperFunc() {
    if ( Object.keys(this.props.event).length === 0) return <h2>Wczytywanie</h2>;
    return (
      <div>
        <EventImageSection
          imgSrc={this.props.event.img}
          editingMode={this.props.eventEdited}
        />
        <EventDescription
          editingMode={this.props.eventEdited}
          event={this.props.event}
        />
        <EventDataButttons
          editingMode={this.props.eventEdited}
          event={this.props.event}
        />
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
