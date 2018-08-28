import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import * as filtersSelectors from "../store/filters/reducer";
import { searchTextChanged, sortMethodChanged } from "../store/filters/actions";
import { InputField } from "../components/common";
import { SortTab } from "../components";

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
        <SortTab
          sortMethod={this.props.sortMethod}
          changeSortMethod={this.props.sortMethodChanged}
        />
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchText: filtersSelectors.getCurrentSearchText(state),
    sortMethod: filtersSelectors.getCurrentSortMethod(state)
  };
}

function mapDispatchToProps() {
  return { searchTextChanged, sortMethodChanged };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(BrowseEvents);
