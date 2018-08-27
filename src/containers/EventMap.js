import React, { Component } from "react";
import { connect } from "react-redux";

class EventMap extends Component {
  render() {
    return <h2>Placeholder: Event Map</h2>;
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventMap);
