import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";

class BrowseEvents extends Component {
  render() {
    return (
      <Template activeSite="browseEvents">

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
)(BrowseEvents);
