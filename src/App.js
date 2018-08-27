import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import {
  AddEvent,
  SingleEvent,
  EventMap,
  BrowseEvents,
  SearchPage
} from "./containers";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/events" component={BrowseEvents} />
          <Route path="/events/:id" component={SingleEvent} />
          <Route path="/addevents" component={AddEvent} />
          <Route path="/map" component={EventMap} />
        </div>
      </HashRouter>
    );
  }
}
