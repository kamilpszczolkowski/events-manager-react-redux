import React, { Component } from "react";
import { connect } from "react-redux";


class SearchPage extends Component {
  render() {
    return <h2>Placeholder: Searchpage</h2>;
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
