import React, { Component } from "react";
import { connect } from "react-redux";
import { Template } from "../components/template";
import * as filtersSelectors from "../store/filters/reducer";
import * as eventSelectors from "../store/events/reducer";
import { searchTextChanged, sortMethodChanged } from "../store/filters/actions";
import { eventsFetched, getUserPosition } from "../store/events/actions";
import { InputField } from "../components/common";
import { SortTab, EventTab } from "../components";

class BrowseEvents extends Component {
  componentDidMount() {
    this.props.eventsFetched();
    this.props.getUserPosition();
  }

  render() {
    const {
      searchText,
      searchTextChanged,
      sortMethod,
      sortMethodChanged,
      events
    } = this.props;
    return (
      <Template activeSite="browseEvents">
        <InputField
          placeholder="Czego szukasz?"
          id="searchInevents"
          value={searchText}
          onChangeFunc={searchTextChanged}
        />
        <SortTab sortMethod={sortMethod} changeSortMethod={sortMethodChanged} />
        {events.map(event => {
          return (
            <EventTab
              key={event.id}
              name={event.name}
              date={event.date}
              descShort={event.descShort}
              organisation={event.organisation}
              place={event.place}
              type={event.type}
              img={event.img}
              id={event.id}
              googlePos={event.googleGeoLoc}
            />
          );
        })}
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchText: filtersSelectors.getCurrentSearchText(state),
    sortMethod: filtersSelectors.getCurrentSortMethod(state),
    events: eventSelectors.getEventsFetched(state),
    userPos: eventSelectors.checkUserPosition(state)
  };
}

function mapDispatchToProps() {
  return {
    searchTextChanged,
    sortMethodChanged,
    eventsFetched,
    getUserPosition
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(BrowseEvents);
