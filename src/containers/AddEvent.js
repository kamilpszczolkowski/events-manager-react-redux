import React, { Component } from "react";
import { connect } from "react-redux";

class AddEvent extends Component {
  render() {
    return <h2>Placeholder: Add event page</h2>;
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);
