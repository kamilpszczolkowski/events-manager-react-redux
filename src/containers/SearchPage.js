import React, { Component } from "react";
import { connect } from "react-redux";

class SearchPage extends Component {
  render() {
    return <h2>Placeholder: Searchpage</h2>;
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
)(SearchPage);
