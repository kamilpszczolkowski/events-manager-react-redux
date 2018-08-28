import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";

class SearchPage extends Component {
  render() {
    return (
      <Template activeSite="main">
        <h2>Search Page</h2>
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
)(SearchPage);
