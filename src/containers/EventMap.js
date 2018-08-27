import React, { Component } from "react";
import { connect } from "react-redux";

class EventMap extends Component {
  render() {
    return <h2>Placeholder: Event Map</h2>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventMap);
