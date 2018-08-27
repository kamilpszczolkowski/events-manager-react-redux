import React, { Component } from "react";
import { connect } from "react-redux";

class BrowseEvents extends Component {
  render() {
    return <h2>Placeholder: BrowseEvents</h2>;
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseEvents);
