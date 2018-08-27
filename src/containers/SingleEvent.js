import React, { Component } from "react";
import { connect } from "react-redux";

class SingleEvent extends Component {
  render() {
    return <h2>Placeholder: Single event page</h2>;
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
