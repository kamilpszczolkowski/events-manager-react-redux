import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import { eventsFetched } from "../store/events/actions";
import * as eventSelectors from "../store/events/reducer";
import { AllEventMapWrapper } from "../components";

class EventMap extends Component {
  componentDidMount() {
    this.props.eventsFetched();
  }

  renderMaphelperFunc() {
    if (Object.keys(this.props.events).length === 0) {
      return <h2>Wczytywanie</h2>;
    } else {
      return <AllEventMapWrapper events={this.props.events} />;
    }
  }

  render() {
    return <Template activeSite="map">{this.renderMaphelperFunc()}</Template>;
  }
}

function mapStateToProps(state) {
  return {
    events: eventSelectors.getEventsFetched(state)
  };
}

function mapDispatchToProps() {
  return { eventsFetched };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(EventMap);
