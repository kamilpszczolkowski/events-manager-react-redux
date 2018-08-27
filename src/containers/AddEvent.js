import React, { Component } from "react";
import { connect } from "react-redux";

class AddEvent extends Component {
  render() {
    return <h2>Placeholder: Add event page</h2>;
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
