import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import { SearchPageBackground, SearchField } from "../components";
import { searchTextChanged } from "../store/filters/actions";
import *  as filtersSelectors from "../store/filters/reducer";

class SearchPage extends Component {
  render() {
    return (
      <Template activeSite="main">
        <SearchPageBackground />
        <SearchField
          textValue={this.props.searchText}
          textChange={this.props.searchTextChanged}
        />
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return { searchText: filtersSelectors.getCurrentSearchText(state)};
}

function mapDispatchToProps() {
  return { searchTextChanged };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SearchPage);
