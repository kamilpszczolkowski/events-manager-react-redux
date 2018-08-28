import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";

class EventMap extends Component {
  render() {
    return (
      <Template activeSite="map">
        <h2>Events map page</h2>
      </Template>
    );
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
