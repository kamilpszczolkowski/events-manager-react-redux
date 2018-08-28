import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";

class AddEvent extends Component {
  render() {
    return (
      <Template activeSite="addEvents">
        <h2>Add Event page</h2>
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
)(AddEvent);
