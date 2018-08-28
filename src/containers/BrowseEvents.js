import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import * as filtersSelectors from "../store/filters/reducer";
import { searchTextChanged } from "../store/filters/actions";
import { InputField } from "../components/common";

class BrowseEvents extends Component {
  render() {
    return (
      <Template activeSite="browseEvents">
          <InputField
            placeholder="Czego szukasz?"
            id="searchInevents"
            value={this.props.searchText}
            onChangeFunc={this.props.searchTextChanged}
          />
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return { searchText: filtersSelectors.getCurrentSearchText(state) };
}

function mapDispatchToProps() {
  return { searchTextChanged };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(BrowseEvents);
