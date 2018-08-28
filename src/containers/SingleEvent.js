import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";

class SingleEvent extends Component {
  render() {
    return (
      <Template activeSite="singleEvent">
        <h2>Single event page</h2>
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
)(SingleEvent);
